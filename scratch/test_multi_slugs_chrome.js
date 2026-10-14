const { spawn } = require('child_process');
const http = require('http');
const os = require('os');
const path = require('path');
const fs = require('fs');

const testSlugs = ['manali-bachelors-3d2n', 'kashmir-winter-group-4d3n', 'goa-bachelors-party-4d3n'];

async function testAll() {
  const tempProfile = path.join(os.tmpdir(), 'chrome_temp_test_profile_' + Date.now());
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9447',
    '--disable-gpu',
    `--user-data-dir=${tempProfile}`,
    'about:blank'
  ]);

  function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
  await sleep(1500);

  const tabs = await new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:9447/json', res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });

  const tab = tabs.find(t => t.type === 'page') || tabs[0];
  const ws = new WebSocket(tab.webSocketDebuggerUrl);

  let idCounter = 1;
  const pending = new Map();
  function send(method, params = {}) {
    return new Promise((resolve) => {
      const id = idCounter++;
      pending.set(id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const resolve = pending.get(msg.id);
      pending.delete(msg.id);
      resolve(msg.result);
    }
  };

  await new Promise(r => ws.onopen = r);
  await send('Runtime.enable');
  await send('Page.enable');

  for (const slug of testSlugs) {
    console.log(`Testing slug: ${slug} ...`);
    await send('Page.navigate', { url: `http://localhost:3000/trip-detail.html?slug=${slug}` });
    await sleep(2000);

    const evalRes = await send('Runtime.evaluate', {
      expression: `(() => {
        const it = document.getElementById('trip-itinerary-container');
        const title = document.getElementById('trip-title');
        const spec = document.getElementById('spec-destination');
        const badge = document.getElementById('card-highlight-badge');
        return {
          title: title ? title.textContent : null,
          dest: spec ? spec.textContent : null,
          itDays: it ? it.children.length : 0,
          badge: badge ? badge.textContent : null
        };
      })()`,
      returnByValue: true
    });

    console.log(`  ✓ Result for [${slug}]:`, evalRes.result.value);
  }

  ws.close();
  chrome.kill();
  try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch (e) {}
}

testAll().catch(console.error);

const { spawn } = require('child_process');
const http = require('http');
const os = require('os');
const path = require('path');
const fs = require('fs');

const tempProfile = path.join(os.tmpdir(), 'chrome_temp_test_profile_' + Date.now());

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const chrome = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9446',
  '--disable-gpu',
  '--window-size=1440,3200',
  `--user-data-dir=${tempProfile}`,
  'about:blank'
]);

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function run() {
  await sleep(1500);

  const tabs = await new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:9446/json', res => {
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
    if (msg.method === 'Runtime.consoleAPICalled') {
      console.log(`[CONSOLE ${msg.params.type.toUpperCase()}]:`, msg.params.args.map(a => a.value || a.description).join(' '));
    }
  };

  await new Promise(r => ws.onopen = r);
  await send('Runtime.enable');
  await send('Page.enable');

  await send('Page.navigate', { url: 'http://localhost:3000/trip-detail.html?slug=kerala-honeymoon-4d3n' });
  await sleep(2500);

  // Scroll to itinerary section
  await send('Runtime.evaluate', {
    expression: `(() => {
      const itEl = document.getElementById('itinerary-section');
      if (itEl) itEl.scrollIntoView({ behavior: 'instant', block: 'start' });
    })()`
  });
  await sleep(800);

  const screenshotRes = await send('Page.captureScreenshot', { format: 'png' });
  if (screenshotRes && screenshotRes.data) {
    fs.writeFileSync('screenshots/live_itinerary_section.png', Buffer.from(screenshotRes.data, 'base64'));
    console.log('✓ Itinerary screenshot saved to screenshots/live_itinerary_section.png');
  }

  ws.close();
  chrome.kill();
  try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch (e) {}
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  chrome.kill();
  process.exit(1);
});

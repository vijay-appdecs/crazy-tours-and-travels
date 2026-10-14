const { spawn } = require('child_process');
const http = require('http');
const os = require('os');
const path = require('path');
const fs = require('fs');

async function testPackagesPage() {
  const tempProfile = path.join(os.tmpdir(), 'chrome_temp_test_profile_' + Date.now());
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9448',
    '--disable-gpu',
    `--user-data-dir=${tempProfile}`,
    'about:blank'
  ]);

  function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
  let tabs = null;
  for (let attempt = 0; attempt < 20; attempt++) {
    await sleep(200);
    try {
      tabs = await new Promise((resolve, reject) => {
        http.get('http://127.0.0.1:9448/json', res => {
          let data = '';
          res.on('data', c => data += c);
          res.on('end', () => resolve(JSON.parse(data)));
        }).on('error', reject);
      });
      if (tabs) break;
    } catch (e) {}
  }

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
    if (msg.method === 'Runtime.exceptionThrown') {
      console.error('🚨 [RUNTIME EXCEPTION]:', JSON.stringify(msg.params.exceptionDetails, null, 2));
    }
  };

  await new Promise(r => ws.onopen = r);
  await send('Runtime.enable');
  await send('Page.enable');

  console.log('Navigating to http://localhost:3000/packages.html ...');
  await send('Page.navigate', { url: 'http://localhost:3000/packages.html' });
  await sleep(2000);

  const evalRes = await send('Runtime.evaluate', {
    expression: `(() => {
      const grid = document.getElementById('all-trips-grid');
      return {
        cardsCount: grid ? grid.children.length : 0,
        title: document.title
      };
    })()`,
    returnByValue: true
  });

  console.log('Packages Page Result:', evalRes.result.value);

  ws.close();
  chrome.kill();
  try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch (e) {}
}

testPackagesPage().catch(console.error);

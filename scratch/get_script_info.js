const { spawn } = require('child_process');
const http = require('http');
const os = require('os');
const path = require('path');
const fs = require('fs');

const tempProfile = path.join(os.tmpdir(), 'chrome_temp_test_profile_' + Date.now());

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const chrome = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9445',
  '--disable-gpu',
  `--user-data-dir=${tempProfile}`,
  'about:blank'
]);

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function run() {
  let tabs = null;
  for (let attempt = 0; attempt < 20; attempt++) {
    await sleep(200);
    try {
      tabs = await new Promise((resolve, reject) => {
        http.get('http://127.0.0.1:9445/json', res => {
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

  const scripts = new Map();

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const resolve = pending.get(msg.id);
      pending.delete(msg.id);
      resolve(msg.result);
    }
    if (msg.method === 'Debugger.scriptParsed') {
      scripts.set(msg.params.scriptId, msg.params);
    }
    if (msg.method === 'Debugger.scriptFailedToParse') {
      console.error('🚨 [SCRIPT FAILED TO PARSE]:', msg.params);
    }
    if (msg.method === 'Runtime.exceptionThrown') {
      console.error('🚨 [RUNTIME EXCEPTION]:', JSON.stringify(msg.params.exceptionDetails, null, 2));
    }
  };

  await new Promise(r => ws.onopen = r);
  await send('Runtime.enable');
  await send('Debugger.enable');
  await send('Page.enable');

  await send('Page.navigate', { url: 'http://localhost:3000/trip-detail.html?slug=kerala-honeymoon-4d3n' });
  await sleep(3000);

  for (const [sId, info] of scripts.entries()) {
    console.log(`Script ${sId}: ${info.url} (lines: ${info.startLine}-${info.endLine})`);
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

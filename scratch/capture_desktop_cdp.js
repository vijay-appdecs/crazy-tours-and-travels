const { spawn } = require('child_process');
const http = require('http');
const path = require('path');
const fs = require('fs');
const os = require('os');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const tempProfile = path.join(os.tmpdir(), 'chrome_cdp_desk_' + Date.now());

const chrome = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9223',
  '--disable-gpu',
  '--no-first-run',
  '--no-default-browser-check',
  `--user-data-dir=${tempProfile}`,
  'http://localhost:3000/packages.html'
]);

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function main() {
  await sleep(1500);

  let tabs = null;
  for (let i = 0; i < 15; i++) {
    try {
      tabs = await new Promise((resolve, reject) => {
        http.get('http://127.0.0.1:9223/json', res => {
          let data = '';
          res.on('data', c => data += c);
          res.on('end', () => resolve(JSON.parse(data)));
        }).on('error', reject);
      });
      if (tabs && tabs.length > 0) break;
    } catch (e) {
      await sleep(500);
    }
  }
  if (!tabs) throw new Error('Could not connect to Chrome debugger');

  const tab = tabs.find(t => t.type === 'page') || tabs[0];
  const ws = new WebSocket(tab.webSocketDebuggerUrl);

  let idCounter = 1;
  const pending = new Map();

  function send(method, params = {}) {
    return new Promise(resolve => {
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

  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false
  });

  await send('Page.navigate', { url: 'http://localhost:3000/packages.html' });
  await sleep(2000);

  const result = await send('Page.captureScreenshot', {
    format: 'png',
    clip: {
      x: 0,
      y: 0,
      width: 1440,
      height: 900,
      scale: 1
    }
  });

  const buffer = Buffer.from(result.data, 'base64');
  fs.writeFileSync('screenshots/packages_desktop_cdp.png', buffer);
  console.log('Desktop screenshot saved, size:', buffer.length);

  ws.close();
  chrome.kill();
  process.exit(0);
}

main().catch(err => {
  console.error('Error:', err);
  chrome.kill();
  process.exit(1);
});

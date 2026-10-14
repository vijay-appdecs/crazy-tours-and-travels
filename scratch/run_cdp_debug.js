const { spawn } = require('child_process');
const http = require('http');
const os = require('os');
const path = require('path');
const fs = require('fs');

const tempProfile = path.join(os.tmpdir(), 'chrome_temp_test_profile_' + Date.now());

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const chrome = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9444',
  '--disable-gpu',
  '--no-first-run',
  '--no-default-browser-check',
  `--user-data-dir=${tempProfile}`,
  'about:blank'
]);

console.log('Chrome process started (PID:', chrome.pid, ')');

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function run() {
  await sleep(1500);

  // Get WebSocket debugger URL
  const tabs = await new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:9444/json', res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });

  const tab = tabs.find(t => t.type === 'page') || tabs[0];
  console.log('Target tab found:', tab.title, 'URL:', tab.url);

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
  console.log('Connected to Chrome DevTools Protocol via WebSocket');

  await send('Runtime.enable');
  await send('Page.enable');
  await send('Console.enable');

  console.log('Navigating to http://localhost:3000/trip-detail.html?slug=kerala-honeymoon-4d3n ...');
  await send('Page.navigate', { url: 'http://localhost:3000/trip-detail.html?slug=kerala-honeymoon-4d3n' });

  await sleep(3500);

  // Evaluate state of page
  const res = await send('Runtime.evaluate', {
    expression: `(() => {
      const itEl = document.getElementById('trip-itinerary-container');
      const specEl = document.getElementById('spec-destination');
      const trip = window.getWayfareTrip ? window.getWayfareTrip('kerala-honeymoon-4d3n') : null;
      return {
        tripFound: !!trip,
        itChildren: itEl ? itEl.children.length : -1,
        specDest: specEl ? specEl.textContent : 'null',
        title: document.title,
        bodyHeight: document.body.scrollHeight
      };
    })()`,
    returnByValue: true
  });

  console.log('Page Evaluation Result:', JSON.stringify(res.result.value, null, 2));

  // Take full screenshot
  const screenshotRes = await send('Page.captureScreenshot', { format: 'png' });
  if (screenshotRes && screenshotRes.data) {
    fs.writeFileSync('screenshots/live_real_cdp.png', Buffer.from(screenshotRes.data, 'base64'));
    console.log('✓ Screenshot saved to screenshots/live_real_cdp.png');
  }

  ws.close();
  chrome.kill();
  try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch (e) {}
  process.exit(0);
}

run().catch(err => {
  console.error('Error during CDP run:', err);
  chrome.kill();
  process.exit(1);
});

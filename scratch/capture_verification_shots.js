const { spawn } = require('child_process');
const http = require('http');
const os = require('os');
const path = require('path');
const fs = require('fs');

const tempProfile = path.join(os.tmpdir(), 'chrome_temp_shot_' + Date.now());
const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9466',
  '--window-size=1440,1080',
  '--disable-gpu',
  '--no-first-run',
  '--no-default-browser-check',
  `--user-data-dir=${tempProfile}`,
  'about:blank'
]);

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function waitForDebugger(port, retries = 15) {
  for (let i = 0; i < retries; i++) {
    try {
      const tabs = await new Promise((resolve, reject) => {
        const req = http.get(`http://127.0.0.1:${port}/json`, res => {
          let data = '';
          res.on('data', c => data += c);
          res.on('end', () => resolve(JSON.parse(data)));
        });
        req.on('error', reject);
      });
      return tabs;
    } catch (e) {
      await sleep(500);
    }
  }
  throw new Error(`Could not connect to Chrome on port ${port}`);
}

async function run() {
  const tabs = await waitForDebugger(9466);
  const tab = tabs.find(t => t.type === 'page') || tabs[0];
  const ws = new WebSocket(tab.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);

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

  await send('Page.enable');
  await send('Runtime.enable');

  fs.mkdirSync('screenshots', { recursive: true });

  // 1. Goa Bachelors trip with brochure modal open
  console.log('Capturing Goa brochure modal...');
  await send('Page.navigate', { url: 'http://localhost:3000/trip-detail.html?slug=goa-bachelors-party-4d3n' });
  await sleep(2500);
  await send('Runtime.evaluate', { expression: 'document.getElementById("trip-brochure-btn").click();' });
  await sleep(800);
  const shot1 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/goa_brochure_modal_verified.png', Buffer.from(shot1.data, 'base64'));

  // 2. Kerala Jatayu Bachelor itinerary section
  console.log('Capturing Kerala Jatayu itinerary...');
  await send('Page.navigate', { url: 'http://localhost:3000/trip-detail.html?slug=kerala-jatayu-bachelor-6d5n' });
  await sleep(2500);
  await send('Runtime.evaluate', { expression: 'document.getElementById("itinerary-section").scrollIntoView();' });
  await sleep(800);
  const shot2 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/kerala_jatayu_itinerary_verified.png', Buffer.from(shot2.data, 'base64'));

  // 3. Packages page cards
  console.log('Capturing Packages catalog cards...');
  await send('Page.navigate', { url: 'http://localhost:3000/packages.html' });
  await sleep(2500);
  const shot3 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('screenshots/packages_grid_verified.png', Buffer.from(shot3.data, 'base64'));

  console.log('Screenshots captured successfully!');
  chrome.kill();
  process.exit(0);
}

run().catch(err => {
  console.error('Screenshot err:', err);
  chrome.kill();
  process.exit(1);
});

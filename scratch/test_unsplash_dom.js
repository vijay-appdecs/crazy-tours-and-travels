const { spawn } = require('child_process');
const http = require('http');
const os = require('os');
const path = require('path');
const fs = require('fs');

const tempProfile = path.join(os.tmpdir(), 'chrome_temp_test_' + Date.now());
const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9488',
  '--disable-gpu',
  '--no-first-run',
  '--no-default-browser-check',
  `--user-data-dir=${tempProfile}`,
  'about:blank'
]);

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function run() {
  await sleep(1500);
  const tabs = await new Promise((res, rej) => {
    http.get('http://127.0.0.1:9488/json', r => {
      let d = '';
      r.on('data', c => d += c);
      r.on('end', () => res(JSON.parse(d)));
    }).on('error', rej);
  });
  const tab = tabs[0];
  const ws = new WebSocket(tab.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);
  let id = 1;
  const send = (method, params = {}) => new Promise(res => {
    const i = id++;
    const handler = (e) => {
      const m = JSON.parse(e.data);
      if (m.id === i) { ws.removeEventListener('message', handler); res(m.result); }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });

  await send('Page.enable');
  await send('Runtime.enable');
  await send('Page.navigate', { url: 'https://unsplash.com/s/photos/kerala' });
  await sleep(4000);
  const doc = await send('Runtime.evaluate', { expression: 'document.title + " | imgs: " + document.querySelectorAll("img").length' });
  console.log('Result:', doc.result.value);
  const sample = await send('Runtime.evaluate', { expression: 'Array.from(document.querySelectorAll("img")).map(i => i.src).filter(s => s.includes("unsplash")).slice(0, 15)' });
  console.log('Sample images:', sample.result.value);
  chrome.kill();
  process.exit(0);
}
run();

const { spawn } = require('child_process');
const http = require('http');
const os = require('os');
const path = require('path');
const fs = require('fs');

async function testShare() {
  const tempProfile = path.join(os.tmpdir(), 'chrome_share_' + Date.now());
  const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless=new',
    '--remote-debugging-port=9451',
    '--window-size=1280,800',
    `--user-data-dir=${tempProfile}`,
    'about:blank'
  ]);
  function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
  let tabs = null;
  for (let i = 0; i < 30; i++) {
    await sleep(200);
    try {
      tabs = await new Promise((res, rej) => http.get('http://127.0.0.1:9451/json', r => {
        let d = ''; r.on('data', c => d += c); r.on('end', () => res(JSON.parse(d)));
      }).on('error', rej));
      if (tabs && tabs.length > 0) break;
    } catch (e) {}
  }
  const tab = tabs.find(t => t.type === 'page') || tabs[0];
  const ws = new WebSocket(tab.webSocketDebuggerUrl);
  let id = 1;
  const send = (method, params = {}) => new Promise(res => {
    const cur = id++;
    const handler = e => {
      const m = JSON.parse(e.data);
      if (m.id === cur) { ws.removeEventListener('message', handler); res(m.result); }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });
  await new Promise(r => ws.onopen = r);
  await send('Page.enable');
  await send('Runtime.enable');
  await send('Page.navigate', { url: 'http://localhost:3000/trip-detail.html?slug=kerala-honeymoon-4d3n' });
  await sleep(1500);
  const r = await send('Runtime.evaluate', {
    expression: '(() => { document.getElementById("trip-share-btn").click(); return { isOpen: document.getElementById("wf-share-modal").classList.contains("is-open"), width: window.innerWidth }; })()',
    returnByValue: true
  });
  console.log('Share result:', r.result.value);
  ws.close();
  chrome.kill();
  try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch (e) {}
}
testShare().catch(console.error);

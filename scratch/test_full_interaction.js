const { spawn } = require('child_process');
const http = require('http');
const os = require('os');
const path = require('path');
const fs = require('fs');

async function testFullInteraction() {
  const tempProfile = path.join(os.tmpdir(), 'chrome_temp_test_profile_' + Date.now());
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9449',
    '--disable-gpu',
    `--user-data-dir=${tempProfile}`,
    'about:blank'
  ]);

  function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
  let tabs = null;
  for (let attempt = 0; attempt < 40; attempt++) {
    await sleep(300);
    try {
      tabs = await new Promise((resolve, reject) => {
        http.get('http://127.0.0.1:9449/json', res => {
          let data = '';
          res.on('data', c => data += c);
          res.on('end', () => resolve(JSON.parse(data)));
        }).on('error', reject);
      });
      if (tabs && tabs.length > 0) break;
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
  };

  await new Promise(r => ws.onopen = r);
  await send('Runtime.enable');
  await send('Page.enable');

  // 1. Test packages page filter
  await send('Page.navigate', { url: 'http://localhost:3000/packages.html' });
  await sleep(1500);

  // Filter destination: kashmir
  const filterKashmir = await send('Runtime.evaluate', {
    expression: `(() => {
      const sel = document.getElementById('dest-filter-select');
      sel.value = 'kashmir';
      sel.dispatchEvent(new Event('change'));
      const grid = document.getElementById('all-trips-grid');
      return grid ? grid.children.length : 0;
    })()`,
    returnByValue: true
  });
  console.log('✓ Filter Kashmir count on packages.html:', filterKashmir.result.value);

  // 2. Open trip-detail.html and test Share Modal
  await send('Page.navigate', { url: 'http://localhost:3000/trip-detail.html?slug=kerala-honeymoon-4d3n' });
  await sleep(1500);

  const testShare = await send('Runtime.evaluate', {
    expression: `(() => {
      const shareBtn = document.getElementById('trip-share-btn');
      shareBtn.click();
      const modal = document.getElementById('wf-share-modal');
      return {
        isOpen: modal.classList.contains('is-open'),
        urlValue: document.getElementById('share-url-input').value,
        title: document.getElementById('share-preview-title').textContent
      };
    })()`,
    returnByValue: true
  });
  console.log('✓ Share modal test:', testShare.result.value);

  // 3. Test Brochure Modal
  const testBrochure = await send('Runtime.evaluate', {
    expression: `(() => {
      // Close share modal first
      document.getElementById('share-modal-close').click();
      
      const brochureBtn = document.getElementById('trip-brochure-btn');
      brochureBtn.click();
      const modal = document.getElementById('wf-brochure-modal');
      return {
        isOpen: modal.classList.contains('is-open'),
        modalTitle: document.getElementById('brochure-modal-title').textContent,
        pageBadge: document.getElementById('brochure-page-badge').textContent,
        mainImgSrc: document.getElementById('brochure-main-img').src
      };
    })()`,
    returnByValue: true
  });
  console.log('✓ Brochure modal test:', testBrochure.result.value);

  ws.close();
  chrome.kill();
  try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch (e) {}
}

testFullInteraction().catch(console.error);

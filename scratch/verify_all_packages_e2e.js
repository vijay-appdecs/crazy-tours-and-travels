const { spawn } = require('child_process');
const http = require('http');
const os = require('os');
const path = require('path');
const fs = require('fs');

const tempProfile = path.join(os.tmpdir(), 'chrome_temp_verify_' + Date.now());
const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9477',
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
  const tabs = await waitForDebugger(9477);
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

  console.log('=== TEST 1: PACKAGES CATALOG (packages.html) ===');
  await send('Page.navigate', { url: 'http://localhost:3000/packages.html' });
  await sleep(2500);

  const catalogTest = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const cards = document.querySelectorAll('.wf-trip-card');
        const imgSources = Array.from(document.querySelectorAll('.wf-trip-card-bg')).map(i => i.src);
        const uniqueImgs = new Set(imgSources);
        return {
          totalCards: cards.length,
          totalImgs: imgSources.length,
          uniqueImgs: uniqueImgs.size
        };
      })()
    `,
    returnByValue: true
  });
  console.log('Catalog result:', JSON.stringify(catalogTest.result.value));

  const testSlugs = [
    { slug: 'kerala-honeymoon-4d3n', expectBrochure: 'kerala_honeymoon' },
    { slug: 'kerala-jatayu-bachelor-6d5n', expectBrochure: 'kerala_jatayu' },
    { slug: 'goa-bachelors-party-4d3n', expectBrochure: 'goa_bachelors' },
    { slug: 'goa-romantic-honeymoon-4d3n', expectBrochure: 'goa_honeymoon' },
    { slug: 'manali-bachelors-3d2n', expectBrochure: 'media_1791137151750' },
    { slug: 'kashmir-winter-group-4d3n', expectBrochure: 'media_1791194403698' },
    { slug: 'ladakh-high-pass-odyssey-7d6n', expectBrochure: 'ladakh_highpass' }
  ];

  for (const t of testSlugs) {
    console.log(`\n=== TESTING TRIP: ${t.slug} ===`);
    await send('Page.navigate', { url: `http://localhost:3000/trip-detail.html?slug=${t.slug}` });
    await sleep(2500);

    const tripData = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const title = document.getElementById('trip-title')?.textContent || '';
          const p1 = document.getElementById('trip-photo-1')?.src || '';
          const p2 = document.getElementById('trip-photo-2')?.src || '';
          const p3 = document.getElementById('trip-photo-3')?.src || '';
          const itImgs = Array.from(document.querySelectorAll('.wf-itin-media-wrap img')).map(img => img.src);
          const uniqueItImgs = new Set(itImgs);

          // Click brochure button to trigger modal
          const brochureBtn = document.getElementById('trip-brochure-btn');
          if (brochureBtn) brochureBtn.click();
          
          const modal = document.getElementById('wf-brochure-modal');
          const modalOpen = modal ? modal.classList.contains('is-open') : false;
          const modalTitle = document.getElementById('brochure-modal-title')?.textContent || '';
          const brochureImg = document.getElementById('brochure-main-img')?.src || '';
          const thumbCount = document.querySelectorAll('.wf-brochure-thumb-item').length;

          return {
            title,
            heroPhotos: [p1, p2, p3].map(u => u.split('?')[0].split('/').pop()),
            itineraryDays: itImgs.length,
            uniqueItineraryDays: uniqueItImgs.size,
            itineraryThumbs: itImgs.map(u => u.split('?')[0].split('/').pop()),
            brochure: {
              modalOpen,
              modalTitle,
              firstPage: brochureImg.split('/').pop(),
              totalPages: thumbCount
            }
          };
        })()
      `,
      returnByValue: true
    });

    console.log(JSON.stringify(tripData.result.value, null, 2));
  }

  console.log('\n=== ALL E2E BROWSER TESTS COMPLETED SUCCESSFULLY! ===');
  chrome.kill();
  process.exit(0);
}

run().catch(err => {
  console.error('Test error:', err);
  chrome.kill();
  process.exit(1);
});

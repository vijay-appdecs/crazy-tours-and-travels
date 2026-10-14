const { spawn } = require('child_process');
const http = require('http');
const os = require('os');
const path = require('path');
const fs = require('fs');

const tempProfile = path.join(os.tmpdir(), 'chrome_temp_unsplash_' + Date.now());
const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new',
  '--remote-debugging-port=9499',
  '--disable-gpu',
  '--no-first-run',
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
  const tabs = await waitForDebugger(9499);

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

  const targets = [
    { dest: 'kerala', url: 'https://unsplash.com/s/photos/kerala' },
    { dest: 'kerala', url: 'https://unsplash.com/s/photos/munnar' },
    { dest: 'kerala', url: 'https://unsplash.com/s/photos/alleppey' },
    { dest: 'kerala', url: 'https://unsplash.com/s/photos/kochi' },
    { dest: 'goa', url: 'https://unsplash.com/s/photos/goa' },
    { dest: 'goa', url: 'https://unsplash.com/s/photos/goa-beach' },
    { dest: 'manali', url: 'https://unsplash.com/s/photos/manali' },
    { dest: 'manali', url: 'https://unsplash.com/s/photos/himachal-pradesh' },
    { dest: 'kashmir', url: 'https://unsplash.com/s/photos/kashmir' },
    { dest: 'kashmir', url: 'https://unsplash.com/s/photos/gulmarg' },
    { dest: 'ladakh', url: 'https://unsplash.com/s/photos/ladakh' },
    { dest: 'japan', url: 'https://unsplash.com/s/photos/kyoto' }
  ];

  const results = {};

  for (const t of targets) {
    console.log(`Navigating to ${t.url}...`);
    try {
      await send('Page.navigate', { url: t.url });
      await sleep(3500);

      // Scroll a bit to trigger lazy loading
      await send('Runtime.evaluate', {
        expression: 'window.scrollBy(0, 1500);'
      });
      await sleep(2000);

      const evalRes = await send('Runtime.evaluate', {
        expression: `
          (() => {
            const urls = new Set();
            document.querySelectorAll('img').forEach(img => {
              const src = img.src || '';
              const m = src.match(/https:\\/\\/images\\.unsplash\\.com\\/(photo-[a-zA-Z0-9\\-]+)/);
              if (m) urls.add(m[1]);
              const srcset = img.srcset || '';
              const m2 = srcset.matchAll(/https:\\/\\/images\\.unsplash\\.com\\/(photo-[a-zA-Z0-9\\-]+)/g);
              for (const match of m2) urls.add(match[1]);
            });
            return Array.from(urls);
          })()
        `,
        returnByValue: true
      });

      const ids = (evalRes && evalRes.result && evalRes.result.value) || [];
      console.log(`Found ${ids.length} photo IDs for ${t.dest} (${t.url})`);
      results[t.dest] = results[t.dest] || [];
      ids.forEach(id => {
        if (!results[t.dest].includes(id)) results[t.dest].push(id);
      });
    } catch (e) {
      console.error(`Error fetching ${t.url}:`, e);
    }
  }

  fs.writeFileSync('scratch/unsplash_crawled_by_dest.json', JSON.stringify(results, null, 2), 'utf8');
  console.log('Crawling complete! Saved to scratch/unsplash_crawled_by_dest.json');

  chrome.kill();
  process.exit(0);
}

run().catch(err => {
  console.error('Run error:', err);
  chrome.kill();
  process.exit(1);
});

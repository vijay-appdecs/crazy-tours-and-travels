const { spawn } = require('child_process');
const http = require('http');
const os = require('os');
const path = require('path');
const fs = require('fs');

const tempProfile = path.join(os.tmpdir(), 'chrome_temp_test_profile_' + Date.now());
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const chrome = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9455',
  '--disable-gpu',
  '--no-first-run',
  '--no-default-browser-check',
  `--user-data-dir=${tempProfile}`,
  'about:blank'
]);

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function run() {
  await sleep(1500);

  const tabs = await new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:9455/json', res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });

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

  await send('Page.enable');
  await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 1800,
    deviceScaleFactor: 1,
    mobile: false
  });

  console.log('Navigating to Rohtang trip detail...');
  await send('Page.navigate', { url: 'http://localhost:3000/trip-detail.html?slug=manali-rohtang-snow-safari-6d5n' });

  await sleep(2500);

  // 1. Inspect Images
  const imgCheck = await send('Runtime.evaluate', {
    expression: `(() => {
      const p1 = document.getElementById('trip-photo-1');
      const p2 = document.getElementById('trip-photo-2');
      const p3 = document.getElementById('trip-photo-3');
      const collage = document.getElementById('trip-hero-collage');
      const lead = collage.querySelector('.wf-collage-lead');
      const stack = collage.querySelector('.wf-collage-stack');
      const thumbs = collage.querySelectorAll('.wf-collage-thumb');

      return {
        p1Src: p1 ? p1.src : null,
        p2Src: p2 ? p2.src : null,
        p3Src: p3 ? p3.src : null,
        hasPortraits: [p1?.src, p2?.src, p3?.src].some(s => s && (s.includes('1534528741775') || s.includes('1539571696357') || s.includes('1540555700478'))),
        leadRect: lead ? { w: lead.offsetWidth, h: lead.offsetHeight } : null,
        stackRect: stack ? { w: stack.offsetWidth, h: stack.offsetHeight } : null,
        thumbCount: thumbs.length,
        thumbsRects: Array.from(thumbs).map(t => ({ w: t.offsetWidth, h: t.offsetHeight }))
      };
    })()`,
    returnByValue: true
  });
  console.log('=== HERO GALLERY INSPECTION ===');
  console.log(JSON.stringify(imgCheck.result.value, null, 2));

  // 2. Capture Hero Screenshot
  const heroShot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/verify_hero_gallery.png', Buffer.from(heroShot.data, 'base64'));
  console.log('Saved scratch/verify_hero_gallery.png');

  // 3. Inspect Itinerary Details
  const itinCheck = await send('Runtime.evaluate', {
    expression: `(() => {
      const entries = document.querySelectorAll('.wf-itin-accordion-entry');
      const d1 = entries[0];
      const d1Title = d1?.querySelector('.wf-itin-dest-heading')?.textContent?.trim();
      const d1Pill = d1?.querySelector('.wf-itin-day-pill')?.textContent?.trim();
      const d1Steps = Array.from(d1?.querySelectorAll('.wf-itin-step-text') || []).map(el => el.textContent.trim());
      const d1Places = Array.from(d1?.querySelectorAll('.wf-itin-place-tag') || []).map(el => el.textContent.trim());
      const d1Stay = d1?.querySelector('.wf-itin-meta-stay')?.textContent?.trim();
      const d1Meals = d1?.querySelector('.wf-itin-meta-meals')?.textContent?.trim();
      const d1BodyVisible = d1?.querySelector('.wf-itin-accordion-body')?.offsetHeight > 0;

      return {
        totalDays: entries.length,
        day1: {
          pill: d1Pill,
          title: d1Title,
          stepsCount: d1Steps.length,
          stepsSample: d1Steps.slice(0, 2),
          places: d1Places,
          stay: d1Stay,
          meals: d1Meals,
          bodyVisible: d1BodyVisible
        }
      };
    })()`,
    returnByValue: true
  });
  console.log('=== ITINERARY INSPECTION ===');
  console.log(JSON.stringify(itinCheck.result.value, null, 2));

  // Scroll down to Itinerary and take screenshot
  await send('Runtime.evaluate', {
    expression: `document.getElementById('itinerary-section').scrollIntoView({ behavior: 'instant', block: 'start' });`
  });
  await sleep(600);

  const itinShot1 = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/verify_itin_expanded.png', Buffer.from(itinShot1.data, 'base64'));
  console.log('Saved scratch/verify_itin_expanded.png');

  // 4. Click Day 1 Header/Arrow to collapse
  console.log('Toggling Day 1 to collapse...');
  const collapseCheck = await send('Runtime.evaluate', {
    expression: `(() => {
      const header = document.querySelector('#itin-day-1 .wf-itin-accordion-header');
      header.click();
      const d1 = document.getElementById('itin-day-1');
      const body = d1.querySelector('.wf-itin-accordion-body');
      const isBodyHidden = window.getComputedStyle(body).display === 'none';
      const pill = d1.querySelector('.wf-itin-day-pill').textContent.trim();
      const title = d1.querySelector('.wf-itin-dest-heading').textContent.trim();
      return {
        hasIsCollapsed: d1.classList.contains('is-collapsed'),
        isBodyHidden: isBodyHidden,
        headerStillVisible: d1.querySelector('.wf-itin-accordion-header').offsetHeight > 0,
        visibleDay: pill,
        visibleHeading: title
      };
    })()`,
    returnByValue: true
  });
  console.log('=== DAY 1 COLLAPSE TEST ===');
  console.log(JSON.stringify(collapseCheck.result.value, null, 2));

  const itinShotCollapsed = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/verify_itin_day1_collapsed.png', Buffer.from(itinShotCollapsed.data, 'base64'));
  console.log('Saved scratch/verify_itin_day1_collapsed.png');

  // 5. Click "Collapse All" button
  console.log('Clicking Collapse All...');
  await send('Runtime.evaluate', {
    expression: `toggleAllItineraryDays(false);`
  });
  await sleep(400);

  const allCollapsedCheck = await send('Runtime.evaluate', {
    expression: `(() => {
      const entries = Array.from(document.querySelectorAll('.wf-itin-accordion-entry'));
      return {
        allHaveCollapsedClass: entries.every(e => e.classList.contains('is-collapsed')),
        allBodiesHidden: entries.every(e => window.getComputedStyle(e.querySelector('.wf-itin-accordion-body')).display === 'none')
      };
    })()`,
    returnByValue: true
  });
  console.log('=== COLLAPSE ALL TEST ===');
  console.log(JSON.stringify(allCollapsedCheck.result.value, null, 2));

  const itinShotAllCollapsed = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('scratch/verify_itin_all_collapsed.png', Buffer.from(itinShotAllCollapsed.data, 'base64'));
  console.log('Saved scratch/verify_itin_all_collapsed.png');

  chrome.kill();
  process.exit(0);
}

run().catch(err => {
  console.error('Test error:', err);
  chrome.kill();
  process.exit(1);
});

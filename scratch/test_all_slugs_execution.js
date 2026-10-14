const fs = require('fs');

const dataCode = fs.readFileSync('js/crazy-travels-data.js', 'utf8');
const htmlCode = fs.readFileSync('trip-detail.html', 'utf8');

// Extract script
const match = htmlCode.match(/<script>([\s\S]*?)<\/script>\s*<\/body>/i);
if (!match) {
  console.error('Script not found');
  process.exit(1);
}
const scriptContent = match[1];

const { CRAZY_TRAVELS_DATA, getWayfareTrip, WAYFARE_DATA } = require('../js/crazy-travels-data.js');

// Collect all IDs in HTML
const idRegex = /id=["']([^"']+)["']/g;
const htmlIds = new Set();
let m;
while ((m = idRegex.exec(htmlCode)) !== null) {
  htmlIds.add(m[1]);
}

console.log(`Found ${htmlIds.size} element IDs in HTML`);

function createMockElement(id) {
  return {
    id: id,
    style: {},
    classList: {
      add: () => {},
      remove: () => {},
      toggle: () => {},
      contains: () => false
    },
    textContent: '',
    innerHTML: '',
    value: 'test',
    src: '',
    href: '',
    addEventListener: () => {},
    setAttribute: () => {},
    getAttribute: () => '',
    scrollBy: () => {},
    scrollIntoView: () => {},
    appendChild: () => {}
  };
}

// Test executing for all trips
const trips = CRAZY_TRAVELS_DATA.trips;
console.log(`Testing execution for ${trips.length} packages...`);

let errors = [];

trips.forEach(trip => {
  const elements = {};
  htmlIds.forEach(id => {
    elements[id] = createMockElement(id);
  });

  const mockDocument = {
    title: '',
    body: { style: {} },
    createElement: (tag) => createMockElement(tag),
    getElementById: (id) => {
      if (elements[id]) return elements[id];
      // Check if it's missing
      errors.push({ slug: trip.slug, missingId: id });
      return createMockElement(id);
    },
    querySelectorAll: (selector) => {
      return [];
    },
    addEventListener: (event, cb) => {
      if (event === 'DOMContentLoaded') {
        try {
          cb();
        } catch (e) {
          errors.push({ slug: trip.slug, error: e.stack });
        }
      }
    }
  };

  const mockWindow = {
    location: {
      search: `?slug=${trip.slug}`,
      href: `http://localhost:3000/trip-detail.html?slug=${trip.slug}`
    },
    open: () => ({ document: { write: () => {}, close: () => {} }, focus: () => {}, print: () => {} })
  };

  // Run script
  const fn = new Function('document', 'window', 'URLSearchParams', 'getWayfareTrip', 'WAYFARE_DATA', 'CRAZY_TRAVELS_DATA', scriptContent);
  try {
    fn(mockDocument, mockWindow, URLSearchParams, getWayfareTrip, WAYFARE_DATA, CRAZY_TRAVELS_DATA);
  } catch (err) {
    errors.push({ slug: trip.slug, runtimeError: err.stack });
  }
});

console.log(`Finished testing. Errors caught: ${errors.length}`);
if (errors.length > 0) {
  console.log('Errors:', JSON.stringify(errors.slice(0, 5), null, 2));
} else {
  console.log('✓ All 39 packages execute without any runtime errors in mock DOM!');
}

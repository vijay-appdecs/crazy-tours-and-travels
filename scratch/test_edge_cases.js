const fs = require('fs');

const path = require('path');
const { CRAZY_TRAVELS_DATA, getWayfareTrip, WAYFARE_DATA } = require(path.join(__dirname, '../js/crazy-travels-data.js'));
const htmlCode = fs.readFileSync('trip-detail.html', 'utf8');
const scriptContent = htmlCode.match(/<script>([\s\S]*?)<\/script>\s*<\/body>/i)[1];

const testUrls = [
  '',
  '?slug=kerala-honeymoon-4d3n',
  '?slug=kashmir',
  '?slug=manali',
  '?slug=goa',
  '?slug=totally-unknown-slug',
  '?id=kashmir-grand-5d4n'
];

console.log('Testing resilient resolution across edge-case URLs:');

testUrls.forEach(urlSearch => {
  let titleFound = '';
  const mockDocument = {
    title: '',
    body: { style: {} },
    createElement: () => ({ classList: { add: () => {} }, appendChild: () => {}, addEventListener: () => {} }),
    getElementById: (id) => ({
      id,
      style: {},
      classList: { add: () => {}, remove: () => {}, toggle: () => {}, contains: () => false },
      textContent: '',
      innerHTML: '',
      value: '',
      src: '',
      href: '',
      addEventListener: () => {},
      setAttribute: (k, v) => {},
      getAttribute: () => '',
      scrollBy: () => {},
      scrollIntoView: () => {},
      appendChild: () => {}
    }),
    querySelectorAll: () => [],
    addEventListener: (ev, cb) => {
      if (ev === 'DOMContentLoaded') cb();
    }
  };

  const mockWindow = {
    location: {
      search: urlSearch,
      href: 'http://localhost:3000/trip-detail.html' + urlSearch
    },
    open: () => ({ document: { write: () => {}, close: () => {} }, focus: () => {}, print: () => {} }),
    CRAZY_TRAVELS_DATA,
    WAYFARE_DATA
  };

  const fn = new Function('document', 'window', 'URLSearchParams', 'getWayfareTrip', 'WAYFARE_DATA', 'CRAZY_TRAVELS_DATA', scriptContent);
  try {
    fn(mockDocument, mockWindow, URLSearchParams, getWayfareTrip, WAYFARE_DATA, CRAZY_TRAVELS_DATA);
    console.log(`✓ Search: "${urlSearch || '(empty)'}" -> Loaded: "${mockDocument.title}"`);
  } catch (e) {
    console.error(`❌ FAILED for "${urlSearch}":`, e.message);
  }
});

const fs = require('fs');
const vm = require('vm');

let code = fs.readFileSync('js/tours.js', 'utf8');
let sandbox = {
  window: {},
  document: { addEventListener: () => {}, querySelector: () => null, querySelectorAll: () => [] },
  navigator: { userAgent: '' }
};
sandbox.window = sandbox;
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

console.log('Sandbox keys:', Object.keys(sandbox));
console.log('--- Tour Samples ---');
const k0 = sandbox.getKeralaPackages()[0];
console.log('Kerala sample keys:', Object.keys(k0));
console.log('Kerala sample:', { id: k0.id, title: k0.title, duration: k0.duration, itineraryLength: k0.itinerary?.length, highlights: k0.highlights });

const km0 = sandbox.getKashmirPackages()[0];
console.log('Kashmir sample keys:', Object.keys(km0));
console.log('Kashmir sample:', { id: km0.id, title: km0.title, duration: km0.duration, price: km0.price, itineraryLength: km0.itinerary?.length });

const g0 = sandbox.getGoaPackages()[0];
console.log('Goa sample keys:', Object.keys(g0));
console.log('Goa sample:', { id: g0.id, title: g0.title, duration: g0.duration, price: g0.price, itineraryLength: g0.itinerary?.length });

const m0 = sandbox.getManaliPackages()[0];
console.log('Manali sample keys:', Object.keys(m0));
console.log('Manali sample:', { id: m0.id, title: m0.title, duration: m0.duration, price: m0.price, itineraryLength: m0.itinerary?.length });

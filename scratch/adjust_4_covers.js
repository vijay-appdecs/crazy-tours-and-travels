const fs = require('fs');
const vm = require('vm');
let code = fs.readFileSync('js/crazy-travels-data.js', 'utf8');
const context = { global: {} };
vm.runInNewContext(code + '\nglobal.CRAZY_TRAVELS_DATA = CRAZY_TRAVELS_DATA;', context);
const data = context.global.CRAZY_TRAVELS_DATA;

const tripMap = {
  'japan-autumn-classic-8d': 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=85',
  'goa-south-goa-serenity-4d3n': 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&w=1600&q=85',
  'kashmir-sonmarg-group-5d4n': 'https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=1600&q=85',
  'kashmir-romantic-couple-4d3n': 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1600&q=85'
};

data.trips.forEach(t => {
  if (tripMap[t.slug]) {
    t.photos[0] = tripMap[t.slug];
    t.coverImage = tripMap[t.slug];
  }
});

const newJs = '/**\n * CRAZY TOURS AND TRAVELS — MASTER DATA MODEL\n */\n\nconst CRAZY_TRAVELS_DATA = ' + 
  JSON.stringify(data, null, 2) + 
  ';\n\n// Backward-compatible alias for existing scripts\nconst WAYFARE_DATA = CRAZY_TRAVELS_DATA;\nif (typeof window !== "undefined") {\n  window.CRAZY_TRAVELS_DATA = CRAZY_TRAVELS_DATA;\n  window.WAYFARE_DATA = CRAZY_TRAVELS_DATA;\n}\n';

fs.writeFileSync('js/crazy-travels-data.js', newJs, 'utf8');
console.log('Saved 4 specific cover adjustments!');

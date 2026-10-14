const vm = require('vm');
const fs = require('fs');

let code = fs.readFileSync('js/crazy-travels-data.js', 'utf8');
code += '\nglobal.CRAZY_TRAVELS_DATA = CRAZY_TRAVELS_DATA;';
const context = { global: {} };
vm.runInNewContext(code, context);
const trips = context.global.CRAZY_TRAVELS_DATA.trips;
console.log('Total trips:', trips.length);

const destCount = {};
trips.forEach(t => {
  destCount[t.destination] = (destCount[t.destination] || 0) + 1;
});
console.log('Destinations:', destCount);

trips.forEach((t, i) => {
  console.log(`${i+1}. [${t.destination}] ${t.slug} (${t.days}D/${t.nights}N): ${t.title}`);
  console.log(`   cover: ${t.coverImage}`);
  console.log(`   hero photos count: ${t.photos ? t.photos.length : 0}`);
  if (t.photos && t.photos.length > 0) {
    console.log(`   hero[0]: ${t.photos[0]}`);
  }
  const itinThumbs = (t.itinerary || []).map(d => d.thumbnail).filter(Boolean);
  console.log(`   itin days: ${(t.itinerary || []).length}, thumbnails present: ${itinThumbs.length}`);
  if (itinThumbs.length > 0) {
    console.log(`   day 1 thumb: ${itinThumbs[0]}`);
  }
});

const fs = require('fs');
const vm = require('vm');

let code = fs.readFileSync('js/crazy-travels-data.js', 'utf8');
code += '\nglobal.CRAZY_TRAVELS_DATA = CRAZY_TRAVELS_DATA;';
const ctx = { global: {} };
vm.runInNewContext(code, ctx);
const trips = ctx.global.CRAZY_TRAVELS_DATA.trips;

console.log('Checking cover photos across trips...');
const covers = {};
trips.forEach(t => {
  const c = t.photos ? t.photos[0] : null;
  if (!covers[c]) covers[c] = [];
  covers[c].push(t.slug);
});

let duplicates = 0;
for (const [img, slugs] of Object.entries(covers)) {
  if (slugs.length > 1) {
    console.log(`⚠️ Shared cover (${slugs.length} trips):`, slugs);
    duplicates++;
  }
}

if (duplicates === 0) {
  console.log('🎉 ALL TRIPS HAVE UNIQUE, DISTINCT COVER PHOTOS!');
} else {
  console.log(`Found ${duplicates} shared covers.`);
}

console.log('\nChecking Kerala trips:');
const keralaTrips = trips.filter(t => t.destination === 'kerala');
keralaTrips.forEach(t => {
  console.log(`- ${t.slug}:`);
  console.log(`   cover: ${t.photos[0]}`);
  console.log(`   days: ${(t.itinerary || []).map(d => d.thumbnail)}`);
});

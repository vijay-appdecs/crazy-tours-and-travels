const path = require('path');
const { CRAZY_TRAVELS_DATA } = require(path.join(__dirname, '../js/crazy-travels-data.js'));

console.log(`Total packages: ${CRAZY_TRAVELS_DATA.trips.length}`);

// Group by destination
const byDest = {};
CRAZY_TRAVELS_DATA.trips.forEach(t => {
  if (!byDest[t.destination]) byDest[t.destination] = [];
  byDest[t.destination].push(t);
});

for (const [dest, trips] of Object.entries(byDest)) {
  console.log(`\n=================== DESTINATION: ${dest.toUpperCase()} (${trips.length} packages) ===================`);
  trips.forEach(t => {
    console.log(`\nPackage: [${t.slug}] "${t.name}"`);
    console.log(`  Hero photos (${t.photos.length}):`);
    t.photos.forEach((p, idx) => console.log(`    Photo ${idx+1}: ${p}`));
    console.log(`  Itinerary days (${t.itinerary.length}):`);
    t.itinerary.forEach((d, idx) => console.log(`    Day ${d.day || idx+1} [${d.title}]: ${d.thumbnail || 'NONE'}`));
  });
}

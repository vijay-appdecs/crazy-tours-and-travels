const fs = require('fs');

// Read crazy-travels-data.js
const code = fs.readFileSync('js/crazy-travels-data.js', 'utf8');

// The file declares `const CRAZY_TRAVELS_DATA = ...;`
// We can wrap it in an eval context or function
const sandbox = {};
const fn = new Function('sandbox', code + '\nsandbox.CRAZY_TRAVELS_DATA = CRAZY_TRAVELS_DATA;\nif (typeof WAYFARE_TRIPS !== "undefined") sandbox.WAYFARE_TRIPS = WAYFARE_TRIPS;');
fn(sandbox);

const trips = sandbox.CRAZY_TRAVELS_DATA.packages || sandbox.CRAZY_TRAVELS_DATA.trips || sandbox.WAYFARE_TRIPS || [];
console.log('Total packages found:', trips.length);

trips.forEach(t => {
  console.log(`\nPackage [${t.slug || t.id}]: "${t.name}" (${t.destinationName || t.destination})`);
  console.log(`Duration: ${t.duration || t.days}, Departure: ${t.place || t.departureCity || 'N/A'}`);
  console.log(`Photos: ${(t.photos || []).length}, Itinerary Days: ${(t.itinerary || []).length}`);
  if (t.itinerary && t.itinerary.length > 0) {
    t.itinerary.forEach((d, i) => {
      console.log(`  Day ${d.day || i+1}: ${d.title} | thumb: ${d.thumbnail ? 'YES' : 'NO'}`);
    });
  }
});

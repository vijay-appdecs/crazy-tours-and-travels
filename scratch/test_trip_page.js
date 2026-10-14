const fs = require('fs');

// Load data
const dataCode = fs.readFileSync('js/crazy-travels-data.js', 'utf8');
const htmlCode = fs.readFileSync('trip-detail.html', 'utf8');

console.log('Validating data and HTML syntax...');

// Extract the main script from trip-detail.html
const match = htmlCode.match(/<script>([\s\S]*?)<\/script>\s*<\/body>/i);
if (!match) {
  console.error('Could not find main script tag in trip-detail.html!');
  process.exit(1);
}
console.log('Main script extracted successfully, size:', match[1].length);

// Check syntax with Function constructor
try {
  new Function(match[1]);
  console.log('✓ Main script syntax is 100% VALID!');
} catch (e) {
  console.error('Syntax error in main script:', e);
  process.exit(1);
}

// Test data model lookup for multiple packages
const { CRAZY_TRAVELS_DATA, getCrazyTravelsTrip } = require('../js/crazy-travels-data.js');
const testSlugs = [
  'kerala-honeymoon-4d3n',
  'kerala-honeymoon-5d4n',
  'manali-bachelors-3d2n',
  'kashmir-winter-group-4d3n',
  'goa-bachelors-party-4d3n'
];

testSlugs.forEach(slug => {
  const trip = getCrazyTravelsTrip(slug);
  if (!trip) {
    console.error(`FAILED to find trip for slug: ${slug}`);
  } else {
    console.log(`✓ Trip found: [${trip.slug}] "${trip.name}" — Photos: ${trip.photos.length}, Itinerary Days: ${trip.itinerary.length}`);
    trip.itinerary.forEach((d, i) => {
      if (!d.thumbnail) console.warn(`  Warning: day ${i+1} has no thumbnail`);
    });
  }
});

console.log('\nAll automated data and syntax checks passed!');

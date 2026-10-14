const fs = require('fs');

const html = fs.readFileSync('scratch/chrome_rendered.html', 'utf8');

// Check trip-itinerary-container
const itinIndex = html.indexOf('id="trip-itinerary-container"');
console.log('trip-itinerary-container index:', itinIndex);
if (itinIndex !== -1) {
  console.log('Slice around itinerary container:');
  console.log(html.slice(itinIndex, itinIndex + 500));
}

// Check trip-included-list
const incIndex = html.indexOf('id="trip-included-list"');
console.log('\ntrip-included-list index:', incIndex);
if (incIndex !== -1) {
  console.log('Slice around included list:');
  console.log(html.slice(incIndex, incIndex + 400));
}

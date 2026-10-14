const fs = require('fs');

const path = require('path');
const { CRAZY_TRAVELS_DATA, getCrazyTravelsTrip } = require(path.join(__dirname, '../js/crazy-travels-data.js'));
const trip = getCrazyTravelsTrip('kerala-honeymoon-4d3n');

console.log('Testing Kerala 4D3N Data:');
console.log('Trip name:', trip.name);
console.log('Summary:', trip.summary);
console.log('Overview:', trip.overview);
console.log('Photos:', trip.photos);
console.log('Itinerary length:', trip.itinerary.length);
trip.itinerary.forEach((d, i) => {
  console.log(`\nDay ${d.day || i+1}: ${d.title}`);
  console.log(`  Thumbnail: ${d.thumbnail}`);
  console.log(`  Morning: ${d.morning}`);
  console.log(`  Afternoon: ${d.afternoon}`);
  console.log(`  Description: ${d.description ? d.description.slice(0, 80) + '...' : 'NONE'}`);
});

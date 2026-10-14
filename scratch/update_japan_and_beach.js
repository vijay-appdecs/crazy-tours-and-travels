const fs = require('fs');

let code = fs.readFileSync('js/crazy-travels-data.js', 'utf8');

// 1. Remove Japan destination from destinations array
// Between goa destination ending and trips starting
const japanDestRegex = /,\s*\{\s*"id":\s*"japan"[\s\S]*?\}\s*\]\s*,\s*"trips":\s*\[/;
code = code.replace(japanDestRegex, '\n  ],\n  "trips": [');

// 2. Remove japan-autumn-classic-8d from trips array
const japanTripRegex = /\{\s*"id":\s*"japan-autumn-classic-8d"[\s\S]*?\}\s*,\s*\n/;
code = code.replace(japanTripRegex, '');

fs.writeFileSync('js/crazy-travels-data.js', code, 'utf8');

// Verify
const { CRAZY_TRAVELS_DATA } = require('../js/crazy-travels-data.js');
console.log('Total destinations now:', CRAZY_TRAVELS_DATA.destinations.map(d => d.id));
console.log('Total trips now:', CRAZY_TRAVELS_DATA.trips.length);
console.log('First 3 trips:');
CRAZY_TRAVELS_DATA.trips.slice(0, 3).forEach(t => console.log(t.id, '|', t.name, '|', t.duration));

const hasJapanTrip = CRAZY_TRAVELS_DATA.trips.some(t => t.id.includes('japan'));
console.log('Contains Japan trip:', hasJapanTrip);

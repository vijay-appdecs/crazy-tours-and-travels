const fs = require('fs');

let code = fs.readFileSync('js/crazy-travels-data.js', 'utf8');

// Replace "days": X, followed by "duration": "..."
// to "days": X,\n      "duration": "XD/(X-1)N"
code = code.replace(/"days":\s*(\d+),\s*\r?\n\s*"duration":\s*"[^"]+"/g, (match, days) => {
  const d = parseInt(days, 10);
  const n = d - 1;
  return `"days": ${d},\n      "duration": "${d}D/${n}N"`;
});

fs.writeFileSync('js/crazy-travels-data.js', code, 'utf8');

// Verify
const { CRAZY_TRAVELS_DATA } = require('../js/crazy-travels-data.js');
console.log('Successfully updated durations for', CRAZY_TRAVELS_DATA.trips.length, 'trips:');
CRAZY_TRAVELS_DATA.trips.slice(0, 10).forEach(t => console.log(t.id, '->', t.duration));

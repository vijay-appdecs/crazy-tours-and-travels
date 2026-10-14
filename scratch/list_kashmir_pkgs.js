const path = require('path');
const { CRAZY_TRAVELS_DATA } = require(path.join(__dirname, '../js/crazy-travels-data.js'));

console.log('Kashmir packages in data:');
CRAZY_TRAVELS_DATA.trips
  .filter(t => t.destination === 'kashmir')
  .forEach(t => console.log(`  - slug: "${t.slug}", id: "${t.id}", name: "${t.name}"`));

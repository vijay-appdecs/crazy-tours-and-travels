const fs = require('fs');
let code = fs.readFileSync('js/crazy-travels-data.js', 'utf8');
code += '\nglobal.CRAZY_TRAVELS_DATA = CRAZY_TRAVELS_DATA;';
const vm = require('vm');
const ctx = { global: {} };
vm.runInNewContext(code, ctx);
const trips = ctx.global.CRAZY_TRAVELS_DATA.trips;

console.log('Total trips:', trips.length);
trips.forEach((t, i) => {
  console.log(`[${i+1}] ${t.slug} (${t.destination}) - ${t.name}`);
  (t.itinerary || []).forEach(d => {
    console.log(`   Day ${d.day}: ${d.title} (thumb: ${d.thumbnail ? 'YES' : 'NO'})`);
  });
});

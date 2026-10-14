const fs = require('fs');
let code = fs.readFileSync('js/crazy-travels-data.js', 'utf8');
code += '\nglobal.CRAZY_TRAVELS_DATA = CRAZY_TRAVELS_DATA;';
const vm = require('vm');
const ctx = { global: {} };
vm.runInNewContext(code, ctx);
const trips = ctx.global.CRAZY_TRAVELS_DATA.trips;
trips.forEach((t, i) => {
  console.log((i+1) + '. [' + t.destination + '] ' + t.slug + ' | ' + t.name + ' (' + t.duration + ')');
});

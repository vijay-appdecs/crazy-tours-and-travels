const fs = require('fs');
let code = fs.readFileSync('js/wayfare-data.js', 'utf8');
code = code.replace('const WAYFARE_DATA', 'var WAYFARE_DATA');
const vm = require('vm');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(code, sandbox);
console.log('Total trips in WAYFARE_DATA:', sandbox.WAYFARE_DATA.trips.length);
sandbox.WAYFARE_DATA.trips.forEach((t, i) => {
  console.log(`  ${i+1}. [${t.id}] ${t.name} (${t.duration || t.days}) - dest: ${t.destination}`);
});

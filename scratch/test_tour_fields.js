const fs = require('fs');
const vm = require('vm');

let toursCode = fs.readFileSync('js/tours.js', 'utf8');
let sandbox = {
  window: {},
  document: { addEventListener: () => {}, querySelector: () => null, querySelectorAll: () => [] },
  navigator: { userAgent: '' }
};
sandbox.window = sandbox;
vm.createContext(sandbox);
vm.runInContext(toursCode, sandbox);

const keralaList = sandbox.getKeralaPackages();
const kashmirList = sandbox.getKashmirPackages();
const goaList = sandbox.getGoaPackages();
const manaliList = sandbox.getManaliPackages();

console.log('Kerala tours count:', keralaList.length);
console.log('Kashmir tours count:', kashmirList.length);
console.log('Goa tours count:', goaList.length);
console.log('Manali tours count:', manaliList.length);

console.log('\n--- Kerala Package 1 Itinerary sample:');
console.log(JSON.stringify(keralaList[0].itinerary.slice(0, 2), null, 2));

console.log('\n--- Kerala Package 1 Inclusions:');
console.log(JSON.stringify(keralaList[0].inclusions ? keralaList[0].inclusions.slice(0, 3) : 'none'));

console.log('\n--- Manali Package 1:');
console.log({
  id: manaliList[0].id,
  title: manaliList[0].title,
  duration: manaliList[0].duration,
  durationDays: manaliList[0].durationDays,
  routeString: manaliList[0].routeString || manaliList[0].route,
  image: manaliList[0].image,
  itineraryCount: manaliList[0].itinerary?.length
});

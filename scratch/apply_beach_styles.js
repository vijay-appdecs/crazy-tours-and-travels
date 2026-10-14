const fs = require('fs');

let code = fs.readFileSync('js/crazy-travels-data.js', 'utf8');

// Update Goa packages travelStyle to beach-islands and add styles
const goaIds = [
  'goa-bachelors-party-4d3n',
  'goa-romantic-honeymoon-4d3n',
  'goa-grand-family-heritage-5d4n',
  'goa-south-goa-serenity-4d3n',
  'goa-getaway'
];

// For each Goa trip, ensure travelStyle is "beach-islands" and styleName is "Beach & Coastal"
goaIds.forEach(id => {
  const reg = new RegExp(`("id":\\s*"${id}"[\\s\\S]*?"travelStyle":\\s*")[^"]+("[\\s\\S]*?"styleName":\\s*")[^"]+(")`);
  code = code.replace(reg, `$1beach-islands$2Beach & Coastal$3`);
});

// For Kerala beach trips (Varkala and Trivandrum), ensure styles array includes "beach-islands"
const keralaBeachIds = [
  'kerala-varkala-honeymoon-6d5n',
  'kerala-varkala-bachelor-6d5n',
  'kerala-trivandrum-honeymoon-5d4n',
  'kerala-trivandrum-bachelor-5d4n'
];

keralaBeachIds.forEach(id => {
  const reg = new RegExp(`("id":\\s*"${id}"[\\s\\S]*?"styleName":\\s*"[^"]+",)`);
  if (!code.includes(`"id": "${id}"\n      "styles"`)) {
    code = code.replace(reg, `$1\n      "styles": ["beach-islands"],`);
  }
});

// Update getTripsByTravelStyle
const oldFunc = `function getTripsByTravelStyle(styleSlug) {
  if (!styleSlug || styleSlug === 'all') return CRAZY_TRAVELS_DATA.trips;
  return CRAZY_TRAVELS_DATA.trips.filter(t => t.travelStyle.toLowerCase() === styleSlug.toLowerCase());
}`;

const newFunc = `function getTripsByTravelStyle(styleSlug) {
  if (!styleSlug || styleSlug === 'all') return CRAZY_TRAVELS_DATA.trips;
  const s = styleSlug.toLowerCase();
  return CRAZY_TRAVELS_DATA.trips.filter(t => {
    if (t.travelStyle && t.travelStyle.toLowerCase() === s) return true;
    if (Array.isArray(t.styles) && t.styles.some(st => st.toLowerCase() === s)) return true;
    if (s === 'beach-islands' && (
      t.destination === 'goa' || 
      (t.name + ' ' + (t.place || '')).toLowerCase().includes('varkala') ||
      (t.name + ' ' + (t.place || '')).toLowerCase().includes('beach') ||
      (t.name + ' ' + (t.place || '')).toLowerCase().includes('kovalam') ||
      (t.name + ' ' + (t.place || '')).toLowerCase().includes('trivandrum')
    )) return true;
    return false;
  });
}`;

if (code.includes(oldFunc)) {
  code = code.replace(oldFunc, newFunc);
}

fs.writeFileSync('js/crazy-travels-data.js', code, 'utf8');

// Verify
const { CRAZY_TRAVELS_DATA, getTripsByTravelStyle } = require('../js/crazy-travels-data.js');
const beachTrips = getTripsByTravelStyle('beach-islands');
console.log('Beach & Coastal trips found now:', beachTrips.length);
beachTrips.forEach(t => console.log('  -', t.id, '|', t.name, '| dest:', t.destination, '| style:', t.travelStyle));

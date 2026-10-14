const fs = require('fs');

const { CRAZY_TRAVELS_DATA } = require('../js/crazy-travels-data.js');

const DEST_DAY_POOLS = {
  kerala: [
    'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80', // Cheeyappara Waterfalls / Munnar Drive
    'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?auto=format&fit=crop&w=800&q=80', // Munnar Tea Hills
    'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80', // Thekkady Wildlife / Periyar
    'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80', // Alleppey Houseboat Backwaters
    'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80', // Fort Cochin Heritage
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80', // Kovalam / Varkala Sunset Beach
    'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80'  // Jatayu & Southern Palms
  ],
  manali: [
    'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80', // Hadimba Temple / Cedar Forest
    'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=800&q=80', // Solang Valley & Atal Tunnel
    'https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=800&q=80', // Beas River Rafting
    'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80', // Kasol Riverside Camp
    'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=800&q=80', // Manikaran Gurudwara Hot Springs
    'https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&w=800&q=80'  // Old Manali Cafes & Sissu
  ],
  kashmir: [
    'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80', // Dal Lake Shikara Sunset
    'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80', // Gulmarg Snow Gondola
    'https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=800&q=80', // Pahalgam Valley of Shepherds
    'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80', // Mughal Gardens & Srinagar
    'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'  // Sonmarg Glaciers
  ],
  goa: [
    'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80', // North Goa Beach
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80', // Calangute Watersports
    'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=800&q=80', // Portuguese Heritage
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'  // Sunset Cruise
  ],
  ladakh: [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', // Pangong Lake
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80', // Nubra Valley Dunes
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80'  // Khardung La Pass
  ]
};

// Destination top-3 hero photos library
const DEST_HERO_PHOTOS = {
  kerala: [
    'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
  ],
  manali: [
    'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=1200&q=80'
  ],
  kashmir: [
    'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=1200&q=80'
  ],
  goa: [
    'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=1200&q=80'
  ],
  ladakh: [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80'
  ]
};

// Update trips
CRAZY_TRAVELS_DATA.trips.forEach(trip => {
  const dKey = (trip.destination || 'kerala').toLowerCase();
  const heroPool = DEST_HERO_PHOTOS[dKey] || DEST_HERO_PHOTOS.kerala;
  const dayPool = DEST_DAY_POOLS[dKey] || DEST_DAY_POOLS.kerala;

  // Ensure 3 distinct, beautiful photos without duplicate IDs
  trip.photos = [...heroPool];

  // Ensure itinerary days have dedicated high-quality thumbnail
  if (Array.isArray(trip.itinerary)) {
    trip.itinerary.forEach((item, idx) => {
      // Pick distinct day photo from pool
      item.thumbnail = dayPool[idx % dayPool.length];
    });
  }
});

// Re-generate file contents
const output = `/**
 * CRAZY TOURS AND TRAVELS — MASTER DATA MODEL
 */

const CRAZY_TRAVELS_DATA = ${JSON.stringify(CRAZY_TRAVELS_DATA, null, 2)};

// Helper lookup functions
function getCrazyTravelsTrip(slugOrId) {
  if (!slugOrId) return null;
  const clean = String(slugOrId).toLowerCase().trim();
  return CRAZY_TRAVELS_DATA.trips.find(t => 
    t.slug.toLowerCase() === clean || 
    t.id.toLowerCase() === clean
  ) || null;
}

function getCrazyTravelsDestination(slugOrId) {
  if (!slugOrId) return null;
  const clean = String(slugOrId).toLowerCase().trim();
  return CRAZY_TRAVELS_DATA.destinations.find(d => 
    d.slug.toLowerCase() === clean || 
    d.id.toLowerCase() === clean
  ) || null;
}

function getCrazyTravelsArticle(slugOrId) {
  if (!slugOrId) return null;
  const clean = String(slugOrId).toLowerCase().trim();
  return CRAZY_TRAVELS_DATA.articles.find(a => 
    a.slug.toLowerCase() === clean || 
    a.id.toLowerCase() === clean
  ) || null;
}

function getTripsByDestination(destSlug) {
  return CRAZY_TRAVELS_DATA.trips.filter(t => t.destination.toLowerCase() === destSlug.toLowerCase());
}

function getTripsByStyle(styleSlug) {
  return CRAZY_TRAVELS_DATA.trips.filter(t => t.travelStyle.toLowerCase() === styleSlug.toLowerCase());
}

// Global attachment
if (typeof window !== 'undefined') {
  window.CRAZY_TRAVELS_DATA = CRAZY_TRAVELS_DATA;
  window.WAYFARE_DATA = CRAZY_TRAVELS_DATA;
  window.getCrazyTravelsTrip = getCrazyTravelsTrip;
  window.getWayfareTrip = getCrazyTravelsTrip;
  window.getCrazyTravelsDestination = getCrazyTravelsDestination;
  window.getWayfareDestination = getCrazyTravelsDestination;
  window.getCrazyTravelsArticle = getCrazyTravelsArticle;
  window.getWayfareArticle = getCrazyTravelsArticle;
  window.getTripsByDestination = getTripsByDestination;
  window.getTripsByStyle = getTripsByStyle;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CRAZY_TRAVELS_DATA,
    WAYFARE_DATA,
    getCrazyTravelsTrip,
    getWayfareTrip,
    getCrazyTravelsDestination,
    getWayfareDestination,
    getCrazyTravelsArticle,
    getWayfareArticle,
    getTripsByDestination,
    getTripsByStyle
  };
}
`;

fs.writeFileSync('js/crazy-travels-data.js', output, 'utf8');
console.log('Successfully enriched crazy-travels-data.js with curated photos and itinerary thumbnails!');

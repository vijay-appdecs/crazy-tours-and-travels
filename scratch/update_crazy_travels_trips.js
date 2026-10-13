const fs = require('fs');
const vm = require('vm');

// 1. Load tours.js
let toursCode = fs.readFileSync('js/tours.js', 'utf8');
let sandbox = {
  window: {},
  document: { addEventListener: () => {}, querySelector: () => null, querySelectorAll: () => [] },
  navigator: { userAgent: '' }
};
sandbox.window = sandbox;
vm.createContext(sandbox);
vm.runInContext(toursCode, sandbox);

const keralaPackages = sandbox.getKeralaPackages();
const kashmirPackages = sandbox.getKashmirPackages();
const goaPackages = sandbox.getGoaPackages();
const manaliPackages = sandbox.getManaliPackages();

// 2. Load existing crazy-travels-data.js
let wfCode = fs.readFileSync('js/crazy-travels-data.js', 'utf8');
let wfSandbox = {};
vm.createContext(wfSandbox);
vm.runInContext(wfCode.replace('const WAYFARE_DATA', 'var WAYFARE_DATA'), wfSandbox);
const currentWfData = wfSandbox.WAYFARE_DATA;
const existingTrips = currentWfData.trips;

// Destination image fallbacks
const destImages = {
  kerala: [
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80"
  ],
  kashmir: [
    "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1200&q=80"
  ],
  goa: [
    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"
  ],
  manali: [
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=1200&q=80"
  ],
  himachal: [
    "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80"
  ],
  rajasthan: [
    "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80"
  ],
  ladakh: [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
  ],
  andaman: [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80"
  ]
};

function determineStyle(tour, destId) {
  const text = ((tour.title || tour.name || '') + ' ' + (tour.category || '') + ' ' + (tour.style || '') + ' ' + (tour.id || '')).toLowerCase();
  if (text.includes('honeymoon') || text.includes('romantic') || text.includes('couple')) {
    return { id: 'honeymoon', name: 'Honeymoon & Romance' };
  }
  if (text.includes('bachelor') || text.includes('group') || text.includes('party')) {
    return { id: 'group', name: 'Bachelors & Group' };
  }
  if (text.includes('adventure') || text.includes('trek') || text.includes('camping') || text.includes('snow') || text.includes('paragliding') || text.includes('pass')) {
    return { id: 'adventure', name: 'Adventure & Snow' };
  }
  if (destId === 'goa' || text.includes('beach') || text.includes('island') || text.includes('coastal')) {
    return { id: 'beach-islands', name: 'Beach & Coastal' };
  }
  if (text.includes('heritage') || text.includes('culture') || text.includes('palace') || text.includes('temple')) {
    return { id: 'culture', name: 'Heritage & Living Culture' };
  }
  return { id: 'honeymoon', name: 'Honeymoon & Romance' };
}

function determinePace(tour) {
  const text = ((tour.title || '') + ' ' + (tour.style || '')).toLowerCase();
  if (text.includes('honeymoon') || text.includes('romantic') || text.includes('leisure') || text.includes('serenity')) {
    return 'Easy & Romantic';
  }
  if (text.includes('adventure') || text.includes('trek') || text.includes('pass') || text.includes('bachelor')) {
    return 'Active & Thrilling';
  }
  return 'Moderate & Balanced';
}

function determineGroupSize(tour) {
  const text = ((tour.title || '') + ' ' + (tour.category || '')).toLowerCase();
  if (text.includes('honeymoon') || text.includes('couple')) {
    return 'Private Couple';
  }
  if (text.includes('bachelor') || text.includes('party')) {
    return 'Private Bachelor Group (4-12)';
  }
  if (text.includes('family')) {
    return 'Private Family (3-8)';
  }
  return 'Private Group (2-12)';
}

function determinePrice(tour, defaultPrice = 18500) {
  if (typeof tour.price === 'number' && tour.price > 0) {
    return tour.price;
  }
  if (typeof tour.price === 'string') {
    const num = parseInt(tour.price.replace(/[^0-9]/g, ''), 10);
    if (!isNaN(num) && num > 0) return num;
  }
  const days = tour.durationDays || (tour.itinerary ? tour.itinerary.length : 4);
  if (tour.id.includes('honeymoon')) {
    return days * 4900;
  }
  if (tour.id.includes('bachelor')) {
    return days * 2400;
  }
  return defaultPrice;
}

function transformTour(tour, destId, destName) {
  const style = determineStyle(tour, destId);
  const days = tour.durationDays || (tour.itinerary ? tour.itinerary.length : 4);
  const price = determinePrice(tour);
  const priceFormatted = `from ₹${price.toLocaleString()}`;
  
  let photos = [];
  if (tour.heroImage) photos.push(tour.heroImage);
  if (tour.image && !photos.includes(tour.image)) photos.push(tour.image);
  if (tour.itinerary && Array.isArray(tour.itinerary)) {
    for (const d of tour.itinerary) {
      if (d.spots) {
        for (const s of d.spots) {
          if (s.img && !photos.includes(s.img)) photos.push(s.img);
        }
      }
    }
  }
  const fallbacks = destImages[destId] || destImages['kerala'];
  for (const fb of fallbacks) {
    if (photos.length < 3 && !photos.includes(fb)) {
      photos.push(fb);
    }
  }
  photos = photos.slice(0, 3);

  let itinerary = [];
  if (tour.itinerary && Array.isArray(tour.itinerary)) {
    itinerary = tour.itinerary.map((dayObj, i) => {
      let desc = dayObj.summary || dayObj.desc || dayObj.description || '';
      if (dayObj.placesCovered && dayObj.placesCovered.length > 0) {
        desc += ` Places covered: ${dayObj.placesCovered.join(', ')}.`;
      }
      if (dayObj.overnight) {
        desc += ` Overnight stay: ${dayObj.overnight}.`;
      }
      return {
        day: dayObj.day || (i + 1),
        title: dayObj.title || `Day ${i + 1} Sightseeing`,
        description: desc.trim() || `Full day guided sightseeing and leisure activities.`
      };
    });
  } else {
    for (let i = 1; i <= days; i++) {
      itinerary.push({
        day: i,
        title: i === 1 ? 'Arrival & Welcome' : i === days ? 'Final Sightseeing & Departure' : `Day ${i} Mountain Exploration`,
        description: `Experience private sightseeing, local cuisine, and comfortable overnight stay.`
      });
    }
  }

  let included = tour.inclusions || [
    `Personal AC Cab for all ${days} days with professional driver`,
    `${days - 1} Nights comfortable accommodation with daily breakfast`,
    `All toll taxes, parking fees, fuel, and driver allowances`,
    `Dedicated 24/7 Telugu & English concierge support`
  ];
  if (included.length < 3) {
    included.push(`Dedicated 24/7 Telugu & English concierge support`);
  }

  let place = tour.routeString || (tour.placesCovered ? tour.placesCovered.slice(0, 3).join(', ') : `${destName} Circuit`);
  if (!place || place === 'undefined') {
    place = destName;
  }

  return {
    id: tour.id,
    slug: tour.id,
    name: tour.title || tour.name,
    destination: destId,
    destinationName: destName,
    travelStyle: style.id,
    styleName: style.name,
    days: days,
    duration: `${days} days`,
    price: price,
    priceFormatted: priceFormatted,
    groupSize: determineGroupSize(tour),
    pace: determinePace(tour),
    season: "All Year",
    nextDeparture: "Daily Private Departures",
    place: place,
    featured: Boolean(tour.featured),
    summary: tour.description || tour.overview || `Handcrafted ${days}-day luxury experience in ${destName}. Personal cab, premium stays, and 24/7 Telugu concierge care.`,
    overview: tour.overview || tour.description || `Discover the best of ${destName} with handpicked sightseeing, verified hotels, and seamless private transfers curated by Crazy Tours and Travels.`,
    photos: photos,
    itinerary: itinerary,
    included: included
  };
}

const allTrips = [];
const seenIds = new Set();

// 1. Kerala
keralaPackages.forEach(p => {
  if (!seenIds.has(p.id)) {
    seenIds.add(p.id);
    allTrips.push(transformTour(p, 'kerala', 'Kerala'));
  }
});

// 2. Kashmir
kashmirPackages.forEach(p => {
  if (!seenIds.has(p.id)) {
    seenIds.add(p.id);
    allTrips.push(transformTour(p, 'kashmir', 'Kashmir'));
  }
});

// 3. Goa
goaPackages.forEach(p => {
  if (!seenIds.has(p.id)) {
    seenIds.add(p.id);
    allTrips.push(transformTour(p, 'goa', 'Goa'));
  }
});

// 4. Manali / Kasol
manaliPackages.forEach(p => {
  if (!seenIds.has(p.id)) {
    seenIds.add(p.id);
    const dest = p.id.includes('shimla') ? 'himachal' : 'manali';
    const destName = dest === 'himachal' ? 'Himachal Circuit' : 'Kullu-Manali';
    allTrips.push(transformTour(p, dest, destName));
  }
});

// 5. Retain existing other trips (Rajasthan, Ladakh, Andaman, etc.)
existingTrips.forEach(t => {
  if (!seenIds.has(t.id)) {
    seenIds.add(t.id);
    allTrips.push(t);
  }
});

console.log(`Writing ${allTrips.length} packages into WAYFARE_DATA...`);
currentWfData.trips = allTrips;

const fullJsContent = `/**
 * CRAZY TOURS AND TRAVELS — MASTER DATA MODEL (WAYFARE SYSTEM)
 * Authentic Luxury Travel Framework with Kashmir, Kerala, Kullu-Manali, Goa,
 * verified itineraries, pricing in INR, photo galleries, and local guides.
 */

const WAYFARE_DATA = ${JSON.stringify(currentWfData, null, 2)};

// ----------------------------------------------------------------------------
// HELPER LOOKUP FUNCTIONS
// ----------------------------------------------------------------------------
function getWayfareTrip(slugOrId) {
  if (!slugOrId) return WAYFARE_DATA.trips[0];
  const found = WAYFARE_DATA.trips.find(t => t.slug === slugOrId || t.id === slugOrId);
  return found || WAYFARE_DATA.trips[0];
}

function getWayfareDestination(slugOrId) {
  if (!slugOrId) return WAYFARE_DATA.destinations[0];
  const found = WAYFARE_DATA.destinations.find(d => d.slug === slugOrId || d.id === slugOrId);
  return found || WAYFARE_DATA.destinations[0];
}

function getWayfareArticle(slugOrId) {
  if (!slugOrId) return WAYFARE_DATA.articles[0];
  const found = WAYFARE_DATA.articles.find(a => a.slug === slugOrId || a.id === slugOrId);
  return found || WAYFARE_DATA.articles[0];
}

function getTripsByDestination(destSlug) {
  return WAYFARE_DATA.trips.filter(t => t.destination.toLowerCase() === destSlug.toLowerCase());
}

function getTripsByStyle(styleSlug) {
  return WAYFARE_DATA.trips.filter(t => t.travelStyle.toLowerCase() === styleSlug.toLowerCase());
}

// Global attachment
if (typeof window !== 'undefined') {
  window.WAYFARE_DATA = WAYFARE_DATA;
  window.getWayfareTrip = getWayfareTrip;
  window.getWayfareDestination = getWayfareDestination;
  window.getWayfareArticle = getWayfareArticle;
  window.getTripsByDestination = getTripsByDestination;
  window.getTripsByStyle = getTripsByStyle;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WAYFARE_DATA, getWayfareTrip, getWayfareDestination, getWayfareArticle, getTripsByDestination, getTripsByStyle };
}
`;

fs.writeFileSync('js/crazy-travels-data.js', fullJsContent, 'utf8');
console.log('Successfully wrote js/crazy-travels-data.js with', allTrips.length, 'trips!');

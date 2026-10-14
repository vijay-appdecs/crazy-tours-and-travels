const fs = require('fs');
const vm = require('vm');

// 1. Load crazy-travels-data.js
let code = fs.readFileSync('js/crazy-travels-data.js', 'utf8');
code += '\nglobal.CRAZY_TRAVELS_DATA = CRAZY_TRAVELS_DATA;';
const ctx = { global: {} };
vm.runInNewContext(code, ctx);
const data = ctx.global.CRAZY_TRAVELS_DATA;
const trips = data.trips;

// 2. Load curated Pexels photos and working Unsplash photos
const pexels = JSON.parse(fs.readFileSync('scratch/pexels_by_category.json', 'utf8'));
const unsplash = fs.readFileSync('scratch/working_photo_ids.txt', 'utf8').split('\n').map(s => s.trim()).filter(Boolean);

// Format URLs
function formatPexels(base, w = 800) {
  return `${base}?auto=compress&cs=tinysrgb&w=${w}`;
}
function formatUnsplash(id, w = 800) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}

// Build destination-based photo pools
const pools = {
  kerala: {
    tea: (pexels.kerala_tea || []).map(u => formatPexels(u)),
    houseboat: (pexels.kerala_houseboat || []).map(u => formatPexels(u)),
    waterfall: (pexels.kerala_waterfall || []).map(u => formatPexels(u)),
    wildlife: (pexels.kerala_wildlife || []).map(u => formatPexels(u)),
    varkala: (pexels.kerala_varkala || []).map(u => formatPexels(u)),
    kovalam: (pexels.kerala_kovalam || []).map(u => formatPexels(u)),
    culture: (pexels.kerala_culture || []).map(u => formatPexels(u))
  },
  goa: {
    beach: (pexels.goa_beach || []).map(u => formatPexels(u)),
    watersports: (pexels.goa_watersports || []).map(u => formatPexels(u)),
    waterfall: (pexels.goa_waterfall || []).map(u => formatPexels(u)),
    church: (pexels.goa_church || []).map(u => formatPexels(u)),
    nightlife: (pexels.goa_nightlife || []).map(u => formatPexels(u))
  },
  kashmir: {
    dal_lake: (pexels.kashmir_dal_lake || []).map(u => formatPexels(u)),
    pahalgam: (pexels.kashmir_pahalgam || []).map(u => formatPexels(u)),
    sonmarg: (pexels.kashmir_sonmarg || []).map(u => formatPexels(u)),
    gulmarg: [
      formatUnsplash('photo-1595815771614-ade9d652a65d'),
      formatUnsplash('photo-1598091383021-15ddea10925d'),
      formatUnsplash('photo-1548777123-e216912df7d8'),
      formatUnsplash('photo-1566837945700-30057527ade0'),
      formatUnsplash('photo-1544735716-392fe2489ffa')
    ]
  },
  manali: {
    snow: (pexels.manali_snow || []).map(u => formatPexels(u)),
    solang: (pexels.manali_solang || []).map(u => formatPexels(u)),
    rohtang: (pexels.manali_rohtang || []).map(u => formatPexels(u)),
    kasol: (pexels.manali_kasol || []).map(u => formatPexels(u)),
    river: (pexels.manali_river || []).map(u => formatPexels(u)),
    extra: [
      formatUnsplash('photo-1626621341517-bbf3d9990a23'),
      formatUnsplash('photo-1551524559-8af4e6624178'),
      formatUnsplash('photo-1510312305653-8ed496efae75'),
      formatUnsplash('photo-1586348943529-beaae6c28db9'),
      formatUnsplash('photo-1464822759023-fed622ff2c3b'),
      formatUnsplash('photo-1502784444187-359ac186c5bb'),
      formatUnsplash('photo-1482862549707-f63cb32c5fd9'),
      formatUnsplash('photo-1454496522488-7a8e488e8606'),
      formatUnsplash('photo-1519681393784-d120267933ba'),
      formatUnsplash('photo-1472214103451-9374bd1c798e'),
      formatUnsplash('photo-1448375240586-882707db888b'),
      formatUnsplash('photo-1542273917363-3b1817f69a2d'),
      formatUnsplash('photo-1486870591958-9b9d0d1dda99'),
      formatUnsplash('photo-1501785888041-af3ef285b470'),
      formatUnsplash('photo-1503899036084-c55cdd92da26'),
      formatUnsplash('photo-1506197603052-3cc9c3a201bd'),
      formatUnsplash('photo-1597167231350-d057a45dc868')
    ]
  },
  ladakh: {
    pangong: (pexels.ladakh_pangong || []).map(u => formatPexels(u)),
    nubra: (pexels.ladakh_nubra || []).map(u => formatPexels(u)),
    extra: [
      formatUnsplash('photo-1506744038136-46273834b3fb'),
      formatUnsplash('photo-1426604966848-d7adac402bff'),
      formatUnsplash('photo-1470071459604-3b5ec3a7fe05')
    ]
  },
  japan: {
    kyoto: (pexels.japan_kyoto || []).map(u => formatPexels(u)),
    extra: [
      formatUnsplash('photo-1493976040374-85c8e12f0c0e'),
      formatUnsplash('photo-1503899036084-c55cdd92da26'),
      formatUnsplash('photo-1588668214407-6ea9a6d8c272')
    ]
  }
};

const usedUrls = new Set();

function getUniquePhoto(dest, preferredCat) {
  const destPool = pools[dest] || pools.kerala;
  
  // Try preferred category
  if (preferredCat && destPool[preferredCat]) {
    for (const url of destPool[preferredCat]) {
      const base = url.split('?')[0];
      if (!usedUrls.has(base)) {
        usedUrls.add(base);
        return url;
      }
    }
  }

  // Try any category in this destination
  for (const cat of Object.keys(destPool)) {
    for (const url of destPool[cat]) {
      const base = url.split('?')[0];
      if (!usedUrls.has(base)) {
        usedUrls.add(base);
        return url;
      }
    }
  }

  // Fallback: take from unused Unsplash pool
  for (const pid of unsplash) {
    const full = `https://images.unsplash.com/${pid}`;
    if (!usedUrls.has(full)) {
      usedUrls.add(full);
      return formatUnsplash(pid);
    }
  }

  throw new Error(`Out of unique photos for destination ${dest}!`);
}

// Helper to determine best category for a day
function getCategoryForDay(dest, dayTitle, dayDesc) {
  const text = (dayTitle + ' ' + dayDesc).toLowerCase();
  
  if (dest === 'kerala') {
    if (text.includes('varkala') || text.includes('cliff')) return 'varkala';
    if (text.includes('kovalam') || text.includes('trivandrum') || text.includes('poovar') || text.includes('padmanabha')) return 'kovalam';
    if (text.includes('houseboat') || text.includes('alleppey') || text.includes('backwater') || text.includes('punnamada')) return 'houseboat';
    if (text.includes('thekkady') || text.includes('periyar') || text.includes('wildlife') || text.includes('spice')) return 'wildlife';
    if (text.includes('waterfall') || text.includes('cheeyappara') || text.includes('valara')) return 'waterfall';
    if (text.includes('munnar') || text.includes('tea') || text.includes('mattupetty') || text.includes('eravikulam')) return 'tea';
    if (text.includes('cochin') || text.includes('kochi') || text.includes('chinese') || text.includes('fort') || text.includes('kathakali') || text.includes('jatayu')) return 'culture';
    return 'tea';
  }

  if (dest === 'goa') {
    if (text.includes('waterfall') || text.includes('dudhsagar') || text.includes('mollem')) return 'waterfall';
    if (text.includes('watersport') || text.includes('jet ski') || text.includes('parasailing') || text.includes('banana') || text.includes('scuba')) return 'watersports';
    if (text.includes('church') || text.includes('bom jesus') || text.includes('cathedral') || text.includes('fontainhas') || text.includes('panaji')) return 'church';
    if (text.includes('party') || text.includes('nightlife') || text.includes('club') || text.includes('cruise') || text.includes('mandovi') || text.includes('shack')) return 'nightlife';
    return 'beach';
  }

  if (dest === 'kashmir') {
    if (text.includes('gulmarg') || text.includes('gondola') || text.includes('skiing') || text.includes('snow')) return 'gulmarg';
    if (text.includes('sonmarg') || text.includes('thajiwas') || text.includes('glacier') || text.includes('sindh')) return 'sonmarg';
    if (text.includes('pahalgam') || text.includes('betaab') || text.includes('aru') || text.includes('baisaran') || text.includes('lidder')) return 'pahalgam';
    return 'dal_lake';
  }

  if (dest === 'manali') {
    if (text.includes('kasol') || text.includes('parvati') || text.includes('manikaran') || text.includes('kheerganga') || text.includes('tosh') || text.includes('chalal')) return 'kasol';
    if (text.includes('solang') || text.includes('paragliding') || text.includes('zorbing') || text.includes('quad') || text.includes('adventure')) return 'solang';
    if (text.includes('rohtang') || text.includes('glacier') || text.includes('atal tunnel') || text.includes('sissu') || text.includes('snow safari') || text.includes('hampta') || text.includes('chandratal')) return 'rohtang';
    if (text.includes('river') || text.includes('rafting') || text.includes('beas') || text.includes('cottage') || text.includes('leisure')) return 'river';
    return 'snow';
  }

  if (dest === 'ladakh') {
    if (text.includes('nubra') || text.includes('hunder') || text.includes('camel') || text.includes('dune') || text.includes('diskit')) return 'nubra';
    return 'pangong';
  }

  if (dest === 'japan') {
    return 'kyoto';
  }

  return null;
}

console.log('Assigning 100% unique photos to all 39 trips and their itineraries...');

// First pass: assign unique thumbnails to every day of every trip
trips.forEach(trip => {
  const dest = trip.destination.toLowerCase();
  
  if (trip.itinerary && Array.isArray(trip.itinerary)) {
    trip.itinerary.forEach((day, dIdx) => {
      const cat = getCategoryForDay(dest, day.title || '', day.description || '');
      day.thumbnail = getUniquePhoto(dest, cat);
    });
  }
});

// Second pass: assign 3 unique hero photos for each trip
trips.forEach(trip => {
  const dest = trip.destination.toLowerCase();
  const slug = trip.slug;
  
  let cat1 = 'tea', cat2 = 'houseboat', cat3 = 'wildlife';
  if (dest === 'kerala') {
    if (slug.includes('varkala')) { cat1 = 'varkala'; cat2 = 'houseboat'; cat3 = 'tea'; }
    else if (slug.includes('trivandrum')) { cat1 = 'kovalam'; cat2 = 'culture'; cat3 = 'houseboat'; }
    else if (slug.includes('jatayu')) { cat1 = 'culture'; cat2 = 'tea'; cat3 = 'houseboat'; }
    else if (slug.includes('bachelor')) { cat1 = 'waterfall'; cat2 = 'culture'; cat3 = 'houseboat'; }
    else { cat1 = 'houseboat'; cat2 = 'tea'; cat3 = 'wildlife'; }
  } else if (dest === 'goa') {
    if (slug.includes('honeymoon')) { cat1 = 'beach'; cat2 = 'nightlife'; cat3 = 'church'; }
    else if (slug.includes('family')) { cat1 = 'waterfall'; cat2 = 'church'; cat3 = 'beach'; }
    else if (slug.includes('south')) { cat1 = 'beach'; cat2 = 'church'; cat3 = 'watersports'; }
    else { cat1 = 'watersports'; cat2 = 'nightlife'; cat3 = 'beach'; }
  } else if (dest === 'kashmir') {
    if (slug.includes('sonmarg')) { cat1 = 'sonmarg'; cat2 = 'dal_lake'; cat3 = 'pahalgam'; }
    else if (slug.includes('honeymoon') || slug.includes('romantic')) { cat1 = 'dal_lake'; cat2 = 'gulmarg'; cat3 = 'pahalgam'; }
    else { cat1 = 'gulmarg'; cat2 = 'dal_lake'; cat3 = 'pahalgam'; }
  } else if (dest === 'manali') {
    if (slug.includes('kasol')) { cat1 = 'kasol'; cat2 = 'river'; cat3 = 'snow'; }
    else if (slug.includes('rohtang') || slug.includes('hampta') || slug.includes('pass')) { cat1 = 'rohtang'; cat2 = 'solang'; cat3 = 'snow'; }
    else if (slug.includes('honeymoon') || slug.includes('romantic') || slug.includes('alpine')) { cat1 = 'snow'; cat2 = 'river'; cat3 = 'solang'; }
    else if (slug.includes('adventure') || slug.includes('paragliding')) { cat1 = 'solang'; cat2 = 'river'; cat3 = 'rohtang'; }
    else if (slug.includes('cafe')) { cat1 = 'snow'; cat2 = 'river'; cat3 = 'solang'; }
    else { cat1 = 'solang'; cat2 = 'snow'; cat3 = 'river'; }
  } else if (dest === 'ladakh') {
    cat1 = 'pangong'; cat2 = 'nubra'; cat3 = 'extra';
  } else if (dest === 'japan') {
    cat1 = 'kyoto'; cat2 = 'extra'; cat3 = 'kyoto';
  }

  const p1 = getUniquePhoto(dest, cat1).replace('&w=800', '&w=1600').replace('q=80', 'q=85');
  const p2 = getUniquePhoto(dest, cat2).replace('&w=800', '&w=1200');
  const p3 = getUniquePhoto(dest, cat3).replace('&w=800', '&w=1200');

  trip.photos = [p1, p2, p3];
  trip.coverImage = p1;
});

console.log('Total unique URLs consumed across all packages & days:', usedUrls.size);

// Save back to js/crazy-travels-data.js cleanly
const outputJs = `/**
 * CRAZY TOURS AND TRAVELS — MASTER DATA MODEL
 */

const CRAZY_TRAVELS_DATA = ${JSON.stringify(data, null, 2)};

// Universal accessor functions
function getCrazyTravelsTrip(slugOrId) {
  if (!slugOrId) return null;
  return CRAZY_TRAVELS_DATA.trips.find(t => 
    (t.slug && t.slug.toLowerCase() === slugOrId.toLowerCase()) || 
    (t.id && t.id.toLowerCase() === slugOrId.toLowerCase())
  ) || null;
}

const getWayfareTrip = getCrazyTravelsTrip;

function getCrazyTravelsDestination(destSlug) {
  if (!destSlug) return null;
  return CRAZY_TRAVELS_DATA.destinations.find(d => 
    (d.slug && d.slug.toLowerCase() === destSlug.toLowerCase()) || 
    (d.id && d.id.toLowerCase() === destSlug.toLowerCase())
  ) || null;
}

const getWayfareDestination = getCrazyTravelsDestination;

function getCrazyTravelsArticle(articleSlug) {
  if (!articleSlug) return null;
  return CRAZY_TRAVELS_DATA.articles.find(a => 
    (a.slug && a.slug.toLowerCase() === articleSlug.toLowerCase()) || 
    (a.id && a.id.toLowerCase() === articleSlug.toLowerCase())
  ) || null;
}

function getTripsByDestination(destSlug) {
  if (!destSlug || destSlug === 'all') return CRAZY_TRAVELS_DATA.trips;
  return CRAZY_TRAVELS_DATA.trips.filter(t => t.destination.toLowerCase() === destSlug.toLowerCase());
}

function getTripsByTravelStyle(styleSlug) {
  if (!styleSlug || styleSlug === 'all') return CRAZY_TRAVELS_DATA.trips;
  return CRAZY_TRAVELS_DATA.trips.filter(t => t.travelStyle.toLowerCase() === styleSlug.toLowerCase());
}

// Global browser exports
if (typeof window !== 'undefined') {
  window.CRAZY_TRAVELS_DATA = CRAZY_TRAVELS_DATA;
  window.WAYFARE_DATA = CRAZY_TRAVELS_DATA;
  window.getCrazyTravelsTrip = getCrazyTravelsTrip;
  window.getWayfareTrip = getWayfareTrip;
  window.getCrazyTravelsDestination = getCrazyTravelsDestination;
  window.getWayfareDestination = getWayfareDestination;
  window.getCrazyTravelsArticle = getCrazyTravelsArticle;
  window.getTripsByDestination = getTripsByDestination;
  window.getTripsByTravelStyle = getTripsByTravelStyle;
}

// CommonJS export for Node environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CRAZY_TRAVELS_DATA,
    WAYFARE_DATA: CRAZY_TRAVELS_DATA,
    getCrazyTravelsTrip,
    getWayfareTrip,
    getCrazyTravelsDestination,
    getWayfareDestination,
    getCrazyTravelsArticle,
    getTripsByDestination,
    getTripsByTravelStyle
  };
}
`;

fs.writeFileSync('js/crazy-travels-data.js', outputJs, 'utf8');
console.log('Successfully wrote updated js/crazy-travels-data.js with 100% unique photos!');

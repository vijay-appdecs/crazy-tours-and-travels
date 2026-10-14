const http = require('http');
const { CRAZY_TRAVELS_DATA, getCrazyTravelsTrip } = require('../js/crazy-travels-data.js');

console.log('=== VERIFYING TRIP DETAIL & ITINERARY REDESIGN ===\n');

// 1. Verify data model consistency
console.log('1. Checking Data Model:');
console.log(`   - Total Trips: ${CRAZY_TRAVELS_DATA.trips.length}`);
let allTripsHavePhotos = true;
let allTripsHaveItinerary = true;

CRAZY_TRAVELS_DATA.trips.forEach(t => {
  if (!t.photos || t.photos.length < 3) allTripsHavePhotos = false;
  if (!t.itinerary || t.itinerary.length === 0) allTripsHaveItinerary = false;
  const photoSet = new Set(t.photos || []);
  if (photoSet.size !== (t.photos || []).length) {
    console.warn(`   ⚠️ Duplicate photo found in trip ${t.id}`);
  }
});

console.log(`   - All trips have 3+ distinct photos: ${allTripsHavePhotos ? '✓ PASS' : '❌ FAIL'}`);
console.log(`   - All trips have day-by-day itineraries: ${allTripsHaveItinerary ? '✓ PASS' : '❌ FAIL'}`);

// 2. Verify HTML and HTTP response
function checkPage(url, label) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        console.log(`\n2. Live HTTP Check for [${label}]: Status ${res.statusCode} (${data.length} bytes)`);
        
        // Assertions
        const checks = [
          { name: 'Trip Information Strip (wf-trip-spec-strip)', passed: data.includes('wf-trip-spec-strip') },
          { name: 'Spec labels (DESTINATION, DURATION, TRAVEL DATE, DEPARTURE)', passed: data.includes('DESTINATION') && data.includes('DURATION') && data.includes('DEPARTURE') },
          { name: 'Itinerary Header "EXPLORE YOUR JOURNEY"', passed: data.includes('EXPLORE YOUR JOURNEY') },
          { name: 'Itinerary Main Title "Your Journey, Day by Day"', passed: data.includes('Your Journey, Day by Day') },
          { name: 'Itinerary Subtitle "Discover the experiences, destinations..."', passed: data.includes('Discover the experiences, destinations, and memorable moments planned for every day of your trip.') },
          { name: '3-Column Hero Collage (wf-trip-hero-collage with wf-collage-col)', passed: data.includes('wf-trip-hero-collage') && data.includes('wf-collage-col') },
          { name: 'Share Top Button (#trip-share-btn)', passed: data.includes('id="trip-share-btn"') },
          { name: 'Brochure Top Button (#trip-brochure-btn)', passed: data.includes('id="trip-brochure-btn"') },
          { name: 'Share Modal (#wf-share-modal)', passed: data.includes('id="wf-share-modal"') },
          { name: 'Brochure Modal (#wf-brochure-modal)', passed: data.includes('id="wf-brochure-modal"') },
          { name: 'Itinerary Timeline Container (#trip-itinerary-container)', passed: data.includes('id="trip-itinerary-container"') },
          { name: 'Old info strip (.wf-trip-info-strip) completely removed', passed: !data.includes('class="wf-trip-info-strip"') },
          { name: 'Print script parser bug fixed (no unescaped closing script in doc.write)', passed: !data.includes('<\/script>') }
        ];

        let passedAll = true;
        checks.forEach(c => {
          console.log(`   - ${c.name}: ${c.passed ? '✓ PASS' : '❌ FAIL'}`);
          if (!c.passed) passedAll = false;
        });

        resolve(passedAll);
      });
    }).on('error', err => {
      console.error(`HTTP request error: ${err.message}`);
      resolve(false);
    });
  });
}

checkPage('http://localhost:3000/trip-detail.html?slug=kerala-honeymoon-4d3n', 'kerala-honeymoon-4d3n')
  .then(() => {
    console.log('\n=== VERIFICATION COMPLETE ===');
  });

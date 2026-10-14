const fs = require('fs');
const glob = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const path = require('path');
const { CRAZY_TRAVELS_DATA, getCrazyTravelsTrip } = require(path.join(__dirname, '../js/crazy-travels-data.js'));
const validSlugs = new Set(CRAZY_TRAVELS_DATA.trips.map(t => t.slug));
const validIds = new Set(CRAZY_TRAVELS_DATA.trips.map(t => t.id));

console.log(`Valid trips in data: ${CRAZY_TRAVELS_DATA.trips.length}`);

let totalLinks = 0;
let brokenLinks = 0;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Find all href="trip-detail.html..."
  const regex = /href=["'](trip-detail\.html[^"']*)["']/g;
  let m;
  while ((m = regex.exec(content)) !== null) {
    totalLinks++;
    const link = m[1];
    const url = new URL(link, 'http://localhost');
    const slug = url.searchParams.get('slug') || url.searchParams.get('id');
    
    // Check if dynamic template string in JS
    if (link.includes('${') || link.includes('encodeURIComponent')) {
      continue;
    }
    
    if (!slug) {
      console.warn(`[${file}] Link without slug: ${link}`);
      brokenLinks++;
    } else if (!validSlugs.has(slug) && !validIds.has(slug)) {
      console.error(`[${file}] ❌ INVALID SLUG IN LINK: ${link} (slug="${slug}")`);
      brokenLinks++;
    } else {
      // console.log(`[${file}] ✓ Valid link: ${slug}`);
    }
  }
});

console.log(`\nChecked ${totalLinks} links across ${files.length} HTML files.`);
if (brokenLinks === 0) {
  console.log('✓ All hardcoded links to trip-detail.html have VALID slugs!');
} else {
  console.error(`❌ Total broken/invalid links found: ${brokenLinks}`);
}

const fs = require('fs');
const html = fs.readFileSync('trip-detail.html', 'utf8');
const css1 = fs.readFileSync('css/crazy-travels-core.css', 'utf8');
const css2 = fs.readFileSync('css/crazy-travels-pages.css', 'utf8');

function checkTerm(term) {
  console.log(`Term: "${term}"`);
  console.log(`  in trip-detail.html: ${html.includes(term)}`);
  console.log(`  in crazy-travels-core.css: ${css1.includes(term)}`);
  console.log(`  in crazy-travels-pages.css: ${css2.includes(term)}`);
}

checkTerm('wf-itin-timeline-entry');
checkTerm('wf-trip-spec-strip');
checkTerm('wf-itin-header-badge');
checkTerm('wf-itin-marker');
checkTerm('wf-itin-schedule-item');
checkTerm('phase-morning');

const fs = require('fs');

const html = fs.readFileSync('trip-detail.html', 'utf8');

// Extract PACKAGE_BROCHURES
const match = html.match(/const PACKAGE_BROCHURES = (\{[\s\S]*?\n\s*\});/);
if (!match) {
  console.log('PACKAGE_BROCHURES not found');
  process.exit(1);
}

let brochures;
eval('brochures = ' + match[1]);

console.log('Checking brochure files on disk...');
let missingFiles = 0;
let totalFiles = 0;

for (const [key, b] of Object.entries(brochures)) {
  console.log(`\nBrochure: ${key} (${b.title}) - ${b.pages.length} pages`);
  b.pages.forEach((p, idx) => {
    totalFiles++;
    if (!fs.existsSync(p)) {
      console.error(`  ❌ MISSING PAGE: ${p}`);
      missingFiles++;
    }
  });
}

console.log(`\nChecked ${totalFiles} brochure pages. Missing: ${missingFiles}`);

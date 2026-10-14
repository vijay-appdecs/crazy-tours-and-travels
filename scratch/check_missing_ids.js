const fs = require('fs');

const html = fs.readFileSync('trip-detail.html', 'utf8');

// Match all document.getElementById('...')
const regex = /document\.getElementById\(['"]([^'"]+)['"]\)/g;
let match;
const ids = new Set();
while ((match = regex.exec(html)) !== null) {
  ids.add(match[1]);
}

console.log(`Checking ${ids.size} getElementById calls in trip-detail.html:`);

let missingCount = 0;
ids.forEach(id => {
  // Check if id exists in HTML: id="xyz" or id='xyz'
  const idRegex = new RegExp(`id=["']${id}["']`, 'i');
  const exists = idRegex.test(html);
  if (!exists) {
    console.error(`❌ MISSING ELEMENT ID: "${id}"`);
    missingCount++;
  } else {
    // console.log(`✓ Found id: "${id}"`);
  }
});

if (missingCount === 0) {
  console.log('✓ All getElementById references exist in the HTML!');
} else {
  console.error(`🚨 TOTAL MISSING IDS: ${missingCount}`);
}

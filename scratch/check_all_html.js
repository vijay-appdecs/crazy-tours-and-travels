const fs = require('fs');
const path = require('path');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
console.log('Checking all HTML files:', htmlFiles.length);

let totalErrors = 0;

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Check scripts
  const scriptRegex = /<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  let scriptIndex = 0;
  while ((match = scriptRegex.exec(content)) !== null) {
    const code = match[1];
    if (code.trim()) {
      try {
        new Function(code);
      } catch (err) {
        console.error(`ERROR in ${file} [inline script ${scriptIndex}]:`, err.message);
        totalErrors++;
      }
    }
    scriptIndex++;
  }
});

if (totalErrors === 0) {
  console.log('✓ All HTML inline scripts parsed with ZERO syntax errors!');
} else {
  console.error(`Found ${totalErrors} script errors!`);
}

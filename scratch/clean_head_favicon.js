const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const target = "<link rel=\"icon\" type=\"image/png\" href=\"assets/images/logo.png\"><polygon points='12 2 2 22 12 18 22 22 12 2'/></svg>\">";
const replacement = '<link rel="icon" type="image/png" href="assets/images/logo.png">';

let fixedCount = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync(file, content, 'utf8');
    console.log(`✓ Fixed malformed head favicon in: ${file}`);
    fixedCount++;
  }
});

console.log(`Total files cleaned: ${fixedCount}`);

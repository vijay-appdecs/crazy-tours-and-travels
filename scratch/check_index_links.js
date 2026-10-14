const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const matches = [...html.matchAll(/href=["']([^"']+)["']/g)].map(m => m[1]);
console.log('Links in index.html:', matches.filter(m => m.includes('trip') || m.includes('tour') || m.includes('pack')));

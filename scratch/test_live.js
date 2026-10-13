const http = require('http');

http.get('http://localhost:3000/index.html', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('HTTP Status:', res.statusCode);
    console.log('1. Full bleed hero style present in HTML:', data.includes('/* Full bleed hero covering top completely */'));
    console.log('2. Wordmark Crazy present:', data.includes('wf-nav-wordmark'));
    console.log('3. Footer brand Crazy present:', data.includes('wf-footer-brand-crazy'));
  });
});

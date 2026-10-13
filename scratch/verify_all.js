const http = require('http');

function check(url, label, fn) {
  http.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log(`[${label}] Status: ${res.statusCode}`);
      fn(data);
    });
  });
}

check('http://localhost:3000/contact.html', 'contact.html', (data) => {
  console.log(' - Contains Italy:', data.includes('Italy'));
  console.log(' - Contains Kerala Honeymoon:', data.includes('Kerala Honeymoon Package'));
  console.log(' - Contains Tagline Tours & Travels:', data.includes('Tours & Travels'));
});

check('http://localhost:3000/destinations.html', 'destinations.html', (data) => {
  console.log(' - Contains Japan:', data.includes('Japan Kyoto Pagoda'));
  console.log(' - Contains Ladakh:', data.includes('Ladakh'));
});

check('http://localhost:3000/trip-detail.html', 'trip-detail.html', (data) => {
  console.log(' - Contains Calendar popover:', data.includes('trip-date-popover'));
  console.log(' - Contains auto pkgDays logic:', data.includes('pkgDays'));
  console.log(' - Contains Tagline Tours & Travels:', data.includes('Tours & Travels'));
});

check('http://localhost:3000/index.html', 'index.html', (data) => {
  console.log(' - Hero top cover (wf-hero-section):', data.includes('<section class="wf-hero-section">'));
  console.log(' - Contains Tagline Tours & Travels:', data.includes('Tours & Travels'));
});

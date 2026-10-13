const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const newBrand = `      <a href="index.html" class="wf-nav-brand" aria-label="Crazy Tours and Travels Home">
        <img src="assets/images/logo-icon.png" alt="Crazy Tours Logo" style="height: 30px; width: 30px; object-fit: cover; border-radius: 6px; display: block;">
        <span class="wf-nav-brand-text">
          <span class="wf-nav-wordmark">Crazy</span>
          <span class="wf-nav-tagline">Tours & Travels</span>
        </span>
      </a>`;

const drawerBrand = `        <a href="index.html" class="wf-nav-brand">
          <img src="assets/images/logo-icon.png" alt="Crazy Tours Logo" style="height: 30px; width: 30px; object-fit: cover; border-radius: 6px; display: block;">
          <span class="wf-nav-brand-text">
            <span class="wf-nav-wordmark">Crazy</span>
            <span class="wf-nav-tagline">Tours & Travels</span>
          </span>
        </a>`;

let count = 0;
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let original = content;

  // Replace desktop brand
  content = content.replace(
    /<a href="index\.html" class="wf-nav-brand" aria-label="Crazy Tours and Travels Home">[\s\S]*?<span class="wf-nav-wordmark">Crazy Tours<\/span>[\s\S]*?<\/a>/,
    newBrand.trim()
  );

  // Replace drawer brand
  content = content.replace(
    /<a href="index\.html" class="wf-nav-brand">[\s\S]*?<span class="wf-nav-wordmark">Crazy Tours<\/span>[\s\S]*?<\/a>/,
    drawerBrand.trim()
  );

  if (content !== original) {
    fs.writeFileSync(f, content, 'utf8');
    console.log('Successfully updated brand in:', f);
    count++;
  }
});
console.log('Total files updated:', count);

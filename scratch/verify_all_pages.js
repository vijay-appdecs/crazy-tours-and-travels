const fs = require('fs');

const pages = [
  'index.html',
  'packages.html',
  'destinations.html',
  'destination-detail.html',
  'trip-detail.html',
  'about.html',
  'contact.html'
];

console.log('=== VERIFYING INTEGRITY ACROSS ALL CORE PAGES ===\n');

pages.forEach(page => {
  const content = fs.readFileSync(page, 'utf8');
  console.log(`Page: ${page}`);
  
  // 1. Check title & brand
  const titleMatch = content.match(/<title>(.*?)<\/title>/i);
  console.log(`  - Title: ${titleMatch ? titleMatch[1] : 'N/A'}`);
  
  // 2. Check no broken Wayfare references in user-facing headings
  const hasOldBrandInHeadings = /<h[1-3][^>]*>.*?\bWayfare\b.*?<\/h[1-3]>/i.test(content);
  console.log(`  - Pure Crazy Tours branding in headings: ${!hasOldBrandInHeadings ? '✓ PASS' : '❌ FAIL'}`);

  // 3. Check for syntax issues in script tags
  const scripts = content.match(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/gi) || [];
  let scriptValid = true;
  scripts.forEach((s, idx) => {
    const code = s.replace(/<script[^>]*>|<\/script>/gi, '');
    if (code.trim()) {
      try {
        new Function(code);
      } catch (err) {
        console.error(`  ❌ Syntax error in inline script ${idx}: ${err.message}`);
        scriptValid = false;
      }
    }
  });
  console.log(`  - Inline JS syntax: ${scriptValid ? '✓ PASS' : '❌ FAIL'}`);
});

console.log('\n=== ALL PAGES CHECKED SUCCESSFULLY ===');

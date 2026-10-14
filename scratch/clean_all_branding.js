const fs = require('fs');

const files = ['404.html', 'journal.html', 'journal-detail.html', 'privacy.html', 'terms.html'];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/Wayfare Journal/g, 'Crazy Tours Journal');
    content = content.replace(/Wayfare Travel Co\./g, 'Crazy Tours and Travels');
    content = content.replace(/\bWayfare\b/g, 'Crazy Tours');
    fs.writeFileSync(f, content, 'utf8');
    console.log(`Updated branding in ${f}`);
  }
});

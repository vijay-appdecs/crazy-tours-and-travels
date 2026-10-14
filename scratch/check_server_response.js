const http = require('http');

http.get('http://localhost:3000/trip-detail.html', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const lines = data.split('\n');
    console.log(`Server returned ${lines.length} lines.`);
    console.log(`Lines 2840-2855 from server:`);
    for (let i = 2838; i <= 2855; i++) {
      console.log(`${i+1}: ${lines[i]}`);
    }

    // Now let's test if Chrome parser error is because of </script> or something else
    const scriptMatch = data.match(/<script>([\s\S]*?)<\/script>\s*<\/body>/i);
    if (!scriptMatch) {
      console.log('Script match FAILED on server data!');
      // Check where </script> occurs
      const scriptIndices = [...data.matchAll(/<\/script>/gi)].map(m => m.index);
      console.log('All </script> positions:', scriptIndices);
      scriptIndices.forEach(idx => {
        const lineNum = data.slice(0, idx).split('\n').length;
        console.log(`  </script> at line ${lineNum}:`, data.slice(idx - 40, idx + 20));
      });
    } else {
      console.log('Script match succeeded! Length:', scriptMatch[1].length);
    }
  });
});

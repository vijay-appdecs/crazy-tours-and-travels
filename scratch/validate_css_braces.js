const fs = require('fs');

const html = fs.readFileSync('trip-detail.html', 'utf8');

// Extract the style tags
const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
let match;
let tagIndex = 0;

while ((match = styleRegex.exec(html)) !== null) {
  tagIndex++;
  const css = match[1];
  console.log(`\n--- Inspecting Style Tag #${tagIndex} (${css.length} chars) ---`);

  // Count braces and track line numbers
  let depth = 0;
  let lines = css.split('\n');
  let openStack = [];

  lines.forEach((line, lineIdx) => {
    // Strip comments
    let cleaned = line.replace(/\/\*[\s\S]*?\*\//g, '');
    for (let i = 0; i < cleaned.length; i++) {
      if (cleaned[i] === '{') {
        depth++;
        openStack.push({ line: lineIdx + 1, content: line.trim() });
      } else if (cleaned[i] === '}') {
        depth--;
        if (openStack.length > 0) openStack.pop();
        else {
          console.error(`❌ Unexpected '}' at line ${lineIdx + 1}: ${line.trim()}`);
        }
      }
    }
    if (depth < 0) {
      console.error(`Negative depth at line ${lineIdx + 1}`);
      depth = 0;
    }
  });

  if (openStack.length > 0) {
    console.error(`❌ UNCLOSED BRACES REMAINING (${openStack.length}):`);
    openStack.forEach(item => {
      console.error(`   Line ${item.line}: ${item.content}`);
    });
  } else {
    console.log(`✓ All braces matched perfectly in style tag #${tagIndex}!`);
  }
}

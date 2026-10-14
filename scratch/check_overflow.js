const http = require('http');
const { execSync } = require('child_process');
const fs = require('fs');

// We can run a small puppeteer-like evaluation using Chrome debugging protocol, or just inspect CSS.
// Let's check elements with fixed widths or grid minmax.

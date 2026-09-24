const fs = require('fs');
const path = require('path');

const harPath = path.join('C:\\Users\\scary\\Downloads\\ArhanPortfolio\\arhanportfolio.har');
const har = JSON.parse(fs.readFileSync(harPath, 'utf8'));

const entries = har.log.entries;
console.log(`Total entries: ${entries.length}`);

// Count by type
const typeCounts = {};
entries.forEach(e => {
  const url = new URL(e.request.url);
  const ext = path.extname(url.pathname).toLowerCase();
  typeCounts[ext || '(no-ext)'] = (typeCounts[ext || '(no-ext)'] || 0) + 1;
});

console.log('Resource types:', JSON.stringify(typeCounts, null, 2));

// Group by main document and assets
const pages = [];
entries.forEach(e => {
  const url = new URL(e.request.url);
  const ext = path.extname(url.pathname).toLowerCase();
  if (ext === '.html' || e.request.method === 'GET' && url.pathname === '/') {
    pages.push({
      url: e.request.url,
      status: e.response.status,
      mimeType: e.response.content.mimeType,
      size: e.response.content.size || 0
    });
  }
});

console.log('Pages:', JSON.stringify(pages, null, 2));

// List all unique domains
const domains = new Set();
entries.forEach(e => {
  const url = new URL(e.request.url);
  domains.add(url.origin);
});
console.log('Domains:', Array.from(domains).sort());

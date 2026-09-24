import fs from 'fs';
const h = fs.readFileSync('C:\\Users\\scary\\Downloads\\ArhanPortfolio\\extracted\\zync.framer.ai\\index.html', 'utf8');

// Test the image regex on the raw HTML
const regex = /https:\/\/framerusercontent\.com\/images\/([A-Za-z0-9_-]+\.(?:png|svg|webp|jpg|gif))(?:[?#][^"'\s)]*)?/g;

const matches = [...h.matchAll(regex)];
console.log('Total regex matches:', matches.length);
// Show first 10
matches.slice(0, 10).forEach(m => {
  console.log('  full:', m[0]);
  console.log('  fname:', m[1]);
});

// Check the img src specifically
const imgSrcMatches = [...h.matchAll(/src="(https:\/\/framerusercontent\.com\/images\/[^"]+)"/g)];
console.log('\nimg src matches:', imgSrcMatches.length);
imgSrcMatches.slice(0, 5).forEach(m => {
  console.log(' ', m[1]);
});

// Check srcset
const srcsetMatches = [...h.matchAll(/srcset="([^"]*https:\/\/framerusercontent\.com\/images\/[^"]+)"/g)];
console.log('\nsrcset matches:', srcsetMatches.length);
srcsetMatches.slice(0, 3).forEach(m => {
  console.log(' ', m[1].substring(0, 200));
});

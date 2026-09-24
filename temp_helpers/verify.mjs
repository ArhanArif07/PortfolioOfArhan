import fs from 'fs';
const h = fs.readFileSync('C:\\Users\\scary\\Downloads\\ArhanPortfolio\\CleanCode\\index.html', 'utf8');

// Find all remaining external URLs to framerusercontent.com
const urls = [...h.matchAll(/https:\/\/framerusercontent\.com\/[^"')]+/g)].map(m => m[0]);
const unique = [...new Set(urls)];
console.log('Remaining external framerusercontent URLs:', unique.length);
unique.forEach(u => console.log(' ', u));

// Check for events.framer.com
console.log('Has events.framer.com:', h.includes('events.framer.com'));

// Check for framer badge div
console.log('Has __framer-badge-container div:', h.includes('id="__framer-badge-container"'));

// Check for editorbar
console.log('Has editorbar:', h.includes('editorbar'));

// Check OG images (should remain external)
const ogImages = [...h.matchAll(/content="(https:\/\/framerusercontent\.com\/images\/[^"]+\.jpg)"/g)].map(m => m[1]);
console.log('OG images (should be external):', ogImages);

// Check for any remaining https://unpkg.com URLs
const unpkg = [...h.matchAll(/https:\/\/unpkg\.com\/[^"')]+/g)].map(m => m[0]);
console.log('Remaining unpkg URLs:', unpkg);

// Check for fonts.gstatic.com that are NOT the one we localized
const gstatic = [...h.matchAll(/https:\/\/fonts\.gstatic\.com\/[^"')]+/g)].map(m => m[0]);
console.log('Remaining gstatic URLs count:', gstatic.length);
gstatic.forEach(u => console.log(' ', u));

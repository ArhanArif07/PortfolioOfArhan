import fs from 'fs';

const h = fs.readFileSync('C:\\Users\\scary\\Downloads\\ArhanPortfolio\\CleanCode\\index.html', 'utf8');
console.log('=== FINAL VERIFICATION ===');
console.log('File size:', fs.statSync('C:\\Users\\scary\\Downloads\\ArhanPortfolio\\CleanCode\\index.html').size, 'bytes');
console.log('Total lines:', h.split('\n').length);

// Count replacements
console.log('\n--- Path Replacements ---');
console.log('Local styles/lenis.css:', (h.match(/\.\/styles\/lenis\.css/g) || []).length);
console.log('Local framer-bootstrap.js:', (h.match(/\.\/scripts\/framer-bootstrap\.js/g) || []).length);
console.log('Local script_main.mjs:', (h.match(/\.\/scripts\/script_main\.DkpS-PXN\.mjs/g) || []).length);
console.log('Local image refs:', (h.match(/\.\/assets\/images\//g) || []).length);
console.log('Local font refs:', (h.match(/\.\/assets\/fonts\//g) || []).length);
console.log('Local script refs:', (h.match(/\.\/scripts\//g) || []).length);

// Noise removal
console.log('\n--- Noise Removal ---');
console.log('Has events.framer.com:', h.includes('events.framer.com'));
console.log('Has __framer-badge-container div:', h.includes('id="__framer-badge-container"'));
console.log('Has editorbar:', h.includes('editorbar'));
console.log('Has empty headStart/bodyStart:', h.includes('Start of headStart') || h.includes('Start of bodyStart'));
console.log('Has framer-appear-animation:', h.includes('data-framer-appear-animation'));

// Remaining external URLs (expected: OG images, search index, gstatic fonts not extracted)
console.log('\n--- Expected Remaining External URLs ---');
const externalUrls = [...new Set([...h.matchAll(/https:\/\/[^"'\s)>]+/g)].map(m => m[0]))];
const gstatic = externalUrls.filter(u => u.includes('fonts.gstatic.com'));
const ogImages = externalUrls.filter(u => u.includes('og:image') || u.includes('twitter:image'));
const searchIdx = externalUrls.filter(u => u.includes('searchIndex'));
const otherExternal = externalUrls.filter(u => 
  !u.includes('fonts.gstatic.com') && 
  !u.includes('og:image') && 
  !u.includes('twitter:image') && 
  !u.includes('searchIndex')
);
console.log('gstatic font URLs (expected - not extracted):', gstatic.length);
console.log('OG/Twitter image URLs (expected - not extracted):', ogImages.length);
console.log('Search index URLs (expected - no local copy):', searchIdx.length);
console.log('Other external URLs:', otherExternal.length);
if (otherExternal.length > 0) {
  otherExternal.forEach(u => console.log(' ', u));
}

// Structure
console.log('\n--- CleanCode Directory Structure ---');
function listDir(dir, prefix='') {
  const items = fs.readdirSync(dir).sort();
  for (const item of items) {
    const full = path.join(dir, item);
    const rel = prefix + item;
    if (fs.statSync(full).isDirectory()) {
      console.log(rel + '/');
      listDir(full, rel + '/');
    } else {
      const size = fs.statSync(full).size;
      console.log(`${rel} (${size}b)`);
    }
  }
}
listDir('C:\\Users\\scary\\Downloads\\ArhanPortfolio\\CleanCode');

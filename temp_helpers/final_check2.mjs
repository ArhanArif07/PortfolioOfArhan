import fs from 'fs';

const h = fs.readFileSync('C:\\Users\\scary\\Downloads\\ArhanPortfolio\\CleanCode\\index.html', 'utf8');
console.log('=== FINAL VERIFICATION ===');
console.log('File size:', fs.statSync('C:\\Users\\scary\\Downloads\\ArhanPortfolio\\CleanCode\\index.html').size, 'bytes');
console.log('Total lines:', h.split('\n').length);

console.log('\n--- Path Replacements ---');
console.log('Local styles/lenis.css:', (h.match(/\.\/styles\/lenis\.css/g) || []).length);
console.log('Local script_main.mjs:', (h.match(/\.\/scripts\/script_main\.DkpS-PXN\.mjs/g) || []).length);
console.log('Local image refs:', (h.match(/\.\/assets\/images\//g) || []).length);
console.log('Local font refs:', (h.match(/\.\/assets\/fonts\//g) || []).length);
console.log('Local script refs:', (h.match(/\.\/scripts\//g) || []).length);

console.log('\n--- Noise Removal ---');
console.log('Has events.framer.com:', h.includes('events.framer.com'));
console.log('Has __framer-badge-container div:', h.includes('id="__framer-badge-container"'));
console.log('Has editorbar:', h.includes('editorbar'));
console.log('Has empty headStart/bodyStart:', h.includes('Start of headStart') || h.includes('Start of bodyStart'));

console.log('\n--- Remaining External URLs (Expected) ---');
const externalUrls = [...new Set([...h.matchAll(/https:\/\/[^"'\s)>]+/g)].map(m => m[0]))];
const gstatic = externalUrls.filter(u => u.includes('fonts.gstatic.com'));
const searchIdx = externalUrls.filter(u => u.includes('searchIndex'));
const ogImages = externalUrls.filter(u => u.includes('framerusercontent.com/images/') && (u.includes('.jpg') || u.includes('.png')));
const otherExternal = externalUrls.filter(u => 
  !u.includes('fonts.gstatic.com') && 
  !u.includes('searchIndex') &&
  !u.includes('zync.framer.ai') &&
  !u.includes('www.framer.com')
);
console.log('gstatic font URLs (expected, not extracted):', gstatic.length);
console.log('Search index URLs (expected, no local copy):', searchIdx.length);
console.log('OG/Twitter images (expected, not extracted):', ogImages.length);
console.log('Other external (unexpected):', otherExternal.length);
otherExternal.forEach(u => console.log(' ', u));

// Check vendor dir
const vendorDir = 'C:\\Users\\scary\\Downloads\\ArhanPortfolio\\CleanCode\\scripts\\vendor';
const vendorFiles = fs.existsSync(vendorDir) ? fs.readdirSync(vendorDir) : [];
console.log('\nVendor files in scripts/vendor:', vendorFiles.length, vendorFiles);

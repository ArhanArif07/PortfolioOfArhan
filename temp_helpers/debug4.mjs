import fs from 'fs';
const h = fs.readFileSync('C:\\Users\\scary\\Downloads\\ArhanPortfolio\\CleanCode\\index.html', 'utf8');

// Count local vs external image references
const localImgs = [...h.matchAll(/src="\.\/assets\/images\/[^"]+"/g)].length;
const localSrcset = [...h.matchAll(/srcset="[^"]*\.\/assets\/images\/[^"]+"/g)].length;
const extImgs = [...h.matchAll(/src="https:\/\/framerusercontent\.com\/images\/[^"]+"/g)].length;
const extSrcset = [...h.matchAll(/srcset="[^"]*https:\/\/framerusercontent\.com\/images\/[^"]+"/g)].length;

console.log('Local img src:', localImgs);
console.log('Local img srcset:', localSrcset);
console.log('External img src:', extImgs);
console.log('External img srcset:', extSrcset);

// Show a local img example
const localExample = h.match(/src="\.\/assets\/images\/[^"]+"/);
if (localExample) console.log('Local img example:', localExample[0]);

// Show an external img src example
const extExample = h.match(/src="https:\/\/framerusercontent\.com\/images\/[^"]+"/);
if (extExample) console.log('External img example:', extExample[0]);

// Count total local image references
const allLocal = (h.match(/\.\/assets\/images\//g) || []).length;
console.log('Total local image refs (all):', allLocal);

// Check remaining external framerusercontent URLs (not OG/images)
const externalNonOg = [...new Set(
  [...h.matchAll(/https:\/\/framerusercontent\.com\/[^"'\s)]+/g)]
    .map(m => m[0])
    .filter(u => !u.includes('/images/u5xlO0xE8hHeCTWtG5aM4zhbk2w.jpg'))
)];

console.log('\nExternal non-OG URLs:', externalNonOg.length);
externalNonOg.forEach(u => console.log(' ', u));

import fs from 'fs';
const h = fs.readFileSync('C:\\Users\\scary\\Downloads\\ArhanPortfolio\\CleanCode\\index.html', 'utf8');

// Check if any image path was replaced
const hasLocalImg = h.includes('./assets/images/');
console.log('Has local image paths:', hasLocalImg);

// Find first local image path
const firstLocal = h.match(/\.\/assets\/images\/[A-Za-z0-9_-]+\.(?:png|svg)/);
console.log('First local img match:', firstLocal ? firstLocal[0] : 'none');

// Show a sample of what's around x2b2Stn7
const idx = h.indexOf('x2b2Stn7NT9auHIBxv1IswbHm4o');
console.log('\nContext around x2b2Stn7:');
console.log(h.substring(idx - 30, idx + 100));

// Check if the file exists locally
const localFile = 'C:\\Users\\scary\\Downloads\\ArhanPortfolio\\CleanCode\\assets\\images\\x2b2Stn7NT9auHIBxv1IswbHm4o.svg';
console.log('\nFile exists locally:', fs.existsSync(localFile));

// Check local images list
const fuImagesDir = 'C:\\Users\\scary\\Downloads\\ArhanPortfolio\\extracted\\framerusercontent.com\\images';
const files = fs.readdirSync(fuImagesDir);
const hasFile = files.includes('x2b2Stn7NT9auHIBxv1IswbHm4o.svg');
console.log('x2b2Stn7 in extracted:', hasFile);

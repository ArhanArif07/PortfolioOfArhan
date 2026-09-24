import fs from 'fs';

const fuImagesDir = 'C:\\Users\\scary\\Downloads\\ArhanPortfolio\\extracted\\framerusercontent.com\\images';
const localImageBaseMap = new Map();
if (fs.existsSync(fuImagesDir)) {
  for (const f of fs.readdirSync(fuImagesDir)) {
    const baseName = f.split('!')[0].split('?')[0];
    if (!localImageBaseMap.has(baseName)) {
      localImageBaseMap.set(baseName, f);
    } else {
      const existing = localImageBaseMap.get(baseName);
      if (!existing.includes('!') && !existing.includes('?')) {
        // keep existing
      } else if (!f.includes('!') && !f.includes('?')) {
        localImageBaseMap.set(baseName, f);
      }
    }
  }
}

console.log('Local image base map entries:');
for (const [k, v] of localImageBaseMap) {
  console.log(`  ${k} -> ${v}`);
}

// Check specific files
const check = ['x2b2Stn7NT9auHIBxv1IswbHm4o.svg', 'hEZcY8O18YhH67f6NuZ4L2pCXM.png'];
check.forEach(f => console.log(`\n${f} in map: ${localImageBaseMap.has(f)}`));

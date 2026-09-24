import fs from 'fs';
import path from 'path';

const EXTRACTED = 'C:\\Users\\scary\\Downloads\\ArhanPortfolio\\extracted';
const CLEAN = 'C:\\Users\\scary\\Downloads\\ArhanPortfolio\\CleanCode';

// ---- helpers ----
function copyFile(src, dst) {
  const d = path.dirname(dst);
  fs.mkdirSync(d, { recursive: true });
  fs.copyFileSync(src, dst);
}
function cp(srcRel, dstRel) {
  const s = path.join(EXTRACTED, ...srcRel.split('/'));
  const d = path.join(CLEAN, ...dstRel.split('/'));
  copyFile(s, d);
}

// ---- 1. Copy assets ----
// Fonts from framerusercontent.com/assets/*.woff2 → assets/fonts/
const fuAssets = path.join(EXTRACTED, 'framerusercontent.com', 'assets');
if (fs.existsSync(fuAssets)) {
  for (const f of fs.readdirSync(fuAssets)) {
    if (f.endsWith('.woff2')) {
      copyFile(path.join(fuAssets, f), path.join(CLEAN, 'assets', 'fonts', f));
      console.log('COPY font:', f);
    }
  }
}

// Font from fonts.gstatic.com (only the one we have)
cp('fonts.gstatic.com/s/firamono/v16/N0bS2SlFPv1weGeLZDto1d3HnvfU.woff2',
   'assets/fonts/N0bS2SlFPv1weGeLZDto1d3HnvfU.woff2');

// Lenis CSS
cp('unpkg.com/lenis@1.3.23/dist/lenis.css', 'styles/lenis.css');

// Images from framerusercontent.com/images/
const fuImages = path.join(EXTRACTED, 'framerusercontent.com', 'images');
if (fs.existsSync(fuImages)) {
  for (const f of fs.readdirSync(fuImages)) {
    const ext = path.extname(f.split('!')[0]).toLowerCase();
    if (['.png', '.svg', '.webp', '.jpg', '.jpeg', '.gif'].includes(ext)) {
      copyFile(path.join(fuImages, f), path.join(CLEAN, 'assets', 'images', f));
      console.log('COPY image:', f);
    }
  }
}

// Videos from framerusercontent.com/assets/*.webm
if (fs.existsSync(fuAssets)) {
  for (const f of fs.readdirSync(fuAssets)) {
    if (f.endsWith('.webm') || f.endsWith('.mp4')) {
      copyFile(path.join(fuAssets, f), path.join(CLEAN, 'assets', 'videos', f));
      console.log('COPY video:', f);
    }
  }
}

// Site JS/MJS files from framerusercontent.com/sites/5a9meX4pQXRbflWYss43oz/
const fuSites = path.join(EXTRACTED, 'framerusercontent.com', 'sites', '5a9meX4pQXRbflWYss43oz');
if (fs.existsSync(fuSites)) {
  for (const f of fs.readdirSync(fuSites)) {
    if (f.endsWith('.mjs')) {
      copyFile(path.join(fuSites, f), path.join(CLEAN, 'scripts', f));
      console.log('COPY site mjs:', f);
    }
  }
}

// Framer vendor chunks from app.framerstatic.com
const afStatic = path.join(EXTRACTED, 'app.framerstatic.com');
if (fs.existsSync(afStatic)) {
  for (const f of fs.readdirSync(afStatic)) {
    if (f.endsWith('.mjs')) {
      copyFile(path.join(afStatic, f), path.join(CLEAN, 'scripts', 'vendor', f));
      console.log('COPY vendor mjs:', f);
    }
  }
}

// Framer bootstrap
cp('framer.com/bootstrap.9801af11875febb1099af3bd7bd5af808f932d59.js',
   'scripts/framer-bootstrap.js');

// Framer edit init (optional, keep it)
cp('framer.com/edit/init.mjs', 'scripts/framer-edit-init.mjs');

// CMS files - preserve directory structure
const fuCms = path.join(EXTRACTED, 'framerusercontent.com', 'cms');
if (fs.existsSync(fuCms)) {
  function copyCmsDir(srcDir, dstDir) {
    fs.mkdirSync(dstDir, { recursive: true });
    for (const entry of fs.readdirSync(srcDir)) {
      const s = path.join(srcDir, entry);
      const d = path.join(dstDir, entry);
      if (fs.statSync(s).isDirectory()) {
        copyCmsDir(s, d);
      } else {
        copyFile(s, d);
        console.log('COPY cms:', entry);
      }
    }
  }
  copyCmsDir(fuCms, path.join(CLEAN, 'cms'));
}

console.log('\n=== Asset copy done ===\n');

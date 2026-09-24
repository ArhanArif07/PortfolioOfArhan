const fs = require('fs');
const path = require('path');
const url = require('url');

const harPath = path.join('C:\\Users\\scary\\Downloads\\ArhanPortfolio\\arhanportfolio.har');
const har = JSON.parse(fs.readFileSync(harPath, 'utf8'));

const entries = har.log.entries;

// Group by resource type
const groups = {
  html: [],
  css: [],
  js: [],
  mjs: [],
  svg: [],
  png: [],
  woff2: [],
  webm: [],
  framercms: [],
  other: []
};

entries.forEach((e, idx) => {
  const u = new URL(e.request.url);
  const ext = path.extname(u.pathname).toLowerCase();
  const entry = {
    idx,
    url: e.request.url,
    pathname: u.pathname,
    ext,
    mimeType: e.response.content.mimeType,
    size: e.response.content.size || 0,
    text: e.response.content.text || null
  };
  
  if (ext === '.html' || e.request.method === 'GET' && u.pathname === '/') {
    groups.html.push(entry);
  } else if (ext === '.css') {
    groups.css.push(entry);
  } else if (ext === '.js') {
    groups.js.push(entry);
  } else if (ext === '.mjs') {
    groups.mjs.push(entry);
  } else if (ext === '.svg') {
    groups.svg.push(entry);
  } else if (ext === '.png') {
    groups.png.push(entry);
  } else if (ext === '.woff2') {
    groups.woff2.push(entry);
  } else if (ext === '.webm') {
    groups.webm.push(entry);
  } else if (ext === '.framercms') {
    groups.framercms.push(entry);
  } else {
    groups.other.push(entry);
  }
});

console.log('HTML pages:', groups.html.length);
console.log('CSS files:', groups.css.length);
console.log('JS files:', groups.js.length);
console.log('MJS files:', groups.mjs.length);
console.log('SVG files:', groups.svg.length);
console.log('PNG files:', groups.png.length);
console.log('WOFF2 files:', groups.woff2.length);
console.log('WEBM files:', groups.webm.length);
console.log('FramerCMS files:', groups.framercms.length);
console.log('Other files:', groups.other.length);

// Show URLs
console.log('\n--- HTML ---');
groups.html.forEach(e => console.log(e.url, e.mimeType, e.size));

console.log('\n--- CSS ---');
groups.css.forEach(e => console.log(e.url, e.mimeType, e.size));

console.log('\n--- JS ---');
groups.js.forEach(e => console.log(e.url, e.mimeType, e.size));

console.log('\n--- MJS ---');
groups.mjs.forEach(e => console.log(e.url, e.mimeType, e.size));

console.log('\n--- WEBM ---');
groups.webm.forEach(e => console.log(e.url, e.mimeType, e.size));

console.log('\n--- FramerCMS ---');
groups.framercms.forEach(e => console.log(e.url, e.mimeType, e.size));

console.log('\n--- Other ---');
groups.other.forEach(e => console.log(e.url, e.mimeType, e.size, e.ext));

console.log('\n--- SVG (first 5) ---');
groups.svg.slice(0, 5).forEach(e => console.log(e.url, e.mimeType, e.size));

console.log('\n--- PNG (first 10) ---');
groups.png.slice(0, 10).forEach(e => console.log(e.url, e.mimeType, e.size));

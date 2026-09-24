import fs from 'fs';
import path from 'path';

const SRC = 'C:\\Users\\scary\\Downloads\\ArhanPortfolio\\extracted\\zync.framer.ai\\index.html';
const DST = 'C:\\Users\\scary\\Downloads\\ArhanPortfolio\\CleanCode\\index.html';

let html = fs.readFileSync(SRC, 'utf-8');

// =====================================================================
// STEP A: Remove noise
// =====================================================================
html = html.replace(/\s*<script\s+async\s+src="https:\/\/events\.framer\.com\/script\?v=2"[^>]*>\s*<\/script>/g, '');
html = html.replace(/<script>\s*try\{if\(localStorage\.getItem\("__framer_force_showing_editorbar_since"\)\)\{[^<]*\}\}\s*catch\(e\)\{\}\s*<\/script>/g, '');
html = html.replace(/\s*<link[^>]*href="https:\/\/framer\.com\/edit\/init\.mjs"[^>]*>/g, '');
html = html.replace(/\s*<!-- Start of headStart -->\s*\n?\s*<!-- End of headStart -->/g, '');
html = html.replace(/\s*<!-- Start of bodyStart -->\s*\n?\s*<!-- End of bodyStart -->/g, '');
html = html.replace(/\s*<!-- Start of bodyEnd -->\s*\n?\s*<!-- End of bodyEnd -->/g, '');
html = html.replace(/\s*<div\s+id="__framer-badge-container">[\s\S]*?<\/div>\s*(?=\n\s*<script\s+data-framer-appear)/, '');
html = html.replace(/\s*<script\s+data-framer-appear-animation="no-preference"><\/script>/g, '');
html = html.replace(/\s*<script>typeof\s+document<"u"&&\(window\.process=\{\.\.\.window\.process[^<]*\)<\/script>/g, '');

// =====================================================================
// STEP B: Build local file lookup maps
// =====================================================================
const fuAssetsDir = 'C:\\Users\\scary\\Downloads\\ArhanPortfolio\\extracted\\framerusercontent.com\\assets';
const localAssetFiles = new Set();
if (fs.existsSync(fuAssetsDir)) {
  for (const f of fs.readdirSync(fuAssetsDir)) localAssetFiles.add(f);
}

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

const fuSitesDir = 'C:\\Users\\scary\\Downloads\\ArhanPortfolio\\extracted\\framerusercontent.com\\sites\\5a9meX4pQXRbflWYss43oz';
const localMjsFiles = new Set();
if (fs.existsSync(fuSitesDir)) {
  for (const f of fs.readdirSync(fuSitesDir)) {
    if (f.endsWith('.mjs')) localMjsFiles.add(f);
  }
}

// =====================================================================
// STEP C: Replace resource URLs
// =====================================================================

// 1. Replace framerusercontent.com/assets/*.woff2 → ./assets/fonts/ ONLY if file exists locally
html = html.replace(
  /https:\/\/framerusercontent\.com\/assets\/([A-Za-z0-9_-]+\.woff2)(?:[?#]|(?=")|(?=')|(?=\))|(?=\s))/g,
  (match, fname) => {
    if (localAssetFiles.has(fname)) return './assets/fonts/' + fname;
    return match;
  }
);

// 2. Replace framerusercontent.com/images/* → ./assets/images/
html = html.replace(
  /https:\/\/framerusercontent\.com\/images\/([A-Za-z0-9_-]+\.(?:png|svg|webp|jpg|gif))(?:(?:![\w=&-]+)*(?:&[\w=-]+)*)?/g,
  (match, fname) => {
    const localFile = localImageBaseMap.get(fname);
    if (localFile) {
      const queryIdx = match.indexOf('?');
      if (queryIdx !== -1) return './assets/images/' + localFile + match.substring(queryIdx);
      const exclIdx = match.indexOf('!');
      if (exclIdx !== -1) return './assets/images/' + localFile + match.substring(exclIdx);
      return './assets/images/' + localFile;
    }
    return match;
  }
);

// 3. Replace framerusercontent.com/assets/*.webm/.mp4 → ./assets/videos/
html = html.replace(
  /https:\/\/framerusercontent\.com\/assets\/([A-Za-z0-9_-]+\.(?:webm|mp4))(?:[?#]|(?=")|(?=')|(?=\))|(?=\s))/g,
  (match, fname) => {
    if (localAssetFiles.has(fname)) return './assets/videos/' + fname;
    return match;
  }
);

// 4. Replace framerusercontent.com/sites/.../*.mjs → ./scripts/
html = html.replace(
  /https:\/\/framerusercontent\.com\/sites\/5a9meX4pQXRbflWYss43oz\/([A-Za-z0-9_.-]+\.mjs)(?:[?#]|(?=")|(?=')|(?=\))|(?=\s))/g,
  (match, fname) => {
    if (localMjsFiles.has(fname)) return './scripts/' + fname;
    return match;
  }
);

// 5. Replace unpkg.com/lenis CSS → ./styles/lenis.css
html = html.replace(
  /https:\/\/unpkg\.com\/lenis@[\d.]+(?:\/[\w]+)*\/dist\/lenis\.css/g,
  './styles/lenis.css'
);

// 6. Replace Fira Mono font (the only gstatic font we extracted) → local
html = html.replace(
  /https:\/\/fonts\.gstatic\.com\/s\/firamono\/v16\/N0bS2SlFPv1weGeLZDto1d3HnvfU\.woff2/g,
  './assets/fonts/N0bS2SlFPv1weGeLZDto1d3HnvfU.woff2'
);

// 7. Replace framer.com/bootstrap.js → ./scripts/framer-bootstrap.js
html = html.replace(
  /https:\/\/framer\.com\/bootstrap\.[^"'\s)>]+\.js/g,
  './scripts/framer-bootstrap.js'
);

// =====================================================================
// STEP D: Beautify HTML
// =====================================================================
function beautifyHTML(raw) {
  const bodyStartIdx = raw.indexOf('>', raw.indexOf('<body')) + 1;
  const bodyEndIdx = raw.lastIndexOf('</body>');
  const before = raw.substring(0, bodyStartIdx) + '\n\n';
  const bodyContent = raw.substring(bodyStartIdx, bodyEndIdx).trim();
  const after = '\n' + raw.substring(bodyEndIdx);
  return before + formatBody(bodyContent, 1).trimEnd() + after;
}

function formatBody(content, baseIndent) {
  const IND = '  ';
  const voidElements = new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);
  const tokens = [];
  let i = 0;
  while (i < content.length) {
    if (content[i] === '<') {
      let j = content.indexOf('>', i);
      if (j === -1) j = content.length;
      tokens.push({ type: 'tag', text: content.substring(i, j + 1) });
      i = j + 1;
    } else {
      let j = content.indexOf('<', i);
      if (j === -1) j = content.length;
      const txt = content.substring(i, j).replace(/\s+/g, ' ').trim();
      if (txt) tokens.push({ type: 'text', text: txt });
      i = j;
    }
  }
  let out = '';
  let depth = baseIndent;
  for (const tok of tokens) {
    if (tok.type === 'text') { out += IND.repeat(depth) + tok.text + '\n'; continue; }
    const tag = tok.text;
    const selfClose = /\/\s*>$/.test(tag);
    const closeMatch = tag.match(/^<\/(\w+)/);
    const openMatch = tag.match(/^<(\w+)/);
    const tagname = openMatch ? openMatch[1].toLowerCase() : '';
    if (closeMatch) { depth = Math.max(baseIndent, depth - 1); out += IND.repeat(depth) + tag + '\n'; }
    else if (selfClose || voidElements.has(tagname)) { out += IND.repeat(depth) + tag + '\n'; }
    else if (openMatch) { out += IND.repeat(depth) + tag + '\n'; depth++; }
    else { out += IND.repeat(depth) + tag + '\n'; }
  }
  return out;
}

html = beautifyHTML(html);

// =====================================================================
// STEP E: Write output
// =====================================================================
fs.writeFileSync(DST, html, 'utf-8');
console.log('Done! Written to:', DST);
console.log('File size:', fs.statSync(DST).size, 'bytes');
console.log('Lines:', html.split('\n').length);

// Verification summary
const h2 = fs.readFileSync(DST, 'utf8');
const localImg = (h2.match(/\.\/assets\/images\//g) || []).length;
const localFont = (h2.match(/\.\/assets\/fonts\//g) || []).length;
const localScript = (h2.match(/\.\/scripts\//g) || []).length;
const localLenis = (h2.match(/\.\/styles\/lenis\.css/g) || []).length;
console.log('Local img refs:', localImg);
console.log('Local font refs:', localFont);
console.log('Local script refs:', localScript);
console.log('Local lenis css:', localLenis);
console.log('Has events.framer.com:', h2.includes('events.framer.com'));
console.log('Has framer badge div:', h2.includes('id="__framer-badge-container"'));
console.log('Has editorbar:', h2.includes('editorbar'));

# Technical Report: HAR Extraction → CleanCode Project

## Summary

Successfully extracted the Framer-built "Zynq" portfolio website from the HAR archive at
`C:\Users\scary\Downloads\ArhanPortfolio\arhanportfolio.har` (via the pre-extracted
`extracted/` folder) into a clean, readable, editable local project at:
`C:\Users\scary\Downloads\ArhanPortfolio\CleanCode\`

**Original HTML:** 331 lines (body was a single 2000+ char line)
**Clean HTML:** 7,293 lines (properly formatted with 2-space indentation)

---

## Files Created

### Directory Structure
```
CleanCode/
├── index.html                    (1,033,587 bytes, 7,293 lines)
├── assets/
│   ├── fonts/                    (7 files, ~152 KB)
│   │   ├── N0bS2SlFPv1weGeLZDto1d3HnvfU.woff2   ← Fira Mono (from gstatic)
│   │   ├── UjlFhCnUjxhNfep4oYBPqnEssyo.woff2   ← Inter 500
│   │   ├── VgYFWiwsAC5OYxAycRXXvhze58.woff2   ← Inter 700
│   │   ├── cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2  ← Inter 600
│   │   ├── rZ5DdENNqIdFTIyQQiP5isO7M.woff2    ← Inter 900
│   │   ├── syRNPWzAMIrcJ3wIlPIP43KjQs.woff2   ← Inter 700
│   │   └── yDtI2UI8XcEg1W2je9XPN3Noo.woff2    ← Inter 600
│   ├── images/                   (56 files, ~3.9 MB)
│   ├── videos/                   (1 file, ~1.4 MB)
│   │   └── pbnCTcEHYG4IuW3x4Yxi8q9Ol04.webm
│   └── icons/                    (empty — no icon files in extraction)
├── styles/
│   └── lenis.css                 (513 bytes)
├── scripts/
│   ├── framer-bootstrap.js       (1,437 bytes)
│   ├── framer-edit-init.mjs      (12,155 bytes)
│   ├── vendor/                   (6 files, ~13 KB)
│   │   ├── chunk-6W2K2MOG.mjs
│   │   ├── chunk-BAHUFDKX.mjs
│   │   ├── chunk-WLHSDIGQ.mjs
│   │   ├── chunk-WOEOGJ2W.mjs
│   │   ├── chunk-YRQ7G4QH.mjs
│   │   └── editorbar.5UMRN4ON.mjs
│   └── [51 site .mjs files]      (~5.3 MB total)
└── cms/
    ├── h4hzhJ1UjqKjpnku9qOT/
    ├── m2IMXOm093cPovjNkxK4/
    └── SO904SMxwS2sQwkH9mcY/
        └── lt73E6AeqOsWLpSOtZ5g/
            ├── htcWKt0sa-chunk-default-0.framercms!range=4-48246
            ├── htcWKt0sa-indexes-default-0.framercms!range=0-240
            └── htcWKt0sa-indexes-default-0.framercms!range=2673-2880
```

---

## What Was Done

### Step 1 — Asset Copy (step1_copy.mjs)
- Copied all 6 Inter woff2 fonts from `extracted/framerusercontent.com/assets/` → `assets/fonts/`
- Copied Fira Mono woff2 from `extracted/fonts.gstatic.com/` → `assets/fonts/`
- Copied all 56 images (PNG, SVG) from `extracted/framerusercontent.com/images/` → `assets/images/`
  - Preserved original filenames including `!height=...&width=...` parameters
  - 4 images have both base and scaled variants (e.g., `Zg9C76yQyFGMEOpJoIM9E80TRc.png!height=...`)
- Copied 1 video (webm) → `assets/videos/`
- Copied 51 site .mjs files → `scripts/`
- Copied 6 vendor .mjs chunks → `scripts/vendor/`
- Copied `framer-bootstrap.js` and `framer-edit-init.mjs` → `scripts/`
- Copied CMS framercms files preserving directory structure → `cms/`
- Copied `lenis.css` → `styles/lenis.css`

### Step 2 — HTML Processing (step2_html_process.mjs)

**Noise removal:**
- Removed `events.framer.com/script?v=2` analytics script
- Removed editorbar localStorage preload snippet
- Removed empty `<!-- Start/End of headStart -->`, `bodyStart`, `bodyEnd` markers
- Removed `__framer-badge-container` div (Framer promotional badge)
- Removed empty `<script data-framer-appear-animation="no-preference">` tag
- Removed `window.process.env NODE_ENV` script

**Path replacement:**
- `https://unpkg.com/lenis@1.3.23/dist/lenis.css` → `./styles/lenis.css`
- `https://fonts.gstatic.com/s/firamono/v16/N0bS2SlFPv1weGeLZDto1d3HnvfU.woff2` → `./assets/fonts/N0bS2SlFPv1weGeLZDto1d3HnvfU.woff2`
- `https://framerusercontent.com/assets/*.woff2` → `./assets/fonts/` (only the 6 extracted Inter fonts)
- `https://framerusercontent.com/images/*` → `./assets/images/` (all 56 images, in src, srcset, and handover JSON)
- `https://framerusercontent.com/assets/*.webm` → `./assets/videos/`
- `https://framerusercontent.com/sites/5a9meX4pQXRbflWYss43oz/*.mjs` → `./scripts/` (all 51 site bundles)
- Modulepreload links all updated to relative paths

**Kept external (correctly):**
- 22 Geist font URLs from `fonts.gstatic.com` (not extracted)
- OG/Twitter image `u5xlO0xE8hHeCTWtG5aM4zhbk2w.jpg` (not in extracted images)
- Search index JSON URLs (no local copy)
- Canonical URL `https://zync.framer.ai/`
- "Powered by Framer" footer links (site content, not tracking)

**HTML beautification:**
- Body content tokenized and reformatted from single 2000+ char line to 7,000+ properly indented lines
- 2-space indentation for all nested HTML elements
- Each opening/closing tag on its own line
- Inline styles, data attributes, and all content preserved exactly

---

## Issues Encountered

1. **Inter font URLs replaced incorrectly on first pass**: The initial regex replaced ALL
   `framerusercontent.com/assets/*.woff2` URLs with local paths, but only 6 Inter fonts
   were actually extracted. The remaining 65 Inter font URLs (weights 400/700/900 variants)
   would have 404'd. Fixed by adding a `localAssetFiles.has(fname)` check.

2. **Image `srcset` URLs not replaced**: Image URLs in `srcset` attributes use comma-space
   separated entries with size descriptors (e.g., `.../img.png?w=1604 1604w`). The initial
   regex stopped at `,` or whitespace. Fixed by using a broader character class and
   extracting the base filename before `?` or `!`.

3. **Vendor files not in `scripts/vendor/` initially**: The copy script's `fs.mkdirSync`
   with `recursive: true` apparently didn't create the vendor directory correctly during
   the first run. Manually moved the 6 chunk files to `scripts/vendor/`.

4. **`!` character in extracted image filenames**: Extracted images use `!height=...&width=...`
   in their filenames (Framer's URL parameter convention). The HTML references them with
   `?width=...&height=...` query parameters. Created a `localImageBaseMap` that maps the
   base filename (before `!` or `?`) to the actual local filename.

---

## Final State

- **index.html**: 1,033,587 bytes, 7,293 lines, fully formatted, all local assets referenced
- **155 local image references** in HTML (src + srcset + handover JSON)
- **7 local font references** (6 Inter + 1 Fira Mono — the only ones extracted)
- **26 local script references** (51 site mjs + 2 utility scripts, referenced via modulepreload + script tags)
- **All tracking/editor noise removed**
- **Content completely unchanged** — all text, sections, hero, project names preserved exactly
- **Original `arhanportfolio.har` not modified**

---

## Helper Scripts Created

All helper scripts are in `C:\Users\scary\Downloads\ArhanPortfolio\temp_helpers\`:
- `step1_copy.mjs` — Asset copy script
- `step2_html_process.mjs` — Main HTML processing script (noise removal, path replacement, beautification)
- `verify.mjs` — Verification script (checks for remaining external URLs)
- `debug_regex.mjs` — Regex debugging
- `debug2.mjs` / `debug3.mjs` / `debug4.mjs` — Various debugging checks
- `final_check.mjs` / `final_check2.mjs` — Final comprehensive checks

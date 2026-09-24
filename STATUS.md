# STATUS UPDATE — 24 Sep 2026, late session

Everything below is already committed to this repo. Start with **Section 0**, then the original
plan further down.

---

## 0. Where we actually are

### DONE and verified
- **Copy rewritten** in `scripts/aEm5…Da80wz19.mjs` (homepage) and `scripts/script_main.DkpS-PXN.mjs`
  (navbar/footer/form): hero `CRAFT OVER HYPE` + `*THE WEB / BUILT RIGHT*` (no period, two lines via
  `<br>`), About, Approach, CTA, Services (4 real capabilities), Process (Understand / Design &
  Build / Refine), Difference (`MY APPROACH` vs `OTHER FREELANCERS / AGENCIES`), Work band, Pricing
  (`$299 / $399 / $899`, no `/mo`), Testimonial (only the real Velio Labs quote), FAQ rewritten.
- **Brand**: `assets/logo.png` (+ webp, favicon.png, favicon.ico, og-image.jpg) generated from
  `C:\Users\scary\Downloads\logo.png`. Every ZYNQ logo reference in the modules, the SSR HTML and the
  metadata now points at it. `scripts/shared-lib.Bm4MKTZG.mjs` now returns the real title/description/
  favicon/social image.
- **Fake people removed**: all portrait/avatar images in About, testimonials and the CTA are blanked
  (transparent 1×1 data URI), alt text emptied.
- **Projects CMS** (`cms/…/d0w_cWzte-*`) rewritten to exactly the six real projects with truthful
  titles, tags, URLs, overview/challenge/outcome and real local images. Card thumbnails are now the
  big project logos; the detail hero uses the real screenshot; gallery = screenshot + logo.
  A reusable reader/writer for the binary format lives in
  `C:\Users\scary\AppData\Local\Temp\opencode\cmswork\framercms.py` (records are under `doc['records']`,
  fields under `rec['fields']`, helpers `set_image`, `set_rich_text`, `edit_item`, `serialize`).
- **Route pages** regenerated (`projects/`, `pricing/`, `contact/`, `blogs/`, `404/`, six
  `/projects/<slug>/` detail pages, one blog detail page) with the correct `routeId` and
  `pathVariables`/`collectionItemId`. Old fake-slug directories deleted. `TECHNICAL_REPORT.md` deleted.
- **SSR synced**: `index.html` carries the new copy, real metadata, favicon links, JSON-LD, and a
  `<style id="portfolio-overrides">` block with the dark-gradient/white-text rules for the Why-us card
  and the pricing cards. All local refs resolve (`refcheck.py` → 0 missing).
- **CMS localized**: `scripts/d0w_cWzte.DTqfl2e2.mjs` now builds
  `${self.location.origin}/cms/m2IMXOm093cPovjNkxK4/cjOfH0aqzklUUxIGuxuj/d0w_cWzte.js` instead of
  Framer's CDN, and all 22 index ranges were normalised to `0-32078`. Full (unsliced) local files were
  created next to the `!range=` exports:
  `d0w_cWzte-chunk-default-0.framercms` (4-byte BE count `6` + body) and
  `d0w_cWzte-indexes-default-0.framercms` (32 078 bytes: id index at offset 0, slug index at 1147).
- Services cards now expand on hover (`onMouseEnter`/`onMouseLeave` wired to the same toggle as `onTap`).
- Duplicate FAQ removed (only one FAQ instance is mounted).

### STILL BROKEN — the one blocker
`/projects` and the six `/projects/<slug>/` pages render blank.

Root cause, measured with `srv/log_server.py`: the Framer CMS client fetches the collection with
**byte ranges in the query string** and expects the response to be exactly that many bytes:
`GET /cms/.../d0w_cWzte-indexes-default-0.framercms?range=0-32077` then
`GET /cms/.../d0w_cWzte-chunk-default-0.framercms?range=4-17280`.
- The index now works because the file is exactly the requested length.
- The chunk does not: the runtime pages through it (16 KB pages), a static host returns the whole
  31 405-byte file, and the client rejects it, so the list never resolves.

Three ways forward (pick one):
1. **Shrink the six CMS items so the whole chunk fits one page** (≤ 17 280 bytes total) — the range
   request would then match the file length. Shorten Overview/Challenge/Outcome to ~2 short
   paragraphs each and re-measure.
2. **Serve the collection with range support** — a tiny serverless/edge function (Vercel/Netlify) or
   `python srv/site_server.py`-style shim that answers `?range=a-b` with exactly those bytes. This is
   the robust answer for any static host.
3. **Bypass the CMS** — patch the consuming modules (`Ri1NKCxrz.Bb9Fe8pc.mjs`, `mqvdOP…D0cCDoep.mjs`,
   `ahR_9a…VzdJo9Ek.mjs`) to read a local `assets/projects/projects.js` data module instead of the
   collection. Most invasive, but removes the whole binary format from the deployment.

A reference implementation of the range emulation lives in
`C:\Users\scary\AppData\Local\Temp\opencode\cmswork\site_server.py` (functions
`project_chunk_data` / `project_index_data`).

### Known cosmetic notes
- `React error #405` (hydration text mismatch) still appears on every route: the SSR HTML was
  captured from the older build. Content still renders correctly. Clearing it would mean regenerating
  the SSR from the current modules.
- Non-home routes still ship the homepage's SSR markup, so they flash the homepage for a moment
  before hydrating. Removing the SSR body entirely does **not** work: with an empty `#main` (with or
  without `data-framer-hydrate-v2`) the Framer runtime does not mount at all.
- The blogs collection (`htcWKt0sa`) still holds the nine fake "Alex Carter" articles. An agent was
  launched to rewrite it to three honest notes but was interrupted — that work is not done.
- The hero keeps the template's blurred orange/red background; that is the original design.

### Local QA
Start the static server first (the one on 8110 caches and lies — use 8120/8130):
```powershell
Start-Process python -ArgumentList "C:\Users\scary\AppData\Local\Temp\opencode\srv\site_server.py",8120 `
  -WorkingDirectory "C:\Users\scary\AppData\Local\Temp\opencode\srv" -WindowStyle Hidden
```
Then `python C:\Users\scary\AppData\Local\Temp\opencode\qa_visible.py` (visible-text checks per route)
and `refcheck.py` (broken local refs). Headless Edge screenshots are the most reliable check —
`--dump-dom` can capture the pre-hydration state and report false "missing" results.

---

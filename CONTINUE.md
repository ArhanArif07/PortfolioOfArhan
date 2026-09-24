# CONTINUE HERE — Arhan Arif Portfolio Transformation

**Read this file first when resuming work.** It is the single source of truth for where the work stopped.

Owner: Arhan Arif — Web Developer
Project root: `C:\Users\scary\Downloads\ArhanPortfolio`
Deployable site root: `C:\Users\scary\Downloads\ArhanPortfolio\CleanCode`
GitHub: `https://github.com/ArhanArif07/PortfolioOfArhan`

---

## 1. What this project is

`CleanCode/` is a **static export of a Framer-built agency template ("Zynq")**, extracted from
`arhanportfolio.har` (32 MB) into `extracted/`, then cleaned into `CleanCode/`.

Goal: **transform it into Arhan Arif's personal web developer portfolio** while preserving the
original design — every homepage section, its order, layout, typography, animation and responsive
behaviour stay. Only the content becomes real. No fake clients, metrics, testimonials, prices or
credentials. No section may be deleted.

## 2. Current state (verified)

### Working / verified
- All 57 modules in `CleanCode/scripts/*.mjs` pass `node --check` (no syntax errors).
- Page loads in headless Edge with **zero JavaScript console errors**.
- Social URLs in HTML fixed: `https:/www.x` → `https://www.x` (15 occurrences).
- Route entry pages generated for all 8 Framer routes (`projects/`, `pricing/`, `contact/`,
  `blogs/`, `404/`, plus detail pages) with per-route `routeId` in the hydrate payload.
- Local static server with slash-free URLs exists at
  `C:\Users\scary\AppData\Local\Temp\opencode\srv\site_server.py` (run on a free port; serves
  `<dir>\index.html`, 404 fallback from `404/`). `python -m http.server` also works but redirects
  `/contact` → `/contact/`, which breaks Framer route matching. Use the custom server.

### Known open issues
1. **React error #405 on every route** — text-content hydration mismatch between the SSR HTML
   (captured from the old site) and the current modules. Fix by making every module string change
   also in `index.html` (and regenerating route pages afterwards). Non-fatal but must be cleared.
2. **Site content is still 100% template content** — nothing has been rewritten yet. The work
   below has not been started.
3. `CleanCode/TECHNICAL_REPORT.md` is extraction provenance and must not ship.
4. Footer form posts to `https://api.framer.com/forms/v1/forms/.../submit` — a dead Framer
   dependency for this portfolio.
5. `scripts/PX9hIOIVM.auf6V806.mjs` loads a Framer promo badge; "Powered by Framer" is in the
   footer. Both should go.
6. A few `scripts/*.mjs` still reference remote `framerusercontent.com` images (8 files) — decide
   whether to localise.
7. The Framer project links use `šyndicate` (U+0161) while directories use ASCII — irrelevant once
   the fake projects are replaced.

## 3. Architecture facts (do not re-derive)

### Routes (`scripts/script_main.DkpS-PXN.mjs` ≈ L8524-8605 is the route map)
| Path | routeId | Page module (`scripts/`) |
|---|---|---|
| `/` | `augiA20Il` | `aEm5oIsGAVJkf55dnGsmlYQ5pRhowQgvWMRQDd4suwU.Da80wz19.mjs` |
| `/projects` | `FJYgKm7Yp` | `mqvdOP-WwqvHSAZy7IiQSGngcVaJu2aEwkvALm5pSbk.D0cCDoep.mjs` |
| `/pricing` | `iMmW2B_8v` | `lz8tthlp0kQrAlKFG5GqTQCELAXO2Zfk8-smSAGz8oQ.CGYROii2.mjs` |
| `/contact` | `VS1gZwE1i` | `pCQvB3KlKiaaXIgjMsreT8ge0WH4iuOgeBbP4e_vqeY.Dz4tHT3T.mjs` |
| `/blogs` | `EcjikNrmE` | `h_sWEzKvAp-7bbGGjH01GLcKi8O2rIRFPBzSU7a8f7s.BkljwzdV.mjs` |
| `/404` | `Ki4Zehmjc` | `Op67goKJP1k8Ghoy0BusNmh_p50FYaqDEmegXYkbHWA.AhLD2NQ2.mjs` |
| `/projects/:L6q2o4xpI` | `J6Q1AMwXS` | `ahR_9aupI-jyc9k71PYK8N2eFgCZCeCXtjnc32jkY-Y.VzdJo9Ek.mjs` |
| `/blogs/:wV3Lg9DPf` | `fJe50lzzQ` | `TJAvw0ipermtouVMsWGoDzwszQ7IG5071dBat2QsLLg.harLqa3_.mjs` |

### Homepage sections (order must be preserved)
Hero → About (+ metrics + mini-quote + CTA) → Projects → Services → Process →
Client comparison ("Zynq Difference" vs "Other Agencies") → Client proof band (logos + 230+/4.9/450/98%)
→ Pricing (3 cards) → Testimonial (2 quote cards + 4.9/5 + "Trusted by 120+ brands") → Footer.
**FAQ is fully defined in the module (`aEm5…mjs` ≈ L5107-5649) but is NOT mounted in `Home`** — it
must be mounted (rule: keep the FAQ section).

### Where copy lives
- Homepage copy: `scripts/aEm5…Da80wz19.mjs` (strings listed below by line).
- Navbar + footer + contact form: `scripts/script_main.DkpS-PXN.mjs` (footer ≈ L3400-5730,
  navbar ≈ L6951-7876).
- SSR mirror of all page copy: `index.html` (7197 lines). Both copies must be changed together.
- Route pages (`projects/index.html` etc.) are **generated copies** of `index.html` — regenerate
  them after editing `index.html`, never hand-edit.

### CMS (`cms/**.framercms`, custom binary TLV, NOT JSON)
Decoded framing: `u32` record length, then fields of `[u32 key length][key][u32 type][value]`;
type `0x0c` = u8-length-prefixed UTF-8 string, `0x0b` = rich-text JSON, `0x04` = 8-byte date,
`0x07/0x08` = image/asset JSON. Some numeric/date bytes are literal `EF BF BD` (U+FFFD) damage.
- Projects collection `d0w_cWzte` = 8 fake items (Monza, Šyndicate, Arterra, Maximilian, Wesate,
  Paymark, Hovr, CXP), all with client "Ruben Baptista", site "www.finlay.studio", and the same
  footwear copy. Item fields: `id, lT8fJrlE3` Title, `L6q2o4xpI` Slug, `QE0E6Gpht` Thumbnail,
  `JHT2w55da` Detail Image, `dOayxB1cY` Gallery, `qP5afZE0B`/`SZLJAKHWh` Tags, `zSZF62iFl` Client,
  `zvUsv4r0I` Site Name, `RoH0ofr9q` Site Link, `MEhEUheAw` Count, `HxW0M_TYa` Overview,
  `FVB7X7J4j` Challenge, `YyZCEqSMi` Outcome, `qqa_Xf7rj`/`CFL9f3uj0`/`mrgFlmhvT` fake metrics,
  `createdAt`, `updatedAt`, `previousItemId`, `nextItemId`. Schema source:
  `scripts/d0w_cWzte.DTqfl2e2.mjs` ≈ L1602-1658 and L1908-1955.
- Blogs collection `htcWKt0sa` = 9 fake articles, writer "Alex Carter", identical detail body, and
  bare-domain social links.

## 4. Real content to use (verified against the live sites and `works/`)

Exactly six projects — no more:

| # | id | slug | Title | Tag 1 | Tag 2 | Site | URL |
|---|---|---|---|---|---|---|---|
| 1 | `BcCareer01` | `beacon-career` | Beacon Career | Web App | Career Platform | Beacon Career | https://beaconcareer.vercel.app/ |
| 2 | `SdSweets01` | `sindh-sweets-aligarh` | Sindh Sweets Aligarh | Business Website | Restaurant | Sindh Sweets | https://sindh-sweets-aligarh.vercel.app/ |
| 3 | `OnlyNeth1` | `onlyneth` | OnlyNeth | Landing Page | Gaming Community | OnlyNeth | https://onlyneth.vercel.app/ |
| 4 | `TrioSalon1` | `trio` | Trio — The Posh Parlour | Business Website | Salon | Trio | https://triodemo1.vercel.app/ |
| 5 | `IndianCof01` | `indian-coffee-brewery` | Indian Coffee Brewery | Business Website | Coffee Brand | Indian Coffee Brewery | https://demo1foricb.vercel.app/ |
| 6 | `VelioLabs1` | `velio-labs` | Velio Labs | Business Website | Motion Design | Velio Labs | https://www.veliolabs.site/ |

Truthful project facts (from the live sites): Beacon = student career guidance platform (career
discovery, smart roadmaps, skill-gap analysis, resume AI, interview coach, future simulator;
Next.js). Sindh Sweets = mithai/dessert shop on Samad Road, Aligarh (desi-ghee sweets, ghewar,
gifting, menu; GSAP + ScrollTrigger + Lenis). OnlyNeth = gaming guild site (SMP, PvP, territory
control, roster, join flow). Trio = premium unisex salon (hair, beard, spa, keratin, colour,
bridal, facials, nails; gallery, reviews, booking; Next.js). Indian Coffee Brewery = premium coffee
brand in Sikar, Rajasthan (cold/classic brews, iced, kids menu, origin, gallery, reviews, booking).
Velio Labs = motion design / product launch studio for SaaS and AI companies (launch films,
product demos, motion systems, brand films; Webflow + GSAP/ScrollTrigger/SplitText/Lenis).

Per-project CMS field values to use: `Count` = "01".."06"; `qqa_Xf7rj` = "Design & Development";
`CFL9f3uj0` = "Responsive build"; `mrgFlmhvT` = "Live"; `zSZF62iFl` (Client) = "" (no verified
client). Relabel those three metrics in the detail page module to Role / Build / Status.

### Real assets (`works/`, 8 files, media only — no project source)
- `works/Beacon/beacon-logo.webp` — 32×32 only (too small for a card; use as a small mark)
- `works/SindhSweets/SindhSeetsOuter.jpg` — 1844×2048 storefront photo
- `works/OnlyNethGuild/logo.png` — 702×702
- `works/TrioHairSaloon/Interior1.webp` — 1200×900
- `works/IndianCoffeeBrewery/IndianCoffeeBrewerylogo.jpg` — 1080×1080
- `works/VelioLabs/veliolabslogo.png` — 1024×1024
- `works/GanpatChaat/*` — **not** one of the six; do not use.
Best portfolio imagery: real screenshots of the six live URLs (headless Edge `--screenshot`),
optimised to WebP ~1600px wide, saved under `CleanCode/assets/projects/`.

### Testimonial (exactly one, verbatim)
> "Honestly, Arhaan is my guy! He did an amazing job designing my website and really understood the
> vision I had for my SaaS and motion design service. The whole process was smooth, and the final
> result came out even better than I expected. If you're looking for someone who's creative,
> reliable, and genuinely cares about the work, I would definitely recommend Arhaan. You won't
> regret working with him!"

Attribute as **Client — Velio Labs** only. No name, title, rating, avatar or second testimonial.
The About mini-quote slot and the Testimonials section both exist — only one may hold a
testimonial; the other becomes a truthful non-testimonial line.

### Real contact (use only these)
- Phone `+917060782247` → `tel:+917060782247`
- GitHub `https://github.com/ArhanArif07`
- Instagram `https://instagram.com/theyluvarhann`
No email address was supplied — do not invent one; the footer form must become direct contact.

## 5. Copy targets (sections keep their layout; content becomes real)

- **Hero** — eyebrow `CRAFT OVER HYPE`; supporting line "I design and build fast, thoughtful
  websites that look sharp, feel effortless, and give ideas a place to live."; headline built
  around `ARHAN ARIF` / `WEB DEVELOPER`. No agency phrases.
- **About** — natural first-person voice. No "passionate developer", "since a young age", etc.
- **Services** — Web Development, Business Websites, Landing Pages, Portfolio Websites,
  Interactive Web Experiences, Web Tools / Web Products. Drop marketing/SEO/ads services.
- **Process** — Understand → Design → Build → Refine, in the existing 3-card structure.
- **Client comparison** — "How I work" vs "Typical agency", no fake claims.
- **Client proof band** — selected work / capabilities; replace 230+, 4.9, 450, 98%.
- **Pricing** — same 3-card architecture, no prices; truthful capability tiers.
- **Testimonial** — one real quote; remove 4.9/5 and "Trusted by 120+ brands".
- **FAQ** — mount it, then rewrite: what sites he builds, custom builds, working from an existing
  design, interactions/animations, process, responsive, web tools. No guarantees, prices, timelines.
- **Footer** — `ARHAN ARIF` / `WEB DEVELOPER`, real links, remove ZYNQ, Michael Brooks,
  "Powered by Framer", Framer badge, fake socials; legal links currently point to `/` and must go.

## 6. Next steps, in order

1. **Assets** — capture real screenshots of the six live URLs + optimise `works/` logos into
   `CleanCode/assets/projects/` as `<slug>.webp`, `<slug>-800.webp`, `<slug>-logo.webp`.
2. **CMS tooling** — build a Python framercms reader/writer in
   `C:\Users\scary\AppData\Local\Temp\opencode\cmswork\`, prove byte-identical round-trip, then
   rewrite `d0w_cWzte` to the six items above and fix both `d0w_cWzte-indexes` range files.
   Rewrite `htcWKt0sa` blogs to truthful short notes authored by Arhan Arif (or reduce to a small
   honest set) — no Alex Carter, no fake articles.
3. **Homepage module** — rewrite every user-visible string in `aEm5…mjs` per section 5; mount the
   FAQ component in `Home`; relabel the three project-detail metrics to Role/Build/Status.
   Run `node --check` after every edit.
4. **Shared module** — navbar/footer/form copy in `script_main…mjs`; convert the Framer form into
   real contact (phone/GitHub/Instagram); remove Framer badge and attribution.
5. **SSR sync** — mirror all copy into `index.html`; update `<title>`, description, OG/Twitter,
   drop the `https://zync.framer.ai/` canonical and `og:url`, set real OG image; delete
   `TECHNICAL_REPORT.md`.
6. **Regenerate route pages** from the edited `index.html` with the correct `routeId` per route and
   the six new project slugs (generator: `C:\Users\scary\AppData\Local\Temp\opencode\gen_routes.py`;
   the `routeId` inside `data-framer-hydrate-v2` is **HTML-escaped** — replace
   `&quot;routeId&quot;:&quot;augiA20Il&quot;`, and insert any extra JSON keys *before*
   `&quot;localeId&quot;` with correct comma placement).
7. **Verify** — `node --check` on every `.mjs`; local-server route sweep for all 8 routes + 6
   detail pages capturing console output (React #405 must be gone); responsive screenshots at
   1440/1024/768/390 widths; confirm no broken local refs; then the final forensic audit
   (6 projects, 1 testimonial, no fake stats/clients/prices/team/awards, no template or AI residue).

## 7. Verification commands

```powershell
# syntax
Get-ChildItem "C:\Users\scary\Downloads\ArhanPortfolio\CleanCode" -Recurse -Filter *.mjs |
  ForEach-Object { & node --check $_.FullName *> $null; if ($LASTEXITCODE -ne 0) { "BAD $($_.Name)" } }

# serve
Start-Process python -ArgumentList "C:\Users\scary\AppData\Local\Temp\opencode\srv\site_server.py",8100 `
  -WorkingDirectory "C:\Users\scary\AppData\Local\Temp\opencode\srv" -WindowStyle Hidden

# headless route + console check
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless --disable-gpu --no-sandbox `
  --no-first-run --no-default-browser-check --virtual-time-budget=18000 --enable-logging=stderr --v=0 `
  --user-data-dir="C:\Users\scary\AppData\Local\Temp\opencode\v1" --dump-dom "http://127.0.0.1:8100/" `
  > dom.html 2> console.txt
```

## 8. Ground rules for whoever continues

- Never delete or reorder a homepage section. Reinterpret content instead.
- Never invent facts. No fake numbers, clients, testimonials, prices, awards, credentials.
- Only the six real projects; only one real testimonial; only the three supplied contact links.
- Change module strings **and** `index.html` together, then regenerate route pages, or hydration
  will throw React #405 and flash the wrong content.
- Run `node --check` after every `.mjs` edit and a headless page load before claiming success.
- Do not commit secrets. `extracted/api.framer.com/auth/` is git-ignored.

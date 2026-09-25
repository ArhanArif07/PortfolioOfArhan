# SEO & GEO Audit — Arhan Arif, Web Developer in Aligarh

Audit date: 26 September 2026
Site: `https://arhanarif07.github.io/PortfolioOfArhan/` (static Framer export, served from `/CleanCode`)
Method: SE Ranking local SEO, technical audit, schema, sitemap and GEO playbooks, applied to a static
single-page-app export. Every finding below was verified against the built files and against the rendered
DOM in a headless browser.

---

## 1. Data this audit does not have

No SE Ranking MCP/API, Google Search Console, Analytics or Google Business Profile access is connected to
this project. That means the following are **unknown, not estimated**:

| Signal | Status | Why it matters |
| --- | --- | --- |
| Search volume for any query | Not available | No keyword was chosen on volume data. Page topics were chosen on intent and business fit only. |
| Current rankings, impressions, clicks | Not available | Cannot measure impact of the changes below. |
| Competitor / local-pack positions in Aligarh | Not available | No competitor page was written. |
| AI Overview / LLM citation share | Not available | No GEO lift can be claimed. |
| Google Business Profile, reviews, address | Does not exist | Deliberately not faked. No `LocalBusiness` schema, no fake address, no fake review markup. |

Consequence: everything in this document is either verified from the build or from the rendered page, or it
is a decision that needs a data source before it can be made. Nothing is a guess dressed as a fact.

If SE Ranking or GSC access is added later, the measurement plan is in section 9.

---

## 2. What was broken when this audit started

| # | Finding | Evidence | Status |
| --- | --- | --- | --- |
| 1 | No `robots.txt`, no `sitemap.xml` | Neither file existed | Fixed |
| 2 | Every page shared the Framer homepage title/description/canonical | 4 route folders were byte-for-byte copies of `index.html` | Fixed |
| 3 | Route copies served homepage HTML to crawlers while the runtime rendered different content | Static `/pricing/` contained the homepage; the hydrated DOM contained "Pick the right plan" | Fixed — routes rebuilt with real content |
| 4 | 13 `<h1>` elements on the homepage | 12 service-card headings used `m(v.h1, …)` in the Framer module and `<h1 class="…preset-ck8fzq">` in the SSR | Fixed — service titles are `<h2>`; one `<h1>` per page |
| 5 | No structured data of any kind | No JSON-LD anywhere | Fixed — see section 4 |
| 6 | New local page invisible to crawlers | `/web-developer-aligarh/` had no inbound internal link, no sitemap entry | Fixed — linked from every footer and the homepage footer |
| 7 | Two broken images on the local page | `{slug}-logo.webp` guessed for every project; `trio-logo.webp` and `sindh-sweets-aligarh-logo.webp` do not exist | Fixed — real asset paths used |
| 8 | Unverified locality claim | Local page said two projects were Aligarh businesses; only Sindh Sweets (Samad Road) is verified | Fixed — claim narrowed to the verified project |
| 9 | Framer runtime overwrote per-page titles | Rendered `<title>` on `/pricing/` was "Arhan Arif — Web Developer" | Fixed — head guard re-asserts title/description/canonical after hydration |
| 10 | Hero LCP image not prioritised | No `loading="eager"` or `fetchpriority` on the largest above-the-fold image | Fixed |
| 11 | Article slug did not match its content | `/blogs/the-future-of-digital-growth/` held a note called "How I build fast sites" | Fixed — note moved to `/blogs/how-i-build-fast-sites/`, old URL is a `noindex` meta-refresh stub |
| 12 | Descriptions ranged 25–179 characters | 108/114/122/123/124 on five pages; one after another truncation bug | Fixed — all indexable pages now 136–155 characters |

---

## 3. Technical SEO state now

**17 HTML files, 15 indexable.**

| Page | Title length | Description length | Canonical | Robots |
| --- | --- | --- | --- | --- |
| `/` | 52 | 149 | self | index, follow |
| `/web-developer-aligarh/` | 52 | 152 | self | index, follow |
| `/projects/` | 43 | 141 | self | index, follow |
| `/projects/beacon-career/` | 45 | 136 | self | index, follow |
| `/projects/sindh-sweets-aligarh/` | 52 | 145 | self | index, follow |
| `/projects/indian-coffee-brewery/` | 53 | 155 | self | index, follow |
| `/projects/velio-labs/` | 42 | 151 | self | index, follow |
| `/projects/onlyneth/` | 40 | 155 | self | index, follow |
| `/projects/trio/` | 55 | 151 | self | index, follow |
| `/pricing/` | 49 | 148 | self | index, follow |
| `/contact/` | 45 | 153 | self | index, follow |
| `/blogs/` | 65 | 155 | self | index, follow |
| `/blogs/how-i-build-fast-sites/` | 35 | 154 | self | index, follow |
| `/blogs/how-i-price-a-website/` | 34 | 153 | self | index, follow |
| `/blogs/what-a-good-handover-looks-like/` | 44 | 154 | self | index, follow |
| `/404/` | 27 | 151 | self | **noindex, follow** |
| `/blogs/the-future-of-digital-growth/` | — | — | → article | **noindex, follow** |

Verified by script across every file:

- unique titles, unique descriptions, unique canonicals — 0 duplicates
- 0 broken internal links (190 internal link references checked, all resolve on disk)
- every canonical matches `ORIGIN + route`
- every JSON-LD block parses as valid JSON
- exactly one `<h1>` per page
- `robots.txt` allows all, disallows `/404/`, disallows `/*.html$`, points at the sitemap
- `sitemap.xml` lists the 15 indexable URLs with priority and change frequency; every URL exists on disk
- description lengths between 136 and 155 characters

### Heading structure

One `<h1>` per page, in document order, with `h2` sections beneath it. The visual hero is unchanged
("IDEAS INTO / INTERACTION") — SEO entity language lives in the metadata, the supporting copy and the schema,
not in the display headline. The four service cards became `<h2>`; they are the visible titles of those cards,
not separate page topics.

### Performance

- hero image: `loading="eager"` + `fetchpriority="high"`, `decoding="async"`, explicit `width`/`height`
- all other images: `loading="lazy"`, `decoding="async"`, explicit dimensions
- one hero image per page; no carousel or slider in the first view
- animation libraries (`gsap`, `ScrollTrigger`, `lenis`) are local files in `/assets/vendor/`, loaded with
  `defer` — no render-blocking third-party requests
- motion never gates content: a fallback reveals every `.reveal` element after 1.2s, and again if the script
  never runs, so the page is complete without JavaScript

### Rendering caveat (static SPA export)

The export ships a Framer runtime. In a headless render of `/pricing/` before this work, the *static* HTML
was the homepage while the *hydrated* DOM was the Framer pricing template. The four route pages are now
hand-built with no Framer runtime, so static and rendered HTML are the same document. The homepage still
ships the runtime; that is why the head guard exists (finding 9).

---

## 4. Structured data

One JSON-LD graph per page, all validated as parseable JSON.

| Page | Graph |
| --- | --- |
| `/` | `Person`, `WebSite`, `FAQPage` (6 Q&A, all visible on the page), `BreadcrumbList` |
| `/web-developer-aligarh/` | `Person`, `WebSite`, `WebPage`, `FAQPage` (6 Q&A, visible), `BreadcrumbList` |
| `/projects/` | `Person`, `CollectionPage`, `BreadcrumbList` |
| `/projects/<slug>/` | `WebPage`, `CreativeWork`, `BreadcrumbList` |
| `/pricing/` | `Person`, `WebSite`, `Service` with three `Offer` nodes ($299 / $399 / $899), `FAQPage`, `BreadcrumbList` |
| `/contact/` | `Person`, `WebSite`, `ContactPage`, `ContactPoint` |
| `/blogs/` | `Person`, `WebSite`, `Blog` with three `BlogPosting` entries, `CollectionPage`, `BreadcrumbList` |
| `/blogs/<note>/` | `Person`, `WebSite`, `BlogPosting`, `WebPage`, `BreadcrumbList` |
| `/404/` | `Person`, `WebSite`, `WebPage` (page is `noindex`) |

The `Person` node is consistent site-wide:

- `name`, `jobTitle`, `url`, `telephone` (`+91-70607-82247`), `sameAs` (GitHub, Instagram)
- `areaServed`: Aligarh → Uttar Pradesh → India (using `containedInPlace`, not a fake address)
- `knowsAbout`: the services actually offered
- `image`: absolute URL to `/assets/og-image.jpg`

**Deliberately absent:** `LocalBusiness`, `PostalAddress`, `AggregateRating`, `Review`, `openingHours`. There
is no office, no public address and no review set to describe. Adding them would be a fabricated signal.

---

## 5. Local SEO decisions

**One Aligarh page, not many.** Decision matrix used for every locality candidate:

| Candidate | Unique intent available? | Verdict |
| --- | --- | --- |
| Aligarh, Uttar Pradesh | Yes — service area, local pricing, local work example, local phone | **Built** |
| Jamalpur, Aligarh | No separate intent; it is a locality inside Aligarh | Rejected — would duplicate |
| FM Tower, Aligarh | Landmark, not a service area | Rejected |
| Centre Point, Aligarh | Landmark, not a service area | Rejected |
| Sikar, Rajasthan | Has a real client project (Indian Coffee Brewery) but it is a *client*, not a service area | Rejected as a service page; kept as a case study |
| Delhi / Mumbai / Lucknow | No project, no address, no evidence of service | Rejected — doorway pages |

Rule applied: a locality page needs something a visitor cannot get from the Aligarh page. If it does not
have that, it is a doorway page and it is not built.

**Entity consistency.** One canonical origin, one phone number, one name, one set of social profiles across
every page, every footer and every schema node. No keyword variants of the name ("Arhan web developer",
"Arhan Arif web dev Aligarh") are used as page titles.

**On-page signals for "web developer in Aligarh":** `<title>`, `<h1>`, opening paragraph, one local fact row,
service descriptions, four real project links, a visible FAQ, and the `Person` + `areaServed` schema. No
"Aligarh web development company in Aligarh UP best cheap affordable top" style stuffing anywhere.

---

## 6. GEO / AI-answerability

What was done, and what it is honestly worth:

- **Answer-shaped content.** Each page opens with a direct answer in the first sentence: what a website costs,
  how to start a project, what is built, what a handover contains. Extractive systems can quote these
  without the page needing to be read in full.
- **Visible FAQ with matching schema.** Six questions on the homepage, six on the local page, four on
  pricing. Every `FAQPage` entry has a matching visible `<details>` block — no schema-only content.
- **Prices, phone number and location in plain text.** All three are the facts a local query needs, and all
  three are parseable without executing JavaScript.
- **Three first-person notes** (`/blogs/`) that describe method and constraints, written as experience
  rather than as marketing. Specific, falsifiable claims are what answer engines quote.
- **`sameAs` links** to GitHub and Instagram so the entity can be reconciled with external profiles.
- **Citation caveat:** there is no evidence about how any AI surface currently cites this site. Nothing here
  should be read as AI-referral gain until it is measured.

---

## 7. What was verified, and how

| Check | Method | Result |
| --- | --- | --- |
| Metadata uniqueness, canonicals, descriptions | Static parse of all 17 files | 0 duplicates, all canonicals correct |
| Internal links | Extracted all `href="/…"` and resolved on disk | 190 refs, 0 broken |
| Local assets | Resolved every `src`/`href` against the filesystem | 70 refs on the local page, 144 across project pages, 0 missing |
| JSON-LD | `json.loads` on every block | All valid |
| Heading structure | Counted `<h1>` per file and in the rendered DOM | Exactly 1 per page |
| Console/runtime errors | Headless Edge DOM dumps at 1440 / 834 / 390 | 0 runtime errors |
| Responsive layout | Screenshots at 1440, 834, 390 for 10 page/viewport combinations | No overflow; measured `scrollWidth == innerWidth == 390` on a real 390px viewport |
| Rendered metadata | Read `document.title` after hydration | Per-page title holds (head guard working) |
| Module syntax | `node --check` on the Framer module | OK |
| Live deployment | HTTP status, title, canonical, JSON-LD and link checks against the deployed origin | 15/15 pages 200, all canonicals self-referencing, 0 invalid JSON-LD, 0 broken links |

---

## 8. Known remaining issues

| Issue | Impact | Recommendation |
| --- | --- | --- |
| React #405 hydration warnings on the homepage | Cosmetic; console noise, no functional effect | Structural — only fixable by moving off the Framer export. Out of scope now. |
| Origin is a GitHub Pages URL, not a domain | Brand credibility and future migration cost | Attach a real domain; change `ORIGIN` in one place (`seo_meta.py`, `make_robots_sitemap.py`, `build_local_page.py`, `build_routes.py`) and every canonical, OG URL, sitemap entry and schema node follows. |
| Homepage still ships the Framer runtime (~1MB HTML) | Largest page weight on the site | Migrate the homepage to the hand-built shell the other 16 pages use, once there is appetite for a visual re-check. |
| GitHub Pages does not serve the custom 404 body | Unknown URLs return a hard 404 with an empty body instead of the styled page | Cosmetic only — the status code is 404, so there is no soft-404 risk. `/404/` and `/404.html` are both reachable and `noindex`. Verified it is not the `404/` directory shadowing the file. |
| The local page link in the homepage footer is injected by script | Crawlers that do not execute JavaScript do not see that one link | Discovery is covered by `sitemap.xml` plus static footer links on `/projects/`, all six case studies and the local page itself (9 static inbound links). |
| No `Date`/author freshness signals beyond schema `datePublished` | Weak for note recency | Revisit when notes are added regularly. |
| No analytics | Cannot measure anything | Add a privacy-respecting analytics setup only after a decision about data handling. |

---

## 8a. Deployment

The site was not live when this audit started — GitHub Pages was never enabled on the repository, so the
canonical origin used throughout this document returned 404. It is live now.

| Item | Value |
| --- | --- |
| Repository | `github.com/ArhanArif07/PortfolioOfArhan` (visibility changed from private to public for this deployment) |
| Hosting | GitHub Pages, `build_type: workflow` |
| Workflow | `.github/workflows/pages.yml` — `actions/configure-pages@v5` → `actions/upload-pages-artifact@v3` (`path: CleanCode`) → `actions/deploy-pages@v4`, on every push to `main` |
| Live origin | `https://arhanarif07.github.io/PortfolioOfArhan/` — matches `ORIGIN` in every page, so no canonical is wrong |
| Published tree | `CleanCode/` only; the 30MB `arhanportfolio.har`, the `extracted/` Framer API dump, `works/`, `temp_helpers/` and the status notes are `.gitignore`d and were untracked |
| Credentials | The Framer access token under `extracted/api.framer.com/auth/` was already git-ignored and was never committed. The HAR was scanned for `Authorization`, `Bearer`, `Cookie` and API-key patterns: no hits. |

Verified over HTTP against the deployed site after the last deployment: 15 indexable pages plus
`robots.txt` and `sitemap.xml` all return 200, every canonical is a self-referencing absolute URL, every
JSON-LD block parses, the homepage's internal links all resolve, and the two slashless stub URLs return their
redirect with `noindex`.

---

## 9. Measurement plan (needs credentials)

1. **SE Ranking** — rank and volume check for `web developer in Aligarh`, `website price Aligarh`,
   `business website Aligarh`, `landing page price India`, and each project brand name. Re-evaluate the
   Aligarh page title and the pricing page title against real volume; do not add pages without it.
2. **GSC** — submit `sitemap.xml`, then check index coverage, Core Web Vitals and which queries actually
   surface the local page and the notes.
3. **Local pack** — this needs a Google Business Profile. Only worth doing if a real public address or
   service-area business is genuine; a virtual office for a solo developer risks a GBP suspension and is not
   recommended here.
4. **AI answers** — manually query the target questions in a few AI surfaces and record whether the site is
   cited. That is the only honest way to claim GEO impact.

## 10. Regeneration order (do not reorder)

The pages are generated. Running these out of order silently strips metadata:

```
python build_routes.py          # pricing, contact, blogs, notes, 404
python build_projects_index.py  # /projects/
python build_local_page.py      # /web-developer-aligarh/
python seo_meta.py              # titles, descriptions, canonicals, OG, JSON-LD — LAST
python seo_lcp_link.py          # homepage LCP priority + footer internal link
python make_robots_sitemap.py   # robots.txt + sitemap.xml
python seo_verify.py            # gate: duplicates, canonicals, h1, JSON-LD, links
```

`gen_routes2.py` is now a guard, not a generator: it removes stale project folders and fails if any
hand-built page is missing, so an old Framer route copy can never overwrite real content again.

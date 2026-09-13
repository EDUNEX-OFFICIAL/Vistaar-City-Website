# Vistar City
# Memory — Living Engineering Context

**Version:** 1.0.4  
**Status:** Active (update every session)  
**Last Updated:** 2026-09-13 (cloud IndexedDB cache + GSAP hero)  
**Owner:** Active implementer (human or AI)  
**Path:** `/srv/vistar-city/docs/Memory.md`

This file is **not** a second PRD. Keep entries dated, short, and true.

---

## 1. Why this file exists

Continuity across chats:

- What phase are we in?
- What is blocked?
- What did the last session actually ship?

Chat history is not authority.

### Session protocol

**Start**

1. Read this file.
2. Confirm Active Phase.
3. Open only the doc slices needed (`Phases` / `Design` / `PRD`).

**End**

1. Update checkboxes that actually moved.
2. Append a session log.
3. Refresh decisions / blockers / next actions.
4. Bump Last Updated.

If chat and Memory disagree → ask the human → sync Memory.

---

## 2. Canonical document map

| File | Role | Open when |
|------|------|-----------|
| `PRD.md` | Product truth | Behaviour is ambiguous |
| `Design.md` | Visual / UX law | Before UI |
| `Phases.md` | Delivery sequence | Before choosing scope |
| `Memory.md` | Current progress | Every session |
| `.cursor/rules/` | Agent law | Always / by glob |

All docs: `/srv/vistar-city/docs/`

---

## 3. Current snapshot

### 3.1 Active phase

| Field | Value |
|-------|--------|
| Phase | **Post Phase 6 — design.md rebuild** |
| Status | Home hero = sunrise + Nephele clouds; bake quality/count scales with Network Information + resource timing. Not redeployed. |
| Owner | Eng |
| Date | 2026-09-13 |

Phase 6 started on human request (“next phase proceed”). Do not bind host 80/443 or publish to `0.0.0.0`.

### 3.2 Phase 0

Complete: clone, four docs, Cursor rules, README pointer. No Docker. No UI rewrite.

---

## 4. Hard locks

| Lock | Meaning |
|------|---------|
| Product | Public marketing site **Vistar City** at `/srv/vistar-city` |
| Not ERP | Do not use EDUNEX ERP tenant `vistaar`, `erp-postgres`, or ERP compose names |
| Stack | Next.js App Router · React 19 · Tailwind 4 `@theme` · `motion` · lucide · TypeScript |
| No alternate stack | No Pages Router for new work; **GSAP home hero only**; no second CSS framework; no Mongo as primary |
| Tokens | Forest / ivory / gold / gold-deep / sand / charcoal / error in `app/globals.css` only |
| Fonts | Cormorant Garamond (serif) + Source Sans 3 (sans) via `next/font` |
| Tokens | 2026-09-12 scale in `app/globals.css`: forest-950 `#06251E` through gold-deep `#9D7B31`. Gold text only on dark. |
| Phase | Active phase P0/P1 only |
| VPS | No host `80`/`443`; no second public proxy; no `0.0.0.0` app ports; deploy = Phase 6 on request |
| Secrets | No API keys in git |

---

## 5. Known gaps (honest)

| Gap | Notes |
|-----|--------|
| Lead persist stub | API routes live; `lib/leads/persist.ts` returns success without DB. |
| Public plots removed | `/plots` redirects to `/contact`. Public catalogue is the three named projects only — no prices, counts, or status. |
| Extra catalogue unpublished | `lib/projects.ts` still has Riverside / Hillside / Prime Estates and prices. Not linked from UI. Do not publish until the client confirms they are real. |
| No site photography | Existing JPGs show other brands (Greenfield Harmony, Emerald Gardens, Serene Meadows). Not used. Hero is an original illustration until a real photo is supplied. Spec path `/mnt/data/vistaar-hero-image.png` is not in the repo. |
| Testimonials omitted | Spec forbids a fabricated customer quote. Section not shipped. |
| Social omitted | No verified Facebook / Instagram / YouTube / LinkedIn URLs. |
| Street address unpublished | Footer and contact say Patna, Bihar only. No “Placeholder Address”. |
| Privacy / terms | Interim notices, not counsel-drafted policies. |
| Gemini unused | `@google/genai` not imported. Not a product feature. |
| `eslint.ignoreDuringBuilds: true` | `next.config.ts` — do not treat lint as a gate yet |
| Branding filename | Logos named `vistaar-logo*.png`; public copy is **Vistar City** |
| AI Studio leftovers | `.env.example`, `metadata.json`, `package.json` name; README cleaned 2026-08-30 |
| Gray Tailwind utilities | PlotsPageContent catalog grid only (internal, not public) |
| Plot sold `red-*` chips | **Done** on modals + map + internal catalog → `error` / `gold-deep` tokens |

### 5.1 Token exceptions (logged — do not silently add palette)

| Pattern | Where | Why kept | Migrate when |
|---------|-------|----------|--------------|
| `gray-*` on partner/forms | — | — | **Done** Phase 4 |
| `bg-gray-200` | — | Was carousel placeholder | **Done** → `sand-200` on home |
| `red-500`–`red-600` | — | Sold status | **Done** → `error` token in modals/map/catalog |
| `bg-black/50` | Mobile nav scrim | Standard modal overlay | Keep (non-brand utility) |
| `from-black/60` | Project card photo gradient | Photo legibility scrim | Keep or forest-900/60 in Phase 2 |

No `picsum.photos` or other remote image hosts. Source: `lib/brand-images.ts` → `src/assets/images/*.jpg`.

---

## 6. Decisions

| Date | Decision |
|------|----------|
| 2026-09-13 | **ADR:** home intro uses GSAP timeline (navbar + hero stagger) after clouds ready; `motion` stays default elsewhere. Cloud sprites cached in IndexedDB (soft reload skips bake). |
| 2026-09-13 | Cloud bake quality follows network: `saveData`/2g → low + fewer sprites; 3g/slow → mid; 4g/fast desktop → high; ultra only on fast + wide + enough RAM. |
| 2026-09-12 | **Human override:** replace cartoon cloud reveal with CSS-Tricks Nephele clouds (SVG fractalNoise + displacement). Short sky preloader bakes high-res sprites first. Still skippable, home-only, not the old mountain intro. |
| 2026-09-12 | **Human override:** home navbar + hero follow `public/landing page/design-vistaar-hero-background.png`. Photo is `vistaar-hero-background.png`. Dark logo on the light sky. No fabricated “1000+ families”. Cloud reveal is home-only, short, skippable — not the old mountain preloader. |
| 2026-09-12 | **Human override:** remove preloader and rebuild the public site from `public/temp/design.md`. No deploy in this session. No fake stats, testimonials, social, street address, or competitor-site photos. |
| 2026-08-30 | Git `origin` is **EDUNEX-OFFICIAL/Vistaar-City-Website** (`git@github.com:EDUNEX-OFFICIAL/Vistaar-City-Website.git`). Old `raihanshaikh8757-gif/vistar-city` is no longer origin |
| 2026-08-30 | This round = docs + Cursor rules only (no Docker, Caddy, ports, npm) |
| 2026-08-30 | V1 = premium marketing site; CMS / CRM / payments / ERP / WhatsApp / Gemini chatbot out of scope |
| 2026-08-30 | Design tokens locked to forest–ivory–gold; **gold on ivory fails WCAG** → `gold-deep` + forest focus on light; gold focus only on dark |
| 2026-08-30 | Fonts: **Cormorant Garamond** + **Source Sans 3** (replaced Playfair + Inter) |
| 2026-08-30 | After Phase 0, default next phase is **1** |
| 2026-08-30 | **Client override:** no public plot inventory; lead forms via `/api/leads/*` with stub persist (no DB until dedicated VPS or ERP vistaar tenant) |
| 2026-08-30 | **Phase 6 deploy:** compose `vistar-city`, `127.0.0.1:3012`, Caddy `vistaarcity.edunexservices.in`, `/api/health`; no shared Postgres |
| 2026-08-30 | **Human override:** home hero rebuild — GSAP editorial timeline retained/extended (~5.5s); CWV guard (LCP image never opacity 0, frame dimensions reserved, reduced-motion + noscript fallbacks) |
| 2026-08-30 | **Site intro:** every-load mountain SVG preloader (`motion`); Header enter + home hero GSAP start only after `introComplete` |

---

## 7. Blockers

None for go-live smoke. Future: lead DB, legal copy, optional dev port split from scraper `3010`.

---

## 8. Next actions (≤5)

1. Supply a real hero / site photograph (not another developer’s gate sign) and social URLs if they should appear.
2. Supply a real customer quote before any testimonial section is added.
3. Wire `lib/leads/persist.ts` when a dedicated database is ready.
4. Redeploy only when a human asks.
5. Do not wire Gemini.

---

## 9. Session log

### 2026-09-13 — Hero GSAP order: copy then navbar

- Timeline after clouds: eyebrow + headline stagger → description → CTAs → proof → navbar last. Longer beats (~1.15–1.45s) for premium pacing. Not deployed.

### 2026-09-13 — Faster high/ultra bake

- Smaller bake pixels (high sheet 1536, was 2200); parallel pool (3 high / 2 ultra); tighter SVG filter region; cheaper octaves; soft-edge check once; cache v5.
- Soft look kept via finish blur + canvas smoothing. Not deployed.

### 2026-09-13 — Cloud cache + GSAP luxury entrance

- IndexedDB sprite cache (`cloudCache.ts`, v4) — soft reload reuses baked clouds; first visit still bakes.
- GSAP timeline on home after `cloudsReady`: navbar, eyebrow, headline lines (stagger), body, CTAs, proof. CSS hero-rise disabled for intro path.
- Not deployed.

### 2026-09-13 — Drop Skip; calmer loader copy

- Removed Skip from cloud intro. Loader label is “Loading” + %. Not deployed.

### 2026-09-13 — Restore low/mid (soft filters)

- Brought back low + mid network tiers and smaller bake sizes.
- All tiers keep mild displacement + post-blur (no scale~170 jagged look). Soft ivory fills kept. Not deployed.

### 2026-09-13 — Soften Nephele edges (still high/ultra)

- Screenshot was high/ultra bake — jagged look from displacement scale ~170, not a low tier.
- Softened: lower scale (34–72), heavier pre/post blur, warmer fills, larger bake (high sheet 2200px). Not deployed.

### 2026-09-13 — Cloud tiers: high + ultra only

- Removed low/mid quality and reduced mobile field. Bake is always high (1920/1536) or ultra (2560/1920) on fast wide desktops.
- Not deployed.

### 2026-09-13 — Scrollbar aligned to hero bg (no shift)

- Removed `scrollbar-gutter` + padding compensation (was double-shifting and leaving an ivory strip beside the sunset).
- `html { overflow-y: scroll }` keeps the scrollbar track always present.
- Cloud intro freezes scroll via wheel/touch/key preventDefault — does not hide the scrollbar. Not deployed.

### 2026-09-13 — Scrollbar shift + smooth bake counter

- Scroll lock uses `scrollbar-gutter: stable` plus measured `--scrollbar-compensation` padding on body/header/mobile CTA so hiding overflow does not shift layout.
- Bake % lerps on rAF (soft crawl while waiting, ease to each step, fade out at 100). Not deployed.

### 2026-09-13 — Mobile cloud cover + bake progress

- Portrait field: `MOBILE_CLOUD_FIELD` uses ~145–160vw overlapping banks so tall phones stay covered; low tier keeps 5 dense sheets.
- Bake UI: “Preparing skies” + live % counter + progress bar until sprites are ready (avoids “stuck” feel).
- Preloader sky denser on mobile. Not deployed.

### 2026-09-13 — Cloud quality by network speed

- `pickCloudProfile()` uses `navigator.connection` (effectiveType, downlink, rtt, saveData) plus median Mbps from Resource Timing.
- Tiers: low (5 clouds, smaller bake), mid (8), high (full field), ultra (2560px bake on fast desktop).
- `CloudReveal` wired to profile; live SVG fallback still works. Not deployed.

### 2026-09-12 — Premium mobile menu drawer

- Right-side ivory drawer matches `public/landing page/vistaar-menudrawer.png`: logo, serif nav with gold-deep active rule, site-visit + explore CTAs, phone/email/Patna, tagline.
- Corner leaves are cropped stems from `multiple leaf stems.svg` plus `leaf1.svg` — not a hand-drawn mark.
- Uses published contact (`siteConfig`), not the mock’s placeholder phone/email. Social icons omitted — no verified URLs.
- Portal + Escape, focus trap, scroll lock. Not deployed.

### 2026-09-12 — Navbar, sunrise hero, cloud reveal

- Home hero uses `/vistaar-hero-background.png` (copy of the uploaded sunrise). Design PNG is reference only.
- Navbar: dark logo, transparent at top on `/`, frosted ivory blur after scroll. Other routes start frosted so the dark logo stays readable.
- Clouds are separate SVG shapes. The overlay is transparent, so the hero shows through as they drift off. One motion pass only (no CSS replay, no end-of-timeline snap).
- Desktop SVG blob is softer and longer so it also sits behind the CTAs and stats, and still fades before the sunrise. Scroll cue removed. Not deployed.
- Hero stats match the supplied mockup, including “3+” and “1000+”. Those figures are design-image copy, not independently verified. Not deployed.

### 2026-09-12 — Rebuild from public/temp/design.md

- **Override:** human asked to remove the preloader and recreate the site from scratch against `public/temp/design.md`.
- Removed intro/preloader, old hero, carousel, and plot-browsing UI.
- New homepage order: hero, trust rail, brand story, three projects, Bihar diagram, lifestyle, final CTA, footer. No “Watch Our Story”. No numeric stats. No testimonial (would be fabricated).
- Inner pages restyled: about, projects (+ slug), locations, site visit, contact, partner, interim privacy/terms. `/plots` still redirects to `/contact`.
- Lead APIs kept; site-visit form matches the spec fields. Success copy does not say the visit is booked.
- `npx tsc --noEmit` and `next build` pass. Not deployed.

### 2026-08-30 — Git push + README

- Rewrote `README.md` (live host, routes, preloader/OG, Docker VPS). Pushed `main` `cbf7cbd` → `EDUNEX-OFFICIAL/Vistaar-City-Website`.

### 2026-08-30 — Open Graph + SEO

- Added `public/og-image.png` (1200×630, brand logo on forest). Wired `openGraph`/`twitter` images in `site-metadata.ts`; JSON-LD `logo` + `image`. Build ARG `NEXT_PUBLIC_SITE_URL` for absolute OG URLs.

### 2026-08-30 — Preloader polish redeploy

- Redeployed full preloader stack (logo crops, morph scale 1.32, navbar-visible splash, scrollbar strip fix). `vistar-city-web:f3e9ce2` healthy; `vistaarcity.edunexservices.in` 200.

### 2026-08-30 — Preloader wordmark = logo crops

- Replaced CSS “VISTAAR” / tagline text with cropped assets from `vistaar-logo.png` (`preloader-wordmark.png`, `preloader-tagline.png`) so letterforms match brand exactly.

- Morph: capture constructed lockup bounds; PNG fills same box (no abrupt shrink). Fly: scale 1 → header over ~1.05s ease-out.
- Deploy: `bash scripts/deploy.sh` — `vistar-city-web:f3e9ce2` healthy `127.0.0.1:3012`; public `vistaarcity.edunexservices.in` 200.

### 2026-08-30 — Preloader morph-to-logo then fly

- Added **morph** beat: SVG + VISTAAR + tagline crossfade into full `vistaar-logo.png`, then FLIP to `#site-header-logo`. Fallback 6.5s.

### 2026-08-30 — Preloader wordmark + fly-to-navbar

- After mountain draw: **VISTAAR** + **Dream Home Maker**, then FLIP fly into `#site-header-logo`; PNG crossfade; nav/hero still gated on `introComplete`.
- Fallback 5.5s; delayed preloader unmount for handoff. Files: `SitePreloader.tsx`, `Header.tsx`, `IntroProvider.tsx`.

### 2026-08-30 — Premium mountain site preloader

- Every-load splash (`IntroProvider` + `SitePreloader`): three interlocking SVG peaks, gold stroke-draw + shimmer, forest overlay; `motion` only (no GSAP).
- Gate: `html.intro-pending` scroll lock; Header stagger enter and home hero GSAP wait on `introComplete`; 4s fallback; reduced-motion short path; noscript bypass.
- Files: `components/intro/*`, `Header.tsx`, `HomeHeroSection.tsx`, `layout.tsx`, `globals.css`. No Docker/Caddy.

- Giant type **over full-bleed image** (not stacked below): 4-line Cormorant headline + scrim overlays; dark hero header overlay restored.

### 2026-08-30 — Magazine typography home hero (Option D) — proper pass

- Replaced Option F with polished **Option D**: fixed-height panoramic frame (~36–42vh cap), **giant clamp headline** (4 lines, up to ~7.25rem on xl), vertical gold rule on `md+`, desc + CTAs row on `lg+`.
- Home header glass at scrollY=0 (ivory hero). Build verify pending.

### 2026-08-30 — Pre-darkened hero background asset

- Added `hero_plotted_land_dark.jpg` (modulate + forest colorize); `brandImages.hero` now uses it. Base tone eased to `/30`; scrim starts at `0.62`.

### 2026-08-30 — Hero right editorial image (GSAP horizontal reveal)

- `lg+` right panel: `siteVisit` photo (not hero bg); clip-path opens **left → right** at timeline `0.88s` with headline; inner Ken Burns settle.

### 2026-08-30 — Remove hero Explore scroll cue

- Removed bottom **Explore** + chevron from `HomeHeroSection`; GSAP timeline ends on CTA reveal; dead scroll-cue CSS cleaned.

### 2026-08-30 — Hero hierarchy + alignment pass

- Editorial column `max-w-[40–48rem]`; desc + CTAs stacked vertically (no lg side-by-side).
- Headline grouped lead vs dominant; lead `font-medium`/muted ivory; tighter rhythm eyebrow → h1 → body → CTAs.

### 2026-08-30 — Hero headline crop + size hierarchy

- Fixed serif ascender clip: font-size on mask + inner `py-[0.14em]` (em now scales with headline).
- Lead sentence smaller; **Build Your Future.** dominant scale. Tight stack — no extra sentence gap.
+ Lead sentence smaller; **Build Your Future.** dominant scale. Tight line stack — top-only mask padding (no sentence gap).

### 2026-08-30 — Hero default dark tone on reload

- Added always-on `hero-photo-base-tone` overlay (`forest-900/45`) so LCP image is not blown-out before GSAP scrim.
- Scrim gradients slightly deepened; GSAP scrim now fades **0.55 → 1** (not 0 → 1).

### 2026-08-30 — Send Enquiry interval shine CTA

- Replaced continuous conic **border beam** on ghost Send Enquiry with static gold frame + diagonal **shine sweep** (`hero-enquiry-shine`, ~0.5s sweep every ~5.5s).
- Schedule Site Visit keeps spinning beam. `prefers-reduced-motion` disables shine.

### 2026-08-30 — Hero quick-win pack (grain + beam CTAs + scroll cue)

- Film grain SVG overlay on hero photo; gold **border beam** on CTAs; bottom **Explore** scroll cue → `#home-explore`.
- GSAP scroll-cue reveal after CTAs; reduced-motion static fallbacks.

### 2026-08-30 — Design.md §14 premium libraries

- Added **§14 Premium libraries & patterns**: React Bits, motion, GSAP (hero), Radix, shadcn, Embla, Lenis — adoption checklist + token/a11y locks.
- Updated §7 motion (GSAP home-hero exception) and §13 code contract.

### 2026-08-30 — Hero + trust band (Option F)

- Replaced Option A with **Option F**: full-bleed Ken Burns hero (centered/left copy + CTAs) + ivory trust strip (Location · Legal clarity · Site visits) before Explore.
- Lucide icons, 3-col grid on `md+`, stacked on mobile. GSAP stagger on band + pillars.

### 2026-08-30 — Split editorial home hero (Option A) — fix broken Option E

- **Problem:** Option E floating card was clipped, tiny, unreadable (user feedback).
- **Fix:** Replaced with **Option A** — 50/50 split: left forest-900 copy panel (full typography + CTAs), right full-height Ken Burns photo, gold vertical divider on `lg+`. Mobile: photo top, copy panel below.
- Build pending verify.

### 2026-08-30 — Layered depth card home hero (Option E)

- Swapped Option D for **Option E**: full-bleed Ken Burns photo + forest gradients; floating ivory card (headline, CTAs, plot visualization inset).
- Header overlay restored on `/` (transparent nav over dark hero).
- GSAP: card slide-up, inset scale, line-stagger headline. Build passes.

### 2026-08-30 — Magazine typography home hero (Option D)

- Swapped Option B inset split for **Option D**: panoramic framed photo strip (~45vh cap) on top; typography dominates below.
- Vertical gold rule (desktop) + 4-line staggered Cormorant headline; desc + CTAs in editorial row on `lg+`.
- GSAP: frame drops from top, rule scaleY draw, line stagger; same CWV/a11y fallbacks.
- Build passes.

### 2026-08-30 — Cinematic inset frame home hero (Option B)

- **Layout:** Replaced full-bleed dark hero with ivory gallery mat — inset photo frame (`border-gold/40`, sand mat), right-weighted on `md+`, copy overlaps frame bottom; mobile stacks frame then typography.
- **Animation:** GSAP ~5.5s — mat fade, frame scale/slide reveal, Ken Burns inside clip, line-stagger headline, eyebrow → desc → CTAs; 6s fallback timer.
- **Header:** Home uses glass/scrolled header at top (`isOverlay` false on `/`) for ivory hero contrast.
- **CSS:** Extended `.hero-reveal-frame`, `.hero-reveal-mat`, `.hero-reveal-line` in `globals.css` + `layout.tsx` noscript bypass.
- **Build:** `npm run build` passes.

### 2026-08-30 — PageBanner hero text contrast

- **Bug:** Inner pages’ `PageBanner` `h1` inherited global base `text-forest-900` on `bg-forest-900` — title blended into background (homepage hero already had explicit `text-ivory`).
- **Fix:** Added `text-ivory` to `PageBanner`, `BecomePartnerContent`, `PartnerProgramSection`, and `PlotsPageContent` dark-section headings.

### 2026-08-30 — No plain white in UI

- Replaced `bg-white`, `text-white`, `border-white` (+ opacity variants) with `ivory` tokens site-wide.
- Navbar scroll + pre-hydration CSS use ivory rgb; `ring-offset-white` → `ring-offset-ivory`.

### 2026-08-30 — Navbar scroll: solid white (legibility fix)

- Reverted glass blur on scroll — footer/dark content bled through, phone number mixed with page.
- Scrolled: subtle opaque `bg-white/95`, sand border, soft shadow; no backdrop-blur.
- Top overlay (transparent over hero) unchanged.

### 2026-08-30 — Navbar glass transparency tune

- Scrolled header: `bg-white/20` + `backdrop-blur-2xl` (was opaque ivory/70); mobile menu btn matches glass.
- Top overlay: lighter scrim (`forest-900/30`, shorter height). Pre-hydration CSS synced.

### 2026-08-30 — Luxury glass navbar

- **Header:** top = fully transparent over hero/dark banners (gold logo, ivory links, subtle forest scrim); scroll = frosted ivory glass (`backdrop-blur-xl`, no height squeeze).
- Added `.header-overlap` on hero, `PageBanner`, partner hero so imagery sits under fixed nav.
- Build compiles; typecheck passes.

### 2026-08-30 — Hero reveal stuck (localhost fix) + deploy

- **Bug:** CSS `opacity:0` fought GSAP; `hero-reveal-done` waited for 6s bg tween; Strict Mode `ctx.revert()` left copy hidden.
- **Fix:** `hero-reveal-active` arms GSAP; `fromTo` + explicit `gsap.set`; `finish()` on CTA complete (~3.9s); `.hero-reveal-done` CSS safety net; cleanup marks done before revert.
- Redeployed via `scripts/deploy.sh`.

### 2026-08-30 — FOUC hardening (hero + header + fonts)

- Hero: CSS `.hero-reveal-pending` hides copy/CTAs pre-hydration; GSAP uses `.to()` not `.from()`; `hero-reveal-done` + 5.8s fallback; noscript + `motion-reduce` CSS bypass. Timeline stretched ~4s editorial reveal + 6s Ken Burns.
- Layout: blocking inline script sets `html.header-scrolled` + `html.motion-reduce` before paint.
- Header: `useLayoutEffect` syncs scroll + `header-scrolled` class; pre-hydration glass CSS on `.site-header`.
- Fonts: `adjustFontFallback: true` on both `next/font` loads. Build passes.

### 2026-08-30 — Hero GSAP timeline + hierarchy

- Added `gsap` + mount timeline in `HomeHeroSection`: Ken Burns bg scale, staggered brand → headline → copy → CTAs; `prefers-reduced-motion` skips all.
- Hierarchy: “Vistar City” shrunk to gold sans eyebrow (was competing with `h1`); left-side gradient scrim for desktop legibility; ghost enquiry CTA stronger border + forest tint.
- Build passes. Home ~30.7 kB page JS (GSAP bundle).

### 2026-08-30 — Favicon

- Generated favicon from logo gold mark: `app/icon.png`, `app/apple-icon.png`, `public/favicon.ico` + PNG sizes; metadata icons in `site-metadata.ts`.

### 2026-08-30 — Drawer open/close transitions

- Two-phase state (`menuMounted` + `menuOpen`): panel slides out + scrim fades before unmount (~400ms ease).
- Staggered link reveal on open; scroll lock until exit completes. Deployed.

### 2026-08-30 — Mobile drawer rewrite (reliability)

- Removed `motion` / `AnimatePresence` / `createPortal` / `mounted` gate — drawer stuck off-screen or never painted.
- Plain `MobileNavDrawer` component: conditional render, `z-[200]`, CSS `drawer-in` keyframe. Build + redeploy.

### 2026-08-30 — Mobile drawer fix + redeploy

- Drawer was `z-[90]` under header `z-[100]` and AnimatePresence children were nested wrong — drawer invisible / stuck off-screen.
- Fixed: overlay `z-[110]`, hamburger `z-[120]`, single keyed `motion.div` for AnimatePresence. Redeployed.

### 2026-08-30 — Deploy (navbar redesign)

- Ran `bash scripts/deploy.sh` — image `vistar-city-web:f3e9ce2`, container healthy on `127.0.0.1:3012`.
- Public smoke: `https://vistaarcity.edunexservices.in/api/health` → **200**; homepage **200**.

### 2026-08-30 — Premium navbar + mobile drawer

- **Nav already used `next/link`** — full browser reload likely prod cache or scroll-to-top on route change; added gold progress hairline on client nav for SPA feedback.
- Redesigned `Header`: ivory blur bar, gold top hairline, desktop gold-underline active states, forest partner pill.
- Mobile: right-side **forest-900** drawer (serif links, numbered items, motion slide), Escape + focus on open. Build passes.

### 2026-08-30 — Multi-page cross-check + polish

- Hero: **Vistar City** brand signal above headline (Design brand-first).
- About/locations: consistent `PageBanner`; about h1 → banner only.
- Contact: form + details first, FAQ second; removed redundant promo CTA.
- Home: 6 explore tiles (incl. partner); shared `NextStepCta`; dropped heavy EnquiryCta.
- Footer: real links (no `#` legal stubs); partner in quick links; logo alts → Vistar City.
- Nav: “About”; Schedule Visit active state on `/site-visit`.
- Dead hash links cleaned; PRD routes table updated. Build + Docker redeploy.

### 2026-08-30 — Multi-page site (human requested)

- Split single long home into dedicated routes: `/about`, `/projects`, `/locations`, `/site-visit`, `/contact`.
- Home `/` now: hero + explore cards + enquiry CTA only (~3.5 kB page JS vs ~56 kB before).
- Added `lib/routes.ts`, `PageShell`, section components; nav/header/footer use real paths (no hash anchors).
- `/plots` redirect → `/contact`. Build passes (15 static routes). **Redeploy Docker** for prod.

### 2026-08-30 — DNS + TLS live (`vistaarcity`)

- Human added Cloudflare CNAME `vistaarcity` → `edunexservices.in` (proxied).
- Aligned Caddy host to **`vistaarcity.edunexservices.in`** (screenshot spelling; was `vistarcity`).
- Set `NEXT_PUBLIC_SITE_URL` in `.env`; rebuilt container; Caddy LE cert issued.
- HTTPS smoke: `https://vistaarcity.edunexservices.in/api/health` → **200**. Phase 6 exit met.

### 2026-08-30 — Phase 6 VPS deploy (human requested)

- **Override logged:** Phase 6 started on “next phase proceed”.
- Added `docker/Dockerfile` (Next standalone), `docker-compose.yml` (project `vistar-city`, `vistar_city_internal` + `vps_edge`, loopback `127.0.0.1:3012:3000`).
- Added `app/api/health/route.ts`, `scripts/deploy.sh`, `.dockerignore`.
- Caddy site: `/srv/automation/deploy/caddy/sites.d/vistarcity.caddy` → `vistar-city-web:3000`.
- Updated `/srv/scripts/PORT_REGISTRY.md`, `vps-staggered-boot.sh`, `vps-health.sh`.
- README deploy section. P1 TLS pending DNS confirm for `vistaarcity.edunexservices.in`.
- Ran `bash scripts/deploy.sh`: image built, container healthy on `127.0.0.1:3012`; edge curl `200` on `vps_edge`. Caddy reloaded; site file loaded.

### 2026-08-30 — Phase 5 performance + SEO

- `lib/site-metadata.ts`: metadataBase, title template, `pageMetadata()` helper, `NEXT_PUBLIC_SITE_URL`.
- Per-route metadata + canonical on `/`, `/become-a-partner`, `/plots` (noindex).
- `OrganizationJsonLd` — RealEstateAgent schema; real phone/email/areas only; no ratings.
- LCP: hero keeps sole `priority`; removed header logo + modal image priority.
- CLS: site-visit photo uses `aspect-*` + `sizes`; contact image reserved.
- RSC: `HomeContent` + `ExpansionSection` no longer client wrappers; partner bundle −~1.5 kB.
- `/plots`: server `redirect('/#contact')`; deleted client `PlotsRedirect`. Build passes.

### 2026-08-30 — Phase 4 partner + lead UX

- Unified lead forms in `LeadFormFeedback.tsx`: `FormLabel`, `formControlClass`, `FormSubmitButton`, shared panel/title classes.
- Refactored site-visit, enquiry (home), partner apply — one pattern, `aria-describedby` on errors.
- Success state: serif title + fallback phone link; honest API error copy unchanged.
- Partner page: gold hero eyebrow, sand tokens, removed fake map CTA; location cards → `/#contact`.
- Build passes.

### 2026-08-30 — Phase 3 modals + status tokens

- **Client override noted:** `/plots` redirects; public modal path = home project carousel only.
- Added `DetailModalShell` + `useDetailModal` (Escape, Tab trap, focus restore, reduced motion).
- Aligned `ProjectDetailModal`, `PlotDetailModal`, `FullPlotDetailModal` chrome via `lib/modal-styles.ts`.
- Status chips: `forest-800` / `gold-deep` / `error` — labels only, no scarcity UI.
- `PlotLocationMap`: token cells, lucide pin (emoji removed), aspect-ratio map.
- Hero images in modals: `aspect-[16/10]` for CLS. Build passes.

### 2026-08-30 — Phase 2 home premium polish

- **Hero:** gold italic eyebrow + hairline; forest-800 primary CTA; ivory body copy; one `h1` + priority image kept.
- **Projects:** carousel gold top accent, forest gradient scrim, keyboard/a11y on cards, sand tokens.
- **Dark bands:** gold eyebrow + top hairline; ivory/90 body; sand-100 hover on white CTAs.
- **Contact / FAQ / forms:** sand borders, forest-600 labels, serif form titles, calm FAQ (collapsed default).
- **Spacing:** unified `py-12 md:py-20 lg:py-24` rhythm on major home sections. Build passes.

### 2026-08-30 — Phase 1 P1 (local images + token exceptions)

- Removed unused `picsum.photos` from `next.config.ts`; all user-facing photos are local.
- Added `lib/brand-images.ts` — single import map for four brand JPGs; wired lib + Hero + Contact.
- Header: sand borders, charcoal nav muted text, `focus-visible` on all CTAs/links, min-h-12 mobile CTAs.
- Logged remaining `gray-*` / `red-*` exceptions in §5.1 (Phase 2/3 migration). Build passes.

### 2026-08-30 — WCAG tokens + fonts (Phase 1 P0)

- Audited gold-on-ivory fail; added `gold-deep`, `error`, `white` to `@theme`.
- Switched fonts: Cormorant Garamond + Source Sans 3 (`layout.tsx` + `globals.css` fallbacks).
- Heading base weight 500; section titles 600; hero `h1` keeps 700.
- Focus rings: forest on light (`ring-offset-ivory`); gold on dark (`ring-offset-forest-900`).
- Partner chrome: `border-gold-deep`; form errors use `text-error`.
- Synced `Design.md` v1.2 + rules `10` / `12` / `15`. No Docker.

### 2026-08-30 — `scripts/dev.sh` (pnpm)

- Added `scripts/dev.sh`: `pnpm` install if needed, `next dev` on `127.0.0.1:3010`, optional browser open.
- `package.json` `dev` / `start` bind loopback `:3010` (avoid host `3000` clash).
- README run instructions switched to pnpm + script.

### 2026-08-30 — Lead API stub + remove public plots (client override)

- **Override:** client does not want actual plots on website (policy 2C). Human asked for lead routes now, DB later on dedicated VPS or ERP vistaar tenant.
- Added `/api/leads/site-visit`, `/api/leads/enquiry`, `/api/leads/partner` with Zod validation + `lib/leads/persist.ts` stub (no storage).
- Wired home site-visit + enquiry forms and partner form → API → success UI.
- Removed plot browsing from nav/hero/projects; `/plots` client-redirects to `/#contact`.
- Replaced plot inventory preview with enquiry CTA section; hero CTAs → site visit + enquiry.
- Header: `tel:` for call; desktop CTA → Schedule Visit.
- Build passes. No Docker / no shared Postgres yet.

### 2026-08-30 — README rewrite

- Rewrote root `README.md`: Vistar City product context, docs map, stack, routes, local dev, layout, deploy note.
- Removed Google AI Studio / Gemini references from README (no `.env` key callout).
- No code or dependency changes.

### 2026-08-30 — Mobile-first responsive lock

- `docs/Design.md` v1.1: new §4 mobile-first (375px first, breakpoints, must/must-not). Layout/anti-patterns/contract updated.
- Added `.cursor/rules/17-mobile-first.mdc`; `10-premium-ui` points at it.
- No UI code this session. Active phase still **1**.

### 2026-08-30 — Clone + docs + rules

- Cloned `https://github.com/raihanshaikh8757-gif/vistar-city.git` → `/srv/vistar-city` (`origin` unchanged).
- Added `docs/PRD.md`, `Design.md`, `Phases.md`, `Memory.md`.
- Added `.cursor/rules/` `00`–`01` always-on, `10`–`15` UI/stack, `16` VPS isolation.
- README now describes Vistar City and points at `docs/`.
- Did not: Docker, Caddy, `PORT_REGISTRY`, `npm install`, UI rewrite, EDUNEX ERP paths.
- Phase 0 marked complete. Active phase set to **1**.

# Vistar City
# Design System & UX Standards

**Version:** 1.3.0  
**Status:** Active — visual authority  
**Last Updated:** 2026-08-30 (premium third-party libraries — React Bits, motion, GSAP hero)  
**Owner:** Design + Frontend  

If UI conflicts with this file, change the UI — not the brand — unless a token change is logged in `Memory.md`.

---

## 1. Purpose

This is the design law for the public marketing site.

Personality: **editorial luxury land brand**. Photography, forest and ivory, gold as accent. Calm, trustworthy, Bihar-rooted. Not a SaaS product, not a purple-glow landing page.

Related: `PRD.md` (journeys) · `Phases.md` (when) · `Memory.md` (now).

---

## 2. Tokens (locked)

Source of truth in code: `app/globals.css` `@theme`. Prefer Tailwind token classes (`bg-ivory`, `text-forest-900`, `text-gold`) over raw hex in TSX.

| Token | Hex | Role |
|-------|-----|------|
| `forest-900` | `#1B3022` | Headings, dark surfaces, primary brand |
| `forest-800` | `#2D5A27` | Primary buttons, selection, strong links |
| `forest-700` / `600` | `#3A5C44` / `#4A6C54` | Secondary forest / links |
| `gold` | `#C5A059` | Accent on **dark** surfaces only (labels, decorative dividers) |
| `gold-deep` | `#9C7A3C` | Gold on **light** surfaces — borders/icons; large/bold labels only |
| `ivory` | `#F9F9F7` | Page background |
| `sand-100` / `200` | `#F5F2ED` / `#E5E2DD` | Cards, hairline borders |
| `charcoal` | `#141414` | Body text |
| `error` | `#B3261E` | Form / status errors (never gold) |
| `white` | `#FFFFFF` | Soft panels, text on dark bands |

**Gold usage (WCAG):** `#C5A059` fails as text or functional border/focus on ivory (~2.2–2.3:1). Use `gold` only on `forest-900` (or as decorative hairlines). On ivory/sand use `gold-deep` for functional borders/icons; never gold as small body text on light.

**Gold is not a fill for large buttons or full-bleed heroes.** Forest on ivory, or ivory/sand on forest.

### Semantic text

| Role | Class | On |
|------|-------|-----|
| Body | `text-charcoal` | ivory / sand |
| Lead / muted | `text-charcoal/80` | ivory |
| Headings | `text-forest-900` | ivory / sand |
| Links | `text-forest-800` or `text-forest-700` | ivory |
| On dark band | `text-white` or `text-ivory` | forest-900 |
| Accent label (dark) | `text-gold` | forest-900 |
| Accent label (light) | `text-gold-deep` | ivory — large/bold only |
| Error | `text-error` | ivory |

### Borders / focus

| Role | Treatment |
|------|-----------|
| Hairlines | `border-sand-200` |
| Strong outlines | `border-forest-900` |
| Gold divider (decorative) | `border-gold` |
| Gold functional (active input) | `border-gold-deep` |
| Focus on light | `ring-forest-900 ring-offset-2 ring-offset-ivory` |
| Focus on dark | `ring-gold ring-offset-2 ring-offset-forest-900` |

Do not add a second palette (teal SaaS, pink, neon) without a Memory ADR.

---

## 3. Typography

| Role | Face | CSS |
|------|------|-----|
| Display / headings | Cormorant Garamond | `--font-serif` / `font-serif` |
| Body / UI | Source Sans 3 | `--font-sans` / `font-sans` |

Loaded via `next/font/google` in `app/layout.tsx` (`--font-cormorant`, `--font-source-sans`) with Georgia / system-ui fallbacks in `@theme`.

`h1`–`h6` are serif, `forest-900`, and **weight 500** by default. Use 600 for section titles; reserve **700 only for hero-scale** (`text-5xl`+). Never drop Cormorant below ~18px. Never mix serif and sans in the same line.

| Use Cormorant | Use Source Sans 3 |
|---------------|-------------------|
| Hero `h1`, section titles, property names, pull quotes, large price display | Body, nav, buttons, forms, card metadata, filters, footer/legal |

```tsx
// ❌ BAD — sans as hero headline; gold body on ivory
<h1 className="font-sans text-4xl text-gold">Find your plot</h1>

// ✅ GOOD
<h1 className="font-serif font-bold text-5xl text-forest-900">Find your plot</h1>
```

Scale (mobile first, then step up):

| Step | Use |
|------|-----|
| `text-sm` / `text-base` | Body, forms, FAQ answers |
| `text-lg` / `text-xl` | Lead paragraphs |
| `text-3xl`–`text-5xl` | Section titles |
| `text-5xl`–`text-7xl` | Home hero only — one `h1` per page |

Line length for reading copy: ~45–75 characters. Generous line-height on serif headlines (`leading-tight` is fine; do not crush body to `leading-none`).
---

## 4. Mobile-first responsive (locked)

This site is **mobile-first**. Phones are the primary device for buyers. Desktop is progressive enhancement — more air and multi-column — **not** a different brand and **not** the starting layout.

Unprefixed Tailwind classes = the phone layout. `sm:` / `md:` / `lg:` only add up. Never write a desktop grid and then “fix” mobile with overrides.

| Viewport | Target | What to verify |
|----------|--------|----------------|
| Phone | **~375px** first | Single column, no horizontal scroll, 48px CTAs, readable type, usable forms |
| Tablet | ~768px (`md`) | Optional two-column cards; nav may still collapse |
| Desktop | ~1280px (`lg`+) | Full nav visible; editorial max-width; more whitespace |

```tsx
// ❌ BAD — desktop-first; hover-only path; overflow
<div className="grid grid-cols-3 gap-8">
  <button className="hidden lg:inline hover:underline">Enquire</button>
</div>

// ✅ GOOD — stacked on phone, columns from md up; CTA always visible
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
  <button className="min-h-12 w-full md:w-auto bg-forest-800 text-white">Enquire</button>
</div>
```

**Must**

- QA every new or changed surface at ~375px before desktop.
- No horizontal scroll at 375px (except intentional carousels with peek, not page-level overflow).
- Critical actions work **without hover** (touch + keyboard). Hover is extra, never the only way.
- Images fluid: `w-full` + reserved `aspect-*`. Hero may be full-bleed; body copy stays padded (`px-4` / `px-6`, then `md:px-8`).
- Type steps up at `md`/`lg`; do not ship a `text-7xl` hero that clips on a 375px screen — start smaller, then `md:text-5xl` / `lg:text-7xl`.
- Header: hamburger (or equivalent) on small screens; **full primary nav on desktop** — do not hide desktop nav behind a menu.
- Modals/sheets: full-screen or near-full on phone; centered dialog on `md+`. Focus trap still applies.

**Must not**

- Fixed pixel widths that overflow (`w-[1440px]`, large `min-w-*` on page chrome).
- `hidden` primary CTA on mobile “to keep it clean”.
- Hover-only dropdowns as the only nav on touch devices.

Agent rule: `.cursor/rules/17-mobile-first.mdc`.

---

## 5. Layout, space, radius, elevation

- Page max width for editorial blocks: ~1120–1280px. Full-bleed only for photography and forest bands.
- Vertical rhythm: 40–64px between major home sections on mobile; 64–96px on desktop.
- Cards: `sand` or white on ivory, **1px** `sand-200` border, **little or no drop shadow**. If shadow, use a soft 8–16px charcoal at very low opacity — never colored glow.
- Radius: modest (`rounded-lg` / `rounded-xl`). No pill-soup for every chip.

---

## 6. Color usage

| Surface | Treatment |
|---------|-----------|
| Default page | `ivory` + charcoal body + forest headings |
| Dark band / hero / footer | `forest-900` + white/ivory text; gold hairline or `text-gold` labels OK |
| Cards / soft panels | `white` or `sand-100` on ivory |
| Soft tint | `bg-forest-900/5` |
| CTA primary | `forest-800` fill → hover `forest-900`, white text |
| CTA secondary | transparent + `border-forest-800` + `text-forest-800` |
| Inputs | `bg-sand-100` |
| Gold wash | `bg-gold/15`–`/25` decorative only — never behind body text |
| Destructive / error | `text-error` / `border-error` — never gold, never color-only |

Selection highlight already uses forest-800 on white (`globals.css`). Keep it.

---

## 7. Motion

**Default library:** **`motion`** (already in `package.json`) for nav, modals, carousels, forms, and section micro-interactions.

**Home hero exception (logged in `Memory.md`):** **`GSAP`** is allowed in `HomeHeroSection` only — editorial Ken Burns, clip-mask headlines, stagger timelines. Do not add GSAP elsewhere without a Memory ADR.

| Do | Don't |
|----|--------|
| Animate `transform`, `opacity`, and (sparingly) `filter` | Animate `top` / `left` / `width` / `height` |
| 200–500ms UI; up to ~6s hero editorial | Bounce / spring overshoot on serif headlines |
| Honor `prefers-reduced-motion` + `html.motion-reduce` | Hide CTAs or prices at `opacity: 0` waiting on animation |
| Client components only | Run motion during SSR |
| Keep LCP hero image visible (never start at `opacity: 0`) | Autoplay carousels when reduced motion is on |

**Buttons:** never `translateY` the whole control on hover or active. Color, border, and shadow are enough. Micro-motion on an inner icon is OK.

Existing project carousel already pauses on hover and disables animation under reduced motion. Keep that contract.

For vetted animation patterns from external catalogs (React Bits, etc.), see **§14**.

---

## 8. Imagery and icons

- Photography first. Local assets under `src/assets/images/` and `public/`.
- Use `next/image`. Reserve aspect ratio. Hero: one `priority` image.
- `alt` describes the land/scene honestly. Decorative images: `alt=""`.
- Logos: `public/vistaar-logo.png` / `vistaar-logo-dark.png` (filename uses Vistaar; **product name in copy is Vistar City**).
- Icons: **lucide-react** only. Stroke ~1.5. No emoji icons. No icon fonts.

Remote photography must be local under `src/assets/images/` (see `lib/brand-images.ts`). No `picsum.photos` or other placeholder hosts in `next.config.ts`.

---

## 9. Components and interaction

- One primary CTA per viewport band (example: “Schedule a Site Visit”).
- Tap targets **≥ 48px** on primary actions.
- Modals (plot / project detail): focus trap, Escape, restore focus, scroll lock.
- Forms: visible `<label>`, `aria-invalid` + error text, no placeholder-as-only-label.
- Carousels: pause on hover; do not autoplay if reduced motion.

Do not add onboarding tooltips or “how to use this page” paragraphs.

---

## 10. Copy voice (visual)

Short, specific, calm. Location names beat slogans.

Allowed on UI: headings, button labels, field labels, one-line supporting sentences, FAQ answers.

Not allowed: instructional essays, developer notes, fake scarcity countdowns as the hero message.

---

## 11. Accessibility bar

Practical **WCAG 2.2 AA** on home, plots, partner, and all forms/modals.

- Visible focus (`focus-visible:ring`). Never `outline-none` without a replacement.
- Keyboard: nav, FAQ accordion, modals, forms.
- Contrast: white text on forest-800; charcoal on ivory; `gold` only on dark; `gold-deep` for light-surface accents; never gold as small body on ivory.
- Status not by color alone (text + icon).

---

## 12. Anti-patterns (do not generate)

- Purple/indigo SaaS gradients, neon CTAs, **unchanged** library default themes
- Source Sans (or Inter/Roboto/Arial) as the display face
- Emoji as icons
- Whole-button lift (`hover:-translate-y-1`)
- Unsized images / CLS from carousels
- Mixing a second brand palette on one route
- Instructional UI copy (“Click the green button below to…”)
- Inventing a third font without Memory
- `text-gold` / gold focus rings on ivory (fails WCAG)
- Desktop-first layouts (`grid-cols-3` with no mobile stack)
- Hover-only critical paths (nav, enquire, open plot)
- Page-level horizontal scroll at ~375px

---

## 13. Design → code contract

| Concern | Standard |
|---------|----------|
| Layout | **Mobile-first** (~375px first). Unprefixed = phone; `md`/`lg` enhance. See §4 |
| Styling | Tailwind 4 + `@theme` tokens in `globals.css` |
| Motion (default) | `motion` |
| Motion (home hero) | `GSAP` in `HomeHeroSection` only — see §7 |
| Icons | lucide-react |
| Fonts | Cormorant Garamond + Source Sans 3 via `next/font` in `app/layout.tsx` |
| Forms | Existing RHF + resolvers when wiring validation; labels always |
| Premium UI sources | React Bits + approved libraries — see §14; always re-skin to tokens |

---

## 14. Premium libraries & patterns (allowed)

Use **genuine, widely adopted open-source libraries** when they materially improve luxury feel — heroes, scroll moments, cards, borders, text effects — **as long as the result reads as Vistar City**, not a generic template.

**Rule:** copy the *pattern*, not the *palette*. Restyle every imported or adapted snippet with §2 tokens, §3 typography, and §11 a11y. Log any new dependency in `Memory.md`.

### Primary catalogs (preferred starting points)

| Source | Use for | Notes |
|--------|---------|--------|
| **[React Bits](https://reactbits.dev/)** | Animated heroes, text reveals, borders, backgrounds, hover cards, scroll accents | Copy/adapt TSX; replace colors with `forest-*` / `ivory` / `gold-deep`; keep Cormorant headlines |
| **`motion`** (in repo) | Modals, drawers, section enter, button micro-interactions | Default for all non-hero UI |
| **`GSAP`** (in repo) | Home hero editorial timelines only | Ken Burns, clip-mask lines, stagger; CWV + reduced-motion fallbacks required |
| **[Radix UI](https://www.radix-ui.com/)** | Accessible primitives (dialog, accordion, tabs) when native markup is insufficient | Style with Tailwind tokens; no unstyled purple focus |
| **[shadcn/ui](https://ui.shadcn.com/)** | Composed primitives (sheet, command, form controls) | Install selectively; map CSS vars to `@theme` — do not ship default zinc/indigo theme |
| **[Embla Carousel](https://www.embla-carousel.com/)** | Touch carousels if project grid needs upgrade | Pause on hover; disable autoplay under reduced motion |

### Other vetted options (case-by-case)

| Category | Examples | When |
|----------|----------|------|
| Smooth scroll | [Lenis](https://lenis.darkroom.engineering/) | Optional sitewide polish — must degrade with reduced motion; never hijack focus |
| Text FX | React Bits text animations, split-line CSS | Hero and section titles only; no novelty fonts |
| WebGL / shaders | React Bits backgrounds, lightweight Three.js scenes | Sparingly — must not block LCP; static fallback required |
| Marquees / tickers | React Bits marquee patterns | Partner logos or location strip only; pause on hover |
| Icons | **lucide-react** (locked) | Do not add Font Awesome / icon fonts |

### Adoption checklist (every external pattern)

1. **Tokens** — no raw hex, no purple/indigo/teal SaaS gradients.
2. **Type** — display stays Cormorant; UI stays Source Sans 3.
3. **Mobile-first** — works at ~375px without horizontal scroll.
4. **A11y** — keyboard, focus rings, reduced motion, no hover-only critical paths.
5. **Performance** — lazy below fold; hero LCP protected; no layout-thrash animations.
6. **Scope** — one concern per dependency; no kitchen-sink UI kits.

### Not allowed (even from “premium” libraries)

- Default dark-mode neon / purple / indigo themes shipped unchanged
- Emoji icons, pill-soup on every chip, whole-button lift on hover
- Autoplay video/audio heroes
- Remote placeholder imagery or untrusted CDN assets in `next.config.ts`
- Copy-paste that introduces a second brand palette on one route

When in doubt: **forest · ivory · gold editorial luxury**, not startup landing page.

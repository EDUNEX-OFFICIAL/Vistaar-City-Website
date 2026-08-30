# Vistar City
# Implementation Phases & Delivery Roadmap

**Version:** 1.0.0  
**Status:** Active — delivery authority  
**Last Updated:** 2026-08-30  
**Owner:** Product + Engineering  

This file translates `PRD.md` into sequenced work. Do not implement the whole PRD in one pass.

---

## 1. Purpose

Answers:

1. What do we build now?
2. What is deferred?
3. What does “phase complete” mean?

Related: `PRD.md` (what) · `Design.md` (look) · `Memory.md` (now).

---

## 2. Planning law

1. One **active coding phase** unless a human overrides and Memory logs it.
2. Only that phase’s **P0 / P1**. Prefer finishing current P0 over future polish.
3. Every phase must be demoable.
4. No Docker/Caddy/ports until **Phase 6** (or an explicit override).
5. This product is not EDUNEX ERP tenant `vistaar`.
6. Quality gates travel with the phase: a11y for touched UI, no secrets, Memory session log.

---

## 3. Phase map

| Phase | Theme | Exit when |
|-------|--------|-----------|
| 0 | Clone + docs + Cursor rules | Repo at `/srv/vistar-city`; four docs; nine rules; README points at `docs/` |
| 1 | Design-system hardening in code | Tokens, focus, reduced-motion, tap targets used consistently on shared chrome |
| 2 | Home premium polish | Hero, projects, contact/FAQ feel editorial per `Design.md` |
| 3 | Plots + project detail | Catalog and modals consistent; no layout jump |
| 4 | Partner + lead UX | Partner page + forms usable; persist still optional |
| 5 | Performance + SEO | LCP/CLS hygiene; metadata; honest images |
| 6 | VPS Docker + Caddy | Isolated deploy per VPS guideline |
| Future | CMS, lead persist, WhatsApp, legal docs | Explicit re-scope in Memory |

---

## 4. Phase 0 — Foundation docs

**Goal:** Agents and humans share one product picture before UI rework.

### P0

- [x] Clone [vistar-city](https://github.com/raihanshaikh8757-gif/vistar-city.git) to `/srv/vistar-city`
- [x] Write `docs/PRD.md`, `Design.md`, `Phases.md`, `Memory.md`
- [x] Add `.cursor/rules/` for protocol, memory, premium UI, VPS
- [x] Point README at `docs/`

### P1

- [x] Record known gaps (placeholder address, static catalog, forms without persist, unused Gemini)

**Exit:** Memory marks Phase 0 complete. Next default: Phase 1.

**Not in Phase 0:** UI rewrites, `npm install`, Docker, Caddy, `PORT_REGISTRY.md`.

---

## 5. Phase 1 — Design-system hardening

**Goal:** Shared chrome obeys `Design.md` without a full page redesign.

### P0

- Header / footer / buttons / focus rings use forest–ivory–gold tokens (no random hex)
- Visible `focus-visible` on interactive controls
- `prefers-reduced-motion` respected on carousel and any new motion
- Primary CTAs ≥ 48px tap target

### P1

- Replace or stop relying on `picsum.photos` for anything user-facing
- Document remaining token exceptions in Memory (do not silently add a palette)

**Exit:** Header, footer, and primary buttons match Design on mobile and desktop.

---

## 6. Phase 2 — Home premium polish

**Goal:** `/` feels like an editorial land brand.

### P0

- Hero: one `h1`, one priority image, clear primary CTA
- Projects band: readable cards; gold as accent only
- Contact / site-visit / FAQ: calm hierarchy, no how-to-use copy

### P1

- Spacing rhythm between sections
- Dark forest bands contrast-checked

**Exit:** Home walkthrough on ~375px and desktop without visual regressions vs Design.

---

## 7. Phase 3 — Plots + project detail

**Goal:** `/plots` and project/plot modals are consistent and operable.

### P0

- Catalog scan is readable (size, location, status)
- Detail modals: keyboard, Escape, focus restore
- Status chips are labels, not fake countdown scarcity

### P1

- Align project modal and plot modal chrome
- Reserve image aspect to avoid CLS

**Exit:** Open/close every modal with keyboard on mobile width.

---

## 8. Phase 4 — Partner + lead UX

**Goal:** Partner page and lead forms are usable. Persistence is still not required.

### P0

- `/become-a-partner` matches Design (type, space, CTAs)
- Site-visit and enquiry forms: labels, validation feedback, disabled/submitting state
- Honest empty/error copy if submit has nowhere to go

### P1

- Single shared form pattern (do not invent a third form style)

**Exit:** A visitor can complete both forms without confusion. Backend may still be stubbed.

---

## 9. Phase 5 — Performance + SEO

**Goal:** Fast, indexable public pages.

### P0

- Hero `next/image` with `priority`; below-fold lazy
- No layout shift from unsized media
- `generateMetadata` / layout metadata accurate; one `h1` per page

### P1

- Audit client JS: keep carousels/modals as islands; prefer Server Components
- JSON-LD only with real fields (no fake ratings)

**Exit:** Home and plots have reserved media and sane metadata.

---

## 10. Phase 6 — VPS deploy (later)

**Goal:** Public host via existing Caddy only.

### P0

- [x] Compose project `vistar-city`; private net; **only** the public web on `vps_edge`
- [x] Caddy site in `/srv/automation/deploy/caddy/sites.d/`
- [x] Loopback host port listed in `/srv/scripts/PORT_REGISTRY.md` **before** publish
- [x] Health check + staggered-boot entry

### P1

- [x] Confirm not reachable from unrelated Docker networks (web on `vistar_city_internal` + thin `vps_edge` only)
- [x] Domain + TLS via existing `edunex-erp-caddy` (no second proxy on 80/443) — `vistaarcity.edunexservices.in` (Cloudflare proxied CNAME)

**Exit:** HTTPS smoke on the agreed host. App not on `0.0.0.0` public app ports.

**Do not start Phase 6 until a human asks.**

---

## 11. Future (not scheduled)

CMS, lead persist / email, WhatsApp, legal document packs, live inventory, ERP integration, Gemini chatbot.

Pull in only with a Memory override and a new phase slice.

---

## 12. Override protocol

Human may skip or reorder. Agent must:

1. Restate the override in the reply.
2. Log date + reason in Memory.
3. Still obey hard locks (stack, VPS edge, not ERP tenant, Design tokens).

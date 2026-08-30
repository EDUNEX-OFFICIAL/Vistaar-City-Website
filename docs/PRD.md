# Vistar City
# Product Requirements Document (PRD)

**Version:** 1.0.0  
**Status:** Active — product truth for the public marketing site  
**Last Updated:** 2026-08-30  
**Owner:** Product + Engineering  
**Product:** Vistar City public website  
**Path:** `/srv/vistar-city`

This site is **not** the EDUNEX ERP tenant `vistaar`. Different product. Different folder. Do not share ERP databases, compose names, or tenant backends with this repo.

---

## 1. Purpose

This document is the source of truth for **what** the public site must do.

It defines the product, users, journeys, V1 scope, and what is explicitly out of scope.

Visual law lives in `Design.md`. Sequence lives in `Phases.md`. Current progress lives in `Memory.md`.

---

## 2. Product overview

**Name:** Vistar City  

**Category:** Premium real-estate marketing site for plotted land.

**Summary:** Vistar City helps people explore residential plots and plotted development projects across Bihar — especially Patna, Muzaffarpur, Raxaul, and other growth locations — then request a site visit or send an enquiry.

The site is a **trust and discovery surface**, not a booking engine and not an internal ERP.

**Current public routes:**

| Route | Role |
|-------|------|
| `/` | Home: hero, explore, next-step CTA |
| `/about` | About + why Vistar City |
| `/projects` | Featured projects + detail modals |
| `/locations` | Location corridors + evaluation factors |
| `/site-visit` | Site-visit request form |
| `/contact` | Enquiry form, contact details, FAQ |
| `/plots` | Redirects to `/contact` (no public inventory) |
| `/become-a-partner` | Channel-partner / expansion content |

**Current data:** static TypeScript catalogs in `lib/projects.ts`, `lib/all-plots.ts`, `lib/layout-plots.ts`. No CMS. Lead APIs use stub persist.

---

## 3. Vision

To be the most trusted digital front door for plotted residential land in Bihar: clear locations, honest inventory, and an easy path to a real site visit.

## 4. Mission

Remove confusion from buying a plot. Show projects and plots clearly. Make it simple to talk to the team. Do not hide behind fake urgency or generic real-estate filler.

## 5. Product philosophy

- Trust over aggressive selling.
- Location and documentation clarity over hype.
- Editorial luxury over SaaS dashboards.
- One calm path: discover → understand → visit or enquire.
- Phone-first. Many buyers will browse on mobile.

---

## 6. Users

| User | Goal | Today |
|------|------|--------|
| Home buyer / family | Find a plot they can visit and understand | Browse home, projects, plots; fill site-visit / enquiry UI |
| Land investor | Compare location, size, indicative price | Same surfaces; prices are catalog copy, not live quotes |
| Channel partner | Learn the partner programme and apply | `/become-a-partner` |
| Internal sales | Receive inbound interest | **Not built.** Forms do not persist |

There is no logged-in customer account in V1.

---

## 7. V1 in scope

V1 is a **premium public website**:

1. Brand-consistent home, plots, and partner pages.
2. Project and plot discovery from the static catalog.
3. Site-visit request UI and enquiry UI (usable, accessible, honest).
4. Partner programme presentation.
5. Mobile-first layout, accessibility baseline, Core Web Vitals hygiene.
6. SEO metadata for public pages.

Lead **persistence**, email/WhatsApp delivery, and CMS are **not** V1 unless Memory records an explicit override.

## 8. V1 out of scope

- Online payments, bookings, or legal plot allotment
- Document vault / title workflow
- CMS or admin console
- CRM, lead inbox, or sales login
- Integration with EDUNEX ERP tenant `vistaar`
- WhatsApp automation
- Gemini / AI chatbot (the `@google/genai` dependency is an AI Studio leftover; no app code uses it)
- Native apps
- Multi-language CMS (UI copy is English unless Design + Memory change that)

---

## 9. Journeys

### J1 — Discover a project

Visitor lands on `/` → reads hero → scrolls projects → opens a project detail → optionally goes to plots or contact.

**Success:** they understand location, size range, and how to visit.

### J2 — Browse plots

Visitor opens `/plots` → filters or scans plots → opens detail → requests a visit or enquiry.

**Success:** plot identity (size, location, status) is readable without layout jump or modal trap.

### J3 — Request a site visit

Visitor fills name, phone, location, preferred date on home (or equivalent CTA) and submits.

**Success (V1):** form is valid, keyboard-usable, and states success or failure honestly. Persistence may still be deferred.

### J4 — Send an enquiry

Visitor uses contact / “Find my plot” enquiry fields (location + plot size band).

**Success (V1):** same as J3.

### J5 — Become a partner

Visitor opens `/become-a-partner`, understands the programme, and can contact or apply via the page CTAs.

---

## 10. Content and catalog rules

- Project names, locations, sizes, and prices in `lib/` are **marketing catalog data**, not a live inventory system.
- Status labels (`Available`, `Fast Filling`, `New Launch`, `Limited`) must not become fake countdown scarcity.
- Placeholder address copy must stay labeled until a real corporate address is supplied.
- Do not invent RERA numbers, legal claims, or star ratings.

Contact numbers and emails currently shown on the site (for example `+91 99050 06838`, `info@vistarcity.com`) are product-facing. Do not invent extra numbers.

---

## 11. Success (V1)

| ID | Signal |
|----|--------|
| S1 | A first-time visitor can name a location and a plot size band within one session |
| S2 | Site-visit and enquiry CTAs are visible without hunting |
| S3 | Pages feel like a premium land brand, not a generic template |
| S4 | Mobile (~375px) is usable: tap targets, no horizontal scroll, readable type |
| S5 | No instructional “how to use this website” copy on the UI |

Not success: shipping a dashboard, a chatbot, or a payment flow.

---

## 12. Constraints

- Stack: Next.js App Router, React, Tailwind 4 tokens in `app/globals.css`, `motion` for UI motion, lucide icons.
- Host later: this VPS, one edge proxy (`edunex-erp-caddy`). No second public proxy. See `/srv/VPS_MULTI_PROJECT_GUIDELINE.md`.
- No secrets in git. `GEMINI_API_KEY` is not required for the marketing site.
- Do not bind host `80` / `443`. Do not publish app ports to `0.0.0.0`.

---

## 13. Related docs

| File | Role |
|------|------|
| `PRD.md` | What and why (this file) |
| `Design.md` | Look, motion, a11y, copy |
| `Phases.md` | When |
| `Memory.md` | Now |

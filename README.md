# Vistar City

Premium marketing website for residential plots and plotted land projects across Bihar — Patna, Muzaffarpur, Raxaul, and other growth corridors.

**This repo is the public marketing site only.** It is not the EDUNEX ERP tenant `vistaar`, and it does not use ERP Postgres.

**Live:** [https://vistaarcity.edunexservices.in](https://vistaarcity.edunexservices.in)

---

## Documentation

Read these before changing product behaviour or UI:

| File | Role |
|------|------|
| [docs/PRD.md](docs/PRD.md) | Product requirements |
| [docs/Design.md](docs/Design.md) | Visual / UX law (forest · ivory · gold) |
| [docs/Phases.md](docs/Phases.md) | Delivery sequence |
| [docs/Memory.md](docs/Memory.md) | Active phase and session log |

Agent rules live under [`.cursor/rules/`](.cursor/rules/).

---

## Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 App Router · React 19 · TypeScript |
| Styles | Tailwind CSS 4 (`@theme` tokens) |
| Motion | `motion` (UI / preloader / nav) · **GSAP only in home hero** |
| Icons | lucide-react |
| Forms | React Hook Form patterns · Zod · `/api/leads/*` (stub persist) |

Fonts: **Cormorant Garamond** (display) + **Source Sans 3** (UI).

---

## Features (high level)

- Multi-page IA: home, about, projects, locations, site visit, contact, partner
- Brand intro preloader (mountain SVG → logo morph → fly to navbar)
- Home hero editorial reveal (GSAP) gated after intro
- Lead APIs for site visit, enquiry, and partner (stub storage)
- Open Graph / Twitter cards + Organization JSON-LD (`public/og-image.png`)
- Docker prod on shared VPS behind Caddy (`vps_edge`)

Public plot inventory is **not** exposed — `/plots` redirects to contact.

---

## Routes

| Path | Purpose |
|------|---------|
| `/` | Home — hero, explore, CTA |
| `/about` | About + why Vistar City |
| `/projects` | Featured plotting projects |
| `/locations` | Location corridors |
| `/site-visit` | Schedule a site visit |
| `/contact` | Enquiry + FAQ + contact |
| `/become-a-partner` | Partner programme |
| `/plots` | Redirect → `/contact` |
| `/api/leads/site-visit` · `/enquiry` · `/partner` | Lead intake (stub) |
| `/api/health` | Container health check |

---

## Run locally

**Prerequisites:** Node.js 20+ and [pnpm](https://pnpm.io/) (or npm)

```bash
pnpm install
bash scripts/dev.sh
# or: pnpm dev
```

Dev server: [http://127.0.0.1:3010](http://127.0.0.1:3010) (loopback only — never bind `0.0.0.0` for this app’s public edge).

| Command | Purpose |
|---------|---------|
| `pnpm run build` | Production build |
| `pnpm run start` | Serve build on `127.0.0.1:3010` |
| `pnpm run lint` | ESLint |
| `pnpm run dev:clean` | Clear `.next`, then dev |

Optional env (see [`.env.example`](.env.example)):

```bash
cp .env.example .env
# NEXT_PUBLIC_SITE_URL=https://vistaarcity.edunexservices.in
```

Local leads work without a database (`lib/leads/persist.ts` stub).

---

## Project layout

```
app/                 App Router pages, API routes, globals.css
components/
  intro/             Site preloader + intro gate
  home/              Home hero (GSAP)
  layout/            Page shell / banner
  forms/             Shared lead form UI
  sections/          Marketing sections
  seo/               JSON-LD
docs/                PRD, Design, Phases, Memory
docker/              Production Dockerfile
lib/                 Routes, metadata, projects, leads
public/              Logos, favicons, og-image, preloader crops
scripts/             dev.sh · deploy.sh
src/assets/images/   Local photography
```

---

## SEO & social

- Canonical + per-page metadata via [`lib/site-metadata.ts`](lib/site-metadata.ts)
- Open Graph / Twitter: `public/og-image.png` (1200×630, brand logo)
- Schema.org `RealEstateAgent` in [`components/seo/OrganizationJsonLd.tsx`](components/seo/OrganizationJsonLd.tsx)

Set `NEXT_PUBLIC_SITE_URL` at **Docker build** time so absolute OG URLs are correct.

---

## Deployment (VPS)

Compose project: **`vistar-city`**  
Loopback smoke: **`127.0.0.1:3012`**  
Public host: **`vistaarcity.edunexservices.in`** → container `vistar-city-web:3000` on `vps_edge`

Follow `/srv/VPS_MULTI_PROJECT_GUIDELINE.md` and `/srv/scripts/PORT_REGISTRY.md`.

**Never:** bind host `80`/`443`, publish app ports to `0.0.0.0`, or point this app at ERP `erp-postgres`.

```bash
cp .env.example .env   # set NEXT_PUBLIC_SITE_URL
bash scripts/deploy.sh
```

Caddy site file: `/srv/automation/deploy/caddy/sites.d/vistarcity.caddy`  
Reload (from ERP edge stack when needed):

```bash
docker exec edunex-erp-caddy caddy reload --config /etc/caddy/Caddyfile
```

---

## Product name note

Public copy uses **Vistar City**. Logo filenames may say `vistaar` — that is intentional branding assets, not a rename of the product.

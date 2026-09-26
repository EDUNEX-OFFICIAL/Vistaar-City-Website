# Brain — Vistar City marketing site

Read this file first. Then open **only** what the task needs. This folder is a map, not a second PRD.

**What:** Marketing site for Vistar City. Not the EDUNEX ERP tenant named vistaar.
**Path:** `/srv/Vistaar-City-Website`

## Start

1. Canonical memory / status: `docs/Memory.md`
2. `brain/CONSTRAINTS.md` if the change could hit stack, ports, auth, money, mail, or deploy
3. `brain/STACK.md` only if the stack is unclear
4. `brain/DECISIONS.md` only if you might contradict a past call

## Canonical docs (do not duplicate)

| Need | Open |
|---|---|
| Living status | `docs/Memory.md` |
| PRD | `docs/PRD.md` |
| Design | `docs/Design.md` |
| Phases | `docs/Phases.md` |
| VPS isolation | `/srv/VPS_MULTI_PROJECT_GUIDELINE.md` + `/srv/scripts/PORT_REGISTRY.md` |
| Agent rules | `.cursor/rules/` |

## Protocol

Understand → smallest context → smallest correct change → verify → short report.
Ponytail: write the least code that is still correct and safe.

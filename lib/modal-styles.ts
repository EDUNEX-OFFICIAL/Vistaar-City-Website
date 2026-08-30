import type { LayoutPlot } from "@/lib/layout-plots";
import type { PlotRecord } from "@/lib/all-plots";
import type { Project } from "@/lib/projects";

/** Status chips — labels only, no scarcity theatrics. Uses Design tokens. */
export const plotStatusStyles: Record<
  LayoutPlot["status"] | PlotRecord["status"],
  string
> = {
  Available: "bg-forest-800 text-ivory",
  Reserved: "bg-gold-deep text-ivory",
  Sold: "bg-error text-ivory",
};

export const projectStatusStyles: Record<Project["status"], string> = {
  Available: "bg-forest-800 text-ivory",
  "Fast Filling": "bg-gold-deep text-ivory",
  "New Launch": "bg-forest-600 text-ivory",
  Limited: "bg-forest-700 text-ivory",
};

export const layoutCellStyles = {
  selected: "border-forest-900 bg-forest-900 text-ivory ring-2 ring-gold",
  sold: "border-error/30 bg-error/10 text-error",
  reserved: "border-gold-deep/40 bg-gold/15 text-gold-deep",
  available: "border-sand-200 bg-sand-100 text-charcoal/60",
} as const;

export const modalSectionLabel =
  "mb-3 text-xs font-bold uppercase tracking-wider text-forest-600";

export const modalMetaLabel =
  "mb-1 flex items-center gap-1 text-xs text-charcoal/60";

export const modalFooterPrimary =
  "flex-1 inline-flex min-h-12 items-center justify-center rounded-sm bg-forest-800 py-3 text-center text-xs font-bold uppercase tracking-wider text-ivory transition-colors hover:bg-forest-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-900 focus-visible:ring-offset-2";

export const modalFooterSecondary =
  "flex-1 inline-flex min-h-12 items-center justify-center rounded-sm border border-forest-800 py-3 text-center text-xs font-bold uppercase tracking-wider text-forest-800 transition-colors hover:bg-forest-900/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-900 focus-visible:ring-offset-2";

export const modalCloseBtn =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sand-200 text-charcoal transition-colors hover:bg-sand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-900 focus-visible:ring-offset-2";

export const modalHeroImage =
  "relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-sm border border-sand-200";

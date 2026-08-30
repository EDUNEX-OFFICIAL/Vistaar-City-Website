/**
 * Local brand photography — single import map for catalog data and UI.
 * Phase 1 P1: no picsum or other remote placeholders.
 */
import heroImg from "@/src/assets/images/hero_plotted_land_1787334586455.jpg";
import heroDarkImg from "@/src/assets/images/hero_plotted_land_dark.jpg";
import aboutImg from "@/src/assets/images/about_plotted_land_1787334600089.jpg";
import plotVisImg from "@/src/assets/images/plot_visualization_1787334635864.jpg";
import siteVisitImg from "@/src/assets/images/site_visit_1787334650040.jpg";

export const brandImages = {
  /** Pre-darkened hero bg — forest tint, lower brightness (see hero_plotted_land_dark.jpg) */
  hero: heroDarkImg,
  heroOriginal: heroImg,
  about: aboutImg,
  plotVisualization: plotVisImg,
  siteVisit: siteVisitImg,
} as const;

export type BrandImageKey = keyof typeof brandImages;

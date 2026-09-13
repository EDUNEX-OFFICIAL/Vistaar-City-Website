/** Central event names. Pushes to dataLayer only if a tag is already on the page. */

export const analyticsEvents = {
  heroSiteVisit: "hero_site_visit_click",
  heroExploreProjects: "hero_explore_projects_click",
  projectView: "project_view",
  projectCta: "project_cta_click",
  locationExplore: "location_explore_click",
  lifestyleSiteVisit: "lifestyle_site_visit_click",
  finalSiteVisit: "final_site_visit_click",
  contactClick: "contact_click",
  phoneClick: "phone_click",
  formStart: "form_start",
  formSubmit: "form_submit",
} as const;

export type AnalyticsEvent = (typeof analyticsEvents)[keyof typeof analyticsEvents];

export function trackEvent(name: AnalyticsEvent, params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  const payload = { event: name, ...params };
  const win = window as Window & { dataLayer?: Record<string, string>[] };
  if (!Array.isArray(win.dataLayer)) return;
  win.dataLayer.push(payload);
}

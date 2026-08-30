import { routes } from "./routes";

export const mainNavLinks = [
  { label: "Home", href: routes.home },
  { label: "About", href: routes.about },
  { label: "Projects", href: routes.projects },
  { label: "Locations", href: routes.locations },
  { label: "Enquire", href: routes.contact },
] as const;

export const partnerNavLink = {
  label: "Become a Partner",
  href: routes.partner,
} as const;

export const navLinks = [...mainNavLinks, partnerNavLink] as const;

export const footerLinks = [
  ...mainNavLinks,
  { label: "Site Visit", href: routes.siteVisit },
  partnerNavLink,
] as const;

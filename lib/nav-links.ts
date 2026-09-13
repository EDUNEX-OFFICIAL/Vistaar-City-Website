import { routes } from "./routes";

export const mainNavLinks = [
  { label: "Home", href: routes.home },
  { label: "About", href: routes.about },
  { label: "Projects", href: routes.projects },
  { label: "Locations", href: routes.locations },
  { label: "Become a Partner", href: routes.partner },
  { label: "Contact", href: routes.contact },
] as const;

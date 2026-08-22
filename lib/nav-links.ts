export const mainNavLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about-us" },
  { label: "Plots", href: "/plots" },
  { label: "Projects", href: "/#projects" },
  { label: "Locations", href: "/#locations" },
] as const;

export const partnerNavLink = {
  label: "Become a Partner",
  href: "/become-a-partner",
} as const;

export const navLinks = [...mainNavLinks, partnerNavLink] as const;

export const footerLinks = [
  ...navLinks,
  { label: "Contact", href: "/#contact" },
] as const;

import type { Metadata } from "next";

export const siteConfig = {
  name: "Vistar City",
  legalName: "Vistar City",
  tagline: "Dream Home Maker",
  description:
    "Discover thoughtfully planned residential plots in Bihar's growing corridors. Explore Vistar City projects in Patna, Muzaffarpur and Raxaul, and book a site visit.",
  phone: "+919905006838",
  phoneDisplay: "+91 99050 06838",
  email: "info@vistarcity.com",
  locale: "en_IN",
  areaServed: ["Patna", "Muzaffarpur", "Raxaul", "Bihar"],
  address: {
    addressLocality: "Patna",
    addressRegion: "Bihar",
    addressCountry: "IN",
  },
} as const;

/** Absolute paths under `public/` — resolved via metadataBase. */
export const siteImages = {
  /** 1200×630 share card — brand logo on forest ground */
  og: "/og-image.png",
  logo: "/vistaar-logo.png",
  logoDark: "/vistaar-logo-dark.png",
  icon512: "/favicon-512x512.png",
} as const;

const defaultTitle = "Vistar City | Dream Home Maker — Premium Residential Plots in Bihar";

/** Public site origin for metadataBase, OG URLs, and JSON-LD. Set in prod via NEXT_PUBLIC_SITE_URL. */
export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (url) return url.replace(/\/$/, "");
  return "https://vistaarcity.edunexservices.in";
}

const ogImage = {
  url: siteImages.og,
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — ${siteConfig.tagline}`,
  type: "image/png",
} as const;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Vistar City",
    "Vistaar",
    "residential plots Bihar",
    "plots Patna",
    "Muzaffarpur plots",
    "Raxaul land",
    "site visit",
    "plotted development",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Real Estate",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: defaultTitle,
    description: siteConfig.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: siteConfig.description,
    images: [siteImages.og],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-192x192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
};

export function pageMetadata({
  title,
  description,
  path,
  index = true,
}: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
}): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const ogTitle = `${title} | ${siteConfig.name}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title: ogTitle,
      description,
      url: canonical,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [siteImages.og],
    },
    robots: index ? { index: true, follow: true } : { index: false, follow: true },
  };
}

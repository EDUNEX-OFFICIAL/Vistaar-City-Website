import { getSiteUrl, siteConfig, siteImages } from "@/lib/site-metadata";

/** Real fields only — no ratings, no fake address line. */
export default function OrganizationJsonLd() {
  const origin = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.name,
    alternateName: "Vistaar",
    description: siteConfig.description,
    url: origin,
    logo: `${origin}${siteImages.logo}`,
    image: `${origin}${siteImages.og}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: siteConfig.areaServed.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      addressCountry: siteConfig.address.addressCountry,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

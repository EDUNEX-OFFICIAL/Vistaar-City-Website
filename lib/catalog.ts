/** Public marketing catalogue — no prices, counts, or status. */

import type { StaticImageData } from "next/image";
import { brandImages } from "@/lib/brand-images";

export const formLocations = [
  "Patna Region",
  "Muzaffarpur",
  "Raxaul",
  "Gaya",
  "Bhagalpur",
] as const;
export type FormLocation = (typeof formLocations)[number];

export type FeaturedProject = {
  slug: string;
  name: string;
  city: string;
  location: string;
  formLocation: FormLocation;
  shortDescription: string;
  body: string;
  image: StaticImageData;
  imageAlt: string;
  imageClassName?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "vistar-green-city",
    name: "Vistar Green City",
    city: "Patna",
    location: "Patna, Bihar",
    formLocation: "Patna Region",
    shortDescription: "A serene, well-planned plotted development in Patna's growing corridor.",
    body: "Vistar Green City is a plotted development in Patna's growing corridor. Layout, documents and current options are shared when you visit or enquire. This website does not publish live inventory or prices.",
    image: brandImages.heroOriginal,
    imageAlt:
      "Tree-lined road through open land — representative marketing imagery, not a photograph of Vistar Green City.",
  },
  {
    slug: "vistar-enclave",
    name: "Vistar Enclave",
    city: "Muzaffarpur",
    location: "Muzaffarpur, Bihar",
    formLocation: "Muzaffarpur",
    shortDescription: "A well-connected community designed for modern living.",
    body: "Vistar Enclave is a plotted community in Muzaffarpur, planned for people who want a place to build and belong. Ask the team for the current layout and documents — nothing on this page is a quotation.",
    image: brandImages.about,
    imageAlt:
      "Plotted land landscape — representative marketing imagery, not a photograph of Vistar Enclave.",
  },
  {
    slug: "vistar-growth-corridor",
    name: "Vistar Growth Corridor",
    city: "Raxaul",
    location: "Raxaul, Bihar",
    formLocation: "Raxaul",
    shortDescription: "Be part of a high-potential growth zone with strong regional connectivity.",
    body: "Vistar Growth Corridor sits in Raxaul, a regional connection point in north Bihar. Connectivity is the reason to look — not a promise of returns. Visit the site before you decide.",
    image: brandImages.plotVisualization,
    imageAlt:
      "Aerial-style view of open plots and roads — representative marketing imagery, not a photograph of Vistar Growth Corridor.",
    imageClassName: "object-center",
  },
  {
    slug: "vistar-riverside",
    name: "Vistar Riverside",
    city: "Patna",
    location: "Patna Region, Bihar",
    formLocation: "Patna Region",
    shortDescription: "Open plotted land with scenic surroundings for a quieter residential setting.",
    body: "Vistar Riverside is a plotted development in the Patna region. Layout, documents and current options are shared when you visit or enquire. This website does not publish live inventory or prices.",
    image: brandImages.siteVisit,
    imageAlt:
      "Open landscape near water — representative marketing imagery, not a photograph of Vistar Riverside.",
    imageClassName: "object-center",
  },
  {
    slug: "vistar-hillside",
    name: "Vistar Hillside",
    city: "Gaya",
    location: "Gaya, Bihar",
    formLocation: "Gaya",
    shortDescription: "Elevated plotted land planned for a calm, low-density residential feel.",
    body: "Vistar Hillside is a plotted development in Gaya. Visit or enquire for the current layout and documents — nothing on this page is a quotation or guarantee of returns.",
    image: brandImages.heroOriginal,
    imageAlt:
      "Elevated open land — representative marketing imagery, not a photograph of Vistar Hillside.",
    imageClassName: "object-[center_25%]",
  },
  {
    slug: "vistar-prime-estates",
    name: "Vistar Prime Estates",
    city: "Bhagalpur",
    location: "Bhagalpur, Bihar",
    formLocation: "Bhagalpur",
    shortDescription: "A thoughtfully laid-out community for long-term home building plans.",
    body: "Vistar Prime Estates is a plotted development in Bhagalpur. Ask the team for layout and documentation details when you visit or enquire. This website does not publish live inventory or prices.",
    image: brandImages.about,
    imageAlt:
      "Plotted development landscape — representative marketing imagery, not a photograph of Vistar Prime Estates.",
    imageClassName: "object-[center_75%]",
  },
];

export function getProject(slug: string) {
  return featuredProjects.find((project) => project.slug === slug);
}

export const locationNotes = [
  {
    city: "Patna",
    note: "The state capital, and the setting for Vistar Green City and Vistar Riverside.",
  },
  {
    city: "Muzaffarpur",
    note: "A major north Bihar city, and the setting for Vistar Enclave.",
  },
  {
    city: "Raxaul",
    note: "A border and trade connection, and the setting for Vistar Growth Corridor.",
  },
  {
    city: "Gaya",
    note: "The setting for Vistar Hillside.",
  },
  {
    city: "Bhagalpur",
    note: "The setting for Vistar Prime Estates.",
  },
] as const;

/** Public marketing catalogue — approved projects only. No prices, counts, or status. */

export const formLocations = ["Patna Region", "Muzaffarpur", "Raxaul"] as const;
export type FormLocation = (typeof formLocations)[number];

export type FeaturedProject = {
  slug: string;
  name: string;
  city: string;
  location: string;
  formLocation: FormLocation;
  shortDescription: string;
  body: string;
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
  },
  {
    slug: "vistar-enclave",
    name: "Vistar Enclave",
    city: "Muzaffarpur",
    location: "Muzaffarpur, Bihar",
    formLocation: "Muzaffarpur",
    shortDescription: "A well-connected community designed for modern living.",
    body: "Vistar Enclave is a plotted community in Muzaffarpur, planned for people who want a place to build and belong. Ask the team for the current layout and documents — nothing on this page is a quotation.",
  },
  {
    slug: "vistar-growth-corridor",
    name: "Vistar Growth Corridor",
    city: "Raxaul",
    location: "Raxaul, Bihar",
    formLocation: "Raxaul",
    shortDescription: "Be part of a high-potential growth zone with strong regional connectivity.",
    body: "Vistar Growth Corridor sits in Raxaul, a regional connection point in north Bihar. Connectivity is the reason to look — not a promise of returns. Visit the site before you decide.",
  },
];

export function getProject(slug: string) {
  return featuredProjects.find((project) => project.slug === slug);
}

export const locationNotes = [
  {
    city: "Patna",
    note: "The state capital, and the setting for Vistar Green City.",
  },
  {
    city: "Muzaffarpur",
    note: "A major north Bihar city, and the setting for Vistar Enclave.",
  },
  {
    city: "Raxaul",
    note: "A border and trade connection, and the setting for Vistar Growth Corridor.",
  },
] as const;

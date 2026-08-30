import { StaticImageData } from "next/image";
import { brandImages } from "@/lib/brand-images";

const { hero: heroImg, about: aboutImg, plotVisualization: plotVisImg, siteVisit: siteVisitImg } = brandImages;

export type PlotStatus = "Available" | "Reserved" | "Sold";
export type PlotCity = "Patna" | "Muzaffarpur" | "Raxaul";

export type LayoutPlot = {
  id: number;
  plotNumber: string;
  size: string;
  dimensions: string;
  price: string;
  status: PlotStatus;
  facing: string;
  city: PlotCity;
  location: string;
  projectName: string;
  description: string;
  highlights: string[];
  landmarks: string[];
  connectivity: string[];
  mapCoordinates: { lat: number; lng: number };
  gridRow: number;
  gridCol: number;
  image: StaticImageData;
};

export type LocationLayout = {
  city: PlotCity;
  projectName: string;
  description: string;
  backgroundImage: StaticImageData;
  plots: LayoutPlot[];
};

const patnaPlots: Omit<LayoutPlot, "id">[] = [
  {
    plotNumber: "P-101",
    size: "1200 sq.ft.",
    dimensions: "30 x 40 ft",
    price: "14 Lakhs",
    status: "Available",
    facing: "East",
    city: "Patna",
    location: "Vistar Green City, Patna Region",
    projectName: "Vistar Green City",
    description:
      "Plot P-101 in Patna Region offers east-facing orientation with direct internal road access. Ideal for residential construction with strong connectivity to the expanding capital corridor.",
    highlights: ["Corner plot advantage", "NH-31 proximity", "Clear title documentation"],
    landmarks: ["Patna Ring Road – 12 min", "AIIMS Patna – 18 min", "Proposed Metro – 8 min"],
    connectivity: ["Main highway access", "Public transport nearby", "Market within 5 min drive"],
    mapCoordinates: { lat: 25.5941, lng: 85.1376 },
    gridRow: 0,
    gridCol: 0,
    image: heroImg,
  },
  {
    plotNumber: "P-102",
    size: "1350 sq.ft.",
    dimensions: "30 x 45 ft",
    price: "15.5 Lakhs",
    status: "Available",
    facing: "North-East",
    city: "Patna",
    location: "Vistar Green City, Patna Region",
    projectName: "Vistar Green City",
    description:
      "Plot P-102 sits in a premium block of Vistar Green City with wider frontage and open surroundings suitable for a spacious home layout.",
    highlights: ["Wide road frontage", "Park-facing block", "Site visit support"],
    landmarks: ["Danapur Railway – 15 min", "Schools cluster – 10 min", "Hospital zone – 12 min"],
    connectivity: ["Internal 40 ft road", "Electricity provision ready", "Drainage planned"],
    mapCoordinates: { lat: 25.6012, lng: 85.1451 },
    gridRow: 0,
    gridCol: 1,
    image: plotVisImg,
  },
  {
    plotNumber: "P-103",
    size: "1100 sq.ft.",
    dimensions: "25 x 44 ft",
    price: "13 Lakhs",
    status: "Reserved",
    facing: "North",
    city: "Patna",
    location: "Vistar Green City, Patna Region",
    projectName: "Vistar Green City",
    description:
      "Plot P-103 is a well-positioned mid-block plot in Patna with balanced access to community roads and green buffers within the layout.",
    highlights: ["Mid-block positioning", "Green buffer zone", "Affordable entry point"],
    landmarks: ["Local market – 7 min", "Bus stop – 3 min walk", "Community park – adjacent"],
    connectivity: ["Secondary road access", "Water connection point", "Street lighting planned"],
    mapCoordinates: { lat: 25.5889, lng: 85.1298 },
    gridRow: 0,
    gridCol: 2,
    image: siteVisitImg,
  },
  {
    plotNumber: "P-104",
    size: "1500 sq.ft.",
    dimensions: "30 x 50 ft",
    price: "17 Lakhs",
    status: "Available",
    facing: "South-East",
    city: "Patna",
    location: "Vistar Riverside, Patna Region",
    projectName: "Vistar Riverside",
    description:
      "Plot P-104 in Vistar Riverside offers a larger format plot with scenic surroundings and strong long-term residential demand in Patna Region.",
    highlights: ["Large plot format", "Scenic surroundings", "Premium block"],
    landmarks: ["River belt – 5 min", "Weekend home zone", "Resort corridor nearby"],
    connectivity: ["Scenic drive from Patna", "Wide entry road", "Visitor centre on-site"],
    mapCoordinates: { lat: 25.5765, lng: 85.1124 },
    gridRow: 0,
    gridCol: 3,
    image: heroImg,
  },
  {
    plotNumber: "P-105",
    size: "1000 sq.ft.",
    dimensions: "25 x 40 ft",
    price: "12 Lakhs",
    status: "Sold",
    facing: "West",
    city: "Patna",
    location: "Vistar Green City, Patna Region",
    projectName: "Vistar Green City",
    description:
      "Plot P-105 was a compact residential plot suitable for first-time home builders. Contact our team for similar available options in Patna Region.",
    highlights: ["Compact home suitable", "Budget-friendly", "High demand block"],
    landmarks: ["Main gate – 2 min", "Project office – on-site", "Security checkpoint"],
    connectivity: ["Primary internal road", "Plot marking done", "Layout demarcated"],
    mapCoordinates: { lat: 25.6098, lng: 85.1523 },
    gridRow: 0,
    gridCol: 4,
    image: aboutImg,
  },
];

const muzaffarpurPlots: Omit<LayoutPlot, "id">[] = [
  {
    plotNumber: "M-201",
    size: "1400 sq.ft.",
    dimensions: "35 x 40 ft",
    price: "15 Lakhs",
    status: "Available",
    facing: "East",
    city: "Muzaffarpur",
    location: "Vistar Enclave, Muzaffarpur",
    projectName: "Vistar Enclave",
    description:
      "Plot M-201 in Muzaffarpur is part of Vistar Enclave — a gated layout designed for families planning long-term residential growth in the commercial hub.",
    highlights: ["Gated layout", "Premium corner option", "Documentation support"],
    landmarks: ["City centre – 20 min", "Railway station – 15 min", "Main bazaar – 12 min"],
    connectivity: ["Main road frontage", "Hospital nearby", "Schools within 3 km"],
    mapCoordinates: { lat: 26.1209, lng: 85.3647 },
    gridRow: 0,
    gridCol: 0,
    image: aboutImg,
  },
  {
    plotNumber: "M-202",
    size: "1600 sq.ft.",
    dimensions: "32 x 50 ft",
    price: "16.5 Lakhs",
    status: "Available",
    facing: "North",
    city: "Muzaffarpur",
    location: "Vistar Enclave, Muzaffarpur",
    projectName: "Vistar Enclave",
    description:
      "Plot M-202 offers a larger residential format in Muzaffarpur with excellent ventilation and practical road access for construction vehicles.",
    highlights: ["Large format plot", "Park area nearby", "Water connection points"],
    landmarks: ["Commercial hub – 10 min", "Bus depot – 8 min", "College zone – 6 min"],
    connectivity: ["40 ft internal road", "Electricity provision", "Security planning"],
    mapCoordinates: { lat: 26.1284, lng: 85.3712 },
    gridRow: 0,
    gridCol: 1,
    image: plotVisImg,
  },
  {
    plotNumber: "M-203",
    size: "1200 sq.ft.",
    dimensions: "30 x 40 ft",
    price: "14 Lakhs",
    status: "Available",
    facing: "South-East",
    city: "Muzaffarpur",
    location: "Vistar Enclave, Muzaffarpur",
    projectName: "Vistar Enclave",
    description:
      "Plot M-203 is a balanced mid-size option in Muzaffarpur suitable for both home building and investment in a rapidly developing area.",
    highlights: ["Balanced plot size", "Open surroundings", "Site visit assistance"],
    landmarks: ["Industrial zone – 15 min", "Medical college – 12 min", "Local market – 5 min"],
    connectivity: ["Secondary road access", "Community open space", "Clear boundaries"],
    mapCoordinates: { lat: 26.1156, lng: 85.3589 },
    gridRow: 0,
    gridCol: 2,
    image: siteVisitImg,
  },
  {
    plotNumber: "M-204",
    size: "1800 sq.ft.",
    dimensions: "36 x 50 ft",
    price: "18 Lakhs",
    status: "Reserved",
    facing: "North-East",
    city: "Muzaffarpur",
    location: "Vistar Enclave, Muzaffarpur",
    projectName: "Vistar Enclave",
    description:
      "Plot M-204 is one of the largest plots in the Muzaffarpur layout — ideal for buyers seeking premium space and flexible home design options.",
    highlights: ["Premium large plot", "Dual road access", "High visibility block"],
    landmarks: ["Highway junction – 8 min", "Shopping complex – 10 min", "Temple town road"],
    connectivity: ["Corner positioning", "Wide frontage", "Premium block allocation"],
    mapCoordinates: { lat: 26.1331, lng: 85.3498 },
    gridRow: 0,
    gridCol: 3,
    image: aboutImg,
  },
  {
    plotNumber: "M-205",
    size: "1100 sq.ft.",
    dimensions: "25 x 44 ft",
    price: "13.5 Lakhs",
    status: "Available",
    facing: "West",
    city: "Muzaffarpur",
    location: "Vistar Enclave, Muzaffarpur",
    projectName: "Vistar Enclave",
    description:
      "Plot M-205 provides an affordable entry into Muzaffarpur's plotted development market with full project information and purchase guidance.",
    highlights: ["Budget-friendly", "Clear documentation", "Training support for buyers"],
    landmarks: ["Project entry gate", "On-site sales office", "Demo plot zone"],
    connectivity: ["Internal pathway access", "Street lighting", "Layout signage"],
    mapCoordinates: { lat: 26.1078, lng: 85.3721 },
    gridRow: 0,
    gridCol: 4,
    image: heroImg,
  },
];

const raxaulPlots: Omit<LayoutPlot, "id">[] = [
  {
    plotNumber: "R-301",
    size: "1500 sq.ft.",
    dimensions: "30 x 50 ft",
    price: "16 Lakhs",
    status: "Available",
    facing: "East",
    city: "Raxaul",
    location: "Vistar Growth Corridor, Raxaul",
    projectName: "Vistar Growth Corridor",
    description:
      "Plot R-301 in Raxaul is positioned along the strategic growth corridor with excellent trade route connectivity and future appreciation potential.",
    highlights: ["Trade corridor access", "Border hub proximity", "Investment suitable"],
    landmarks: ["Border trade route – 10 min", "Rail link – 12 min", "Highway NH-28 – 5 min"],
    connectivity: ["Highway connectivity", "Industrial hub nearby", "Future commercial zone"],
    mapCoordinates: { lat: 26.9784, lng: 84.8528 },
    gridRow: 0,
    gridCol: 0,
    image: plotVisImg,
  },
  {
    plotNumber: "R-302",
    size: "2000 sq.ft.",
    dimensions: "40 x 50 ft",
    price: "19 Lakhs",
    status: "Available",
    facing: "North",
    city: "Raxaul",
    location: "Vistar Growth Corridor, Raxaul",
    projectName: "Vistar Growth Corridor",
    description:
      "Plot R-302 is a large-format plot in Raxaul suitable for residential or commercial edge use in this emerging regional hub.",
    highlights: ["Large plot size", "Commercial edge zone", "Master plan layout"],
    landmarks: ["Customs area – 15 min", "Bus stand – 8 min", "Market road – 6 min"],
    connectivity: ["Dual road access", "Electricity provision", "Community open space"],
    mapCoordinates: { lat: 26.9856, lng: 84.8612 },
    gridRow: 0,
    gridCol: 1,
    image: heroImg,
  },
  {
    plotNumber: "R-303",
    size: "1300 sq.ft.",
    dimensions: "32 x 41 ft",
    price: "15 Lakhs",
    status: "Reserved",
    facing: "South-East",
    city: "Raxaul",
    location: "Vistar Growth Corridor, Raxaul",
    projectName: "Vistar Growth Corridor",
    description:
      "Plot R-303 offers mid-size residential opportunity in Raxaul with clear demarcation and structured purchase process support.",
    highlights: ["Structured layout", "Affordable pricing", "Documentation guidance"],
    landmarks: ["Growth corridor entry", "Project milestone board", "Site office"],
    connectivity: ["Internal 30 ft road", "Plot marking complete", "Drainage planning"],
    mapCoordinates: { lat: 26.9712, lng: 84.8445 },
    gridRow: 0,
    gridCol: 2,
    image: aboutImg,
  },
  {
    plotNumber: "R-304",
    size: "1700 sq.ft.",
    dimensions: "34 x 50 ft",
    price: "17.5 Lakhs",
    status: "Available",
    facing: "North-East",
    city: "Raxaul",
    location: "Vistar Growth Corridor, Raxaul",
    projectName: "Vistar Growth Corridor",
    description:
      "Plot R-304 is a premium block plot in Raxaul with strong road visibility and suitability for long-term land investment.",
    highlights: ["Premium visibility", "Wide frontage", "New launch block"],
    landmarks: ["Trade hub – 12 min", "Warehousing zone – 10 min", "Future SEZ corridor"],
    connectivity: ["Primary corridor road", "Security planning", "Visitor parking zone"],
    mapCoordinates: { lat: 26.9923, lng: 84.8698 },
    gridRow: 0,
    gridCol: 3,
    image: siteVisitImg,
  },
  {
    plotNumber: "R-305",
    size: "1200 sq.ft.",
    dimensions: "30 x 40 ft",
    price: "14.5 Lakhs",
    status: "Sold",
    facing: "West",
    city: "Raxaul",
    location: "Vistar Growth Corridor, Raxaul",
    projectName: "Vistar Growth Corridor",
    description:
      "Plot R-305 was sold quickly due to high demand in Raxaul corridor. Enquire for similar available plots in the same layout block.",
    highlights: ["High demand zone", "Quick sale block", "Similar plots available"],
    landmarks: ["Layout block C", "Green belt adjacent", "Internal roundabout"],
    connectivity: ["Secondary access road", "Street lighting planned", "Signage installed"],
    mapCoordinates: { lat: 26.9645, lng: 84.8576 },
    gridRow: 0,
    gridCol: 4,
    image: plotVisImg,
  },
];

function assignIds(plots: Omit<LayoutPlot, "id">[], startId: number): LayoutPlot[] {
  return plots.map((plot, i) => ({ ...plot, id: startId + i }));
}

export const locationLayouts: LocationLayout[] = [
  {
    city: "Patna",
    projectName: "Vistar Green City & Riverside",
    description: "Explore plotted layouts across Patna Region with capital corridor connectivity.",
    backgroundImage: heroImg,
    plots: assignIds(patnaPlots, 0),
  },
  {
    city: "Muzaffarpur",
    projectName: "Vistar Enclave",
    description: "Residential plots in Muzaffarpur's growing commercial and residential hub.",
    backgroundImage: aboutImg,
    plots: assignIds(muzaffarpurPlots, 10),
  },
  {
    city: "Raxaul",
    projectName: "Vistar Growth Corridor",
    description: "Strategic land opportunities along Raxaul's trade and transport corridor.",
    backgroundImage: plotVisImg,
    plots: assignIds(raxaulPlots, 20),
  },
];

export const layoutPlots: LayoutPlot[] = locationLayouts.flatMap((l) => l.plots);

export function getLayoutPlot(id: number): LayoutPlot | undefined {
  return layoutPlots.find((p) => p.id === id);
}

export function getLocationLayout(city: PlotCity): LocationLayout {
  return locationLayouts.find((l) => l.city === city)!;
}

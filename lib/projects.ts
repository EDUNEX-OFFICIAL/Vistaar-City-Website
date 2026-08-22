import { StaticImageData } from "next/image";
import heroImg from "@/src/assets/images/hero_plotted_land_1787334586455.jpg";
import aboutImg from "@/src/assets/images/about_plotted_land_1787334600089.jpg";
import plotVisImg from "@/src/assets/images/plot_visualization_1787334635864.jpg";
import siteVisitImg from "@/src/assets/images/site_visit_1787334650040.jpg";

export type Project = {
  id: number;
  name: string;
  location: string;
  desc: string;
  fullDescription: string;
  sizes: string;
  price: string;
  status: "Available" | "Fast Filling" | "New Launch" | "Limited";
  image: StaticImageData | string;
  imageClass?: string;
  amenities: string[];
  connectivity: string[];
  totalPlots: number;
  availablePlots: number;
  launchYear: string;
  plotTypes: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Vistar Green City",
    location: "Patna Region",
    desc: "Residential plots surrounded by developing infrastructure and road connectivity.",
    fullDescription:
      "Vistar Green City offers thoughtfully planned residential plots in the expanding Patna region. The project features wide internal roads, green buffers, and clear plot demarcation. Ideal for families planning to build their dream home or investors seeking land in a high-growth corridor.",
    sizes: "800 - 1500 sq.ft.",
    price: "12.5 Lakhs",
    status: "Available",
    image: heroImg,
    amenities: ["Internal Roads", "Street Lighting", "Drainage Planning", "Green Zones"],
    connectivity: ["NH-31 Access", "15 min from Patna Ring Road", "Near upcoming metro corridor"],
    totalPlots: 120,
    availablePlots: 68,
    launchYear: "2024",
    plotTypes: ["Residential", "Corner Plots"],
  },
  {
    id: 2,
    name: "Vistar Enclave",
    location: "Muzaffarpur",
    desc: "Residential plotting project designed for future homes and planned development.",
    fullDescription:
      "Vistar Enclave is a premium plotted development in Muzaffarpur designed for long-term residential growth. Each plot comes with verified documentation support and site visit assistance. The layout prioritizes sunlight, ventilation, and practical road access for every plot.",
    sizes: "1000 - 2000 sq.ft.",
    price: "15 Lakhs",
    status: "Fast Filling",
    image: aboutImg,
    amenities: ["Gated Layout", "Water Connection Points", "Park Area", "Security Planning"],
    connectivity: ["City centre 20 min", "Hospital & schools nearby", "Main road frontage"],
    totalPlots: 85,
    availablePlots: 22,
    launchYear: "2023",
    plotTypes: ["Residential", "Premium Corner"],
  },
  {
    id: 3,
    name: "Vistar Growth Corridor",
    location: "Raxaul",
    desc: "Plots positioned around a developing regional growth area with excellent connectivity.",
    fullDescription:
      "Located along a strategic trade and transport corridor, Vistar Growth Corridor presents land opportunities in one of Bihar's emerging hubs. The project suits buyers looking for affordable entry points with strong future appreciation potential.",
    sizes: "1200 - 2500 sq.ft.",
    price: "18 Lakhs",
    status: "New Launch",
    image: plotVisImg,
    imageClass: "object-center",
    amenities: ["Master Plan Layout", "Electricity Provision", "Community Open Space"],
    connectivity: ["Border trade route access", "Highway connectivity", "Rail link nearby"],
    totalPlots: 200,
    availablePlots: 175,
    launchYear: "2025",
    plotTypes: ["Residential", "Commercial Edge"],
  },
  {
    id: 4,
    name: "Vistar Riverside",
    location: "Patna Region",
    desc: "Open plotted land with scenic surroundings and strong future residential demand.",
    fullDescription:
      "Vistar Riverside combines natural surroundings with planned urban expansion. Plots are laid out to maximize views and accessibility, making it a preferred choice for weekend homes and primary residential construction alike.",
    sizes: "900 - 1800 sq.ft.",
    price: "14 Lakhs",
    status: "Available",
    image: siteVisitImg,
    imageClass: "object-center",
    amenities: ["River-side Green Belt", "Wide Entry Road", "Plot Marking", "Visitor Centre"],
    connectivity: ["Scenic drive from Patna", "Public transport access", "Market within 10 min"],
    totalPlots: 95,
    availablePlots: 54,
    launchYear: "2024",
    plotTypes: ["Residential", "Weekend Homes"],
  },
  {
    id: 5,
    name: "Vistar Hillside",
    location: "Gaya",
    desc: "Elevated plotted land with panoramic views and peaceful residential environment.",
    fullDescription:
      "Vistar Hillside offers elevated residential plots in Gaya with a calm, low-density environment. The project is suited for buyers who value privacy, open space, and a slower-paced lifestyle while staying connected to city essentials.",
    sizes: "1100 - 2200 sq.ft.",
    price: "16 Lakhs",
    status: "Limited",
    image: heroImg,
    imageClass: "object-[center_25%]",
    amenities: ["Elevated Terrain", "Natural Landscaping", "Internal Pathways"],
    connectivity: ["Gaya city 25 min", "Pilgrimage route access", "Schools & clinics nearby"],
    totalPlots: 60,
    availablePlots: 14,
    launchYear: "2024",
    plotTypes: ["Residential", "Premium Hillside"],
  },
  {
    id: 6,
    name: "Vistar Prime Estates",
    location: "Bhagalpur",
    desc: "Premium plotted development for long-term home building and investment planning.",
    fullDescription:
      "Vistar Prime Estates is designed for discerning buyers seeking larger plot sizes and a well-organized community layout in Bhagalpur. Full documentation guidance and dedicated relationship support are included throughout the purchase journey.",
    sizes: "1500 - 3000 sq.ft.",
    price: "22 Lakhs",
    status: "New Launch",
    image: aboutImg,
    imageClass: "object-[center_75%]",
    amenities: ["Large Plot Sizes", "Clubhouse Zone", "Underground Utilities Plan"],
    connectivity: ["NH connectivity", "Industrial hub proximity", "Airport within 2 hrs"],
    totalPlots: 75,
    availablePlots: 61,
    launchYear: "2025",
    plotTypes: ["Residential", "Investment", "Large Format"],
  },
];

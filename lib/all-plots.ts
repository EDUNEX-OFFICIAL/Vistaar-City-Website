import { StaticImageData } from "next/image";
import heroImg from "@/src/assets/images/hero_plotted_land_1787334586455.jpg";
import aboutImg from "@/src/assets/images/about_plotted_land_1787334600089.jpg";
import plotVisImg from "@/src/assets/images/plot_visualization_1787334635864.jpg";
import siteVisitImg from "@/src/assets/images/site_visit_1787334650040.jpg";

export type PlotCity = "Patna" | "Muzaffarpur" | "Raxaul";
export type PlotStatus = "Available" | "Reserved" | "Sold";

export type SalesContact = {
  name: string;
  role: string;
  phone: string;
  email: string;
  whatsapp: string;
};

export type PlotRecord = {
  id: string;
  plotNumber: string;
  city: PlotCity;
  block: string;
  sector: string;
  size: string;
  dimensions: string;
  price: string;
  pricePerSqFt: string;
  status: PlotStatus;
  facing: string;
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
  salesContact: SalesContact;
  soldBy: string;
  registrationStatus: string;
  possessionTimeline: string;
};

export const PLOTS_PER_CITY = 199;

const images = [heroImg, aboutImg, plotVisImg, siteVisitImg];
const facings = ["East", "North", "West", "South", "North-East", "South-East"];
const sizes = ["800 sq.ft.", "1000 sq.ft.", "1100 sq.ft.", "1200 sq.ft.", "1350 sq.ft.", "1500 sq.ft.", "1800 sq.ft.", "2000 sq.ft."];
const dimensions = ["25 x 32 ft", "25 x 40 ft", "30 x 40 ft", "30 x 45 ft", "35 x 40 ft", "30 x 50 ft", "36 x 50 ft", "40 x 50 ft"];
const prices = ["11 Lakhs", "12.5 Lakhs", "13.5 Lakhs", "14 Lakhs", "15.5 Lakhs", "17 Lakhs", "18.5 Lakhs", "21 Lakhs"];
const pricePerSqFt = ["₹ 950", "₹ 1,050", "₹ 1,100", "₹ 1,150", "₹ 1,200", "₹ 1,250", "₹ 1,300", "₹ 1,400"];

export const cityConfigs = [
  {
    city: "Patna" as PlotCity,
    prefix: "P",
    projectName: "Vistar Green City",
    location: "Patna Region, Bihar",
    blocks: ["A", "B", "C", "D", "E", "F", "G", "H"],
    baseCoords: { lat: 25.5941, lng: 85.1376 },
    salesContact: {
      name: "Rajesh Kumar",
      role: "Patna Regional Sales Manager",
      phone: "+91 99050 06838",
      email: "patna@vistarcity.com",
      whatsapp: "+91 99050 06838",
    },
    soldBy: "Vistar City — Patna Authorised Sales Desk",
  },
  {
    city: "Muzaffarpur" as PlotCity,
    prefix: "M",
    projectName: "Vistar Enclave",
    location: "Muzaffarpur, Bihar",
    blocks: ["A", "B", "C", "D", "E", "F"],
    baseCoords: { lat: 26.1209, lng: 85.3647 },
    salesContact: {
      name: "Priya Sharma",
      role: "Muzaffarpur Sales Coordinator",
      phone: "+91 99050 06838",
      email: "muzaffarpur@vistarcity.com",
      whatsapp: "+91 99050 06838",
    },
    soldBy: "Vistar City — Muzaffarpur Authorised Sales Desk",
  },
  {
    city: "Raxaul" as PlotCity,
    prefix: "R",
    projectName: "Vistar Growth Corridor",
    location: "Raxaul, Bihar",
    blocks: ["A", "B", "C", "D", "E"],
    baseCoords: { lat: 26.9784, lng: 84.8528 },
    salesContact: {
      name: "Amit Singh",
      role: "Raxaul Corridor Sales Lead",
      phone: "+91 99050 06838",
      email: "raxaul@vistarcity.com",
      whatsapp: "+91 99050 06838",
    },
    soldBy: "Vistar City — Raxaul Authorised Sales Desk",
  },
];

export const headOfficeContact = {
  name: "Vistar City Corporate Office",
  role: "Central Plot Enquiry & Documentation Desk",
  phone: "+91 99050 06838",
  email: "info@vistarcity.com",
  whatsapp: "+91 99050 06838",
  address: "Vistar City Corporate Office, Patna, Bihar, India",
  hours: "Mon – Sat: 9:00 AM – 7:00 PM | Sunday: 10:00 AM – 4:00 PM",
};

function getStatus(index: number): PlotStatus {
  const mod = index % 10;
  if (mod === 0 || mod === 1) return "Sold";
  if (mod === 2 || mod === 3) return "Reserved";
  return "Available";
}

function generateCityPlots(config: (typeof cityConfigs)[0]): PlotRecord[] {
  return Array.from({ length: PLOTS_PER_CITY }, (_, i) => {
    const num = i + 1;
    const idx = i % sizes.length;
    const block = config.blocks[i % config.blocks.length];
    const sector = String(Math.floor(i / 25) + 1);
    const plotNumber = `${config.prefix}-${String(num).padStart(3, "0")}`;
    const status = getStatus(i);

    return {
      id: `${config.city}-${plotNumber}`,
      plotNumber,
      city: config.city,
      block,
      sector,
      size: sizes[idx],
      dimensions: dimensions[idx],
      price: prices[idx],
      pricePerSqFt: pricePerSqFt[idx],
      status,
      facing: facings[i % facings.length],
      location: `${config.projectName}, ${config.location}`,
      projectName: config.projectName,
      description: `Plot ${plotNumber} is a ${sizes[idx]} ${status.toLowerCase()} residential plot in Block ${block}, Sector ${sector} at ${config.projectName}, ${config.city}. This plot offers ${facings[i % facings.length]}-facing orientation with internal road access, demarcated boundaries, and full sales support from the authorised Vistar City desk in ${config.city}.`,
      highlights: [
        `Block ${block}, Sector ${sector}`,
        `${facings[i % facings.length]}-facing plot`,
        "Clear demarcation & layout plan",
        "Documentation guidance included",
        status === "Available" ? "Immediate enquiry open" : `Status: ${status}`,
      ],
      landmarks: [
        `${config.city} main market – ${8 + (i % 12)} min`,
        `Nearest hospital – ${10 + (i % 10)} min`,
        `Highway access – ${5 + (i % 8)} min`,
      ],
      connectivity: [
        "Internal paved road access",
        "Electricity & water provision points",
        "Public transport within reach",
        "Site visit assistance available",
      ],
      mapCoordinates: {
        lat: config.baseCoords.lat + (i % 20) * 0.0012,
        lng: config.baseCoords.lng + (i % 15) * 0.001,
      },
      gridRow: Math.floor((i % 25) / 5),
      gridCol: i % 5,
      image: images[i % images.length],
      salesContact: config.salesContact,
      soldBy: config.soldBy,
      registrationStatus: status === "Sold" ? "Registered & Transferred" : status === "Reserved" ? "Token Received — Under Process" : "Open for Registration",
      possessionTimeline: status === "Sold" ? "Completed" : "Ready for documentation after booking",
    };
  });
}

export const plotsByCity: Record<PlotCity, PlotRecord[]> = {
  Patna: generateCityPlots(cityConfigs[0]),
  Muzaffarpur: generateCityPlots(cityConfigs[1]),
  Raxaul: generateCityPlots(cityConfigs[2]),
};

export const allPlots: PlotRecord[] = [
  ...plotsByCity.Patna,
  ...plotsByCity.Muzaffarpur,
  ...plotsByCity.Raxaul,
];

export function getPlotById(id: string): PlotRecord | undefined {
  return allPlots.find((p) => p.id === id);
}

export function getCityPlotStats(city: PlotCity) {
  const plots = plotsByCity[city];
  return {
    total: plots.length,
    available: plots.filter((p) => p.status === "Available").length,
    reserved: plots.filter((p) => p.status === "Reserved").length,
    sold: plots.filter((p) => p.status === "Sold").length,
  };
}

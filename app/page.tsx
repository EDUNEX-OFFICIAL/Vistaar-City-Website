import type { Metadata } from "next";
import HomeHero from "@/components/home/HomeHero";
import TrustRail from "@/components/home/TrustRail";
import BrandStory from "@/components/home/BrandStory";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import BiharOpportunity from "@/components/home/BiharOpportunity";
import LifestyleStory from "@/components/home/LifestyleStory";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: {
    absolute: "Vistar City | Dream Home Maker — Premium Residential Plots in Bihar",
  },
  description:
    "Discover thoughtfully planned residential plots in Bihar's growing corridors. Explore Vistar City projects in Patna, Muzaffarpur and Raxaul, and book a site visit.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustRail />
      <BrandStory />
      <FeaturedProjects />
      <BiharOpportunity />
      <LifestyleStory />
      <FinalCTA />
    </>
  );
}

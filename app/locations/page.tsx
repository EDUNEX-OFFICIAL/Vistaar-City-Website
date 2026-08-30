import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import PageShell from "@/components/layout/PageShell";
import LocationsSection from "@/components/sections/LocationsSection";
import LocationFactorsSection from "@/components/sections/LocationFactorsSection";
import NextStepCta from "@/components/sections/NextStepCta";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Locations",
  description:
    "Vistar City plotted developments in Patna region, Muzaffarpur, Raxaul and upcoming growth corridors across Bihar.",
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <PageShell>
      <PageBanner
        eyebrow="Where We Build"
        title="Our Locations"
        description="Strategically selected corridors across Bihar — from the capital region to emerging border and industrial growth areas."
      />
      <LocationsSection />
      <LocationFactorsSection />
      <NextStepCta title="Looking In One Of These Areas?" />
    </PageShell>
  );
}

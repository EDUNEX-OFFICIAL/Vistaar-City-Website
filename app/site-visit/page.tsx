import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import PageShell from "@/components/layout/PageShell";
import SiteVisitSection from "@/components/sections/SiteVisitSection";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Schedule a Site Visit",
  description:
    "Request a site visit with Vistar City. Experience the location, surroundings, and plot options with our team on the ground.",
  path: "/site-visit",
});

export default function SiteVisitPage() {
  return (
    <PageShell>
      <PageBanner
        eyebrow="Experience"
        title="Schedule a Site Visit"
        description="Visit the project, understand the surroundings, and explore your options before you decide."
      />
      <SiteVisitSection />
    </PageShell>
  );
}

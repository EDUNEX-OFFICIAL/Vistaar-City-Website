import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import HomeContent from "@/components/HomeContent";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Residential Plots & Land Projects in Bihar",
  description:
    "Discover residential plots in Patna, Muzaffarpur, Raxaul and growing Bihar corridors. Schedule a site visit or send an enquiry to Vistar City.",
  path: "/",
});

export default function Home() {
  return (
    <PageShell>
      <HomeContent />
    </PageShell>
  );
}

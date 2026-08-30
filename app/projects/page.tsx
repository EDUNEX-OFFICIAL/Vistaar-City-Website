import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import PageShell from "@/components/layout/PageShell";
import ProjectsSection from "@/components/ProjectsSection";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description:
    "Explore featured plotting projects from Vistar City across Patna, Muzaffarpur, Raxaul and other Bihar locations.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageBanner
        eyebrow="Properties"
        title="Featured Plotting Projects"
        description="Find land in locations that match your plans, lifestyle and budget."
      />
      <ProjectsSection />
    </PageShell>
  );
}

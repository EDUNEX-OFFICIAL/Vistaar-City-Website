import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ProjectCard from "@/components/projects/ProjectCard";
import { featuredProjects } from "@/lib/catalog";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description: "Explore Vistar Green City in Patna, Vistar Enclave in Muzaffarpur, and Vistar Growth Corridor in Raxaul.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our projects"
        title="Three places to begin."
        lede="Published projects only. Prices and availability are not listed here — ask when you visit or enquire."
      />
      <section className="section-pad bg-ivory">
        <div className="site-wrap grid gap-12 md:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}

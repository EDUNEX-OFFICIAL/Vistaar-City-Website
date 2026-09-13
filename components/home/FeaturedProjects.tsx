import ProjectCard from "@/components/projects/ProjectCard";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { featuredProjects } from "@/lib/catalog";
import { routes } from "@/lib/routes";

export default function FeaturedProjects() {
  return (
    <section id="explore" className="section-pad bg-ivory-100">
      <div className="site-wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionEyebrow>Our projects</SectionEyebrow>
            <h2 className="font-serif text-[2.4rem] leading-[1.05] text-forest-950 md:text-6xl">
              Thoughtfully planned. Beautifully located.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-charcoal/80">
              From Patna to Muzaffarpur to Raxaul, our projects are located in growth corridors with strong
              connectivity, modern infrastructure and long-term potential.
            </p>
          </div>
          <Button href={routes.projects} variant="ghost" className="shrink-0">
            View all projects
          </Button>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

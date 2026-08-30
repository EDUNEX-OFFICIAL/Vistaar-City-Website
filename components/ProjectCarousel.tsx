"use client";

import type { KeyboardEvent } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import type { Project } from "@/lib/projects";
import { projectStatusStyles } from "@/lib/modal-styles";

type ProjectCarouselProps = {
  projects: Project[];
  onSelect: (project: Project) => void;
};

function ProjectCard({ project, onSelect }: { project: Project; onSelect: () => void }) {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect();
    }
  };

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      aria-label={`View details for ${project.name}, ${project.location}`}
      className="group flex w-[85vw] max-w-[320px] shrink-0 cursor-pointer snap-start flex-col overflow-hidden rounded-sm border border-sand-200 bg-ivory shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-900 focus-visible:ring-offset-2 sm:w-[320px] md:w-[360px]"
    >
      <div className="relative h-44 overflow-hidden bg-sand-200 sm:h-48">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-forest-900/75 to-transparent" />
        <Image
          src={project.image}
          alt={project.name}
          fill
          className={`z-0 object-cover transition-transform duration-700 group-hover:scale-105 ${project.imageClass ?? "object-center"}`}
          sizes="(max-width: 768px) 85vw, 360px"
        />
        <div className="absolute left-0 top-0 z-20 h-0.5 w-full bg-gold" aria-hidden />
        <div className={`absolute left-4 top-4 z-20 rounded-sm px-2 py-0.5 text-[10px] font-bold tracking-wider ${projectStatusStyles[project.status]}`}>
          {project.status.toUpperCase()}
        </div>
        <div className="absolute bottom-4 left-4 z-20">
          <div className="mb-1 font-serif text-base font-semibold text-ivory sm:text-lg">{project.name}</div>
          <div className="flex items-center gap-1 text-xs font-medium text-ivory/90">
            <MapPin className="h-3 w-3" aria-hidden />
            {project.location}
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
        <p className="mb-4 flex-1 text-xs leading-relaxed text-charcoal/70 sm:mb-5">{project.desc}</p>
        <div className="mb-4 grid grid-cols-2 gap-y-3 text-xs sm:mb-5">
          <div className="text-charcoal/50">Plot Sizes</div>
          <div className="text-right font-semibold text-charcoal">{project.sizes}</div>
          <div className="text-charcoal/50">Starting Price</div>
          <div className="text-right font-semibold text-forest-900">₹ {project.price}*</div>
        </div>
        <div className="mt-auto flex gap-2 border-t border-sand-200 pt-4">
          <span className="flex-1 rounded-sm border border-forest-800 py-2.5 text-center text-[10px] font-bold uppercase tracking-wider text-forest-800 transition-colors group-hover:bg-forest-900/5 sm:text-xs">
            View Map
          </span>
          <span className="flex-1 rounded-sm bg-forest-800 py-2.5 text-center text-[10px] font-bold uppercase tracking-wider text-ivory transition-colors group-hover:bg-forest-900 sm:text-xs">
            Enquire
          </span>
        </div>
      </div>
    </article>
  );
}

export default function ProjectCarousel({ projects, onSelect }: ProjectCarouselProps) {
  const loopProjects = [...projects, ...projects];

  return (
    <>
      <div className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:hidden">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={() => onSelect(project)}
          />
        ))}
      </div>

      <div className="project-carousel-mask relative -mx-4 hidden md:-mx-8 md:block">
        <div className="project-carousel-track flex w-max gap-6 px-4 md:px-8">
          {loopProjects.map((project, index) => (
            <ProjectCard
              key={`${project.id}-${index}`}
              project={project}
              onSelect={() => onSelect(project)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

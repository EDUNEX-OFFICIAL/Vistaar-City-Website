"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import type { Project } from "@/lib/projects";

type ProjectCarouselProps = {
  projects: Project[];
  onSelect: (project: Project) => void;
};

function ProjectCard({ project, onSelect }: { project: Project; onSelect: () => void }) {
  return (
    <article
      onClick={onSelect}
      className="group flex w-[85vw] max-w-[320px] shrink-0 cursor-pointer snap-start flex-col overflow-hidden rounded-sm border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg sm:w-[320px] md:w-[360px]"
    >
      <div className="relative h-44 sm:h-48 overflow-hidden bg-gray-200">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent" />
        <Image
          src={project.image}
          alt={project.name}
          fill
          className={`z-0 object-cover transition-transform duration-700 group-hover:scale-105 ${project.imageClass ?? "object-center"}`}
          sizes="(max-width: 768px) 85vw, 360px"
        />
        <div className="absolute left-4 top-4 z-20 rounded-sm bg-forest-600 px-2 py-0.5 text-[10px] font-bold tracking-wider text-white">
          {project.status.toUpperCase()}
        </div>
        <div className="absolute bottom-4 left-4 z-20">
          <div className="mb-1 text-base sm:text-lg font-bold text-white">{project.name}</div>
          <div className="flex items-center gap-1 text-xs font-medium text-white/80">
            <MapPin className="h-3 w-3" />
            {project.location}
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between p-4 sm:p-6">
        <p className="mb-4 sm:mb-5 flex-1 text-xs leading-relaxed text-gray-500">{project.desc}</p>
        <div className="mb-4 sm:mb-5 grid grid-cols-2 gap-y-3 text-xs">
          <div className="text-gray-400">Plot Sizes:</div>
          <div className="text-right font-bold text-charcoal">{project.sizes}</div>
          <div className="text-gray-400">Starting Price:</div>
          <div className="text-right font-bold text-forest-900">₹ {project.price}*</div>
        </div>
        <div className="mt-auto flex gap-2 border-t border-gray-50 pt-4">
          <span className="flex-1 rounded-sm border border-forest-900 py-2.5 text-center text-[10px] sm:text-xs font-bold uppercase tracking-wider text-forest-900 transition-colors group-hover:bg-forest-50">
            View Map
          </span>
          <span className="flex-1 rounded-sm bg-forest-900 py-2.5 text-center text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white transition-colors group-hover:bg-forest-800">
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

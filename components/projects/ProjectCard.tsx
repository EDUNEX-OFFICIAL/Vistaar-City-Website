"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import DreamScene from "@/components/brand/DreamScene";
import { analyticsEvents, trackEvent } from "@/lib/analytics";
import type { FeaturedProject } from "@/lib/catalog";
import { routes } from "@/lib/routes";

const focuses = ["field", "home", "hills"] as const;

export default function ProjectCard({ project, index }: { project: FeaturedProject; index: number }) {
  return (
    <article className="group">
      <Link
        href={`${routes.projects}/${project.slug}`}
        onClick={() => trackEvent(analyticsEvents.projectCta, { project: project.slug })}
        className="block"
      >
        <div className="relative aspect-video overflow-hidden rounded-md bg-forest-950">
          <DreamScene
            focus={focuses[index % focuses.length]}
            className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none"
          />
          <p className="absolute bottom-3 left-3 text-[12px] text-ivory/85">Illustrated · not a site photo</p>
        </div>
        <div className="pt-5">
          <h3 className="font-serif text-[1.7rem] text-forest-950">{project.name}</h3>
          <p className="mt-1 text-sm text-muted">{project.location}</p>
          <p className="mt-3 text-base leading-relaxed text-charcoal/80">{project.shortDescription}</p>
          <p className="mt-4 text-[13px] text-muted">Plotted development · {project.city}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-forest-950">
            Explore Project
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]"
              strokeWidth={1.6}
              aria-hidden
            />
          </span>
        </div>
      </Link>
    </article>
  );
}

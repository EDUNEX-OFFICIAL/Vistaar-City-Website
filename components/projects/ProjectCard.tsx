"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { analyticsEvents, trackEvent } from "@/lib/analytics";
import type { FeaturedProject } from "@/lib/catalog";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project }: { project: FeaturedProject; index?: number }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-[0_8px_30px_rgba(24,34,31,0.06)] ring-1 ring-line/80">
      <Link
        href={`${routes.projects}/${project.slug}`}
        onClick={() => trackEvent(analyticsEvents.projectCta, { project: project.slug })}
        className="flex h-full flex-col"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-forest-950">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={cn(
              "object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none",
              project.imageClassName,
            )}
          />
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-forest-950 shadow-sm backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5 text-gold-deep" strokeWidth={1.75} aria-hidden />
            {project.city}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 md:p-6">
          <h3 className="font-serif text-[1.65rem] leading-tight text-forest-950 md:text-[1.75rem]">
            {project.name}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/75 md:text-base">
            {project.shortDescription}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest-950">
            Know More
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={1.6}
              aria-hidden
            />
          </span>
        </div>
      </Link>
    </article>
  );
}

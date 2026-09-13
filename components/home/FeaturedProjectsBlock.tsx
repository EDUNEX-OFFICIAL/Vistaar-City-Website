"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "@/components/projects/ProjectCard";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import type { FeaturedProject } from "@/lib/catalog";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

export default function FeaturedProjectsBlock({ projects }: { projects: FeaturedProject[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateButtons = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateButtons();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, [updateButtons, projects.length]);

  const scroll = (direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-project-card]");
    const gap = 24;
    const amount = card ? card.offsetWidth + gap : el.clientWidth * 0.85;
    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section
      id="explore"
      className="bg-ivory pb-8 pt-6 md:pb-10 md:pt-8 lg:pb-12 lg:pt-10"
      aria-labelledby="our-projects-heading"
    >
      <div className="site-wrap">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <Reveal className="max-w-xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-charcoal/55">
              Our Projects
            </p>
            <h2
              id="our-projects-heading"
              className="font-serif text-[2.5rem] leading-[1.08] text-forest-950 md:text-5xl lg:text-[3.25rem]"
            >
              Communities for <span className="text-gold-deep">Every Dream</span>
            </h2>
          </Reveal>

          <Reveal className="flex shrink-0 items-center gap-4 self-start lg:self-auto" delay={0.08}>
            <Button href={routes.projects} variant="ghost" className="min-h-11 px-0">
              View All Projects
            </Button>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll(-1)}
                disabled={!canPrev}
                aria-label="Previous projects"
                className={cn(
                  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-forest-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-900 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory",
                  canPrev ? "hover:border-forest-900/30 hover:bg-ivory-50" : "cursor-not-allowed opacity-40",
                )}
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={1.6} aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => scroll(1)}
                disabled={!canNext}
                aria-label="Next projects"
                className={cn(
                  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-forest-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-900 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory",
                  canNext ? "hover:border-forest-900/30 hover:bg-ivory-50" : "cursor-not-allowed opacity-40",
                )}
              >
                <ChevronRight className="h-5 w-5" strokeWidth={1.6} aria-hidden />
              </button>
            </div>
          </Reveal>
        </div>

        <div
          ref={scrollerRef}
          className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 md:mt-10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project, index) => (
            <div
              key={project.slug}
              data-project-card
              className="w-[min(100%,340px)] shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <Reveal delay={index * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

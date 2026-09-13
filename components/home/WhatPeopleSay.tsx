"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/**
 * Placeholder social-proof copy until real customer quotes are supplied.
 * Attribution stays anonymous — no fabricated identity. Photos are lifestyle
 * marketing imagery, not verified customers.
 */
const testimonials = [
  {
    quote:
      "Vistar City gave us the confidence to invest in our future. The location, clarity and entire experience felt right from day one.",
    attribution: "A Vistar City Customer",
    image: "/brand/what-people-say-1.webp",
    imageAlt:
      "Lifestyle photograph of a smiling family outdoors — representative marketing imagery, not a verified Vistar City customer.",
  },
  {
    quote:
      "We were looking for a place that felt calm, clear and close to opportunity. From the first visit, Vistar City felt like a thoughtful step for our family.",
    attribution: "A Vistar City Customer",
    image: "/brand/what-people-say-2.webp",
    imageAlt:
      "Lifestyle photograph of a family outdoors near a home — representative marketing imagery, not a verified Vistar City customer.",
  },
  {
    quote:
      "What mattered most to us was honesty and a setting where our child could grow. The process was steady, and the community vision felt genuine.",
    attribution: "A Vistar City Customer",
    image: "/brand/what-people-say-3.webp",
    imageAlt:
      "Lifestyle photograph of a family on home steps with hills beyond — representative marketing imagery, not a verified Vistar City customer.",
  },
] as const;

export default function WhatPeopleSay() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index] ?? testimonials[0];
  const canPrev = index > 0;
  const canNext = index < total - 1;

  return (
    <section
      id="trust"
      className="relative overflow-hidden bg-ivory pb-10 pt-14 md:pb-12 md:pt-16 lg:pb-14 lg:pt-20"
      aria-labelledby="what-people-say-heading"
    >
      <svg
        className="pointer-events-none absolute bottom-0 left-0 h-32 w-[min(100%,28rem)] text-forest-900/[0.07]"
        viewBox="0 0 420 160"
        aria-hidden
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M-10 40 C60 20 120 70 190 50 C260 30 310 80 430 45" />
        <path d="M-10 70 C70 50 130 100 200 78 C270 56 330 110 430 75" />
        <path d="M-10 100 C80 78 140 130 210 108 C280 86 340 140 430 105" />
        <path d="M-10 130 C90 110 150 155 220 138 C290 120 350 160 430 135" />
      </svg>

      <div className="site-wrap relative grid items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-10">
        <Reveal className="lg:col-span-3">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-charcoal/55">
            What People Say
          </p>
          <h2
            id="what-people-say-heading"
            className="max-w-xs font-serif text-[2.35rem] leading-[1.08] text-forest-950 md:text-4xl lg:text-[2.75rem]"
          >
            Growing <span className="text-gold-deep">Trust,</span> Together.
          </h2>

          <div className="mt-6 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={!canPrev}
              aria-label="Previous testimonial"
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-forest-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-900 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory",
                canPrev ? "hover:border-forest-900/30 hover:bg-ivory-50" : "cursor-not-allowed opacity-40",
              )}
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.6} aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => Math.min(total - 1, i + 1))}
              disabled={!canNext}
              aria-label="Next testimonial"
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-forest-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-900 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory",
                canNext ? "hover:border-forest-900/30 hover:bg-ivory-50" : "cursor-not-allowed opacity-40",
              )}
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.6} aria-hidden />
            </button>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={0.06}>
          <figure
            key={index}
            className="relative rounded-2xl border border-sand-200/80 bg-white px-7 py-8 shadow-[0_18px_50px_-28px_rgba(8,53,43,0.35)] md:px-9 md:py-10"
            aria-live="polite"
          >
            <span
              className="pointer-events-none absolute left-6 top-4 font-serif text-6xl leading-none text-gold-deep/80 md:left-8 md:text-7xl"
              aria-hidden
            >
              &ldquo;
            </span>
            <blockquote className="relative pt-8">
              <p className="text-base leading-relaxed text-charcoal/80 md:text-[1.05rem] md:leading-[1.7]">
                {current.quote}
              </p>
              <figcaption className="mt-6 text-sm font-medium text-gold-deep md:text-[0.95rem]">
                — {current.attribution}
              </figcaption>
            </blockquote>
          </figure>
        </Reveal>

        <Reveal
          className="relative flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:col-span-4 lg:justify-start lg:pl-2"
          delay={0.1}
        >
          <div className="relative w-[min(100%,15.5rem)] shrink-0 sm:w-[16.5rem] lg:w-[17rem]">
            <div className="rotate-[4deg] rounded-md bg-white p-[3px] shadow-[0_22px_40px_-18px_rgba(8,53,43,0.45)]">
              <div className="relative aspect-[5/4.6] overflow-hidden rounded-[2px]">
                <Image
                  key={current.image}
                  src={current.image}
                  alt={current.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 70vw, 280px"
                  className="object-cover object-[center_28%] scale-[1.02]"
                />
              </div>
            </div>
          </div>

          <p
            className="flex shrink-0 rotate-[6deg] flex-col items-center font-hand text-[1.45rem] leading-[1.15] text-forest-950/85 sm:items-start sm:rotate-[8deg] sm:text-[1.65rem] md:text-[1.8rem]"
            aria-hidden
          >
            <span>Real People</span>
            <span className="relative inline-block pb-1">
              Real Dreams
              <span className="absolute -bottom-0.5 left-0 h-[3px] w-[95%] origin-left -rotate-1 rounded-full bg-gold-deep/75" />
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

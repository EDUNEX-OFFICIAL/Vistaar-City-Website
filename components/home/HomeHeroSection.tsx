"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { useIntro } from "@/components/intro/IntroProvider";
import { brandImages } from "@/lib/brand-images";
import { routes } from "@/lib/routes";
import { ctaFocusDark } from "@/lib/section-styles";

const REVEAL_FALLBACK_MS = 5600;

const LUX_EASE = "power4.out";
const LUX_IN_OUT = "power3.inOut";

/**
 * Premium overlay hero — Ken Burns, scrim lift, clip-mask headlines, blur resolve.
 * ~3.6s to CTAs.
 */
const HERO_TIMELINE = {
  bg: { duration: 7.5, ease: "power1.out" as const },
  scrim: { start: 0, duration: 1.35, ease: LUX_IN_OUT },
  overlay: { start: 0.2, duration: 1.05, fromY: 22, blur: 10, ease: LUX_EASE },
  rule: { start: 0.45, duration: 1.05, ease: LUX_IN_OUT },
  tagline: { start: 0.62, duration: 0.88, fromY: 14, blur: 6, ease: LUX_EASE },
  hairline: { start: 0.78, duration: 0.85, ease: LUX_EASE },
  headline: { start: 0.92, duration: 1.05, stagger: 0.16, yPercent: 108, ease: LUX_EASE },
  sideImage: { start: 0.88, duration: 1.15, innerScale: 1.12, ease: LUX_IN_OUT },
  desc: { start: 1.95, duration: 0.92, fromY: 18, blur: 8, ease: LUX_EASE },
  cta: { start: 2.55, duration: 0.82, stagger: 0.12, fromY: 14, scale: 0.94, ease: LUX_EASE },
};

const HEADLINE_GROUPS = [
  {
    tier: "lead" as const,
    lines: ["Find the Right", "Plot."],
    wrapperClass: "",
  },
  {
    tier: "dominant" as const,
    lines: ["Build Your", "Future."],
    wrapperClass: "-mt-1 sm:-mt-1.5",
  },
] as const;

/** First sentence — supporting scale */
const HEADLINE_SIZE_LEAD =
  "text-[clamp(1.75rem,6.5vw,2.75rem)] sm:text-[clamp(2rem,5.8vw,3.25rem)] md:text-[clamp(2.125rem,4.8vw,3.5rem)] lg:text-[clamp(2.25rem,4.2vw,3.75rem)]";

/** Second sentence — dominant scale */
const HEADLINE_SIZE_DOMINANT =
  "text-[clamp(2.875rem,12vw,4.75rem)] sm:text-[clamp(3.25rem,10vw,5.75rem)] md:text-[clamp(3.75rem,8.5vw,6.5rem)] lg:text-[clamp(4.125rem,7vw,7.25rem)] xl:text-[clamp(4.375rem,6vw,7.75rem)]";

const HEADLINE_STYLE_BY_TIER = {
  lead: `${HEADLINE_SIZE_LEAD} font-medium text-ivory/88`,
  dominant: `${HEADLINE_SIZE_DOMINANT} font-bold text-ivory`,
} as const;

const BEAM_INNER =
  "hero-beam-btn__inner inline-flex min-h-12 w-full items-center justify-center px-8 py-3.5 text-center text-sm font-semibold uppercase tracking-wider";

function markHeroRevealDone(section: HTMLElement | null) {
  section?.classList.add("hero-reveal-done");
}

export default function HomeHeroSection() {
  const { introComplete } = useIntro();
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLSpanElement>(null);
  const hairlineRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const sideImageClipRef = useRef<HTMLDivElement>(null);
  const sideImageInnerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!introComplete) return;

    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.classList.contains("motion-reduce");

    if (reduceMotion) {
      markHeroRevealDone(section);
      return;
    }

    const ctaButtons = Array.from(ctaRef.current?.children ?? []) as HTMLElement[];
    const headlineInners = headlineRef.current
      ? (Array.from(headlineRef.current.querySelectorAll(".hero-reveal-line-inner")) as HTMLElement[])
      : [];

    if (
      !bgRef.current ||
      !scrimRef.current ||
      !overlayRef.current ||
      !ruleRef.current ||
      !taglineRef.current ||
      !hairlineRef.current ||
      headlineInners.length === 0 ||
      !descRef.current ||
      ctaButtons.length === 0 ||
      !sideImageClipRef.current ||
      !sideImageInnerRef.current
    ) {
      markHeroRevealDone(section);
      return;
    }

    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      markHeroRevealDone(section);
    };

    const fallbackTimer = window.setTimeout(finish, REVEAL_FALLBACK_MS);

    section.classList.add("hero-reveal-active");

    let ctx: gsap.Context | undefined;

    try {
      ctx = gsap.context(() => {
        gsap.set(bgRef.current, { scale: 1.1, transformOrigin: "center center" });
        gsap.set(scrimRef.current, { autoAlpha: 0.62 });
        gsap.set(overlayRef.current, {
          y: HERO_TIMELINE.overlay.fromY,
          autoAlpha: 0,
          filter: `blur(${HERO_TIMELINE.overlay.blur}px)`,
        });
        gsap.set(ruleRef.current, { scaleY: 0, autoAlpha: 1, transformOrigin: "top center" });
        gsap.set(taglineRef.current, {
          y: HERO_TIMELINE.tagline.fromY,
          autoAlpha: 0,
          filter: `blur(${HERO_TIMELINE.tagline.blur}px)`,
        });
        gsap.set(hairlineRef.current, { scaleX: 0, autoAlpha: 1, transformOrigin: "left center" });
        gsap.set(headlineInners, { yPercent: HERO_TIMELINE.headline.yPercent });
        gsap.set(descRef.current, {
          y: HERO_TIMELINE.desc.fromY,
          autoAlpha: 0,
          filter: `blur(${HERO_TIMELINE.desc.blur}px)`,
        });
        gsap.set(ctaButtons, {
          y: HERO_TIMELINE.cta.fromY,
          scale: HERO_TIMELINE.cta.scale,
          autoAlpha: 0,
        });
        gsap.set(sideImageClipRef.current, { clipPath: "inset(0 100% 0 0)" });
        gsap.set(sideImageInnerRef.current, {
          scale: HERO_TIMELINE.sideImage.innerScale,
          transformOrigin: "left center",
        });

        gsap.to(bgRef.current, {
          scale: 1,
          duration: HERO_TIMELINE.bg.duration,
          ease: HERO_TIMELINE.bg.ease,
        });

        const tl = gsap.timeline();

        tl.fromTo(
          scrimRef.current,
          { autoAlpha: 0.62 },
          {
            autoAlpha: 1,
            duration: HERO_TIMELINE.scrim.duration,
            ease: HERO_TIMELINE.scrim.ease,
          },
          HERO_TIMELINE.scrim.start,
        )
          .fromTo(
            overlayRef.current,
            {
              y: HERO_TIMELINE.overlay.fromY,
              autoAlpha: 0,
              filter: `blur(${HERO_TIMELINE.overlay.blur}px)`,
            },
            {
              y: 0,
              autoAlpha: 1,
              filter: "blur(0px)",
              duration: HERO_TIMELINE.overlay.duration,
              ease: HERO_TIMELINE.overlay.ease,
            },
            HERO_TIMELINE.overlay.start,
          )
          .fromTo(
            ruleRef.current,
            { scaleY: 0 },
            {
              scaleY: 1,
              duration: HERO_TIMELINE.rule.duration,
              ease: HERO_TIMELINE.rule.ease,
            },
            HERO_TIMELINE.rule.start,
          )
          .fromTo(
            taglineRef.current,
            {
              y: HERO_TIMELINE.tagline.fromY,
              autoAlpha: 0,
              filter: `blur(${HERO_TIMELINE.tagline.blur}px)`,
            },
            {
              y: 0,
              autoAlpha: 1,
              filter: "blur(0px)",
              duration: HERO_TIMELINE.tagline.duration,
              ease: HERO_TIMELINE.tagline.ease,
            },
            HERO_TIMELINE.tagline.start,
          )
          .fromTo(
            hairlineRef.current,
            { scaleX: 0 },
            {
              scaleX: 1,
              duration: HERO_TIMELINE.hairline.duration,
              ease: HERO_TIMELINE.hairline.ease,
            },
            HERO_TIMELINE.hairline.start,
          )
          .fromTo(
            headlineInners,
            { yPercent: HERO_TIMELINE.headline.yPercent },
            {
              yPercent: 0,
              duration: HERO_TIMELINE.headline.duration,
              stagger: HERO_TIMELINE.headline.stagger,
              ease: HERO_TIMELINE.headline.ease,
            },
            HERO_TIMELINE.headline.start,
          )
          .fromTo(
            sideImageClipRef.current,
            { clipPath: "inset(0 100% 0 0)" },
            {
              clipPath: "inset(0 0% 0 0)",
              duration: HERO_TIMELINE.sideImage.duration,
              ease: HERO_TIMELINE.sideImage.ease,
            },
            HERO_TIMELINE.sideImage.start,
          )
          .fromTo(
            sideImageInnerRef.current,
            { scale: HERO_TIMELINE.sideImage.innerScale },
            {
              scale: 1,
              duration: HERO_TIMELINE.sideImage.duration + 0.35,
              ease: HERO_TIMELINE.sideImage.ease,
            },
            HERO_TIMELINE.sideImage.start,
          )
          .fromTo(
            descRef.current,
            {
              y: HERO_TIMELINE.desc.fromY,
              autoAlpha: 0,
              filter: `blur(${HERO_TIMELINE.desc.blur}px)`,
            },
            {
              y: 0,
              autoAlpha: 1,
              filter: "blur(0px)",
              duration: HERO_TIMELINE.desc.duration,
              ease: HERO_TIMELINE.desc.ease,
            },
            HERO_TIMELINE.desc.start,
          )
          .fromTo(
            ctaButtons,
            {
              y: HERO_TIMELINE.cta.fromY,
              scale: HERO_TIMELINE.cta.scale,
              autoAlpha: 0,
            },
            {
              y: 0,
              scale: 1,
              autoAlpha: 1,
              duration: HERO_TIMELINE.cta.duration,
              stagger: HERO_TIMELINE.cta.stagger,
              ease: HERO_TIMELINE.cta.ease,
              onComplete: finish,
            },
            HERO_TIMELINE.cta.start,
          );
      }, section);
    } catch {
      finish();
    }

    return () => {
      window.clearTimeout(fallbackTimer);
      markHeroRevealDone(section);
      ctx?.revert();
    };
  }, [introComplete]);

  return (
    <section
      ref={sectionRef}
      className="hero-reveal-pending header-overlap relative min-h-svh overflow-hidden bg-forest-900"
    >
      {/* Full-bleed photograph */}
      <div ref={bgRef} className="hero-reveal-bg absolute inset-0 z-0 will-change-transform">
        <Image
          src={brandImages.hero}
          alt="Drone view of plotted land in Bihar"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Always-on tone — subtle extra depth on pre-darkened hero */}
        <div
          className="hero-photo-base-tone pointer-events-none absolute inset-0 bg-forest-900/30"
          aria-hidden
        />
        <div ref={scrimRef} className="hero-reveal-scrim absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-forest-900/94 via-forest-900/72 to-forest-900/38" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900/92 via-forest-900/42 to-forest-900/12" />
        </div>
        <div className="hero-film-grain absolute inset-0 z-[1]" aria-hidden />
      </div>

      {/* Copy + right editorial image */}
      <div className="container relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-center px-4 pb-10 sm:min-h-[calc(100svh-5rem)] sm:pb-12 md:px-8 md:pb-14">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,36%)] lg:gap-12 xl:gap-16">
          <div
            ref={overlayRef}
            className="hero-reveal-overlay flex w-full max-w-[40rem] gap-5 md:max-w-[44rem] md:gap-7 lg:max-w-none lg:gap-8"
          >
            <div
              ref={ruleRef}
              className="hero-reveal-rule hidden w-px shrink-0 self-stretch bg-gold/60 md:block"
              aria-hidden
            />

            <div className="flex min-w-0 flex-1 flex-col">
              <div className="mb-4 md:mb-5">
                <span
                  ref={taglineRef}
                  className="hero-reveal-item block font-serif text-xs italic tracking-wide text-gold sm:text-sm"
                >
                  Trust • Location • Ownership
                </span>
                <div
                  ref={hairlineRef}
                  className="hero-reveal-hairline mt-2 h-px w-10 origin-left bg-gold/70 sm:w-12"
                  aria-hidden
                />
              </div>

              <h1 ref={headlineRef} className="font-serif leading-none tracking-tight">
                {HEADLINE_GROUPS.map((group) => (
                  <div key={group.tier} className={group.wrapperClass}>
                    {group.lines.map((line, lineIndex) => (
                      <span
                        key={line}
                        className={`hero-reveal-line-mask block overflow-hidden ${HEADLINE_STYLE_BY_TIER[group.tier]} ${lineIndex > 0 ? "-mt-[0.06em]" : ""}`}
                      >
                        <span className="hero-reveal-line-inner block pt-[0.14em] leading-none will-change-transform">
                          {line}
                        </span>
                      </span>
                    ))}
                  </div>
                ))}
              </h1>

              <p
                ref={descRef}
                className="hero-reveal-item hero-reveal-item--desc mt-5 max-w-md text-sm font-light leading-relaxed text-ivory/78 sm:mt-6 sm:text-base md:max-w-lg md:text-lg"
              >
                Discover thoughtfully located residential plots in the rapidly developing growth corridors of
                Bihar.
              </p>

              <div
                ref={ctaRef}
                className="mt-5 flex w-full flex-col gap-3 sm:mt-6 sm:w-auto sm:flex-row sm:items-stretch sm:gap-3.5"
              >
                <div className="hero-beam-btn hero-reveal-item hero-reveal-item--cta w-full sm:w-auto sm:min-w-[12.5rem]">
                  <Link
                    href={routes.siteVisit}
                    className={`${BEAM_INNER} bg-forest-800 text-ivory shadow-md transition-colors hover:bg-forest-900 ${ctaFocusDark}`}
                  >
                    Schedule Site Visit
                  </Link>
                </div>
                <div className="hero-beam-btn hero-beam-btn--shimmer hero-reveal-item hero-reveal-item--cta w-full sm:w-auto sm:min-w-[12.5rem]">
                  <Link
                    href={routes.contact}
                    className={`${BEAM_INNER} hero-shimmer-btn__inner border border-ivory/70 bg-forest-900/45 text-ivory backdrop-blur-[2px] transition-colors hover:border-ivory hover:bg-forest-900/60 ${ctaFocusDark}`}
                  >
                    Send Enquiry
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-reveal-side hidden justify-end lg:flex">
            <div
              ref={sideImageClipRef}
              className="hero-reveal-side-clip relative w-full max-w-[22rem] will-change-[clip-path] xl:max-w-[24rem]"
            >
              <div
                ref={sideImageInnerRef}
                className="hero-reveal-side-inner relative aspect-[4/5] w-full overflow-hidden border border-gold/50 shadow-[0_28px_72px_-28px_rgb(0_0_0/0.62)] will-change-transform"
              >
                <Image
                  src={brandImages.siteVisit}
                  alt="Family visiting a Vistar City plot site"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 24rem, 0px"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-900/55 via-forest-900/10 to-transparent"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gold/70"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

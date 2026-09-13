import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { analyticsEvents } from "@/lib/analytics";
import { routes } from "@/lib/routes";

export default function FinalCTA() {
  return (
    <section
      id="visit"
      className="on-dark relative overflow-hidden bg-forest-950 text-ivory"
      aria-labelledby="final-cta-heading"
    >
      {/* Ivory wave from testimonials above */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-12 md:h-14 lg:h-16" aria-hidden>
        <svg className="h-full w-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            d="M0 0 H1440 V22 C1260 72 1020 96 720 82 C420 68 180 32 0 44 Z"
            fill="#fcfaf4"
          />
        </svg>
      </div>

      {/* Brand peaks as soft abstract watermark (not gold — embedded into forest) */}
      <div
        className="pointer-events-none absolute -right-4 bottom-0 hidden w-[min(52%,24rem)] lg:block xl:right-0 xl:w-[28rem]"
        aria-hidden
      >
        <Image
          src="/brand/vistaar-peaks.webp"
          alt=""
          width={939}
          height={270}
          className="h-auto w-full select-none opacity-[0.09] brightness-0 invert"
        />
      </div>

      <div className="site-wrap relative z-[1] grid items-center gap-8 pb-12 pt-[4.5rem] md:gap-10 md:pb-14 md:pt-20 lg:grid-cols-12 lg:gap-12 lg:pb-16 lg:pt-24">
        <Reveal className="lg:col-span-7 xl:col-span-8">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold md:mb-4">
            Ready to start your journey?
          </p>
          <h2
            id="final-cta-heading"
            className="max-w-3xl font-serif text-[2.35rem] leading-[1.06] text-ivory md:text-5xl lg:text-[3.15rem]"
          >
            Let&apos;s Build a Brighter Tomorrow.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ivory/80 md:mt-5 md:text-[1.05rem]">
            Book a site visit, ask a question, or simply start a conversation. Our team is here to help you take the
            next step.
          </p>
        </Reveal>

        <Reveal
          className="flex flex-col gap-3 sm:max-w-xs lg:col-span-5 lg:ml-auto lg:w-full lg:max-w-[17.5rem] xl:col-span-4"
          delay={0.08}
        >
          <Button
            href={routes.siteVisit}
            tone="dark"
            variant="accent"
            event={analyticsEvents.finalSiteVisit}
            className="w-full justify-center"
          >
            Book a Site Visit
          </Button>
          <Button
            href={routes.contact}
            tone="dark"
            variant="secondary"
            arrow={false}
            event={analyticsEvents.contactClick}
            className="w-full justify-center"
          >
            Contact Us
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

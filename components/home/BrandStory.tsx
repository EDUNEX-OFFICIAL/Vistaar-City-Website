import Image from "next/image";
import { Triangle } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { routes } from "@/lib/routes";

const verticalWords = ["A Brighter", "Tomorrow", "Begins At", "Home"] as const;

export default function BrandStory() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-ivory pt-4 pb-10 md:pt-6 md:pb-12 lg:pt-8 lg:pb-14"
      aria-labelledby="more-than-land-heading"
    >
      <svg
        className="pointer-events-none absolute bottom-0 left-0 h-28 w-[min(100%,22rem)] text-forest-900/[0.06]"
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

      <div className="site-wrap relative grid w-full items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14">
        <Reveal className="relative z-[1] lg:col-span-5">
          <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-charcoal/55">
            <Triangle
              className="h-2.5 w-2.5 fill-charcoal/40 text-charcoal/40"
              strokeWidth={0}
              aria-hidden
            />
            More Than Land
          </p>

          <h2
            id="more-than-land-heading"
            className="max-w-md font-serif text-[2.15rem] leading-[1.08] text-forest-950 md:text-4xl lg:text-[2.85rem] xl:text-[3.15rem]"
          >
            A Place for{" "}
            <span className="text-gold-deep">What Matters Most.</span>
          </h2>

          <p className="mt-4 max-w-md text-base leading-relaxed text-charcoal/75 md:mt-5 md:text-[1.05rem]">
            Whether it&apos;s a home for your family, an investment for the future, or a community to grow
            with — Vistar City gives you the space to turn your dreams into reality.
          </p>

          <div className="mt-6 flex flex-wrap items-end gap-5 md:mt-7 md:gap-6">
            <Button href={routes.about} variant="primary">
              Our Story
            </Button>
            <p className="relative pb-1 font-hand text-[1.65rem] leading-none text-forest-950 md:text-[1.85rem]" aria-hidden>
              Land for a better you
              <span className="absolute -bottom-0.5 left-0 h-[3px] w-[92%] origin-left -rotate-2 rounded-full bg-gold-deep/70" />
            </p>
          </div>
        </Reveal>

        <Reveal className="relative lg:col-span-7" delay={0.08}>
          <div className="relative">
            <div className="relative h-[min(42svh,16.5rem)] overflow-hidden rounded-bl-md rounded-br-md rounded-tr-md rounded-tl-[3.5rem] sm:h-[min(46svh,20rem)] sm:rounded-tl-[5rem] md:h-[min(52svh,24rem)] lg:h-[min(72svh,32rem)] lg:rounded-tl-[6.5rem] xl:h-[min(74svh,34rem)] xl:rounded-tl-[7.5rem]">
              <Image
                src="/brand/more-than-land.png"
                alt="A family looking out from a modern home toward a sunlit valley — lifestyle imagery representing the promise of home, not a specific Vistar City site."
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-[center_32%]"
              />
            </div>

            <p
              className="pointer-events-none absolute right-3 top-[10%] hidden flex-col items-end gap-2.5 lg:flex xl:right-5"
              aria-hidden
            >
              <span className="flex flex-col items-end gap-2 text-right font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-forest-950/75">
                {verticalWords.map((word) => (
                  <span key={word}>{word}</span>
                ))}
              </span>
              <span className="h-px w-7 bg-gold-deep/60" />
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

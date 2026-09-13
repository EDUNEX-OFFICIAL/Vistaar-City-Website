import DreamScene from "@/components/brand/DreamScene";
import Button from "@/components/ui/Button";
import ImageFrame from "@/components/ui/ImageFrame";
import Reveal from "@/components/ui/Reveal";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { routes } from "@/lib/routes";

export default function BrandStory() {
  return (
    <section className="section-pad bg-ivory">
      <div className="site-wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <SectionEyebrow>More than land</SectionEyebrow>
          <h2 className="max-w-md font-serif text-[2.5rem] leading-[1.05] text-forest-950 md:text-6xl">
            A place for your next chapter
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-charcoal/80">
            At Vistar City, we believe a home begins with a dream. We bring you well-located, legally clear, and
            thoughtfully planned projects in Bihar&apos;s most promising corridors — so you can build a future that
            truly feels like home.
          </p>
          <div className="mt-8">
            <Button href={routes.about} variant="ghost">
              Our Story
            </Button>
          </div>
        </Reveal>

        <Reveal className="relative lg:col-span-6" delay={0.08}>
          <svg
            viewBox="0 0 80 120"
            className="pointer-events-none absolute -left-6 -top-8 hidden h-28 w-16 text-forest-800/30 lg:block"
            aria-hidden
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M40 110 C40 70 18 62 18 40 C18 22 40 8 40 8 C40 8 62 22 62 40 C62 62 40 70 40 110 Z" />
            <path d="M40 110 V42" />
          </svg>
          <ImageFrame organic caption="Illustrated scene — not a photograph of a Vistar City site.">
            <DreamScene className="aspect-[4/5] w-full" focus="field" />
          </ImageFrame>
        </Reveal>
      </div>
    </section>
  );
}

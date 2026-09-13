import DreamScene from "@/components/brand/DreamScene";
import Button from "@/components/ui/Button";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { analyticsEvents } from "@/lib/analytics";
import { routes } from "@/lib/routes";

const words = ["Live", "Invest", "Grow", "Belong"];

export default function LifestyleStory() {
  return (
    <section className="section-pad bg-ivory">
      <div className="site-wrap grid items-center gap-10 lg:grid-cols-12">
        <div className="relative lg:col-span-7">
          <DreamScene className="aspect-[16/10] w-full rounded-md" focus="wide" />
          <p className="mt-3 text-[13px] text-muted">Illustrated scene — not a photograph of a customer or a site.</p>
        </div>
        <div className="lg:col-span-4">
          <SectionEyebrow>For families. For generations.</SectionEyebrow>
          <h2 className="font-serif text-[2.5rem] leading-[1.05] text-forest-950 md:text-5xl">
            Where dreams grow together.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-charcoal/80">
            Whether you&apos;re planning a home for your family or an investment for the future, Vistar City offers
            spaces where families thrive, communities grow, and dreams take root.
          </p>
          <div className="mt-8">
            <Button href={routes.siteVisit} event={analyticsEvents.lifestyleSiteVisit}>
              Book a Site Visit
            </Button>
          </div>
        </div>
        <p className="flex gap-6 font-serif text-sm uppercase tracking-[0.28em] text-forest-800/50 lg:col-span-1 lg:flex-col lg:gap-8 lg:text-center" aria-hidden>
          {words.map((word) => (
            <span key={word}>{word}</span>
          ))}
        </p>
      </div>
    </section>
  );
}

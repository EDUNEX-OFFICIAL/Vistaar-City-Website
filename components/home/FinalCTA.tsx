import Button from "@/components/ui/Button";
import { analyticsEvents } from "@/lib/analytics";
import { routes } from "@/lib/routes";

const words = ["Dream", "Plan", "Build", "Belong"];

export default function FinalCTA() {
  return (
    <section id="visit" className="on-dark relative overflow-hidden bg-forest-900 text-ivory">
      <div className="site-wrap section-pad grid items-end gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Ready to take the first step?</p>
          <h2 className="max-w-3xl font-serif text-[2.6rem] leading-[1.02] text-ivory md:text-6xl">
            Let&apos;s turn your dream into an address.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ivory/80">
            Book a site visit, ask a question, or simply start a conversation. Our team is here to help you take the
            next step.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={routes.siteVisit} tone="dark" event={analyticsEvents.finalSiteVisit}>
              Book a Site Visit
            </Button>
            <Button href={routes.contact} tone="dark" variant="secondary" event={analyticsEvents.contactClick}>
              Contact Us
            </Button>
          </div>
        </div>
        <p className="flex gap-5 font-serif text-2xl text-ivory/35 lg:col-span-4 lg:flex-col lg:items-end lg:text-4xl" aria-hidden>
          {words.map((word) => (
            <span key={word}>{word}</span>
          ))}
        </p>
      </div>
    </section>
  );
}

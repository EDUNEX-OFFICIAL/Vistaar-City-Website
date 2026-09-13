import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import PageHero from "@/components/layout/PageHero";
import { locationNotes } from "@/lib/catalog";
import { analyticsEvents } from "@/lib/analytics";
import { pageMetadata } from "@/lib/site-metadata";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  title: "Locations",
  description: "Vistar City projects in Patna, Muzaffarpur and Raxaul. No extra cities, no return guarantees.",
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Bihar"
        title="A region on the rise."
        lede="From Patna to Muzaffarpur to Raxaul — better connectivity and growing infrastructure. Not a promise of appreciation."
      />
      <section className="section-pad bg-ivory">
        <div className="site-wrap grid gap-8 md:grid-cols-3">
          {locationNotes.map((item) => (
            <article key={item.city} className="border-t border-line pt-6">
              <h2 className="font-serif text-3xl text-forest-950">{item.city}</h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal/80">{item.note}</p>
            </article>
          ))}
        </div>
        <div className="site-wrap mt-12">
          <Button href={routes.siteVisit} event={analyticsEvents.locationExplore}>
            Book a Site Visit
          </Button>
        </div>
      </section>
    </>
  );
}

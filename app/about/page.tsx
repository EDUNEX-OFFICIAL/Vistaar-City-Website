import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";
import { pageMetadata } from "@/lib/site-metadata";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: "Vistar City plans residential plots in Patna, Muzaffarpur and Raxaul — a place to begin a home, not a catalogue of inventory.",
  path: "/about",
});

const points = [
  "Residential plots in three Bihar corridors",
  "Documents reviewed with you, not hidden behind a login",
  "A site visit before any decision",
  "No online booking, payment, or live plot inventory",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="A home begins with the land you choose."
        lede="Vistar City is a marketing site for plotted developments in Bihar. We help you understand the place, then see it."
      />
      <section className="section-pad bg-ivory">
        <div className="site-wrap grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl text-forest-950 md:text-5xl">More than land.</h2>
            <p className="mt-5 text-lg leading-relaxed text-charcoal/80">
              At Vistar City, we believe a home begins with a dream. We bring you well-located, legally clear, and
              thoughtfully planned projects in Bihar&apos;s most promising corridors — so you can build a future that
              truly feels like home.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-charcoal/80">
              This website will not sell you a plot in a checkout. It will not show a live count of remaining plots.
              The useful next step is a conversation, and usually a visit.
            </p>
          </div>
          <ul className="space-y-5 border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            {points.map((point) => (
              <li key={point} className="font-serif text-2xl text-forest-950">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="site-wrap mt-12">
          <Button href={routes.siteVisit}>Book a Site Visit</Button>
        </div>
      </section>
    </>
  );
}

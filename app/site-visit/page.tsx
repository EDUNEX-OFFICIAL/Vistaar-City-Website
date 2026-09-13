import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import SiteVisitForm from "@/components/forms/SiteVisitForm";
import { pageMetadata, siteConfig } from "@/lib/site-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Book a Site Visit",
  description: "Request a site visit to a Vistar City project in Patna, Muzaffarpur or Raxaul. A request is not a confirmed booking.",
  path: "/site-visit",
});

type Props = { searchParams: Promise<{ project?: string }> };

export default async function SiteVisitPage({ searchParams }: Props) {
  const { project } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Visit"
        title="See the land before you decide."
        lede="Tell us which project you want to walk. We will contact you to arrange a time. Submitting this form does not confirm a booking."
      />
      <section className="section-pad bg-ivory">
        <div className="site-wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl text-forest-950">Request a visit</h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80">
              Prefer to call?{" "}
              <a href={`tel:${siteConfig.phone}`} className="font-semibold text-forest-800">
                {siteConfig.phoneDisplay}
              </a>
            </p>
          </div>
          <div className="rounded-md border border-line bg-ivory-50 p-6 sm:p-8 lg:col-span-7">
            <SiteVisitForm defaultProject={project} />
          </div>
        </div>
      </section>
    </>
  );
}

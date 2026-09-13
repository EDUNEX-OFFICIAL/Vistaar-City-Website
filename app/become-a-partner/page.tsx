import type { Metadata } from "next";
import PartnerForm from "@/components/forms/PartnerForm";
import PageHero from "@/components/layout/PageHero";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Become a Partner",
  description: "Apply to introduce buyers to Vistar City projects. No income guarantee is offered on this page.",
  path: "/become-a-partner",
});

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Work with the projects, not a promise."
        lede="If you introduce buyers to Vistar City, apply here. We will contact you about the current arrangement. This page does not advertise guaranteed income."
      />
      <section className="section-pad bg-ivory">
        <div className="site-wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl text-forest-950">Who can apply</h2>
            <p className="mt-4 text-lg leading-relaxed text-charcoal/80">
              Independent agents, referral partners and property consultants. Tell us your city and experience. We will
              reply if there is a fit.
            </p>
          </div>
          <div className="rounded-md border border-line bg-ivory-50 p-6 sm:p-8 lg:col-span-7">
            <PartnerForm />
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use",
  description: "How to read the Vistar City website. Marketing copy is not a quotation, booking, or investment guarantee.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Read this site as an introduction."
        lede="Interim terms. Approved legal copy will replace this page when it is supplied."
      />
      <section className="section-pad bg-ivory">
        <div className="site-wrap max-w-3xl space-y-4 text-lg leading-relaxed text-charcoal/80">
          <p>Project descriptions are marketing copy. They are not quotations, approvals, or a statement of what is available today.</p>
          <p>A form submission is a request to be contacted. It does not reserve land or confirm a visit.</p>
          <p>Nothing on this website is a guarantee of returns, appreciation, or government projects.</p>
          <p>Illustrations are not photographs of Vistar City sites or customers.</p>
        </div>
      </section>
    </>
  );
}

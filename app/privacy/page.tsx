import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Vistar City uses enquiry details. A fuller policy will replace this page when approved copy is supplied.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="What we do with a form."
        lede="This is an interim notice, not a counsel-drafted policy. A fuller policy will replace it when approved copy is supplied."
      />
      <section className="section-pad bg-ivory">
        <div className="site-wrap max-w-3xl space-y-4 text-lg leading-relaxed text-charcoal/80">
          <p>Site visit, enquiry and partner forms collect the details you type so the team can reply.</p>
          <p>We do not take payment on this website, and we do not publish a customer account.</p>
          <p>Do not send documents you are not ready to share. Call or email if you want a record deleted from a future store — persistence is not wired yet, so a submission may not be stored beyond the request.</p>
        </div>
      </section>
    </>
  );
}

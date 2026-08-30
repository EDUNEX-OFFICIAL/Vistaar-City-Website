import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import PageShell from "@/components/layout/PageShell";
import FaqSection from "@/components/sections/FaqSection";
import ContactEnquirySection from "@/components/sections/ContactEnquirySection";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Enquire",
  description:
    "Contact Vistar City for project information, plot enquiries, and site visits across Patna, Muzaffarpur and Raxaul.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell>
      <PageBanner
        eyebrow="Get In Touch"
        title="Contact & Enquire"
        description="Reach out for detailed project information, site visits, or partnership inquiries."
      />
      <ContactEnquirySection />
      <FaqSection />
    </PageShell>
  );
}

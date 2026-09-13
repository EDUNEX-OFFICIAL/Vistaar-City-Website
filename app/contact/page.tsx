import type { Metadata } from "next";
import EnquiryForm from "@/components/forms/EnquiryForm";
import PageHero from "@/components/layout/PageHero";
import { pageMetadata, siteConfig } from "@/lib/site-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Contact Vistar City about plotted developments in Patna, Muzaffarpur and Raxaul.",
  path: "/contact",
});

const faqs = [
  {
    q: "How do I see what is available?",
    a: "Send an enquiry or book a site visit. This website does not list live plots.",
  },
  {
    q: "Where are the projects?",
    a: "Patna, Muzaffarpur and Raxaul. We do not publish other cities here.",
  },
  {
    q: "Is a form a booking?",
    a: "No. A submission is a request. The team contacts you. Nothing is reserved or paid for on this site.",
  },
  {
    q: "What should I review before buying?",
    a: "Ask for the documents that apply to the project you are considering, and read them before you decide.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation."
        lede="A question is enough. We will reply on the phone or email you share."
      />
      <section className="section-pad bg-ivory">
        <div className="site-wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl text-forest-950">Get in touch</h2>
            <ul className="mt-6 space-y-3 text-base text-charcoal/80">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="font-semibold text-forest-800">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="font-semibold text-forest-800">
                  {siteConfig.email}
                </a>
              </li>
              <li>Patna, Bihar. A street address has not been published.</li>
            </ul>
          </div>
          <div className="rounded-md border border-line bg-ivory-50 p-6 sm:p-8 lg:col-span-7">
            <EnquiryForm />
          </div>
        </div>
      </section>
      <section className="section-pad bg-ivory-100">
        <div className="site-wrap max-w-3xl">
          <h2 className="font-serif text-4xl text-forest-950">Questions</h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {faqs.map((item) => (
              <details key={item.q} className="group py-4">
                <summary className="cursor-pointer list-none font-medium text-forest-950 [&::-webkit-details-marker]:hidden">
                  {item.q}
                </summary>
                <p className="mt-3 text-base leading-relaxed text-charcoal/80">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

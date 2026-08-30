"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { sectionPad } from "@/lib/section-styles";

const faqs = [
  {
    q: "How can I explore available options?",
    a: "Tell us your preferred location and plot size through the enquiry form or schedule a site visit. Our team will share suitable options directly.",
  },
  {
    q: "What plot sizes are available?",
    a: "We offer a variety of plot sizes depending on the project, typically ranging from 800 sq.ft. to over 2500 sq.ft. to suit different requirements and budgets.",
  },
  {
    q: "Where are Vistar City projects located?",
    a: "Our current plotted developments are strategically located across the Patna region, Muzaffarpur, Raxaul, and other upcoming growth corridors in Bihar.",
  },
  {
    q: "Can I visit the project before purchasing?",
    a: "Absolutely. We strongly encourage site visits so you can understand the actual location, surroundings, and plot positioning. You can schedule a visit through our website.",
  },
  {
    q: "What documents should I review before purchasing a plot?",
    a: "We provide all necessary project-related documentation, including layout plans, ownership records, and development approvals applicable to the specific project for your review.",
  },
] as const;

export default function FaqSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section className={`border-b border-sand-200 bg-sand-100 ${sectionPad}`}>
      <div className="container mx-auto max-w-4xl px-4 md:px-8">
        <div className="mb-10 text-center md:mb-16">
          <span className="mb-3 block text-[10px] font-bold uppercase tracking-widest text-forest-600 sm:mb-4">
            Help Center
          </span>
          <h2 className="mb-3 font-serif text-3xl font-semibold text-forest-900 sm:mb-4 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-base font-light text-charcoal/70 sm:text-lg">
            Clear answers to help you understand our plots and processes.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="overflow-hidden rounded-sm border border-sand-200 bg-ivory shadow-sm transition-all duration-300"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between px-4 py-4 text-left text-xs font-bold text-charcoal transition-colors hover:bg-sand-100 sm:px-6 sm:text-sm focus-visible:ring-2 focus-visible:ring-forest-900 focus-visible:ring-inset"
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                aria-expanded={activeFaq === i}
              >
                <span className="pr-8">{faq.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-charcoal/50 transition-transform duration-300 ${activeFaq === i ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
              <div
                className={`overflow-hidden px-6 transition-all duration-300 ${activeFaq === i ? "max-h-64 pb-4 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="border-t border-sand-200 pt-3 text-sm leading-relaxed text-charcoal/70">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

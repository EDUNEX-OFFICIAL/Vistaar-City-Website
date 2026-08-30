import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { brandImages } from "@/lib/brand-images";
import { routes } from "@/lib/routes";
import { ctaFocusLight, eyebrowLight, sectionPad } from "@/lib/section-styles";

export default function AboutSection() {
  return (
    <section className={`border-b border-sand-200 bg-ivory ${sectionPad}`}>
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-2">
          <div className="relative order-2 h-[260px] overflow-hidden rounded-sm border border-sand-200 sm:h-[360px] lg:order-1 lg:h-[500px]">
            <Image
              src={brandImages.about}
              alt="Plotted land development"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="pointer-events-none absolute inset-0 z-10 rounded-sm border border-ivory/20" />
          </div>
          <div className="order-1 lg:order-2">
            <span className={eyebrowLight}>Who We Are</span>
            <h2 className="mb-4 font-serif text-3xl font-semibold leading-tight text-forest-900 sm:mb-6 sm:text-4xl md:text-5xl">
              Building Possibilities From The Ground Up
            </h2>
            <p className="mb-5 text-base font-light leading-relaxed text-charcoal/80 sm:mb-6 sm:text-lg">
              Vistar City is focused on making plot buying simpler, clearer and more accessible. We help customers
              discover suitable land opportunities based on location, plot requirements and future plans.
            </p>
            <ul className="mb-8 space-y-4">
              {[
                "Residential plots in strategic locations",
                "Transparent property information",
                "Site visits and customer assistance",
                "Documentation guidance throughout the process",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-charcoal">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-forest-800" aria-hidden />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href={routes.contact}
              className={`inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-forest-800 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-ivory shadow-sm transition-colors hover:bg-forest-900 sm:w-auto ${ctaFocusLight}`}
            >
              Talk To Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { routes } from "@/lib/routes";
import { ctaFocusDark, eyebrowDark } from "@/lib/section-styles";

type NextStepCtaProps = {
  title?: string;
  description?: string;
};

export default function NextStepCta({
  title = "Ready To Explore Your Options?",
  description = "Tell us your preferred location and requirements. Our team will share suitable options and help you plan a site visit.",
}: NextStepCtaProps) {
  return (
    <section className="relative bg-forest-900 py-12 text-ivory md:py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gold/40" aria-hidden />
      <div className="container mx-auto max-w-5xl px-4 text-center md:px-8">
        <span className={eyebrowDark}>Next Step</span>
        <h2 className="mb-4 font-serif text-2xl font-semibold text-ivory sm:mb-6 sm:text-3xl md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-base font-light leading-relaxed text-ivory/90 sm:mb-10 sm:text-lg">
          {description}
        </p>
        <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
          <Link
            href={routes.contact}
            className={`min-h-12 rounded-sm bg-ivory px-8 py-3 text-sm font-bold uppercase tracking-wider text-forest-900 shadow-md transition-colors hover:bg-sand-100 ${ctaFocusDark}`}
          >
            Send Enquiry
          </Link>
          <Link
            href={routes.siteVisit}
            className={`min-h-12 rounded-sm border border-ivory/40 px-8 py-3 text-sm font-bold uppercase tracking-wider text-ivory transition-colors hover:bg-ivory/10 ${ctaFocusDark}`}
          >
            Schedule Site Visit
          </Link>
        </div>
      </div>
    </section>
  );
}

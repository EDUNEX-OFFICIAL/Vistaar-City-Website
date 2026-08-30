import ExpansionSection from "@/components/partner/ExpansionSection";
import PlotBuyingProcessSection from "@/components/partner/PlotBuyingProcessSection";
import PartnerProgramSection from "@/components/partner/PartnerProgramSection";

export default function BecomePartnerContent() {
  return (
    <>
      <section className="relative border-b border-forest-800 bg-forest-900 py-12 text-ivory md:py-20">
        <div className="absolute inset-x-0 top-0 h-px bg-gold/40" aria-hidden />
        <div className="container mx-auto max-w-7xl px-4 text-center md:px-8">
          <span className="font-serif text-sm italic text-gold sm:text-base">Partnership</span>
          <div className="mx-auto mt-3 mb-4 h-px w-12 bg-gold" aria-hidden />
          <h1 className="mb-3 font-serif text-3xl font-semibold text-ivory sm:mb-4 sm:text-4xl md:text-5xl">
            Become a Partner
          </h1>
          <p className="mx-auto max-w-2xl px-2 text-base font-light leading-relaxed text-ivory/90 sm:text-lg">
            Join Vistar City&apos;s partner network and grow with plotted development opportunities across Bihar.
          </p>
        </div>
      </section>

      <ExpansionSection />
      <PlotBuyingProcessSection />
      <PartnerProgramSection />
    </>
  );
}

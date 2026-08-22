import ExpansionSection from "@/components/partner/ExpansionSection";
import PlotBuyingProcessSection from "@/components/partner/PlotBuyingProcessSection";
import PartnerProgramSection from "@/components/partner/PartnerProgramSection";

export default function BecomePartnerContent() {
  return (
    <>
      <section className="py-12 md:py-20 bg-forest-900 text-white border-b border-forest-800">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center">
          <span className="text-[10px] uppercase text-white/50 font-bold tracking-widest mb-3 sm:mb-4 block">
            Partnership
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Become a Partner</h1>
          <p className="text-white/80 text-base sm:text-lg font-light max-w-2xl mx-auto px-2">
            Join Vistar City&apos;s partner network and grow with us across Bihar&apos;s plotted development
            opportunities.
          </p>
        </div>
      </section>

      <ExpansionSection />
      <PlotBuyingProcessSection />
      <PartnerProgramSection />
    </>
  );
}

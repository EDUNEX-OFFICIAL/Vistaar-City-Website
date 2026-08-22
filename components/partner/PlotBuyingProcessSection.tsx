export default function PlotBuyingProcessSection() {
  const steps = [
    { step: "01", title: "Discover", desc: "Explore projects and locations online or with our team." },
    { step: "02", title: "Shortlist", desc: "Select plots based on size, location and requirements." },
    { step: "03", title: "Site Visit", desc: "Visit the actual project location to understand the surroundings." },
    { step: "04", title: "Documentation", desc: "Review the applicable property and transaction documentation." },
    { step: "05", title: "Purchase", desc: "Proceed with the transparent purchase process as applicable." },
  ];

  return (
    <section id="process" className="py-12 md:py-24 bg-ivory border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest mb-3 sm:mb-4 block">Process</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 mb-3 sm:mb-4">The Plot Buying Journey</h2>
          <p className="text-charcoal/70 text-base sm:text-lg font-light">
            A simple, structured process to help you find and acquire your ideal plot.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-12 right-12 h-px bg-gray-200" />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((item) => (
              <div key={item.step} className="flex flex-row lg:flex-col items-center lg:text-center gap-6 lg:gap-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-sm font-serif text-xl font-bold text-forest-900 shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-charcoal mb-1">{item.title}</h3>
                  <p className="text-[10px] text-gray-500 max-w-[200px] mx-auto leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

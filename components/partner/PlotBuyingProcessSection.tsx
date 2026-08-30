const steps = [
  { step: "01", title: "Discover", desc: "Explore projects and locations online or with our team." },
  { step: "02", title: "Shortlist", desc: "Select plots based on size, location and requirements." },
  { step: "03", title: "Site Visit", desc: "Visit the project location to understand the surroundings." },
  { step: "04", title: "Documentation", desc: "Review applicable property and transaction documentation." },
  { step: "05", title: "Purchase", desc: "Proceed with the transparent purchase process as applicable." },
];

export default function PlotBuyingProcessSection() {
  return (
    <section id="process" className="border-b border-sand-200 bg-ivory py-12 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <span className="mb-3 block text-[10px] font-bold uppercase tracking-widest text-forest-600 sm:mb-4">
            Process
          </span>
          <h2 className="mb-3 font-serif text-3xl font-semibold text-forest-900 sm:mb-4 sm:text-4xl">
            The Plot Buying Journey
          </h2>
          <p className="text-base font-light text-charcoal/70 sm:text-lg">
            A structured path from first enquiry to plot ownership.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-12 right-12 top-8 hidden h-px bg-sand-200 lg:block" aria-hidden />
          <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-4">
            {steps.map((item) => (
              <div key={item.step} className="flex flex-row items-center gap-6 lg:flex-col lg:gap-4 lg:text-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-sand-200 bg-ivory font-serif text-xl font-semibold text-forest-900 shadow-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-charcoal">{item.title}</h3>
                  <p className="mx-auto max-w-[200px] text-xs leading-relaxed text-charcoal/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

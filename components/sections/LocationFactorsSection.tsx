import { eyebrowLight, sectionPad } from "@/lib/section-styles";

const factors = [
  { title: "Connectivity", desc: "Access to major roads, highways, and important urban destinations." },
  { title: "Development", desc: "Areas experiencing infrastructure upgrades and urban expansion." },
  { title: "Surroundings", desc: "Residential environment, essential facilities, and future planned development." },
  { title: "Planning", desc: "Properly presented plotting layouts and clear project information from Vistar City." },
] as const;

export default function LocationFactorsSection() {
  return (
    <section className={`border-b border-sand-200 bg-sand-100 ${sectionPad}`}>
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <span className={eyebrowLight}>Evaluation</span>
          <h2 className="mb-3 font-serif text-2xl font-semibold text-forest-900 sm:mb-4 sm:text-3xl md:text-4xl">
            A Good Plot Starts With A Good Location
          </h2>
          <p className="text-base font-light text-charcoal/70 sm:text-lg">
            Understanding the fundamental factors that make a location suitable for your land purchase.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {factors.map((factor, i) => (
            <div key={factor.title} className="rounded-sm border border-sand-200 bg-ivory p-6">
              <div className="mb-4 font-serif text-3xl font-semibold text-forest-900/20">0{i + 1}</div>
              <h3 className="mb-2 font-sans text-sm font-semibold text-charcoal">{factor.title}</h3>
              <p className="text-xs leading-relaxed text-charcoal/70">{factor.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

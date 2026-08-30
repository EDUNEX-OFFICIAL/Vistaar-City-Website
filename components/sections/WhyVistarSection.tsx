import { Building, Eye, HeartHandshake, Map, Navigation2, ShieldCheck } from "lucide-react";
import { eyebrowLight, sectionPad } from "@/lib/section-styles";

const features = [
  { icon: Map, title: "Strategic Locations", desc: "Plots selected around developing and connected locations." },
  { icon: ShieldCheck, title: "Verified Information", desc: "Present available project, plot and location information clearly." },
  { icon: Eye, title: "Transparent Process", desc: "Make the plot selection and purchase journey simple and understandable." },
  { icon: Navigation2, title: "Site Visit Assistance", desc: "Help customers understand the actual location before making a decision." },
  { icon: Building, title: "Multiple Plot Options", desc: "Different plot sizes and budgets for different customer requirements." },
  { icon: HeartHandshake, title: "Relationship Beyond Sale", desc: "Customer support should continue beyond the initial property enquiry." },
] as const;

export default function WhyVistarSection() {
  return (
    <section className={`border-b border-sand-200 bg-sand-100 ${sectionPad}`}>
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <span className={eyebrowLight}>Our Approach</span>
          <h2 className="mb-3 font-serif text-3xl font-semibold text-forest-900 sm:mb-4 sm:text-4xl">
            Why Choose Vistar City
          </h2>
          <p className="text-base font-light text-charcoal/70 sm:text-lg">
            We bring clarity and support to your land purchasing journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-sm border border-sand-200 bg-ivory p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-sand-100 text-forest-900">
                <feature.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mb-2 font-sans text-sm font-semibold text-charcoal">{feature.title}</h3>
              <p className="text-xs leading-relaxed text-charcoal/70">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

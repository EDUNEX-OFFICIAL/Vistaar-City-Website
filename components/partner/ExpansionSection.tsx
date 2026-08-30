import Link from "next/link";
import { MapPin, Map as MapIcon } from "lucide-react";
import { routes } from "@/lib/routes";

const locations = [
  { name: "Patna Region", desc: "Projects connected to the expanding capital infrastructure." },
  { name: "Muzaffarpur", desc: "Residential plots in this rapidly growing commercial hub." },
  { name: "Raxaul", desc: "Strategic land opportunities near the border trade corridor." },
];

export default function ExpansionSection() {
  return (
    <section id="expansion" className="border-b border-sand-200 bg-ivory py-12 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-2">
          <div>
            <span className="mb-3 block text-[10px] font-bold uppercase tracking-widest text-forest-600 sm:mb-4">
              Expansion
            </span>
            <h2 className="mb-4 font-serif text-3xl font-semibold leading-tight text-forest-900 sm:mb-6 sm:text-4xl md:text-5xl">
              Growing With Bihar
            </h2>
            <p className="mb-8 text-base font-light leading-relaxed text-charcoal/80 sm:text-lg">
              We are expanding plotted projects across key growth corridors in Bihar — areas witnessing rapid
              infrastructure development and residential demand.
            </p>

            <div className="space-y-3">
              {locations.map((loc) => (
                <Link
                  key={loc.name}
                  href={routes.contact}
                  className="group flex gap-4 rounded-sm border border-sand-200 bg-ivory p-4 transition-shadow hover:border-forest-800/20 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-900 focus-visible:ring-offset-2"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ivory text-forest-900 shadow-sm transition-colors group-hover:bg-forest-800 group-hover:text-ivory">
                    <MapPin className="h-4 w-4" aria-hidden />
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-charcoal">{loc.name}</h4>
                    <p className="text-xs leading-relaxed text-charcoal/70">{loc.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="relative flex h-[320px] items-center justify-center overflow-hidden rounded-sm border border-sand-200 bg-sand-100 sm:h-[480px] lg:h-[560px]">
            <MapIcon className="absolute h-32 w-32 text-forest-900/5 sm:h-48 sm:w-48" aria-hidden />
            <div className="relative mx-4 max-w-sm rounded-sm border border-sand-200 bg-ivory p-6 text-center shadow-md sm:p-8">
              <h3 className="mb-2 font-serif text-xl font-semibold text-forest-900">Partner Coverage</h3>
              <p className="mb-6 text-xs leading-relaxed text-charcoal/70">
                Vistar City partners work with buyers across Patna, Muzaffarpur, Raxaul and upcoming corridors.
              </p>
              <Link
                href={routes.locations}
                className="inline-flex min-h-12 items-center justify-center rounded-sm bg-forest-800 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-ivory transition-colors hover:bg-forest-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-900 focus-visible:ring-offset-2"
              >
                View Locations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

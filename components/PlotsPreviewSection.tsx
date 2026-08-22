import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const cities = ["Patna", "Muzaffarpur", "Raxaul"] as const;

export default function PlotsPreviewSection() {
  return (
    <section id="plots-preview" className="pt-10 pb-6 md:pt-16 md:pb-8 bg-sand-100 border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest mb-3 sm:mb-4 block">Plot Inventory</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-900 mb-4 sm:mb-6 leading-tight">
              Plots In Every Location
            </h2>
            <p className="text-base sm:text-lg text-charcoal/80 mb-6 sm:mb-8 leading-relaxed font-light">
              Explore our complete plot inventory across Patna, Muzaffarpur and Raxaul. Each plot includes detailed pricing, block/sector info, location map, and direct contact with the authorised sales desk.
            </p>
            <Link
              href="/plots"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-forest-900 text-white px-8 py-3.5 rounded-sm text-sm uppercase tracking-wider font-bold hover:bg-forest-800 transition-colors shadow-sm"
            >
              Browse All Plots
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {cities.map((city) => (
              <Link
                key={city}
                href="/plots"
                className="bg-white rounded-sm border border-gray-100 p-5 hover:shadow-lg hover:border-forest-900/30 transition-all group flex flex-col justify-between min-h-[120px]"
              >
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-4 w-4 text-forest-800" />
                  <h3 className="font-bold text-charcoal text-sm">{city}</h3>
                </div>
                <p className="text-sm text-forest-900 font-bold group-hover:underline">
                  Explore in {city} →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

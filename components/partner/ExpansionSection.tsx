"use client";

import { MapPin, Map as MapIcon, CheckCircle2 } from "lucide-react";

export default function ExpansionSection() {
  return (
    <section id="expansion" className="py-12 md:py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest mb-3 sm:mb-4 block">Expansion</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-900 mb-4 sm:mb-6 leading-tight">
              Growing With Bihar
            </h2>
            <p className="text-lg text-charcoal/80 mb-8 leading-relaxed font-light">
              We are strategically expanding our plotting projects across key growth corridors in Bihar, offering opportunities in areas witnessing rapid infrastructure development.
            </p>

            <div className="space-y-4">
              {[
                { name: "Patna Region", desc: "Projects connected to the expanding capital infrastructure." },
                { name: "Muzaffarpur", desc: "Residential plots in this rapidly growing commercial hub." },
                { name: "Raxaul", desc: "Strategic land opportunities near the border trade corridor." },
              ].map((loc) => (
                <div
                  key={loc.name}
                  className="flex gap-4 p-4 rounded-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group bg-ivory"
                >
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-forest-900 group-hover:bg-forest-900 group-hover:text-white transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal text-sm mb-1">{loc.name}</h4>
                    <p className="text-xs text-gray-500">{loc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[320px] sm:h-[480px] lg:h-[600px] bg-sand-100 rounded-sm overflow-hidden flex items-center justify-center border border-gray-100 shadow-sm">
            <MapIcon className="w-32 h-32 sm:w-48 sm:h-48 text-forest-900/5 absolute" />
            <div className="relative w-full h-full p-4 sm:p-8 flex flex-col justify-center items-center">
              <div className="bg-white p-5 sm:p-6 rounded-sm shadow-xl border border-gray-100 max-w-sm text-center mx-4">
                <h3 className="font-serif text-xl font-bold text-forest-900 mb-2">Explore Interactive Map</h3>
                <p className="text-xs text-gray-500 mb-6">
                  Select a location pin to view available projects, connectivity details, and plot options in that area.
                </p>
                <button className="bg-forest-900 text-white px-6 py-2.5 rounded-sm text-xs uppercase tracking-wider font-bold hover:bg-forest-800 shadow-md">
                  Open Map View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

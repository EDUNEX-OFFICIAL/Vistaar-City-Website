"use client";

import Image from "next/image";
import { useState } from "react";
import { layoutPlots, locationLayouts } from "@/lib/layout-plots";
import type { LayoutPlot, PlotCity } from "@/lib/layout-plots";
import PlotDetailModal from "@/components/PlotDetailModal";

const cities: PlotCity[] = ["Patna", "Muzaffarpur", "Raxaul"];

export default function PlotLayoutSection() {
  const [activeCity, setActiveCity] = useState<PlotCity>("Patna");
  const [hoveredPlot, setHoveredPlot] = useState<number | null>(null);
  const [selectedPlot, setSelectedPlot] = useState<LayoutPlot | null>(null);

  const activeLayout = locationLayouts.find((l) => l.city === activeCity)!;
  const modalCityPlots = selectedPlot
    ? locationLayouts.find((l) => l.city === selectedPlot.city)?.plots ?? activeLayout.plots
    : activeLayout.plots;

  return (
    <>
      <section className="pt-12 pb-8 md:pt-24 md:pb-10 bg-forest-900 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
            <span className="text-[10px] uppercase text-ivory/50 font-bold tracking-widest mb-3 sm:mb-4 block">
              Interactive Layout
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-ivory mb-3 sm:mb-4">See Where Your Plot Could Be</h2>
            <p className="text-ivory/80 text-base sm:text-lg font-light px-2">
              Select a location and explore detailed plot layouts across Patna, Muzaffarpur and Raxaul.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setActiveCity(city)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-sm text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCity === city
                    ? "bg-ivory text-forest-900 shadow-md"
                    : "bg-ivory/10 text-ivory/80 hover:bg-ivory/20 border border-ivory/20"
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          <div className="mb-4 text-center">
            <p className="text-ivory/60 text-sm">{activeLayout.description}</p>
            <p className="text-ivory/90 text-xs font-semibold mt-1">{activeLayout.projectName}</p>
          </div>

          <div className="relative w-full aspect-[4/3] sm:aspect-video md:aspect-[21/9] bg-forest-800 rounded-sm overflow-hidden shadow-2xl border border-ivory/10">
            <Image
              src={activeLayout.backgroundImage}
              alt={`${activeCity} plot layout`}
              fill
              className="object-cover opacity-80 transition-opacity duration-500"
            />

            <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4">
              <div className="grid grid-cols-5 gap-1 sm:gap-2 md:gap-4 w-full max-w-full sm:w-[92%] md:w-3/4">
                {activeLayout.plots.map((plot) => {
                  const isSold = plot.status === "Sold";
                  const isReserved = plot.status === "Reserved";
                  const isAvailable = plot.status === "Available";

                  return (
                    <div
                      key={plot.id}
                      role="button"
                      tabIndex={0}
                      onClick={() => setSelectedPlot(plot)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelectedPlot(plot);
                        }
                      }}
                      className={`relative aspect-[4/3] min-h-[2.5rem] border-2 border-ivory/30 backdrop-blur-sm transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-0.5 touch-manipulation
                        ${isSold ? "bg-red-500/25 border-red-400/50" : ""}
                        ${isReserved ? "bg-yellow-500/25 border-yellow-400/50" : ""}
                        ${isAvailable ? "bg-forest-500/25 border-forest-300/50 hover:bg-forest-500/45 hover:border-ivory hover:scale-105" : ""}
                      `}
                      onMouseEnter={() => setHoveredPlot(plot.id)}
                      onMouseLeave={() => setHoveredPlot(null)}
                    >
                      <span className="text-ivory font-bold text-[10px] md:text-xs">{plot.plotNumber}</span>
                      <span className="text-ivory/60 text-[8px] md:text-[10px] hidden sm:block">{plot.size}</span>

                      {hoveredPlot === plot.id && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 bg-ivory rounded-lg shadow-xl p-3 z-20 text-center pointer-events-none">
                          <div className="font-bold text-forest-900 mb-0.5 text-xs">{plot.plotNumber}</div>
                          <div className="text-[10px] text-charcoal font-medium">{plot.city}</div>
                          <div className="text-[10px] text-charcoal font-medium mb-1">{plot.size}</div>
                          <div className="text-[10px] text-forest-900 font-bold mb-1">₹ {plot.price}*</div>
                          <div
                            className={`text-[9px] uppercase font-bold py-0.5 rounded ${
                              isAvailable
                                ? "text-forest-600 bg-forest-50"
                                : isReserved
                                  ? "text-yellow-700 bg-yellow-50"
                                  : "text-red-600 bg-red-50"
                            }`}
                          >
                            {plot.status}
                          </div>
                          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-ivory transform rotate-45" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-ivory/95 rounded-sm px-2 py-1.5 sm:px-3 sm:py-2 shadow-md">
              <p className="text-[9px] sm:text-[10px] uppercase font-bold text-gray-400">Location</p>
              <p className="text-xs sm:text-sm font-bold text-forest-900">{activeCity}</p>
            </div>

            <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-auto sm:right-4 sm:w-auto bg-ivory p-2 sm:p-3 md:p-4 rounded-sm shadow-lg flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-[9px] sm:text-[10px] font-bold text-charcoal uppercase tracking-wider border border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-forest-500/50 border border-forest-500" /> Available
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500/50 border border-yellow-500" /> Reserved
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500/50 border border-red-500" /> Sold
              </div>
            </div>
          </div>

          <p className="text-center text-ivory/50 text-xs mt-6">
            Click any plot to view full details with location map — {layoutPlots.length} plots across 3 cities
          </p>
        </div>
      </section>

      <PlotDetailModal
        plot={selectedPlot}
        onClose={() => setSelectedPlot(null)}
        cityPlots={modalCityPlots}
      />
    </>
  );
}

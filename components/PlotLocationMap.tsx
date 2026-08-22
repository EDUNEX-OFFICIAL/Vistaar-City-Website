"use client";

import { MapPin, Navigation } from "lucide-react";

export type MapPlotItem = {
  id: number | string;
  plotNumber: string;
  status: "Available" | "Reserved" | "Sold";
  city: string;
  mapCoordinates: { lat: number; lng: number };
  landmarks: string[];
  connectivity: string[];
};

type PlotLocationMapProps = {
  plot: MapPlotItem;
  allPlotsInCity: MapPlotItem[];
};

export default function PlotLocationMap({ plot, allPlotsInCity }: PlotLocationMapProps) {
  const mapUrl = `https://www.google.com/maps?q=${plot.mapCoordinates.lat},${plot.mapCoordinates.lng}&z=14&output=embed`;
  const layoutPlots = allPlotsInCity.slice(0, 25);

  return (
    <div className="mb-6 space-y-4">
      <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">Location Map</h3>

      <div className="overflow-hidden rounded-sm border border-gray-200 bg-sand-100">
        <div className="relative aspect-[16/10] w-full bg-forest-900/5">
          <iframe
            title={`Map for ${plot.plotNumber} - ${plot.city}`}
            src={mapUrl}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute left-3 top-3 rounded-sm bg-white/95 px-3 py-1.5 text-xs font-bold text-forest-900 shadow-md">
            📍 {plot.city} — {plot.plotNumber}
          </div>
        </div>

        {layoutPlots.length > 0 && (
          <div className="border-t border-gray-200 bg-white p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Layout Position</p>
            <div className="grid grid-cols-5 gap-1 sm:gap-1.5 max-w-full sm:max-w-md">
              {layoutPlots.map((p) => (
                <div
                  key={p.id}
                  className={`flex h-8 sm:h-10 items-center justify-center rounded-sm border text-[8px] sm:text-[10px] font-bold ${
                    p.id === plot.id
                      ? "border-forest-900 bg-forest-900 text-white ring-2 ring-gold/50"
                      : p.status === "Sold"
                        ? "border-red-200 bg-red-50 text-red-600"
                        : p.status === "Reserved"
                          ? "border-yellow-200 bg-yellow-50 text-yellow-700"
                          : "border-gray-200 bg-gray-50 text-gray-500"
                  }`}
                >
                  {p.plotNumber.split("-")[1] ?? p.plotNumber}
                </div>
              ))}
            </div>
            <p className="mt-2 text-[10px] text-gray-400">Highlighted box shows selected plot in project layout</p>
          </div>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-sm border border-gray-100 bg-sand-100/60 p-4">
          <p className="mb-2 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gray-500">
            <MapPin className="h-3.5 w-3.5" /> Nearby Landmarks
          </p>
          <ul className="space-y-1.5">
            {plot.landmarks.map((item) => (
              <li key={item} className="text-xs text-charcoal">• {item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-sm border border-gray-100 bg-sand-100/60 p-4">
          <p className="mb-2 flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gray-500">
            <Navigation className="h-3.5 w-3.5" /> Connectivity
          </p>
          <ul className="space-y-1.5">
            {plot.connectivity.map((item) => (
              <li key={item} className="text-xs text-charcoal">• {item}</li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href={`https://www.google.com/maps/search/?api=1&query=${plot.mapCoordinates.lat},${plot.mapCoordinates.lng}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-900 hover:text-forest-700"
      >
        <MapPin className="h-4 w-4" />
        Open in Google Maps
      </a>
    </div>
  );
}

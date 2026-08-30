"use client";

import { MapPin, Navigation } from "lucide-react";
import { layoutCellStyles, modalSectionLabel } from "@/lib/modal-styles";

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

function cellStyle(plot: MapPlotItem, current: MapPlotItem): string {
  if (plot.id === current.id) return layoutCellStyles.selected;
  if (plot.status === "Sold") return layoutCellStyles.sold;
  if (plot.status === "Reserved") return layoutCellStyles.reserved;
  return layoutCellStyles.available;
}

export default function PlotLocationMap({ plot, allPlotsInCity }: PlotLocationMapProps) {
  const mapUrl = `https://www.google.com/maps?q=${plot.mapCoordinates.lat},${plot.mapCoordinates.lng}&z=14&output=embed`;
  const layoutPlots = allPlotsInCity.slice(0, 25);

  return (
    <div className="mb-6 space-y-4">
      <h3 className={modalSectionLabel}>Location Map</h3>

      <div className="overflow-hidden rounded-sm border border-sand-200 bg-sand-100">
        <div className="relative aspect-[16/10] w-full bg-forest-900/5">
          <iframe
            title={`Map for ${plot.plotNumber} - ${plot.city}`}
            src={mapUrl}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-sm bg-ivory/95 px-3 py-1.5 text-xs font-bold text-forest-900 shadow-sm">
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
            {plot.city} — {plot.plotNumber}
          </div>
        </div>

        {layoutPlots.length > 0 && (
          <div className="border-t border-sand-200 bg-ivory p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-forest-600">
              Layout Position
            </p>
            <div className="grid max-w-full grid-cols-5 gap-1 sm:max-w-md sm:gap-1.5">
              {layoutPlots.map((p) => (
                <div
                  key={p.id}
                  className={`flex h-8 items-center justify-center rounded-sm border text-[8px] font-bold sm:h-10 sm:text-[10px] ${cellStyle(p, plot)}`}
                >
                  {p.plotNumber.split("-")[1] ?? p.plotNumber}
                </div>
              ))}
            </div>
            <p className="mt-2 text-[10px] text-charcoal/50">
              Highlighted box shows selected plot in project layout
            </p>
          </div>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-sm border border-sand-200 bg-sand-100/60 p-4">
          <p className={`${modalSectionLabel} mb-2 flex items-center gap-1`}>
            <MapPin className="h-3.5 w-3.5" aria-hidden /> Nearby Landmarks
          </p>
          <ul className="space-y-1.5">
            {plot.landmarks.map((item) => (
              <li key={item} className="text-xs text-charcoal">
                • {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-sm border border-sand-200 bg-sand-100/60 p-4">
          <p className={`${modalSectionLabel} mb-2 flex items-center gap-1`}>
            <Navigation className="h-3.5 w-3.5" aria-hidden /> Connectivity
          </p>
          <ul className="space-y-1.5">
            {plot.connectivity.map((item) => (
              <li key={item} className="text-xs text-charcoal">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href={`https://www.google.com/maps/search/?api=1&query=${plot.mapCoordinates.lat},${plot.mapCoordinates.lng}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-12 items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-800 hover:text-forest-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-900 focus-visible:ring-offset-2 rounded-sm"
      >
        <MapPin className="h-4 w-4" aria-hidden />
        Open in Google Maps
      </a>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  IndianRupee,
  Maximize2,
  Compass,
  CheckCircle2,
  Ruler,
} from "lucide-react";
import type { LayoutPlot } from "@/lib/layout-plots";
import { routes } from "@/lib/routes";
import PlotLocationMap from "@/components/PlotLocationMap";
import DetailModalShell from "@/components/modals/DetailModalShell";
import {
  modalFooterPrimary,
  modalFooterSecondary,
  modalHeroImage,
  modalMetaLabel,
  modalSectionLabel,
  plotStatusStyles,
} from "@/lib/modal-styles";

type PlotDetailModalProps = {
  plot: LayoutPlot | null;
  onClose: () => void;
  cityPlots: LayoutPlot[];
};

export default function PlotDetailModal({ plot, onClose, cityPlots }: PlotDetailModalProps) {
  return (
    <DetailModalShell
      isOpen={!!plot}
      onClose={onClose}
      titleId="plot-modal-title"
      header={
        plot ? (
          <>
            <span
              className={`mb-1 inline-block rounded-sm px-2 py-0.5 text-[10px] font-bold tracking-wider ${plotStatusStyles[plot.status]}`}
            >
              {plot.status.toUpperCase()}
            </span>
            <h2
              id="plot-modal-title"
              className="break-words font-serif text-lg font-semibold text-forest-900 sm:text-xl md:text-2xl"
            >
              {plot.plotNumber} — {plot.city}
            </h2>
          </>
        ) : null
      }
      footer={
        plot ? (
          plot.status === "Available" ? (
            <>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${plot.mapCoordinates.lat},${plot.mapCoordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className={modalFooterSecondary}
              >
                View on Map
              </a>
              <Link href={routes.contact} onClick={onClose} className={modalFooterPrimary}>
                Enquire Now
              </Link>
            </>
          ) : (
            <button type="button" onClick={onClose} className={`${modalFooterPrimary} w-full`}>
              Close
            </button>
          )
        ) : null
      }
    >
      {plot && (
        <>
          <div className={modalHeroImage}>
            <Image
              src={plot.image}
              alt={`Plot ${plot.plotNumber} layout`}
              fill
              className="object-cover"
              sizes="(max-width: 672px) 100vw, 672px"
            />
          </div>

          <p className="mb-1 flex items-center gap-1.5 text-sm text-charcoal/80">
            <MapPin className="h-4 w-4 shrink-0 text-forest-800" aria-hidden />
            {plot.location}
          </p>
          <p className="mb-5 text-xs font-semibold text-forest-900">{plot.projectName}</p>

          <p className="mb-6 text-sm leading-relaxed text-charcoal/80">{plot.description}</p>

          <div className="mb-6 grid grid-cols-2 gap-3 rounded-sm border border-sand-200 bg-sand-100/60 p-4 text-sm">
            <div>
              <div className={modalMetaLabel}>
                <Maximize2 className="h-3.5 w-3.5" aria-hidden /> Plot Size
              </div>
              <div className="font-semibold text-charcoal">{plot.size}</div>
            </div>
            <div>
              <div className={modalMetaLabel}>
                <Ruler className="h-3.5 w-3.5" aria-hidden /> Dimensions
              </div>
              <div className="font-semibold text-charcoal">{plot.dimensions}</div>
            </div>
            <div>
              <div className={modalMetaLabel}>
                <IndianRupee className="h-3.5 w-3.5" aria-hidden /> Price
              </div>
              <div className="font-semibold text-forest-900">₹ {plot.price}*</div>
            </div>
            <div>
              <div className={modalMetaLabel}>
                <Compass className="h-3.5 w-3.5" aria-hidden /> Facing
              </div>
              <div className="font-semibold text-charcoal">{plot.facing}</div>
            </div>
          </div>

          <PlotLocationMap plot={plot} allPlotsInCity={cityPlots} />

          <div>
            <h3 className={modalSectionLabel}>Plot Highlights</h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {plot.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-charcoal">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-forest-800" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </DetailModalShell>
  );
}

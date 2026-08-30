"use client";

import Image from "next/image";
import {
  MapPin,
  CheckCircle2,
  Phone,
  Mail,
  MessageCircle,
  User,
} from "lucide-react";
import type { PlotRecord } from "@/lib/all-plots";
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

type FullPlotDetailModalProps = {
  plot: PlotRecord | null;
  cityPlots: PlotRecord[];
  onClose: () => void;
};

export default function FullPlotDetailModal({ plot, cityPlots, onClose }: FullPlotDetailModalProps) {
  return (
    <DetailModalShell
      isOpen={!!plot}
      onClose={onClose}
      titleId="full-plot-modal-title"
      panelClassName="max-w-3xl"
      header={
        plot ? (
          <>
            <span
              className={`mb-1 inline-block rounded-sm px-2 py-0.5 text-[10px] font-bold tracking-wider ${plotStatusStyles[plot.status]}`}
            >
              {plot.status.toUpperCase()}
            </span>
            <h2
              id="full-plot-modal-title"
              className="break-words font-serif text-base font-semibold text-forest-900 sm:text-xl md:text-2xl"
            >
              {plot.plotNumber} — Block {plot.block}, Sector {plot.sector}
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
              <a
                href={`tel:${plot.salesContact.phone.replace(/\s/g, "")}`}
                className={modalFooterPrimary}
              >
                Call to Enquire
              </a>
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
            <Image src={plot.image} alt={plot.plotNumber} fill className="object-cover" sizes="768px" />
          </div>

          <p className="mb-1 flex items-center gap-1.5 text-sm text-charcoal/80">
            <MapPin className="h-4 w-4 shrink-0 text-forest-800" aria-hidden /> {plot.location}
          </p>
          <p className="mb-5 text-xs font-semibold text-forest-900">{plot.projectName}</p>
          <p className="mb-6 text-sm leading-relaxed text-charcoal/80">{plot.description}</p>

          <div className="mb-6 grid grid-cols-2 gap-3 rounded-sm border border-sand-200 bg-sand-100/60 p-4 text-sm md:grid-cols-4">
            <div>
              <div className={modalMetaLabel}>Plot Size</div>
              <div className="font-semibold text-charcoal">{plot.size}</div>
            </div>
            <div>
              <div className={modalMetaLabel}>Dimensions</div>
              <div className="font-semibold text-charcoal">{plot.dimensions}</div>
            </div>
            <div>
              <div className={modalMetaLabel}>Price</div>
              <div className="font-semibold text-forest-900">₹ {plot.price}*</div>
            </div>
            <div>
              <div className={modalMetaLabel}>Per Sq.Ft.</div>
              <div className="font-semibold text-charcoal">{plot.pricePerSqFt}</div>
            </div>
            <div>
              <div className={modalMetaLabel}>Facing</div>
              <div className="font-semibold text-charcoal">{plot.facing}</div>
            </div>
            <div>
              <div className={modalMetaLabel}>Block / Sector</div>
              <div className="font-semibold text-charcoal">
                {plot.block} / {plot.sector}
              </div>
            </div>
            <div>
              <div className={modalMetaLabel}>Registration</div>
              <div className="text-xs font-semibold text-charcoal">{plot.registrationStatus}</div>
            </div>
            <div>
              <div className={modalMetaLabel}>Possession</div>
              <div className="text-xs font-semibold text-charcoal">{plot.possessionTimeline}</div>
            </div>
          </div>

          <PlotLocationMap plot={plot} allPlotsInCity={cityPlots} />

          <div className="mb-6">
            <h3 className={modalSectionLabel}>Plot Highlights</h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {plot.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-charcoal">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-forest-800" aria-hidden /> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-sm border border-forest-800/20 bg-forest-900/5 p-5">
            <h3 className={modalSectionLabel}>Sold & Managed By</h3>
            <p className="mb-4 text-sm font-semibold text-forest-900">{plot.soldBy}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <User className="mt-0.5 h-4 w-4 text-forest-800" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-charcoal">{plot.salesContact.name}</p>
                  <p className="text-xs text-charcoal/70">{plot.salesContact.role}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-charcoal">
                <a
                  href={`tel:${plot.salesContact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 hover:text-forest-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-900 rounded-sm"
                >
                  <Phone className="h-4 w-4" aria-hidden /> {plot.salesContact.phone}
                </a>
                <a
                  href={`mailto:${plot.salesContact.email}`}
                  className="flex items-center gap-2 hover:text-forest-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-900 rounded-sm"
                >
                  <Mail className="h-4 w-4" aria-hidden /> {plot.salesContact.email}
                </a>
                <a
                  href={`https://wa.me/${plot.salesContact.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-forest-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-900 rounded-sm"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp Enquiry
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </DetailModalShell>
  );
}

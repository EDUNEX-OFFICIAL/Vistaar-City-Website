"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  MapPin,
  CheckCircle2,
  Phone,
  Mail,
  MessageCircle,
  User,
} from "lucide-react";
import type { PlotRecord } from "@/lib/all-plots";
import PlotLocationMap from "@/components/PlotLocationMap";

type FullPlotDetailModalProps = {
  plot: PlotRecord | null;
  cityPlots: PlotRecord[];
  onClose: () => void;
};

const statusStyles: Record<PlotRecord["status"], string> = {
  Available: "bg-forest-600 text-white",
  Reserved: "bg-yellow-600 text-white",
  Sold: "bg-red-600 text-white",
};

export default function FullPlotDetailModal({ plot, cityPlots, onClose }: FullPlotDetailModalProps) {
  useEffect(() => {
    document.body.style.overflow = plot ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [plot]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (plot) window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [plot, onClose]);

  return (
    <AnimatePresence>
      {plot && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 p-0 sm:items-center sm:p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            className="flex h-[94vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-sm bg-white shadow-2xl sm:max-h-[92vh] sm:rounded-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex shrink-0 items-start justify-between gap-3 border-b border-gray-100 px-4 py-4 sm:px-5 md:px-6">
              <div className="min-w-0 flex-1">
                <span className={`mb-1 inline-block rounded-sm px-2 py-0.5 text-[10px] font-bold tracking-wider ${statusStyles[plot.status]}`}>
                  {plot.status.toUpperCase()}
                </span>
                <h2 className="font-serif text-base font-bold text-forest-900 sm:text-xl md:text-2xl break-words">
                  {plot.plotNumber} — Block {plot.block}, Sector {plot.sector}
                </h2>
              </div>
              <button onClick={onClose} className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50" aria-label="Close">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5 md:px-6 md:py-6">
              <div className="relative mb-5 h-40 overflow-hidden rounded-sm border border-gray-100 md:h-48">
                <Image src={plot.image} alt={plot.plotNumber} fill className="object-cover" sizes="768px" />
              </div>

              <p className="mb-1 flex items-center gap-1.5 text-sm text-gray-600">
                <MapPin className="h-4 w-4 text-forest-800" /> {plot.location}
              </p>
              <p className="mb-5 text-xs font-semibold text-forest-900">{plot.projectName}</p>
              <p className="mb-6 text-sm leading-relaxed text-charcoal/80">{plot.description}</p>

              <div className="mb-6 grid grid-cols-2 gap-3 rounded-sm border border-gray-100 bg-sand-100/60 p-4 text-sm md:grid-cols-4">
                <div>
                  <div className="mb-1 text-xs text-gray-500">Plot Size</div>
                  <div className="font-bold">{plot.size}</div>
                </div>
                <div>
                  <div className="mb-1 text-xs text-gray-500">Dimensions</div>
                  <div className="font-bold">{plot.dimensions}</div>
                </div>
                <div>
                  <div className="mb-1 text-xs text-gray-500">Price</div>
                  <div className="font-bold text-forest-900">₹ {plot.price}*</div>
                </div>
                <div>
                  <div className="mb-1 text-xs text-gray-500">Per Sq.Ft.</div>
                  <div className="font-bold">{plot.pricePerSqFt}</div>
                </div>
                <div>
                  <div className="mb-1 text-xs text-gray-500">Facing</div>
                  <div className="font-bold">{plot.facing}</div>
                </div>
                <div>
                  <div className="mb-1 text-xs text-gray-500">Block / Sector</div>
                  <div className="font-bold">{plot.block} / {plot.sector}</div>
                </div>
                <div>
                  <div className="mb-1 text-xs text-gray-500">Registration</div>
                  <div className="font-bold text-xs">{plot.registrationStatus}</div>
                </div>
                <div>
                  <div className="mb-1 text-xs text-gray-500">Possession</div>
                  <div className="font-bold text-xs">{plot.possessionTimeline}</div>
                </div>
              </div>

              <PlotLocationMap plot={plot} allPlotsInCity={cityPlots} />

              <div className="mb-6">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500">Plot Highlights</h3>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {plot.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-forest-800" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-sm border border-forest-900/20 bg-forest-900/5 p-5">
                <h3 className="mb-1 text-xs font-bold uppercase tracking-wider text-gray-500">Sold & Managed By</h3>
                <p className="mb-4 text-sm font-bold text-forest-900">{plot.soldBy}</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <User className="mt-0.5 h-4 w-4 text-forest-800" />
                    <div>
                      <p className="text-sm font-bold">{plot.salesContact.name}</p>
                      <p className="text-xs text-gray-500">{plot.salesContact.role}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <a href={`tel:${plot.salesContact.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-forest-900">
                      <Phone className="h-4 w-4" /> {plot.salesContact.phone}
                    </a>
                    <a href={`mailto:${plot.salesContact.email}`} className="flex items-center gap-2 hover:text-forest-900">
                      <Mail className="h-4 w-4" /> {plot.salesContact.email}
                    </a>
                    <a href={`https://wa.me/${plot.salesContact.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-forest-900">
                      <MessageCircle className="h-4 w-4" /> WhatsApp Enquiry
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="shrink-0 border-t border-gray-100 px-5 py-4 md:px-6">
              <div className="flex gap-3">
                {plot.status === "Available" ? (
                  <>
                    <a href={`https://www.google.com/maps/search/?api=1&query=${plot.mapCoordinates.lat},${plot.mapCoordinates.lng}`} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-sm border border-forest-900 py-3 text-center text-xs font-bold uppercase tracking-wider text-forest-900 hover:bg-forest-50">
                      View on Map
                    </a>
                    <a href={`tel:${plot.salesContact.phone.replace(/\s/g, "")}`} className="flex-1 rounded-sm bg-forest-900 py-3 text-center text-xs font-bold uppercase tracking-wider text-white hover:bg-forest-800">
                      Call to Enquire
                    </a>
                  </>
                ) : (
                  <button onClick={onClose} className="flex-1 rounded-sm bg-forest-900 py-3 text-xs font-bold uppercase tracking-wider text-white">
                    Close
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

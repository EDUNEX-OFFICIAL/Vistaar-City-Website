"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  MapPin,
  IndianRupee,
  Maximize2,
  Calendar,
  CheckCircle2,
  Navigation,
} from "lucide-react";
import type { Project } from "@/lib/projects";

type ProjectDetailModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 p-0 sm:items-center sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.25 }}
            className="flex h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-sm bg-white shadow-2xl sm:h-auto sm:max-h-[90vh] sm:rounded-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex shrink-0 items-start justify-between gap-3 border-b border-gray-100 px-4 py-4 sm:px-5 md:px-6">
              <div className="min-w-0 flex-1">
                <span className="mb-1 inline-block rounded-sm bg-forest-600 px-2 py-0.5 text-[10px] font-bold tracking-wider text-white">
                  {project.status.toUpperCase()}
                </span>
                <h2 id="project-modal-title" className="font-serif text-lg font-bold text-forest-900 sm:text-xl md:text-2xl break-words">
                  {project.name}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-charcoal transition-colors hover:bg-gray-50"
                aria-label="Close details"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5 md:px-6 md:py-6">
              <div className="relative mb-5 h-44 overflow-hidden rounded-sm border border-gray-100 md:h-52">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className={`object-cover ${project.imageClass ?? "object-center"}`}
                  sizes="(max-width: 672px) 100vw, 672px"
                  priority
                />
              </div>

              <p className="mb-5 flex items-center gap-1.5 text-sm text-gray-600">
                <MapPin className="h-4 w-4 shrink-0 text-forest-800" />
                {project.location}
              </p>

              <p className="mb-6 text-sm leading-relaxed text-charcoal/80">{project.fullDescription}</p>

              <div className="mb-6 grid grid-cols-2 gap-3 rounded-sm border border-gray-100 bg-sand-100/60 p-4 text-sm md:grid-cols-4">
                <div>
                  <div className="mb-1 flex items-center gap-1 text-xs text-gray-500">
                    <Maximize2 className="h-3.5 w-3.5" /> Plot Sizes
                  </div>
                  <div className="font-bold text-charcoal">{project.sizes}</div>
                </div>
                <div>
                  <div className="mb-1 flex items-center gap-1 text-xs text-gray-500">
                    <IndianRupee className="h-3.5 w-3.5" /> Starting Price
                  </div>
                  <div className="font-bold text-forest-900">₹ {project.price}*</div>
                </div>
                <div>
                  <div className="mb-1 text-xs text-gray-500">Available Plots</div>
                  <div className="font-bold text-charcoal">
                    {project.availablePlots} / {project.totalPlots}
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex items-center gap-1 text-xs text-gray-500">
                    <Calendar className="h-3.5 w-3.5" /> Launch Year
                  </div>
                  <div className="font-bold text-charcoal">{project.launchYear}</div>
                </div>
              </div>

              <div className="mb-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500">Amenities</h3>
                  <ul className="grid gap-2">
                    {project.amenities.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-charcoal">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-forest-800" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500">Connectivity</h3>
                  <ul className="space-y-2">
                    {project.connectivity.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
                        <Navigation className="mt-0.5 h-4 w-4 shrink-0 text-forest-800" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.plotTypes.map((type) => (
                  <span
                    key={type}
                    className="rounded-sm border border-forest-900/20 bg-forest-900/5 px-3 py-1 text-xs font-semibold text-forest-900"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0 border-t border-gray-100 bg-white px-5 py-4 md:px-6">
              <div className="flex gap-3">
                <a
                  href="#locations"
                  onClick={onClose}
                  className="flex-1 rounded-sm border border-forest-900 py-3 text-center text-xs font-bold uppercase tracking-wider text-forest-900 transition-colors hover:bg-forest-50"
                >
                  View Map
                </a>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="flex-1 rounded-sm bg-forest-900 py-3 text-center text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-forest-800"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

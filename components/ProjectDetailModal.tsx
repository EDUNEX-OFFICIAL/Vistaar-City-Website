"use client";

import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  IndianRupee,
  Maximize2,
  Calendar,
  CheckCircle2,
  Navigation,
} from "lucide-react";
import type { Project } from "@/lib/projects";
import { routes } from "@/lib/routes";
import DetailModalShell from "@/components/modals/DetailModalShell";
import {
  modalFooterPrimary,
  modalFooterSecondary,
  modalHeroImage,
  modalMetaLabel,
  modalSectionLabel,
  projectStatusStyles,
} from "@/lib/modal-styles";

type ProjectDetailModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  return (
    <DetailModalShell
      isOpen={!!project}
      onClose={onClose}
      titleId="project-modal-title"
      header={
        project ? (
          <>
            <span
              className={`mb-1 inline-block rounded-sm px-2 py-0.5 text-[10px] font-bold tracking-wider ${projectStatusStyles[project.status]}`}
            >
              {project.status.toUpperCase()}
            </span>
            <h2
              id="project-modal-title"
              className="break-words font-serif text-lg font-semibold text-forest-900 sm:text-xl md:text-2xl"
            >
              {project.name}
            </h2>
          </>
        ) : null
      }
      footer={
        project ? (
          <>
            <Link href={routes.locations} onClick={onClose} className={modalFooterSecondary}>
              View Locations
            </Link>
            <Link href={routes.contact} onClick={onClose} className={modalFooterPrimary}>
              Enquire Now
            </Link>
          </>
        ) : null
      }
    >
      {project && (
        <>
          <div className={modalHeroImage}>
            <Image
              src={project.image}
              alt={project.name}
              fill
              className={`object-cover ${project.imageClass ?? "object-center"}`}
              sizes="(max-width: 672px) 100vw, 672px"
            />
          </div>

          <p className="mb-5 flex items-center gap-1.5 text-sm text-charcoal/80">
            <MapPin className="h-4 w-4 shrink-0 text-forest-800" aria-hidden />
            {project.location}
          </p>

          <p className="mb-6 text-sm leading-relaxed text-charcoal/80">{project.fullDescription}</p>

          <div className="mb-6 grid grid-cols-2 gap-3 rounded-sm border border-sand-200 bg-sand-100/60 p-4 text-sm md:grid-cols-4">
            <div>
              <div className={modalMetaLabel}>
                <Maximize2 className="h-3.5 w-3.5" aria-hidden /> Plot Sizes
              </div>
              <div className="font-semibold text-charcoal">{project.sizes}</div>
            </div>
            <div>
              <div className={modalMetaLabel}>
                <IndianRupee className="h-3.5 w-3.5" aria-hidden /> Starting Price
              </div>
              <div className="font-semibold text-forest-900">₹ {project.price}*</div>
            </div>
            <div>
              <div className={modalMetaLabel}>Available Plots</div>
              <div className="font-semibold text-charcoal">
                {project.availablePlots} / {project.totalPlots}
              </div>
            </div>
            <div>
              <div className={modalMetaLabel}>
                <Calendar className="h-3.5 w-3.5" aria-hidden /> Launch Year
              </div>
              <div className="font-semibold text-charcoal">{project.launchYear}</div>
            </div>
          </div>

          <div className="mb-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className={modalSectionLabel}>Amenities</h3>
              <ul className="grid gap-2">
                {project.amenities.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-charcoal">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-forest-800" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className={modalSectionLabel}>Connectivity</h3>
              <ul className="space-y-2">
                {project.connectivity.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-charcoal">
                    <Navigation className="mt-0.5 h-4 w-4 shrink-0 text-forest-800" aria-hidden />
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
                className="rounded-sm border border-forest-800/20 bg-forest-900/5 px-3 py-1 text-xs font-semibold text-forest-900"
              >
                {type}
              </span>
            ))}
          </div>
        </>
      )}
    </DetailModalShell>
  );
}

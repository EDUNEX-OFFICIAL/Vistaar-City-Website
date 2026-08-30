"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import ProjectCarousel from "@/components/ProjectCarousel";
import ProjectDetailModal from "@/components/ProjectDetailModal";
import NextStepCta from "@/components/sections/NextStepCta";
import type { Project } from "@/lib/projects";
import { sectionPad } from "@/lib/section-styles";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section className={`overflow-hidden border-b border-sand-200 bg-ivory ${sectionPad}`}>
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <ProjectCarousel projects={projects} onSelect={setSelectedProject} />
        </div>
      </section>

      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <NextStepCta />
    </>
  );
}

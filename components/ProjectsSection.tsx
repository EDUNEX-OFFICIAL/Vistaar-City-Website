"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import ProjectCarousel from "@/components/ProjectCarousel";
import ProjectDetailModal from "@/components/ProjectDetailModal";
import PlotLayoutSection from "@/components/PlotLayoutSection";
import type { Project } from "@/lib/projects";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      {/* Featured Projects */}
      <section id="projects" className="py-12 md:py-24 bg-white border-b border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="mb-8 md:mb-10 max-w-2xl">
            <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest mb-3 sm:mb-4 block">Properties</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-900 mb-2">Featured Plotting Projects</h2>
            <p className="text-charcoal/70 text-sm">Find land in locations that match your plans, lifestyle and budget.</p>
          </div>

          <ProjectCarousel projects={projects} onSelect={setSelectedProject} />
        </div>
      </section>

      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <PlotLayoutSection />

      {/* Find Your Plot Interactive */}
      <section className="pt-8 pb-12 md:pt-4 md:pb-20 bg-forest-900 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
          <span className="text-[10px] uppercase text-white/50 font-bold tracking-widest mb-3 sm:mb-4 block">Property Finder</span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Find A Plot That Fits Your Plan</h2>
          <p className="text-white/80 mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto font-light">Use our property finder to filter through available residential plots based on your exact requirements.</p>
          
          <div className="bg-white rounded-sm p-4 md:p-6 shadow-2xl text-left border border-gray-100 flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-end">
            <div className="flex-1 w-full">
              <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2">Location</label>
              <select className="w-full bg-sand-100 border-none rounded-sm px-4 py-3 text-sm font-medium text-charcoal focus:ring-0 cursor-pointer">
                <option>All Locations</option>
                <option>Patna Region</option>
                <option>Muzaffarpur</option>
                <option>Raxaul</option>
              </select>
            </div>
            <div className="flex-1 w-full">
              <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2">Plot Purpose</label>
              <select className="w-full bg-sand-100 border-none rounded-sm px-4 py-3 text-sm font-medium text-charcoal focus:ring-0 cursor-pointer">
                <option>Build a Home</option>
                <option>Investment</option>
                <option>Future Planning</option>
                <option>Commercial Use</option>
              </select>
            </div>
            <div className="flex-1 w-full">
              <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2">Plot Size</label>
              <select className="w-full bg-sand-100 border-none rounded-sm px-4 py-3 text-sm font-medium text-charcoal focus:ring-0 cursor-pointer">
                <option>All Sizes</option>
                <option>Under 800 sq.ft.</option>
                <option>800 - 1200 sq.ft.</option>
                <option>1200 - 1500 sq.ft.</option>
                <option>1500+ sq.ft.</option>
              </select>
            </div>
            <div className="flex-1 w-full">
              <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2">Budget Range</label>
              <select className="w-full bg-sand-100 border-none rounded-sm px-4 py-3 text-sm font-medium text-charcoal focus:ring-0 cursor-pointer">
                <option>Any Budget</option>
                <option>Under ₹10 Lakhs</option>
                <option>₹10L - ₹20L</option>
                <option>₹20L - ₹30L</option>
                <option>Above ₹30L</option>
              </select>
            </div>
            <button className="w-full md:w-auto bg-forest-900 text-white px-8 py-3 rounded-sm font-bold text-sm uppercase tracking-wider hover:bg-forest-800 transition-colors shadow-md">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Why This Location */}
      <section className="py-12 md:py-24 bg-sand-100 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest mb-3 sm:mb-4 block">Evaluation</span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-forest-900 mb-3 sm:mb-4">A Good Plot Starts With A Good Location</h2>
            <p className="text-charcoal/70 text-base sm:text-lg font-light">Understanding the fundamental factors that make a location suitable for your land purchase.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Connectivity", desc: "Access to major roads, highways, and important urban destinations." },
              { title: "Development", desc: "Areas experiencing infrastructure upgrades and urban expansion." },
              { title: "Surroundings", desc: "Residential environment, essential facilities, and future planned development." },
              { title: "Planning", desc: "Properly presented plotting layouts and clear project information from Vistar City." }
            ].map((factor, i) => (
              <div key={i} className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm">
                <div className="text-forest-900 font-serif text-3xl opacity-20 mb-4 font-black">0{i+1}</div>
                <h3 className="font-bold text-charcoal text-sm mb-2">{factor.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{factor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

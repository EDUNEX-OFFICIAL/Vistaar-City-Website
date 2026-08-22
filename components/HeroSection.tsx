"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, Map, Navigation2, CheckCircle2, Building, ShieldCheck, HeartHandshake, Eye } from "lucide-react";
import PlotsPreviewSection from "@/components/PlotsPreviewSection";
import heroImg from "@/src/assets/images/hero_plotted_land_1787334586455.jpg";
import aboutImg from "@/src/assets/images/about_plotted_land_1787334600089.jpg";

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center bg-forest-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImg}
            alt="Drone view of plotted land"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/40 to-forest-900/20" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8 py-10 sm:py-14 text-center md:text-left">
          <span className="inline-block text-white/70 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] mb-3 sm:mb-4">
            Trust • Location • Ownership
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 max-w-4xl leading-tight mx-auto md:mx-0">
            Find the Right Plot. <br className="hidden md:block" />
            Build Your Future.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mb-8 sm:mb-10 font-light leading-relaxed mx-auto md:mx-0">
            Discover thoughtfully located residential plots in the rapidly developing growth corridors of Bihar.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-16 max-w-md sm:max-w-none mx-auto md:mx-0">
            <Link
              href="/plots"
              className="w-full sm:w-auto px-8 py-3.5 bg-forest-900 text-white rounded-sm font-semibold hover:bg-forest-800 shadow-md transition-all text-sm uppercase tracking-wider text-center border-2 border-gold"
            >
              Plots
            </Link>
            <Link
              href="/become-a-partner"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/10 text-white border-2 border-gold rounded-sm font-semibold hover:bg-white/20 transition-colors backdrop-blur-md text-sm uppercase tracking-wider text-center"
            >
              Become a Partner
            </Link>
          </div>

          {/* Search/Filter Bar */}
          <div className="max-w-4xl bg-white rounded-sm p-2 shadow-2xl flex flex-col md:flex-row items-center gap-2">
            <div className="flex-1 w-full px-4 py-2 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col items-start">
              <div className="text-[10px] uppercase text-gray-400 font-bold mb-1">Select Location</div>
              <select className="w-full text-sm font-medium bg-transparent border-none p-0 focus:ring-0 cursor-pointer text-charcoal">
                <option>Patna Region</option>
                <option>Muzaffarpur</option>
                <option>Raxaul</option>
              </select>
            </div>
            <div className="flex-1 w-full px-4 py-2 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col items-start">
              <div className="text-[10px] uppercase text-gray-400 font-bold mb-1">Plot Type</div>
              <select className="w-full text-sm font-medium bg-transparent border-none p-0 focus:ring-0 cursor-pointer text-charcoal">
                <option>Residential</option>
                <option>Commercial</option>
                <option>Investment</option>
              </select>
            </div>
            <div className="flex-1 w-full px-4 py-2 flex flex-col items-start">
              <div className="text-[10px] uppercase text-gray-400 font-bold mb-1">Budget</div>
              <select className="w-full text-sm font-medium bg-transparent border-none p-0 focus:ring-0 cursor-pointer text-charcoal">
                <option>Any Budget</option>
                <option>Under ₹10 Lakhs</option>
                <option>₹10L - ₹25L</option>
                <option>Above ₹25L</option>
              </select>
            </div>
            <button className="w-full md:w-auto bg-forest-900 text-white px-8 py-3 font-bold rounded-sm text-sm uppercase tracking-wider hover:bg-forest-800 transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section id="locations" className="py-10 md:py-16 bg-ivory relative z-20 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Patna Region", desc: "Strategically located plots around the expanding capital region." },
              { title: "Muzaffarpur", desc: "Explore residential land opportunities in developing areas." },
              { title: "Raxaul", desc: "Discover plots in an important and rapidly developing growth corridor." },
              { title: "Upcoming", desc: "New plotted developments coming to selected high-potential areas." },
            ].map((loc, i) => (
              <div key={i} className={`p-5 rounded-sm border ${i === 3 ? 'bg-sand-100 border-transparent flex flex-col justify-center' : 'bg-white border-gray-100 hover:shadow-lg transition-all cursor-pointer group'}`}>
                {i !== 3 && (
                  <div className="w-10 h-10 bg-sand-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-forest-900 group-hover:text-white transition-colors text-forest-900">
                    <MapPin className="w-5 h-5" />
                  </div>
                )}
                {i === 3 && <div className="font-bold text-xs uppercase tracking-tighter opacity-50 mb-1">New Corridors</div>}
                <h3 className="font-bold text-sm text-charcoal mb-1">{loc.title}</h3>
                <p className="text-[10px] text-gray-500 leading-relaxed">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Vistar City */}
      <section id="about-us" className="py-12 md:py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative h-[260px] sm:h-[360px] lg:h-[500px] rounded-sm overflow-hidden border border-gray-100 shadow-sm order-2 lg:order-1">
              <Image
                src={aboutImg}
                alt="Plotted land development"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border border-white/20 rounded-sm z-10 pointer-events-none" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest mb-3 sm:mb-4 block">About Us</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-900 mb-4 sm:mb-6 leading-tight">
                Building Possibilities From The Ground Up
              </h2>
              <p className="text-base sm:text-lg text-charcoal/80 mb-5 sm:mb-6 leading-relaxed font-light">
                Vistar City is focused on making plot buying simpler, clearer and more accessible. We help customers discover suitable land opportunities based on location, plot requirements and future plans.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Residential plots in strategic locations",
                  "Transparent property information",
                  "Site visits and customer assistance",
                  "Documentation guidance throughout the process"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-charcoal">
                    <CheckCircle2 className="w-5 h-5 text-forest-900 shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="/plots" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-forest-900 text-white px-8 py-3.5 rounded-sm text-sm uppercase tracking-wider font-bold hover:bg-forest-800 transition-colors shadow-sm">
                Browse All Plots
              </a>
            </div>
          </div>
        </div>
      </section>

      <PlotsPreviewSection />

      {/* Why Choose Vistar City */}
      <section id="why-vistar-city" className="pt-6 pb-12 md:pb-16 bg-sand-100 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
            <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest mb-3 sm:mb-4 block">Our Approach</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 mb-3 sm:mb-4">Why Choose Vistar City</h2>
            <p className="text-charcoal/70 text-base sm:text-lg font-light">We bring clarity and support to your land purchasing journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Map, title: "Strategic Locations", desc: "Plots selected around developing and connected locations." },
              { icon: ShieldCheck, title: "Verified Information", desc: "Present available project, plot and location information clearly." },
              { icon: Eye, title: "Transparent Process", desc: "Make the plot selection and purchase journey simple and understandable." },
              { icon: Navigation2, title: "Site Visit Assistance", desc: "Help customers understand the actual location before making a decision." },
              { icon: Building, title: "Multiple Plot Options", desc: "Different plot sizes and budgets for different customer requirements." },
              { icon: HeartHandshake, title: "Relationship Beyond Sale", desc: "Customer support should continue beyond the initial property enquiry." }
            ].map((feature, i) => (
              <div key={i} className="p-6 bg-white rounded-sm border border-gray-100 hover:shadow-lg transition-all group cursor-pointer">
                <div className="w-10 h-10 bg-sand-100 rounded-full flex items-center justify-center text-forest-900 mb-6 group-hover:bg-forest-900 group-hover:text-white transition-colors">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-charcoal text-sm mb-2">{feature.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

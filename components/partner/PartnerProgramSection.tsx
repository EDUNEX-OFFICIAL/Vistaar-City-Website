"use client";

import { CheckCircle2 } from "lucide-react";

export default function PartnerProgramSection() {
  const benefits = [
    "Access to our property product portfolio",
    "Sales, marketing, and project information support",
    "Dedicated relationship and lead assistance",
    "Training and resources for partners",
  ];

  return (
    <section id="partner-program" className="py-12 md:py-24 bg-forest-900 text-white border-b border-forest-800">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          <div>
            <span className="text-[10px] uppercase text-white/50 font-bold tracking-widest mb-3 sm:mb-4 block">
              Partner Program
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">Grow With Vistar City</h2>
            <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 leading-relaxed font-light">
              Vistar City provides an opportunity for property sales professionals, independent agents and referral
              partners to work with the company&apos;s plotted developments.
            </p>

            <ul className="space-y-4 mb-10 text-sm">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-white/70 shrink-0" />
                  <span className="font-medium text-white/90">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-[10px] text-white/40 italic max-w-md">
              * Note: Commissions and incentives are subject to company policy and applicable terms. We do not make
              guaranteed income claims.
            </p>
          </div>

          <div id="become-a-partner-form" className="bg-white text-charcoal p-5 sm:p-8 rounded-sm shadow-2xl">
            <h3 className="font-bold text-xl text-forest-900 mb-6">Become a Partner</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="w-full bg-sand-100 border-none rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-forest-900"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  required
                  className="w-full bg-sand-100 border-none rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-forest-900"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full bg-sand-100 border-none rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-forest-900"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  required
                  className="w-full bg-sand-100 border-none rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-forest-900"
                />
                <select
                  required
                  className="w-full bg-sand-100 border-none rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-forest-900 appearance-none text-charcoal/70"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Real Estate Experience
                  </option>
                  <option>Beginner</option>
                  <option>1-3 Years</option>
                  <option>3+ Years</option>
                </select>
              </div>
              <select
                className="w-full bg-sand-100 border-none rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-forest-900 appearance-none text-charcoal/70"
                defaultValue=""
              >
                <option value="" disabled>
                  Partner Type
                </option>
                <option>Independent Agent</option>
                <option>Referral Partner</option>
                <option>Property Consultant</option>
                <option>Other</option>
              </select>
              <textarea
                placeholder="Tell us briefly about your current profession..."
                rows={3}
                className="w-full bg-sand-100 border-none rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-forest-900"
              />
              <label className="flex items-start gap-3 mt-4 cursor-pointer group">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 shrink-0 w-4 h-4 text-forest-900 rounded-sm border-gray-300 focus:ring-forest-900"
                />
                <span className="text-[10px] text-gray-500 leading-relaxed group-hover:text-charcoal transition-colors">
                  I agree to be contacted by the Vistar City team regarding the partner program and accept the terms
                  of application.
                </span>
              </label>
              <button
                type="submit"
                className="w-full bg-forest-900 text-white py-3.5 rounded-sm font-bold text-sm uppercase tracking-wider hover:bg-forest-800 transition-colors mt-6 shadow-md"
              >
                Apply As Partner
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

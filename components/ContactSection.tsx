"use client";

import Image from "next/image";
import { Calendar, User, MapPin, Mail, Phone, ChevronDown } from "lucide-react";
import siteVisitImg from "@/src/assets/images/site_visit_1787334650040.jpg";
import { useState } from "react";

export default function ContactSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    { q: "How can I find available plots?", a: "You can explore available plots through our 'Projects' section, use the property finder tool to filter by location and size, or contact our team directly for a personalized list of available options." },
    { q: "What plot sizes are available?", a: "We offer a variety of plot sizes depending on the project, typically ranging from 800 sq.ft. to over 2500 sq.ft. to suit different requirements and budgets." },
    { q: "Where are Vistar City projects located?", a: "Our current plotted developments are strategically located across the Patna region, Muzaffarpur, Raxaul, and other upcoming growth corridors in Bihar." },
    { q: "Can I visit the project before purchasing?", a: "Absolutely. We strongly encourage site visits so you can understand the actual location, surroundings, and plot positioning. You can schedule a visit through our website." },
    { q: "What documents should I review before purchasing a plot?", a: "We provide all necessary project-related documentation, including layout plans, ownership records, and development approvals applicable to the specific project for your review." }
  ];

  return (
    <>
      {/* Real People / Site Visit */}
      <section className="py-12 md:py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest mb-3 sm:mb-4 block">Experience</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-900 mb-4 sm:mb-6 leading-tight">
                Don't Just See The Plot.<br className="hidden sm:block" /> Experience The Location.
              </h2>
              <p className="text-base sm:text-lg text-charcoal/80 mb-6 sm:mb-8 leading-relaxed font-light">
                Visit the project, understand the surroundings, and explore your plot options with our experienced team on the ground.
              </p>
              
              <div className="bg-sand-100 p-5 sm:p-8 rounded-sm shadow-sm border border-gray-200">
                <h3 className="font-bold text-lg text-charcoal mb-6">Schedule a Site Visit</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1">Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="text" className="w-full bg-white border border-gray-200 rounded-sm pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-forest-900" placeholder="Full Name" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1">Phone</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="tel" className="w-full bg-white border border-gray-200 rounded-sm pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-forest-900" placeholder="Mobile Number" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1">Location</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <select className="w-full bg-white border border-gray-200 rounded-sm pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-forest-900 appearance-none">
                          <option>Select Location</option>
                          <option>Patna Region</option>
                          <option>Muzaffarpur</option>
                          <option>Raxaul</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-gray-500 mb-1">Preferred Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input type="date" className="w-full bg-white border border-gray-200 rounded-sm pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-forest-900" />
                      </div>
                    </div>
                  </div>
                  <button type="button" className="w-full bg-forest-900 text-white py-3 rounded-sm font-bold text-sm uppercase tracking-wider hover:bg-forest-800 transition-colors mt-4 shadow-md">
                    Request Site Visit
                  </button>
                </form>
              </div>
            </div>
            
            <div className="relative h-[280px] sm:h-[420px] lg:h-[600px] rounded-sm overflow-hidden shadow-sm border border-gray-100">
              <Image
                src={siteVisitImg}
                alt="Family visiting a residential plot"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-24 bg-sand-100 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest mb-3 sm:mb-4 block">Help Center</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 mb-3 sm:mb-4">Frequently Asked Questions</h2>
            <p className="text-charcoal/70 text-base sm:text-lg font-light">Clear answers to help you understand our plots and processes.</p>
          </div>
          
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="bg-white border border-gray-200 rounded-sm overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button 
                  className="w-full px-4 sm:px-6 py-4 text-left flex items-center justify-between font-bold text-charcoal text-xs sm:text-sm hover:bg-gray-50 transition-colors"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <span className="pr-8">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 shrink-0 text-gray-400 transition-transform duration-300 ${activeFaq === i ? "rotate-180" : ""}`} />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${activeFaq === i ? "max-h-48 pb-4 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-gray-500 leading-relaxed text-xs pt-2 border-t border-gray-100">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Gen Banner */}
      <section className="bg-white py-10 md:py-16 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="bg-forest-900 rounded-sm p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left shadow-xl">
            <div className="max-w-xl">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">Looking For The Right Plot?</h2>
              <p className="text-white/70 text-sm font-light">Tell us your preferred location and requirements. Our team will help you explore suitable options.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <button className="bg-white text-forest-900 px-6 py-3 rounded-sm font-bold text-xs uppercase tracking-wider hover:bg-gray-100 transition-colors shadow-md text-center">
                Find My Plot
              </button>
              <button className="bg-transparent text-white border border-white/30 px-6 py-3 rounded-sm font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors text-center">
                Schedule Site Visit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-24 bg-ivory">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            <div>
              <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest mb-3 sm:mb-4 block">Get In Touch</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-900 mb-3 sm:mb-4">Let's Find Your Place</h2>
              <p className="text-base sm:text-lg text-charcoal/70 mb-8 sm:mb-12 font-light">Reach out to our team for detailed project information, site visits, or partnership inquiries.</p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-forest-900 shrink-0 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-charcoal mb-1">Corporate Office</h4>
                    <p className="text-gray-500 leading-relaxed text-xs">Vistar City Headquarters<br/>Patna, Bihar, India<br/>(Placeholder Address)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-forest-900 shrink-0 shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-charcoal mb-1">Contact Numbers</h4>
                    <p className="text-gray-500 leading-relaxed text-xs">Call: +91 99050 06838<br/>WhatsApp: +91 99050 06838</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-forest-900 shrink-0 shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-charcoal mb-1">Email Address</h4>
                    <p className="text-gray-500 leading-relaxed text-xs">info@vistarcity.com<br/>sales@vistarcity.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 sm:p-8 rounded-sm shadow-sm border border-gray-200">
              <h3 className="font-bold text-xl text-forest-900 mb-6">Send an Enquiry</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="w-full bg-sand-100 border-none rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-forest-900" />
                  <input type="tel" placeholder="Phone Number" className="w-full bg-sand-100 border-none rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-forest-900" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full bg-sand-100 border-none rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-forest-900" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select className="w-full bg-sand-100 border-none rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-forest-900 appearance-none text-charcoal/70 cursor-pointer">
                    <option>Preferred Location</option>
                    <option>Patna Region</option>
                    <option>Muzaffarpur</option>
                    <option>Raxaul</option>
                  </select>
                  <select className="w-full bg-sand-100 border-none rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-forest-900 appearance-none text-charcoal/70 cursor-pointer">
                    <option>Plot Requirement</option>
                    <option>Under 1000 sq.ft.</option>
                    <option>1000 - 1500 sq.ft.</option>
                    <option>Above 1500 sq.ft.</option>
                  </select>
                </div>
                <textarea placeholder="Your Message..." rows={4} className="w-full bg-sand-100 border-none rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-forest-900"></textarea>
                <button type="button" className="w-full bg-forest-900 text-white py-3.5 rounded-sm font-bold text-sm uppercase tracking-wider hover:bg-forest-800 transition-colors shadow-md mt-2">
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

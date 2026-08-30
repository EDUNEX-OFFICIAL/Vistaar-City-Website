import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { footerLinks } from "@/lib/nav-links";
import { routes } from "@/lib/routes";

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-sand-100 pt-8 md:pt-20 pb-6 md:pb-10">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 lg:gap-x-10 lg:gap-y-0 lg:items-start mb-8 lg:mb-12">
          {/* Brand Col */}
          <div className="col-span-2 lg:col-span-1 space-y-4 lg:space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/vistaar-logo.png"
                alt="Vistar City"
                width={140}
                height={140}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sand-200 leading-relaxed text-xs sm:text-sm max-w-sm">
              Helping people discover residential plots in promising locations across Bihar. 
              We make the plot selection and purchase journey transparent and accessible.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-base md:text-lg font-semibold text-ivory mb-3 lg:mb-4">Quick Links</h3>
            <ul className="space-y-2 lg:space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sand-200 hover:text-ivory transition-colors text-xs sm:text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Locations */}
          <div>
            <h3 className="font-serif text-base md:text-lg font-semibold text-ivory mb-3 lg:mb-4">Popular Locations</h3>
            <ul className="space-y-2 lg:space-y-2.5">
              {["Patna", "Patna Region", "Muzaffarpur", "Raxaul", "Upcoming Locations"].map((loc) => (
                <li key={loc}>
                  <Link href={routes.locations} className="text-sand-200 hover:text-ivory transition-colors text-xs sm:text-sm">
                    {loc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1 lg:row-auto">
            <h3 className="font-serif text-base md:text-lg font-semibold text-ivory mb-3 lg:mb-4">Contact</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-3 lg:space-y-0">
              <li>
                <a href="tel:+919905006838" className="flex items-center gap-2 md:gap-3 text-sand-200 hover:text-ivory transition-colors text-xs sm:text-sm group">
                  <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-forest-800 flex items-center justify-center shrink-0 group-hover:bg-forest-700 transition-colors">
                    <Phone className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </span>
                  +91 99050 06838
                </a>
              </li>
              <li>
                <a href="mailto:info@vistarcity.com" className="flex items-center gap-2 md:gap-3 text-sand-200 hover:text-ivory transition-colors text-xs sm:text-sm group">
                  <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-forest-800 flex items-center justify-center shrink-0 group-hover:bg-forest-700 transition-colors">
                    <Mail className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </span>
                  info@vistarcity.com
                </a>
              </li>
              <li className="flex items-start gap-2 md:gap-3 text-sand-200 text-xs sm:text-sm sm:col-span-2 lg:col-span-1">
                <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-forest-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </span>
                <span>
                  Vistar City Corporate Office,<br />
                  Patna, Bihar, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="border-t border-forest-800 pt-5 md:pt-8 flex flex-col gap-4 md:gap-6">
          <p className="text-[10px] sm:text-xs text-forest-600 max-w-4xl leading-relaxed">
            <strong>Disclaimer:</strong> Property information, pricing, availability, project specifications and other details displayed on this website may change and should be verified with the Vistar City team before making any decision. This website does not constitute a guarantee of investment returns or future property appreciation. The visual representations are indicative.
          </p>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-sand-200 text-center md:text-left">
            <p className="text-sand-200">
              Made by{" "}
              <a
                href="https://edunexservices.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ivory hover:text-gold transition-colors"
              >
                EDUNEX
              </a>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <Link href={routes.contact} className="hover:text-ivory transition-colors">
                Contact
              </Link>
              <Link href={routes.partner} className="hover:text-ivory transition-colors">
                Partner Programme
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

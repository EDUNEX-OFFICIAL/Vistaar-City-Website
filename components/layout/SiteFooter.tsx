import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { mainNavLinks } from "@/lib/nav-links";
import { routes } from "@/lib/routes";
import { siteConfig, siteImages } from "@/lib/site-metadata";

const signatureWords = ["Dream", "Plan", "Build", "Belong"] as const;

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark border-t border-ivory/10 bg-forest-950 text-ivory">
      <div className="site-wrap grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-12 lg:items-start lg:gap-0 lg:py-14">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-4 lg:border-r lg:border-ivory/10 lg:pr-10">
          <Link
            href={routes.home}
            className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950"
          >
            <Image
              src={siteImages.logo}
              alt={`${siteConfig.name} — ${siteConfig.tagline}`}
              width={180}
              height={66}
              className="h-11 w-auto object-contain object-left md:h-12"
            />
          </Link>
          <p className="mt-4 max-w-[17rem] text-sm leading-relaxed text-ivory/70">
            Thoughtfully planned residential plots in Bihar&apos;s growth corridors, for a brighter tomorrow.
          </p>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-3 lg:border-r lg:border-ivory/10 lg:px-8">
          <h2 className="font-sans text-[13px] font-semibold tracking-wide text-gold">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            {mainNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ivory/75 transition-colors hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get in Touch — published contact only */}
        <div className="lg:col-span-3 lg:border-r lg:border-ivory/10 lg:px-8">
          <h2 className="font-sans text-[13px] font-semibold tracking-wide text-gold">Get in Touch</h2>
          <ul className="mt-4 space-y-3 text-sm text-ivory/75">
            <li>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex min-h-11 items-center gap-2.5 transition-colors hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950"
              >
                <Phone className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.6} aria-hidden />
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex min-h-11 items-center gap-2.5 transition-colors hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950"
              >
                <Mail className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.6} aria-hidden />
                {siteConfig.email}
              </a>
            </li>
            <li className="inline-flex items-start gap-2.5 pt-1">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.6} aria-hidden />
              <span>Patna, Bihar (Head Office)</span>
            </li>
          </ul>
        </div>

        {/* Signature — Dream Plan Build Belong */}
        <div className="flex sm:col-span-2 lg:col-span-2 lg:items-center lg:justify-center lg:pl-6">
          <p
            className="flex flex-wrap gap-x-5 gap-y-2 font-hand text-[1.55rem] leading-none text-ivory/28 md:text-[1.7rem] lg:flex-col lg:gap-3 lg:text-[1.8rem]"
            aria-hidden
          >
            {signatureWords.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </p>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="site-wrap flex flex-col gap-3 py-5 text-sm text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Vistar City. All rights reserved.</p>
          <div className="flex gap-5">
            <Link
              href={routes.privacy}
              className="transition-colors hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950"
            >
              Privacy Policy
            </Link>
            <Link
              href={routes.terms}
              className="transition-colors hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

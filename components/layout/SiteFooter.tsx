import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { featuredProjects } from "@/lib/catalog";
import { mainNavLinks } from "@/lib/nav-links";
import { routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site-metadata";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-forest-950 text-ivory">
      <div className="site-wrap grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <p className="font-sans text-sm font-semibold tracking-[0.22em]">VISTAR CITY</p>
          <p className="mt-2 text-[11px] tracking-[0.24em] text-gold">DREAM HOME MAKER</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/75">
            Thoughtfully planned residential plots in Bihar&apos;s growth corridors, for a brighter tomorrow.
          </p>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold text-ivory">Quick links</h2>
          <ul className="mt-4 space-y-2">
            {mainNavLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-ivory/75 hover:text-ivory">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold text-ivory">Projects</h2>
          <ul className="mt-4 space-y-2">
            {featuredProjects.map((project) => (
              <li key={project.slug}>
                <Link href={`${routes.projects}/${project.slug}`} className="text-sm text-ivory/75 hover:text-ivory">
                  {project.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href={routes.projects} className="text-sm text-ivory/75 hover:text-ivory">
                View all projects
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold text-ivory">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-sm text-ivory/75">
            <li>
              <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 hover:text-ivory">
                <Phone className="h-4 w-4" strokeWidth={1.6} aria-hidden />
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 hover:text-ivory">
                <Mail className="h-4 w-4" strokeWidth={1.6} aria-hidden />
                {siteConfig.email}
              </a>
            </li>
            <li className="pl-6">Patna, Bihar — region served. Street address not published.</li>
          </ul>
          <Link
            href={routes.siteVisit}
            className="mt-6 inline-flex min-h-12 items-center text-sm font-semibold text-ivory hover:text-gold"
          >
            Book a Site Visit
          </Link>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="site-wrap flex flex-col gap-3 py-6 text-sm text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Vistar City. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href={routes.privacy} className="hover:text-ivory">
              Privacy Policy
            </Link>
            <Link href={routes.terms} className="hover:text-ivory">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

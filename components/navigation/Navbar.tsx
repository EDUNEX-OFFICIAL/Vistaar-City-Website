"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import MobileMenu from "@/components/navigation/MobileMenu";
import { analyticsEvents, trackEvent } from "@/lib/analytics";
import { mainNavLinks } from "@/lib/nav-links";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const frosted = !isHome || scrolled || open;

  return (
    <header
      className={cn(
        "site-header fixed inset-x-0 top-0 z-50 text-forest-950 transition-[background-color,border-color,backdrop-filter] duration-300",
        frosted
          ? "border-b border-forest-900/10 bg-ivory/40 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="site-wrap flex h-16 items-center gap-2 px-4 sm:px-5 lg:grid lg:h-[4.75rem] lg:grid-cols-[auto_1fr_auto] lg:gap-3 lg:px-16">
        <Link href={routes.home} className="shrink-0">
          <Image
            src="/vistaar-logo-dark.png"
            alt="Vistar City — Dream Home Maker"
            width={180}
            height={66}
            className="h-auto w-[108px] sm:w-[124px] lg:w-[148px]"
          />
        </Link>

        <nav className="hidden items-center justify-center gap-7 xl:gap-8 lg:flex" aria-label="Primary">
          {mainNavLinks.map((link) => {
            const active = link.href === routes.home ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-[15px] font-medium text-forest-950/80 transition-colors hover:text-forest-950",
                  active &&
                    "text-forest-950 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:bg-gold-deep",
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-1.5 justify-self-end sm:gap-2">
          <Link
            href={routes.siteVisit}
            onClick={() => trackEvent(analyticsEvents.heroSiteVisit)}
            className="inline-flex h-9 items-center gap-1 rounded-md bg-forest-950 px-2.5 text-[11px] font-semibold text-ivory hover:bg-forest-900 sm:h-10 sm:px-3 sm:text-xs lg:hidden"
          >
            Book a Site Visit
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden />
          </Link>
          <Link
            href={routes.siteVisit}
            onClick={() => trackEvent(analyticsEvents.heroSiteVisit)}
            className="group hidden h-[52px] min-w-[190px] items-center justify-center gap-2 rounded-lg bg-forest-950 px-5 text-sm font-semibold text-ivory hover:bg-forest-900 lg:inline-flex"
          >
            Book a Site Visit
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.6} aria-hidden />
          </Link>
          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden",
              isHome && !scrolled && !open
                ? "border-ivory/80 bg-white/20 text-ivory"
                : "border-forest-900/25 bg-transparent text-forest-950",
            )}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X strokeWidth={1.6} aria-hidden /> : <Menu strokeWidth={1.6} aria-hidden />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>
      <MobileMenu id={menuId} open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

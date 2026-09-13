"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useHeroReveal } from "@/components/home/HeroReveal";
import { routes } from "@/lib/routes";
import { analyticsEvents, trackEvent } from "@/lib/analytics";

export default function MobileCTA() {
  const pathname = usePathname();
  const { chromeReady } = useHeroReveal();
  const [show, setShow] = useState(false);
  const hidden = pathname === routes.siteVisit || (pathname === routes.home && !chromeReady);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (hidden || !show) return null;

  return (
    <div className="mobile-cta-bar fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ivory/95 p-3 backdrop-blur-md lg:hidden">
      <Link
        href={routes.siteVisit}
        onClick={() => trackEvent(analyticsEvents.finalSiteVisit, { surface: "mobile_bar" })}
        className="flex min-h-12 items-center justify-center rounded-md bg-forest-800 text-sm font-semibold text-ivory"
      >
        Book a Site Visit
      </Link>
    </div>
  );
}

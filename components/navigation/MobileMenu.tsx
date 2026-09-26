"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Mail, MapPin, Phone, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { analyticsEvents, trackEvent } from "@/lib/analytics";
import { mainNavLinks } from "@/lib/nav-links";
import { routes } from "@/lib/routes";
import { siteConfig, siteImages } from "@/lib/site-metadata";
import { cn } from "@/lib/utils";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function MobileMenu({
  id,
  open,
  onClose,
}: {
  id: string;
  open: boolean;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const mq = window.matchMedia("(min-width: 1024px)");
    const closeIfDesktop = () => {
      if (mq.matches) onClose();
    };
    closeIfDesktop();
    mq.addEventListener("change", closeIfDesktop);

    const focusables = () => Array.from(panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []);
    const frame = window.requestAnimationFrame(() => {
      panelRef.current?.querySelector<HTMLElement>("[data-menu-close]")?.focus({ preventScroll: true });
    });

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", closeIfDesktop);
      previouslyFocused?.focus({ preventScroll: true });
    };
  }, [open, onClose]);

  if (!mounted) return null;

  const ease = [0.22, 1, 0.36, 1] as const;
  const linkDelay = reduce ? 0 : 0.08;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          key="mobile-menu"
          className="fixed inset-0 z-[200] lg:hidden"
          initial={false}
          exit={reduce ? undefined : { opacity: 1 }}
        >
          <motion.button
            type="button"
            className="absolute inset-0 bg-forest-950/40 backdrop-blur-[2px]"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            onClick={onClose}
            aria-label="Close menu"
          />

          <motion.div
            id={id}
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${id}-title`}
            className="absolute inset-y-0 right-0 flex w-[min(100%-2.5rem,22rem)] max-w-[22rem] flex-col overflow-hidden bg-ivory shadow-[-18px_0_48px_rgba(6,37,30,0.18)] sm:w-[min(100%-3rem,24rem)] sm:max-w-[24rem]"
            initial={reduce ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={reduce ? undefined : { x: "100%" }}
            transition={{ duration: 0.42, ease }}
          >
            {/* Sticky chrome */}
            <div className="relative z-20 flex shrink-0 items-center justify-between gap-3 border-b border-forest-900/10 bg-ivory/95 px-5 pt-[max(0.85rem,env(safe-area-inset-top))] pb-3 backdrop-blur-sm sm:px-7">
              <Link
                href={routes.home}
                onClick={onClose}
                className="shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-900 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
              >
                <Image
                  src={siteImages.logoDark}
                  alt="Vistar City — Dream Home Maker"
                  width={180}
                  height={66}
                  className="h-auto w-[7.25rem]"
                />
              </Link>
              <button
                type="button"
                data-menu-close
                onClick={onClose}
                className="flex size-12 shrink-0 items-center justify-center rounded-full text-forest-950 transition-colors hover:bg-forest-900/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-900 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
                aria-label="Close menu"
              >
                <X className="size-[1.35rem]" strokeWidth={1.35} aria-hidden />
              </button>
            </div>

            <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6 sm:px-7">
              <h2 id={`${id}-title`} className="sr-only">
                Menu
              </h2>

              <nav className="flex flex-col" aria-label="Mobile">
                {mainNavLinks.map((link, index) => {
                  const active =
                    link.href === routes.home ? pathname === "/" : pathname.startsWith(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={reduce ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: linkDelay + index * 0.04, ease }}
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="group flex min-h-12 items-center py-2.5 text-forest-950 focus-visible:outline-none"
                        aria-current={active ? "page" : undefined}
                      >
                        <span
                          className={cn(
                            "relative font-sans text-[1.35rem] font-medium leading-none tracking-tight transition-colors sm:text-[1.45rem]",
                            active ? "text-forest-950" : "text-forest-950/80 group-hover:text-forest-950",
                          )}
                        >
                          {link.label}
                          <span
                            className={cn(
                              "absolute -bottom-2 left-0 h-0.5 w-7 rounded-sm bg-gold-deep transition-opacity",
                              active ? "opacity-100" : "opacity-0 group-hover:opacity-40",
                            )}
                          />
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                className="mt-7 flex flex-col gap-3"
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: linkDelay + 0.28, ease }}
              >
                <Link
                  href={routes.siteVisit}
                  onClick={() => {
                    trackEvent(analyticsEvents.finalSiteVisit, { surface: "menu" });
                    onClose();
                  }}
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-forest-950 px-5 text-[15px] font-semibold text-ivory hover:bg-forest-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950"
                >
                  Book a Site Visit
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    strokeWidth={1.6}
                    aria-hidden
                  />
                </Link>
                <Link
                  href={routes.projects}
                  onClick={() => {
                    trackEvent(analyticsEvents.projectView, { surface: "menu" });
                    onClose();
                  }}
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-forest-950/70 bg-ivory px-5 text-[15px] font-semibold text-forest-950 hover:bg-sand-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-900 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
                >
                  Explore Projects
                </Link>
              </motion.div>

              <div className="my-7 h-px bg-forest-900/10" />

              <ul className="space-y-1 text-[15px] text-forest-900">
                <li>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    onClick={() => trackEvent(analyticsEvents.phoneClick, { surface: "menu" })}
                    className="inline-flex min-h-12 w-full items-center gap-3 rounded-md px-1 transition-colors hover:text-forest-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-900 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
                  >
                    <Phone className="size-4 shrink-0" strokeWidth={1.5} aria-hidden />
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    onClick={() => trackEvent(analyticsEvents.contactClick, { surface: "menu" })}
                    className="inline-flex min-h-12 w-full items-center gap-3 rounded-md px-1 transition-colors hover:text-forest-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-900 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
                  >
                    <Mail className="size-4 shrink-0" strokeWidth={1.5} aria-hidden />
                    {siteConfig.email}
                  </a>
                </li>
                <li className="inline-flex min-h-12 w-full items-center gap-3 px-1">
                  <MapPin className="size-4 shrink-0" strokeWidth={1.5} aria-hidden />
                  Patna, Bihar
                </li>
              </ul>

              <div className="relative z-10 mt-auto max-w-[12.5rem] pt-10">
                <p className="font-sans text-[11px] font-medium uppercase leading-[1.65] tracking-[0.2em] text-forest-800">
                  Same dreams.
                  <br />
                  Bigger tomorrows.
                </p>
                <span className="mt-3 block h-px w-9 bg-gold-deep" aria-hidden />
              </div>
            </div>

            <BotanicalMark />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}

function BotanicalMark() {
  return (
    <div className="pointer-events-none absolute -bottom-6 -right-3 h-[24rem] w-[17.5rem]" aria-hidden>
      <LeafMark src="/brand/leaves/stem-b.svg" className="bottom-1 right-6 h-60 w-28 -rotate-6 opacity-[0.13]" />
      <LeafMark src="/brand/leaves/stem-c.svg" className="bottom-10 right-16 h-52 w-28 rotate-[16deg] opacity-[0.12]" />
      <LeafMark src="/brand/leaves/stem-a.svg" className="-right-1 bottom-16 h-44 w-20 rotate-[22deg] opacity-[0.14]" />
      <LeafMark src="/brand/leaves/leaf-1.svg" className="-right-2 bottom-0 h-72 w-32 -rotate-3 opacity-[0.2]" />
    </div>
  );
}

function LeafMark({ src, className }: { src: string; className: string }) {
  return <img src={src} alt="" className={cn("pointer-events-none absolute select-none", className)} />;
}

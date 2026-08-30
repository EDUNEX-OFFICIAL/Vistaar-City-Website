"use client";

import { Menu, Phone, X } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useIntro } from "@/components/intro/IntroProvider";
import { mainNavLinks, partnerNavLink } from "@/lib/nav-links";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

const DRAWER_MS = 400;

const focusLight =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-900 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory";
const focusDark =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900";

function isActiveRoute(pathname: string, href: string) {
  if (href === routes.home) return pathname === routes.home;
  return pathname === href;
}

type NavItemProps = {
  href: string;
  label: string;
  pathname: string;
  onNavigate?: () => void;
  variant: "desktop" | "drawer";
  index?: number;
  style?: React.CSSProperties;
  theme?: "overlay" | "glass";
};

function NavItem({ href, label, pathname, onNavigate, variant, index, style, theme = "glass" }: NavItemProps) {
  const active = isActiveRoute(pathname, href);
  const isOverlay = theme === "overlay";

  if (variant === "desktop") {
    return (
      <Link
        href={href}
        prefetch
        onClick={onNavigate}
        className={cn(
          "group relative py-1 text-sm font-medium tracking-wide transition-colors whitespace-nowrap shrink-0",
          isOverlay ? focusDark : focusLight,
          isOverlay
            ? active
              ? "text-ivory"
              : "text-ivory/85 hover:text-ivory"
            : active
              ? "text-forest-900"
              : "text-charcoal/75 hover:text-forest-900",
        )}
        aria-current={active ? "page" : undefined}
      >
        {label}
        <span
          className={cn(
            "absolute -bottom-1 left-0 h-px transition-all duration-300",
            isOverlay ? "bg-gold" : "bg-gold-deep",
            active ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-60",
          )}
          aria-hidden
        />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      prefetch
      onClick={onNavigate}
      style={style}
      className={cn(
        "mobile-drawer-link flex items-baseline gap-4 border-b border-ivory/10 py-4 transition-colors",
        focusDark,
        active ? "text-ivory" : "text-ivory/80 hover:text-ivory",
      )}
      aria-current={active ? "page" : undefined}
    >
      <span className="font-sans text-xs font-semibold tracking-[0.2em] text-gold tabular-nums">
        {String((index ?? 0) + 1).padStart(2, "0")}
      </span>
      <span className="font-serif text-2xl font-medium leading-none">{label}</span>
    </Link>
  );
}

function MobileNavDrawer({
  mounted,
  open,
  pathname,
  isPartnerPage,
  onClose,
  onNavigate,
  onExitComplete,
}: {
  mounted: boolean;
  open: boolean;
  pathname: string;
  isPartnerPage: boolean;
  onClose: () => void;
  onNavigate: () => void;
  onExitComplete: () => void;
}) {
  const panelRef = useRef<HTMLElement>(null);
  const exitTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mounted) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mounted, open, onClose]);

  useEffect(() => {
    if (!mounted) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mounted]);

  useEffect(() => {
    if (open || !mounted) return;

    const panel = panelRef.current;
    const finish = () => {
      if (exitTimerRef.current !== null) {
        window.clearTimeout(exitTimerRef.current);
        exitTimerRef.current = null;
      }
      onExitComplete();
    };

    const onTransitionEnd = (event: TransitionEvent) => {
      if (event.target === panel && event.propertyName === "transform") {
        finish();
      }
    };

    panel?.addEventListener("transitionend", onTransitionEnd);
    exitTimerRef.current = window.setTimeout(finish, DRAWER_MS + 50);

    return () => {
      panel?.removeEventListener("transitionend", onTransitionEnd);
      if (exitTimerRef.current !== null) {
        window.clearTimeout(exitTimerRef.current);
        exitTimerRef.current = null;
      }
    };
  }, [open, mounted, onExitComplete]);

  if (!mounted) return null;

  return (
    <div
      className={cn("mobile-drawer-root fixed inset-0 z-[360] lg:hidden", open && "is-open")}
      role="presentation"
    >
      <button
        type="button"
        className="mobile-drawer-scrim absolute inset-0 bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold"
        onClick={onClose}
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
      />
      <nav
        id="mobile-nav-drawer"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!open}
        className="mobile-drawer-panel absolute right-0 top-0 flex h-[100dvh] w-[min(100%,22rem)] flex-col border-l border-gold/30 bg-forest-900 shadow-2xl"
      >
        <div
          className="mobile-drawer-link flex items-center justify-between border-b border-ivory/10 px-5 py-4"
          style={{ transitionDelay: open ? "60ms" : "0ms" }}
        >
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
            Menu
          </p>
          <button
            type="button"
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-sm border border-ivory/15 text-ivory transition-colors hover:bg-ivory/10",
              focusDark,
            )}
            onClick={onClose}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-2">
          <Link
            href={partnerNavLink.href}
            prefetch
            onClick={onNavigate}
            style={{ transitionDelay: open ? "100ms" : "0ms" }}
            className={cn(
              "mobile-drawer-link mb-4 mt-2 block rounded-sm border px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.18em] transition-colors",
              focusDark,
              isPartnerPage
                ? "border-gold bg-ivory/10 text-ivory"
                : "border-gold-deep/80 text-gold hover:bg-ivory/5",
            )}
          >
            {partnerNavLink.label}
          </Link>

          {mainNavLinks.map((item, index) => (
            <NavItem
              key={item.label}
              href={item.href}
              label={item.label}
              pathname={pathname}
              onNavigate={onNavigate}
              variant="drawer"
              index={index}
              style={{ transitionDelay: open ? `${140 + index * 45}ms` : "0ms" }}
            />
          ))}
        </div>

        <div className="space-y-3 border-t border-ivory/10 px-5 py-5">
          <Link
            href="tel:+919905006838"
            style={{ transitionDelay: open ? "420ms" : "0ms" }}
            className={cn(
              "mobile-drawer-link flex min-h-12 items-center justify-center gap-2 rounded-sm border border-ivory/20 text-sm font-semibold text-ivory transition-colors hover:bg-ivory/10",
              focusDark,
            )}
            onClick={onClose}
          >
            <Phone className="h-4 w-4" />
            Call Now
          </Link>
          <Link
            href={routes.siteVisit}
            prefetch
            onClick={onNavigate}
            style={{ transitionDelay: open ? "460ms" : "0ms" }}
            className={cn(
              "mobile-drawer-link flex min-h-12 items-center justify-center rounded-sm bg-ivory text-sm font-semibold text-forest-900 transition-colors hover:bg-sand-100",
              focusLight,
            )}
          >
            Schedule Visit
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const { introComplete } = useIntro();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navigating, setNavigating] = useState(false);
  const prevPathname = useRef(pathname);

  const isPartnerPage = pathname === partnerNavLink.href;
  const logoVisible = introComplete;

  useLayoutEffect(() => {
    const scrolled = window.scrollY > 12;
    setIsScrolled(scrolled);
    document.documentElement.classList.toggle("header-scrolled", scrolled);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 12;
      setIsScrolled(scrolled);
      document.documentElement.classList.toggle("header-scrolled", scrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const openMenu = useCallback(() => {
    setMenuMounted(true);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setMenuOpen(true));
    });
  }, []);

  const handleDrawerExitComplete = useCallback(() => {
    setMenuMounted(false);
  }, []);

  useEffect(() => {
    closeMenu();
    if (prevPathname.current !== pathname) {
      setNavigating(false);
      prevPathname.current = pathname;
    }
  }, [pathname, closeMenu]);

  const handleNavClick = useCallback(() => {
    setNavigating(true);
    closeMenu();
  }, [closeMenu]);

  const handleDesktopNav = useCallback(() => {
    setNavigating(true);
  }, []);

  const toggleMenu = useCallback(() => {
    if (menuOpen || menuMounted) {
      closeMenu();
    } else {
      openMenu();
    }
  }, [menuOpen, menuMounted, closeMenu, openMenu]);

  const isOverlay = !isScrolled;

  return (
    <>
      <header
        className={cn(
          "site-header fixed inset-x-0 top-0 z-[350] transition-[background-color,box-shadow,border-color,backdrop-filter] duration-500 ease-out",
          isOverlay
            ? "border-b border-transparent bg-transparent py-3.5 md:py-4"
            : "border-b border-sand-200/80 bg-ivory/95 py-3.5 shadow-[0_4px_24px_-12px_rgba(27,48,34,0.08)] md:py-4",
        )}
      >
        {isOverlay ? (
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-forest-900/30 to-transparent"
            aria-hidden
          />
        ) : null}

        {navigating ? (
          <div
            className="absolute inset-x-0 bottom-0 h-0.5 overflow-hidden"
            role="progressbar"
            aria-label="Loading page"
          >
            <div className="h-full w-1/3 animate-[nav-progress_0.9s_ease-in-out_infinite] bg-gold-deep" />
          </div>
        ) : null}

        <div className="container relative z-[1] mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
          <motion.div
            id="site-header-logo"
            initial={false}
            animate={{ opacity: logoVisible ? 1 : 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={routes.home}
              prefetch
              className={cn("flex shrink-0 items-center", isOverlay ? focusDark : focusLight)}
            >
              <Image
                id="site-header-logo-image"
                src={isOverlay ? "/vistaar-logo.png" : "/vistaar-logo-dark.png"}
                alt="Vistar City"
                width={782}
                height={288}
                className="h-10 w-auto object-contain transition-opacity duration-300 sm:h-11 md:h-12"
              />
            </Link>
          </motion.div>

          <nav className="hidden lg:flex items-center gap-7 xl:gap-9" aria-label="Primary">
            {mainNavLinks.map((item) => (
              <NavItem
                key={item.label}
                href={item.href}
                label={item.label}
                pathname={pathname}
                onNavigate={handleDesktopNav}
                variant="desktop"
                theme={isOverlay ? "overlay" : "glass"}
              />
            ))}

            <span
              className={cn("mx-1 h-5 w-px", isOverlay ? "bg-ivory/20" : "bg-sand-200")}
              aria-hidden
            />

            <Link
              href={partnerNavLink.href}
              prefetch
              onClick={handleDesktopNav}
              className={cn(
                "shrink-0 rounded-sm border px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] transition-all",
                isOverlay ? focusDark : focusLight,
                isPartnerPage
                  ? isOverlay
                    ? "border-gold bg-ivory/10 text-ivory"
                    : "border-forest-900 bg-forest-900 text-ivory"
                  : isOverlay
                    ? "border-ivory/30 bg-ivory/5 text-ivory hover:border-ivory/50 hover:bg-ivory/10"
                    : "border-gold-deep/90 bg-gold/10 text-forest-900 hover:bg-gold/20",
              )}
              aria-current={isPartnerPage ? "page" : undefined}
            >
              {partnerNavLink.label}
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <Link
              href="tel:+919905006838"
              className={cn(
                "inline-flex items-center gap-2 text-sm font-medium transition-colors",
                isOverlay ? focusDark : focusLight,
                isOverlay ? "text-ivory/90 hover:text-ivory" : "text-forest-800 hover:text-forest-900",
              )}
            >
              <Phone className={cn("h-4 w-4", isOverlay ? "text-gold" : "text-gold-deep")} aria-hidden />
              +91 99050 06838
            </Link>
            <Link
              href={routes.siteVisit}
              prefetch
              onClick={handleDesktopNav}
              className={cn(
                "inline-flex min-h-12 items-center rounded-sm px-5 py-2.5 text-sm font-semibold transition-colors",
                isOverlay ? focusDark : focusLight,
                pathname === routes.siteVisit
                  ? isOverlay
                    ? "bg-ivory text-forest-900 ring-2 ring-gold ring-offset-2 ring-offset-forest-900/80"
                    : "bg-forest-800 text-ivory ring-2 ring-gold ring-offset-2 ring-offset-ivory"
                  : isOverlay
                    ? "border border-ivory/20 bg-forest-800/90 text-ivory hover:bg-forest-800"
                    : "bg-forest-900 text-ivory hover:bg-forest-800",
              )}
              aria-current={pathname === routes.siteVisit ? "page" : undefined}
            >
              Schedule Visit
            </Link>
          </div>

          <button
            type="button"
            className={cn(
              "relative z-[2] flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-sm border transition-colors lg:hidden",
              isOverlay ? focusDark : focusLight,
              isOverlay
                ? "border-ivory/25 bg-ivory/5 text-ivory hover:border-ivory/40 hover:bg-ivory/10"
                : "border-sand-200 bg-ivory text-forest-900 hover:border-gold-deep/40 hover:bg-sand-100",
            )}
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {menuOpen || menuMounted ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <MobileNavDrawer
        mounted={menuMounted}
        open={menuOpen}
        pathname={pathname}
        isPartnerPage={isPartnerPage}
        onClose={closeMenu}
        onNavigate={handleNavClick}
        onExitComplete={handleDrawerExitComplete}
      />
    </>
  );
}

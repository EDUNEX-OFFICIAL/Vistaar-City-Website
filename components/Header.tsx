"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { mainNavLinks, partnerNavLink } from "@/lib/nav-links";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const isPartnerPage = pathname === partnerNavLink.href;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  const mobileMenu =
    menuOpen && mounted ? (
      <div className="lg:hidden fixed inset-0 z-[90]" role="dialog" aria-modal="true" aria-label="Navigation menu">
        <button
          type="button"
          className="absolute inset-0 bg-black/50"
          onClick={closeMenu}
          aria-label="Close menu"
        />
        <nav className="absolute left-0 right-0 top-16 sm:top-[4.5rem] max-h-[calc(100dvh-4rem)] overflow-y-auto bg-white border-b border-gray-200 shadow-xl">
          <div className="flex flex-col gap-3 px-4 py-4 pb-6">
            <Link
              href={partnerNavLink.href}
              className={`py-3 text-center text-sm font-bold uppercase tracking-wide rounded-sm shadow-sm ${
                isPartnerPage
                  ? "bg-forest-900 text-white ring-2 ring-gold/60"
                  : "border-2 border-gold bg-gold/15 text-forest-900"
              }`}
              onClick={closeMenu}
            >
              {partnerNavLink.label}
            </Link>

            {mainNavLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="border-b border-gray-100 py-2.5 text-sm font-medium text-charcoal"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/#contact"
              className="border-b border-gray-100 py-2.5 text-sm font-medium text-charcoal"
              onClick={closeMenu}
            >
              Contact
            </Link>

            <div className="flex gap-3 pt-2">
              <Link
                href="tel:+919905006838"
                className="flex-1 rounded-sm border border-forest-900 py-3 text-center text-sm font-semibold text-forest-900"
                onClick={closeMenu}
              >
                Call Now
              </Link>
              <Link
                href="/#projects"
                className="flex-1 rounded-sm bg-forest-900 py-3 text-center text-sm font-semibold text-white shadow-md"
                onClick={closeMenu}
              >
                Explore Plots
              </Link>
            </div>
          </div>
        </nav>
      </div>
    ) : null;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] bg-white transition-all duration-300 border-b border-gray-100 ${
          isScrolled ? "shadow-sm py-2.5 md:py-3" : "py-3 md:py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between gap-3">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/vistaar-logo-dark.png"
              alt="Vistaar Dream Home Maker"
              width={120}
              height={120}
              className="h-10 w-auto object-contain sm:h-12 md:h-14"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {mainNavLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                  (item.label === "Home" && pathname === "/") ||
                  (item.label === "Plots" && pathname === "/plots")
                    ? "text-forest-900 border-b-2 border-forest-900 pb-1"
                    : "text-gray-600 hover:text-forest-900"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={partnerNavLink.href}
              className={`ml-1 shrink-0 rounded-sm px-4 py-2 text-sm font-bold uppercase tracking-wide transition-all shadow-sm ${
                isPartnerPage
                  ? "bg-forest-900 text-white ring-2 ring-gold/60 ring-offset-1"
                  : "border-2 border-gold bg-gold/15 text-forest-900 hover:bg-gold/25 hover:shadow-md"
              }`}
            >
              {partnerNavLink.label}
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/#contact"
              className="text-forest-900 font-semibold hover:text-forest-700 transition-colors text-sm whitespace-nowrap"
            >
              Call: +91 99050 06838
            </Link>
            <Link
              href="/#projects"
              className="bg-forest-900 text-white px-6 py-2.5 rounded-sm text-sm font-semibold hover:bg-forest-800 transition-all shadow-md whitespace-nowrap"
            >
              Explore Plots
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden relative z-[110] flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-gray-200 bg-white text-forest-900 active:bg-gray-100"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {mounted && mobileMenu ? createPortal(mobileMenu, document.body) : null}
    </>
  );
}

import type { Metadata } from "next";
import { Cormorant_Garamond, Satisfy, Source_Sans_3 } from "next/font/google";
import CloudReveal from "@/components/home/CloudReveal";
import HeroEntrance from "@/components/home/HeroEntrance";
import { HeroRevealProvider } from "@/components/home/HeroReveal";
import Navbar from "@/components/navigation/Navbar";
import MobileCTA from "@/components/navigation/MobileCTA";
import SiteFooter from "@/components/layout/SiteFooter";
import OrganizationJsonLd from "@/components/seo/OrganizationJsonLd";
import { defaultMetadata } from "@/lib/site-metadata";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  adjustFontFallback: true,
  variable: "--font-cormorant",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  adjustFontFallback: true,
  variable: "--font-source-sans",
});

/** Accent script only — More Than Land phrase. Not for headings/body. */
const satisfy = Satisfy({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  adjustFontFallback: true,
  variable: "--font-satisfy",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${sourceSans.variable} ${satisfy.variable}`}>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){try{var r=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!r&&location.pathname==="/"){document.documentElement.classList.add("hero-intro","js-clouds")}}catch(e){}})();',
          }}
        />
        <noscript>
          <style>{".cloud-layer{display:none!important}.hero-intro-item,.hero-line>span,.site-header{opacity:1!important;animation:none!important;pointer-events:auto!important}"}</style>
        </noscript>
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-ivory focus:px-3 focus:py-2">
          Skip to content
        </a>
        <HeroRevealProvider>
        <CloudReveal />
        <HeroEntrance />
        <OrganizationJsonLd />
        <Navbar />
        <MobileCTA />
        <main id="content" className="pb-20 lg:pb-0">
          {children}
        </main>
        <SiteFooter />
        </HeroRevealProvider>
      </body>
    </html>
  );
}

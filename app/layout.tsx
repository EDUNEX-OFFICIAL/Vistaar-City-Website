import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import Header from "@/components/Header";
import IntroProvider from "@/components/intro/IntroProvider";
import OrganizationJsonLd from "@/components/seo/OrganizationJsonLd";
import { defaultMetadata } from "@/lib/site-metadata";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  adjustFontFallback: true,
  variable: "--font-cormorant",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: true,
  variable: "--font-source-sans",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${sourceSans.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement;d.classList.add("intro-pending");var y=window.scrollY;if(y>12){d.classList.add("header-scrolled")}var m=window.matchMedia("(prefers-reduced-motion: reduce)");if(m.matches){d.classList.add("motion-reduce")}}catch(e){}})();`,
          }}
        />
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "html.intro-pending .site-header{opacity:1!important;pointer-events:auto!important;visibility:visible!important}.site-preloader{display:none!important}.hero-reveal-pending .hero-reveal-item,.hero-reveal-pending .hero-reveal-line-inner,.hero-reveal-pending .hero-reveal-hairline,.hero-reveal-pending .hero-reveal-scrim,.hero-reveal-pending .hero-reveal-overlay,.hero-reveal-pending .hero-reveal-pillar,.hero-reveal-pending .hero-reveal-trust,.hero-reveal-pending .hero-reveal-bg,.hero-reveal-pending .hero-reveal-frame,.hero-reveal-pending .hero-reveal-card,.hero-reveal-pending .hero-reveal-inset,.hero-reveal-pending .hero-reveal-mat,.hero-reveal-pending .hero-reveal-rule{opacity:1!important;transform:none!important;filter:none!important;pointer-events:auto!important}",
            }}
          />
        </noscript>
      </head>
      <body suppressHydrationWarning>
        <OrganizationJsonLd />
        <IntroProvider>
          <Header />
          {children}
        </IntroProvider>
      </body>
    </html>
  );
}

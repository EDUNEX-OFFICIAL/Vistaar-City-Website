import Image from "next/image";
import { FileCheck, Leaf, MapPin, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import { analyticsEvents } from "@/lib/analytics";
import { routes } from "@/lib/routes";

const proof = [
  { icon: MapPin, value: "3+", label: "Prime Locations" },
  { icon: Users, value: "1000+", label: "Happy Families" },
  { icon: FileCheck, value: "Clear", label: "Documentation" },
  { icon: Leaf, value: "Future-Ready", label: "Communities" },
] as const;

export default function HomeHero() {
  return (
    <section id="dream" className="hero @container relative min-h-[100svh] w-full overflow-hidden bg-[#efe4cf]">
      <Image
        src="/vistaar-hero-image-mobile.webp"
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover object-center md:hidden"
      />
      <Image
        src="/vistaar-hero-image-final2.webp"
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="hidden object-cover object-center md:block"
      />

      <svg
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[74%] w-full md:hidden"
        viewBox="0 0 390 760"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <filter id="hero-blob-soft" x="-35%" y="-18%" width="170%" height="145%">
            <feGaussianBlur stdDeviation="34" />
          </filter>
          <filter id="hero-blob" x="-25%" y="-12%" width="155%" height="135%">
            <feGaussianBlur stdDeviation="16" />
          </filter>
        </defs>
        <path
          filter="url(#hero-blob-soft)"
          fill="#F6F0E4"
          fillOpacity="0.72"
          d="M-20,-20 H188 C236,6 268,48 274,108 C312,168 334,248 318,328 C348,392 336,468 308,528 C286,586 228,628 156,646 C88,662 20,640 -20,612 Z"
        />
        <path
          filter="url(#hero-blob)"
          fill="#FBF7F0"
          fillOpacity="0.94"
          d="M-24,-28 H168 C204,0 214,42 208,96 C236,150 248,214 232,286 C254,340 246,404 220,458 C196,508 150,540 92,548 C36,556 -8,534 -24,500 Z"
        />
      </svg>

      <svg
        className="pointer-events-none absolute left-0 top-0 z-[1] hidden h-[88%] w-[min(70%,56rem)] overflow-visible md:block"
        viewBox="0 0 900 820"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <filter id="hero-blob-desk-soft" x="-40%" y="-30%" width="190%" height="170%">
            <feGaussianBlur stdDeviation="56" />
          </filter>
          <filter id="hero-blob-desk" x="-28%" y="-22%" width="165%" height="155%">
            <feGaussianBlur stdDeviation="32" />
          </filter>
        </defs>
        <path
          filter="url(#hero-blob-desk-soft)"
          fill="#F6F0E4"
          fillOpacity="0.42"
          d="M-48,-40 H420 C530,14 620,100 670,200 C740,286 760,400 710,500 C750,590 700,680 590,740 C430,800 200,790 40,750 C-30,722 -48,640 -48,540 Z"
        />
        <path
          filter="url(#hero-blob-desk)"
          fill="#FBF7F0"
          fillOpacity="0.72"
          d="M-48,-44 H290 C390,6 490,92 540,190 C620,268 640,380 590,480 C630,566 580,648 470,700 C320,756 130,740 20,700 C-30,674 -48,590 -48,510 Z"
        />
      </svg>

      <div className="absolute inset-x-0 top-[4.6rem] z-10 px-5 md:top-[16%] md:left-0 md:w-[min(64cqi,48rem)] md:px-0 md:pl-[6.5%]">
        <p className="hero-intro-item hero-d1 text-[11px] font-medium uppercase tracking-[0.26em] text-forest-800 md:text-xs">
          Land today. A brighter tomorrow.
        </p>
        <h1 className="hero-line mt-2 max-w-[16.5rem] font-serif font-medium text-forest-950 md:mt-3 md:max-w-none">
          <span className="block text-[2.45rem] leading-[0.9] sm:text-[2.7rem] md:text-[clamp(2.15rem,4.4vw,4.6rem)] md:leading-[0.86]">
            Dreams
          </span>
          <span className="block text-[2.45rem] leading-[0.9] sm:text-[2.7rem] md:whitespace-nowrap md:text-[clamp(2.15rem,4.4vw,4.6rem)] md:leading-[0.86]">
            Build Brighter
          </span>
          <span className="block text-[2.45rem] leading-[0.9] text-gold-deep sm:text-[2.7rem] md:text-[clamp(2.15rem,4.4vw,4.6rem)] md:leading-[0.86]">
            Tomorrows.
          </span>
        </h1>
        <p className="hero-intro-item hero-d3 mt-3 max-w-[20.5rem] text-[15px] leading-[1.45] text-forest-900 md:max-w-[24rem]">
          Thoughtfully planned residential plots in Bihar&apos;s growth corridors — for your family, your future, and a
          more fulfilling life.
        </p>
        <div className="hero-intro-item hero-d4 mt-5 flex flex-wrap gap-2.5">
          <Button
            href={routes.siteVisit}
            className="h-11 w-auto rounded-md bg-forest-950 px-5 text-[13px] hover:bg-forest-900"
            event={analyticsEvents.heroSiteVisit}
          >
            Book a Site Visit
          </Button>
          <Button
            href={routes.projects}
            variant="secondary"
            className="h-11 w-auto rounded-md border-forest-900/20 bg-ivory/80 px-4 text-[13px] text-forest-950 hover:bg-ivory md:bg-ivory/25"
            arrow={false}
            event={analyticsEvents.heroExploreProjects}
          >
            Explore Projects
          </Button>
        </div>

        <ul className="hero-intro-item hero-d5 mt-6 grid w-full max-w-[22.5rem] grid-cols-4 rounded-xl border border-white/70 bg-ivory/55 px-1 py-3 text-forest-950 shadow-[0_8px_24px_rgba(24,34,31,0.06)] backdrop-blur-[2px] md:hidden">
          {proof.map((item, index) => {
            const Icon = item.icon;
            const [head, tail] = item.value.split("-");
            return (
              <li
                key={item.label}
                className={
                  index > 0
                    ? "flex min-w-0 flex-col items-center border-l border-forest-900/15 px-1 text-center"
                    : "flex min-w-0 flex-col items-center px-1 text-center"
                }
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-forest-900/25 bg-white/50 text-forest-950">
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.7} aria-hidden />
                </span>
                <p className="mt-2 text-[13px] font-semibold leading-tight">
                  {tail ? (
                    <>
                      {head}-<br />
                      {tail}
                    </>
                  ) : (
                    item.value
                  )}
                </p>
                <p className="mt-1 text-[10px] leading-tight text-forest-800">{item.label}</p>
              </li>
            );
          })}
        </ul>

        <ul className="hero-intro-item hero-d5 mt-6 hidden w-fit items-stretch rounded-md bg-[rgba(252,250,244,0.52)] text-forest-950 md:flex">
          {proof.map((item, index) => {
            const Icon = item.icon;
            return (
              <li
                key={item.label}
                className={index > 0 ? "border-l border-forest-900/12 px-3.5 py-3.5 xl:px-4" : "px-3.5 py-3.5 xl:px-4"}
              >
                <div className="flex items-start gap-2">
                  <Icon className="mt-0.5 h-[18px] w-[18px] shrink-0" strokeWidth={1.6} aria-hidden />
                  <div>
                    <p className="text-lg font-semibold leading-none xl:text-xl">{item.value}</p>
                    <p className="mt-1 max-w-[5.6rem] text-[11px] leading-tight text-forest-800">{item.label}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

    </section>
  );
}

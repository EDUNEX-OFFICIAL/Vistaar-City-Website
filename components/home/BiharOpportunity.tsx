import Image from "next/image";
import { Building2, Leaf, Route } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { analyticsEvents } from "@/lib/analytics";
import { routes } from "@/lib/routes";

const highlights = [
  { icon: Route, label: "Better Connectivity" },
  { icon: Building2, label: "Growing Infrastructure" },
  { icon: Leaf, label: "More Opportunities" },
] as const;

/**
 * Marker positions in the Bihar_districts.svg viewBox (0 0 2860.2 2120.3).
 * Patna / Muzaffarpur from original label anchors; Raxaul near East Champaran north border.
 */
const markers = [
  { city: "Raxaul", x: 820, y: 400 },
  { city: "Muzaffarpur", x: 992, y: 914 },
  { city: "Patna", x: 949, y: 1322 },
] as const;

export default function BiharOpportunity() {
  return (
    <section
      id="locations"
      className="on-dark relative overflow-hidden bg-forest-950 text-ivory"
      aria-labelledby="why-bihar-heading"
    >
      <Image
        src="/brand/why-bihar-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden
      />
      <div className="absolute inset-0 bg-forest-950/72" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-r from-forest-950/55 via-forest-950/35 to-forest-950/50"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-16 md:h-20 lg:h-24" aria-hidden>
        <svg className="h-full w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0 0 H1440 V28 C1280 78 1040 108 720 92 C400 76 180 36 0 52 Z"
            fill="#fcfaf4"
          />
          <path
            d="M0 20 C220 48 420 88 720 76 C1020 64 1240 36 1440 48"
            fill="none"
            stroke="#eee8d9"
            strokeWidth="1.25"
          />
          <path
            d="M0 32 C240 58 460 96 720 84 C1000 70 1260 44 1440 58"
            fill="none"
            stroke="#eee8d9"
            strokeWidth="1"
            strokeOpacity="0.7"
          />
          <path
            d="M0 44 C260 68 500 102 740 90 C1020 76 1280 52 1440 66"
            fill="none"
            stroke="#eee8d9"
            strokeWidth="1"
            strokeOpacity="0.45"
          />
        </svg>
      </div>

      <div className="site-wrap relative z-[2] grid items-center gap-12 pt-20 pb-16 md:pt-24 md:pb-20 lg:grid-cols-12 lg:gap-8 lg:pt-28 lg:pb-24 xl:gap-10">
        <Reveal className="lg:col-span-4">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-ivory/70">
            Why Bihar, Why Now
          </p>
          <h2
            id="why-bihar-heading"
            className="max-w-md font-serif text-[2.35rem] leading-[1.08] text-ivory md:text-5xl lg:text-[2.85rem] xl:text-[3.15rem]"
          >
            A Growing <span className="text-gold">Bihar.</span>
            <br />
            A Brighter <span className="text-gold">India.</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/80 md:text-lg">
            With improving infrastructure, better connectivity and emerging opportunities, Bihar is on the
            path to a brighter, more prosperous future.
          </p>
          <div className="mt-8">
            <Button
              href={routes.locations}
              tone="dark"
              event={analyticsEvents.locationExplore}
              className="bg-gold-deep text-ivory hover:bg-gold-500 focus-visible:ring-gold focus-visible:ring-offset-forest-950"
            >
              Explore Locations
            </Button>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={0.08}>
          <BiharMap />
        </Reveal>

        <Reveal className="lg:col-span-3" delay={0.14}>
          <ul className="flex flex-row flex-wrap justify-center gap-8 lg:flex-col lg:items-start lg:gap-10 lg:border-l lg:border-ivory/15 lg:pl-8">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm font-medium text-ivory md:text-base">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function BiharMap() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      {/* Cleaned from Bihar_districts.svg — labels removed, fill transparent, outer ring only */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/bihar-map.svg"
        alt=""
        className="h-auto w-full"
        draggable={false}
        aria-hidden
      />
      <svg
        viewBox="0 0 2860.2 2120.3"
        className="pointer-events-none absolute inset-0 h-full w-full"
        role="img"
        aria-label="Bihar with Raxaul, Muzaffarpur and Patna marked. Not a survey map."
      >
        <path
          d="M820 400 C880 520 940 720 992 914 C980 1050 960 1200 949 1322"
          fill="none"
          stroke="#c7a75b"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {markers.map((marker) => (
          <g key={marker.city}>
            <circle
              cx={marker.x}
              cy={marker.y}
              r="16"
              fill="none"
              stroke="#c7a75b"
              strokeOpacity="0.35"
              strokeWidth="3"
            />
            <circle cx={marker.x} cy={marker.y} r="10" fill="#c7a75b" />
            <text
              x={marker.x + 28}
              y={marker.y + 12}
              fill="#fcfaf4"
              fontSize="52"
              fontFamily="var(--font-source-sans), system-ui, sans-serif"
            >
              {marker.city}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

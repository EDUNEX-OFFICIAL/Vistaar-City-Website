import { FileCheck, Sprout, TrendingUp, Users } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const items = [
  {
    icon: Sprout,
    title: "Strategic Locations",
    line: "In high-growth corridors",
  },
  {
    icon: FileCheck,
    title: "Clear Documentation",
    line: "Transparent and hassle-free",
  },
  {
    icon: Users,
    title: "Future-Ready Communities",
    line: "Designed for modern living",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Value",
    line: "A brighter tomorrow",
  },
] as const;

const brandWords = ["Dream", "Plan", "Build", "Belong"] as const;

function LeafStem({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 88 140"
      className={className}
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.15"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M44 132 V28" />
      <path d="M44 48 C28 40 14 28 12 16 C26 14 40 24 44 36" />
      <path d="M44 48 C60 40 74 28 76 16 C62 14 48 24 44 36" />
      <path d="M44 72 C26 66 12 54 10 40 C26 40 40 54 44 64" />
      <path d="M44 72 C62 66 76 54 78 40 C62 40 48 54 44 64" />
      <path d="M44 98 C28 92 16 80 14 66 C28 68 40 82 44 90" />
      <path d="M44 98 C60 92 72 80 74 66 C60 68 48 82 44 90" />
      <path d="M44 28 C38 18 36 10 38 4" />
      <path d="M44 28 C50 18 52 10 50 4" />
    </svg>
  );
}

export default function TrustRail() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-ivory py-14 md:py-16 lg:py-20"
      aria-labelledby="why-vistar-heading"
    >
      <svg
        className="pointer-events-none absolute -bottom-6 -left-8 h-40 w-[min(100%,28rem)] text-forest-900/[0.045] md:h-48"
        viewBox="0 0 480 180"
        aria-hidden
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M-20 50 C70 28 140 78 220 52 C300 26 360 72 500 40" />
        <path d="M-20 80 C80 58 150 108 230 82 C310 56 380 100 500 70" />
        <path d="M-20 110 C90 88 160 138 240 112 C320 86 400 128 500 100" />
        <path d="M-20 140 C100 118 170 168 250 142 C330 116 410 156 500 130" />
      </svg>

      <div className="site-wrap relative grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-8 xl:gap-12">
        <Reveal className="flex flex-col justify-center lg:col-span-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-charcoal/55">
            Why Vistar City
          </p>
          <span className="mb-5 block h-px w-10 bg-gold-deep/55" aria-hidden />
          <h2
            id="why-vistar-heading"
            className="max-w-[16ch] font-serif text-[2.35rem] leading-[1.1] font-medium text-forest-950 md:text-[2.75rem] lg:text-[3.1rem]"
          >
            A Stronger Foundation for{" "}
            <span className="text-gold-deep">Brighter Tomorrows.</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-charcoal/75 md:mt-6 md:text-lg">
            We create well-planned, legally clear, and future-ready communities in Bihar&apos;s most
            promising corridors so you can build a life that truly feels like home.
          </p>
        </Reveal>

        <div className="lg:col-span-6 lg:flex lg:items-center">
          <ul className="m-0 grid w-full list-none grid-cols-1 p-0 sm:grid-cols-2 sm:gap-px sm:bg-line">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.title}
                  className="border-b border-line bg-ivory last:border-b-0 sm:border-0"
                >
                  <Reveal delay={0.05 + index * 0.07}>
                    <div className="group flex gap-4 px-0 py-5 sm:px-6 sm:py-8">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ivory-200/80 text-forest-800 transition-colors duration-300 group-hover:bg-ivory-200 group-hover:text-forest-950">
                        <Icon
                          className="h-5 w-5 transition-transform duration-300 group-hover:scale-105"
                          strokeWidth={1.5}
                          aria-hidden
                        />
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <h3 className="font-sans text-[0.95rem] font-semibold tracking-tight text-forest-950 md:text-base">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-snug text-muted">{item.line}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>

        <Reveal
          className="relative hidden lg:col-span-2 lg:flex lg:flex-col lg:justify-between lg:border-l lg:border-line lg:pl-7 xl:pl-8"
          delay={0.22}
        >
          <div className="flex flex-col gap-5 pt-1" aria-hidden>
            {brandWords.map((word) => (
              <span
                key={word}
                className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-gold-deep"
              >
                {word}
              </span>
            ))}
            <span className="mt-1 h-px w-9 bg-gold-deep/50" />
          </div>
          <LeafStem className="pointer-events-none mt-auto self-end h-32 w-20 text-gold-deep/45" />
        </Reveal>

        <div className="flex flex-col items-center gap-4 border-t border-line pt-6 lg:hidden">
          <p
            className="flex flex-wrap justify-center gap-x-5 gap-y-2 font-sans text-[11px] font-medium uppercase tracking-[0.28em] text-gold-deep"
            aria-hidden
          >
            {brandWords.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </p>
          <LeafStem className="h-16 w-11 text-gold-deep/40" />
        </div>
      </div>
    </section>
  );
}

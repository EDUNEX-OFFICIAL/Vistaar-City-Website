import DreamScene from "@/components/brand/DreamScene";
import Button from "@/components/ui/Button";
import { analyticsEvents } from "@/lib/analytics";
import { routes } from "@/lib/routes";

const markers = [
  { city: "Raxaul", x: 92, y: 78 },
  { city: "Muzaffarpur", x: 168, y: 118 },
  { city: "Patna", x: 176, y: 188 },
];

export default function BiharOpportunity() {
  return (
    <section className="on-dark relative overflow-hidden bg-forest-950 text-ivory">
      <div className="absolute inset-0 opacity-25" aria-hidden>
        <DreamScene className="h-full w-full" focus="hills" />
      </div>
      <div className="absolute inset-0 bg-forest-950/75" aria-hidden />

      <div className="site-wrap section-pad relative grid items-center gap-14 lg:grid-cols-2">
        <div>
          <h2 className="max-w-lg font-serif text-[2.6rem] leading-[1.02] text-ivory md:text-6xl">A region on the rise.</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ivory/80">
            From Patna to Muzaffarpur to Raxaul, Bihar is witnessing transformation through better infrastructure,
            stronger connectivity and emerging opportunities.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-ivory/85">
            {["Better connectivity", "Growing infrastructure", "More opportunities"].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-px w-8 bg-gold" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href={routes.locations} tone="dark" event={analyticsEvents.locationExplore}>
              Explore Locations
            </Button>
          </div>
        </div>

        <div>
          <svg viewBox="0 0 360 280" className="mx-auto w-full max-w-md" role="img" aria-label="Diagram of Patna, Muzaffarpur and Raxaul. Not a survey map.">
            <path
              d="M48 108 C70 52 150 36 214 58 C278 28 332 62 338 112 C348 168 310 214 248 236 C176 262 92 244 58 200 C28 162 30 140 48 108 Z"
              fill="none"
              stroke="#fcfaf4"
              strokeOpacity="0.55"
              strokeWidth="1.25"
            />
            <path
              className="map-route"
              d="M92 78 C130 96 150 108 168 118 C172 150 174 170 176 188"
              fill="none"
              stroke="#c7a75b"
              strokeWidth="1.25"
            />
            {markers.map((marker) => (
              <g key={marker.city}>
                <circle cx={marker.x} cy={marker.y} r="4.5" fill="#c7a75b" />
                <text x={marker.x + 10} y={marker.y + 4} fill="#fcfaf4" fontSize="13" fontFamily="system-ui, sans-serif">
                  {marker.city}
                </text>
              </g>
            ))}
          </svg>
          <p className="mt-3 text-center text-[13px] text-ivory/55">Location diagram — not a survey map. Only published project cities.</p>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { MapPin } from "lucide-react";
import { routes } from "@/lib/routes";
import { sectionPad } from "@/lib/section-styles";

const locations = [
  { title: "Patna Region", desc: "Strategically located plots around the expanding capital region." },
  { title: "Muzaffarpur", desc: "Explore residential land opportunities in developing areas." },
  { title: "Raxaul", desc: "Discover plots in an important and rapidly developing growth corridor." },
  { title: "Upcoming", desc: "New plotted developments coming to selected high-potential areas." },
] as const;

export default function LocationsSection() {
  return (
    <section className={`border-b border-sand-200 bg-ivory ${sectionPad}`}>
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((loc, i) => (
            <Link
              key={loc.title}
              href={routes.contact}
              className={`rounded-sm border p-5 transition-all focus-visible:ring-2 focus-visible:ring-forest-900 focus-visible:ring-offset-2 focus-visible:ring-offset-ivory ${
                i === 3
                  ? "flex flex-col justify-center border-transparent bg-sand-100"
                  : "border-sand-200 bg-ivory hover:border-forest-900/20 hover:shadow-md"
              }`}
            >
              {i !== 3 && (
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sand-100 text-forest-900">
                  <MapPin className="h-5 w-5" aria-hidden />
                </div>
              )}
              {i === 3 && (
                <div className="mb-1 text-xs font-bold uppercase tracking-tighter text-forest-600">New Corridors</div>
              )}
              <h3 className="mb-1 font-sans text-sm font-semibold text-charcoal">{loc.title}</h3>
              <p className="mb-3 text-xs leading-relaxed text-charcoal/70">{loc.desc}</p>
              <span className="text-xs font-semibold text-forest-800">Enquire →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

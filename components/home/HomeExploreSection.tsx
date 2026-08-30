import Link from "next/link";
import { Building2, MapPin, Mail, Calendar, Users, Handshake } from "lucide-react";
import { routes } from "@/lib/routes";
import { eyebrowLight, sectionPad } from "@/lib/section-styles";

const exploreLinks = [
  {
    href: routes.about,
    icon: Users,
    title: "About Us",
    description: "How we help buyers choose land with clarity and care.",
  },
  {
    href: routes.projects,
    icon: Building2,
    title: "Projects",
    description: "Featured plotting developments across Bihar.",
  },
  {
    href: routes.locations,
    icon: MapPin,
    title: "Locations",
    description: "Patna region, Muzaffarpur, Raxaul and growth corridors.",
  },
  {
    href: routes.siteVisit,
    icon: Calendar,
    title: "Site Visit",
    description: "Walk the ground before you decide.",
  },
  {
    href: routes.contact,
    icon: Mail,
    title: "Enquire",
    description: "Share your requirements — we will guide you.",
  },
  {
    href: routes.partner,
    icon: Handshake,
    title: "Become a Partner",
    description: "Grow with our partner network across Bihar.",
  },
] as const;

export default function HomeExploreSection() {
  return (
    <section id="home-explore" className={`border-b border-sand-200 bg-ivory ${sectionPad}`}>
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <span className={eyebrowLight}>Explore</span>
          <h2 className="mb-3 font-serif text-3xl font-semibold text-forest-900 sm:text-4xl">
            Start Where It Matters
          </h2>
          <p className="text-base font-light text-charcoal/70 sm:text-lg">
            Projects, locations, visits, and partnership — pick the path that fits you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {exploreLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col rounded-lg border border-sand-200 bg-white p-6 transition-colors hover:border-gold-deep/40 hover:bg-sand-100"
            >
              <item.icon
                className="mb-4 h-6 w-6 text-gold-deep transition-colors group-hover:text-forest-800"
                strokeWidth={1.5}
                aria-hidden
              />
              <h3 className="mb-2 font-serif text-xl font-semibold text-forest-900">{item.title}</h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-charcoal/70">{item.description}</p>
              <span className="text-sm font-medium text-forest-800 group-hover:text-forest-900">
                View →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
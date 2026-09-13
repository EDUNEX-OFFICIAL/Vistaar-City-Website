import { FileCheck, Leaf, MapPin, TrendingUp } from "lucide-react";

const items = [
  {
    icon: MapPin,
    title: "Strategic Locations",
    line: "In high-growth corridors",
  },
  {
    icon: FileCheck,
    title: "Clear Documentation",
    line: "Transparent and hassle-free",
  },
  {
    icon: Leaf,
    title: "Future-Ready Communities",
    line: "Designed for modern living",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Value",
    line: "A brighter tomorrow",
  },
];

export default function TrustRail() {
  return (
    <section className="border-b border-line bg-ivory" aria-label="What Vistar City stands for">
      <div className="site-wrap grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:py-12">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className={index > 0 ? "lg:border-l lg:border-line lg:pl-8" : undefined}
            >
              <Icon className="h-5 w-5 text-gold-deep" strokeWidth={1.6} aria-hidden />
              <h2 className="mt-3 font-serif text-xl text-forest-950">{item.title}</h2>
              <p className="mt-1 text-sm text-muted">{item.line}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

import DreamScene from "@/components/brand/DreamScene";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

export default function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="on-dark relative overflow-hidden bg-forest-950 text-ivory">
      <div className="absolute inset-0 opacity-35" aria-hidden>
        <DreamScene className="h-full w-full" focus="hills" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/88 to-forest-950/55" aria-hidden />
      <div className="site-wrap relative pb-16 pt-32 md:pb-20 md:pt-40">
        <SectionEyebrow tone="dark">{eyebrow}</SectionEyebrow>
        <h1 className="max-w-3xl font-serif text-[2.6rem] leading-[1.05] text-ivory md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ivory/80">{lede}</p>
      </div>
    </section>
  );
}

type PageBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageBanner({ eyebrow, title, description }: PageBannerProps) {
  return (
    <section className="header-overlap relative border-b border-forest-800 bg-forest-900 py-10 text-ivory sm:py-14 md:py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gold/40" aria-hidden />
      <div className="container mx-auto max-w-7xl px-4 text-center md:px-8">
        <span className="font-serif text-sm italic text-gold sm:text-base">{eyebrow}</span>
        <div className="mx-auto mt-3 mb-4 h-px w-12 bg-gold" aria-hidden />
        <h1 className="mb-3 font-serif text-3xl font-semibold text-ivory sm:mb-4 sm:text-4xl md:text-5xl">{title}</h1>
        <p className="mx-auto max-w-2xl px-2 text-base font-light leading-relaxed text-ivory/90 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}

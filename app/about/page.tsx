import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import PageShell from "@/components/layout/PageShell";
import AboutSection from "@/components/sections/AboutSection";
import WhyVistarSection from "@/components/sections/WhyVistarSection";
import NextStepCta from "@/components/sections/NextStepCta";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Learn how Vistar City helps buyers discover residential plots across Bihar with transparent information, site visits, and documentation guidance.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell>
      <PageBanner
        eyebrow="Our Story"
        title="About Vistar City"
        description="Making plot buying simpler, clearer and more accessible across Bihar’s growth corridors."
      />
      <AboutSection />
      <WhyVistarSection />
      <NextStepCta title="Talk To Our Team" />
    </PageShell>
  );
}

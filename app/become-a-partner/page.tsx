import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import BecomePartnerContent from "@/components/BecomePartnerContent";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = pageMetadata({
  title: "Become a Partner",
  description:
    "Partner with Vistar City across Bihar. Learn about our plotted development network and apply to join the partner program.",
  path: "/become-a-partner",
});

export default function BecomePartnerPage() {
  return (
    <PageShell>
      <BecomePartnerContent />
    </PageShell>
  );
}

import type { Metadata } from "next";
import Footer from "@/components/Footer";
import BecomePartnerContent from "@/components/BecomePartnerContent";

export const metadata: Metadata = {
  title: "Become a Partner | Vistar City",
  description:
    "Partner with Vistar City. Explore our expansion across Bihar, understand the plot buying journey, and apply to join our partner program.",
};

export default function BecomePartnerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory">
      <main className="flex-grow pt-16 sm:pt-20 overflow-x-hidden">
        <BecomePartnerContent />
      </main>
      <Footer />
    </div>
  );
}

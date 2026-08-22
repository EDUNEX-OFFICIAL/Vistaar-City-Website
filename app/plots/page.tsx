import type { Metadata } from "next";
import Footer from "@/components/Footer";
import PlotsPageContent from "@/components/plots/PlotsPageContent";

export const metadata: Metadata = {
  title: "All Plots | Vistar City — Patna, Muzaffarpur & Raxaul",
  description:
    "Browse 199 plots in each location across Patna, Muzaffarpur and Raxaul. Full details, maps, pricing and authorised sales contacts.",
};

export default function PlotsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory">
      <main className="flex-grow pt-16 sm:pt-20 overflow-x-hidden">
        <PlotsPageContent />
      </main>
      <Footer />
    </div>
  );
}

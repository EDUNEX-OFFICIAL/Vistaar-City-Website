import Footer from "@/components/Footer";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory">
      <main className="flex-grow pt-16 sm:pt-20 overflow-x-hidden">
        <HomeContent />
      </main>
      <Footer />
    </div>
  );
}

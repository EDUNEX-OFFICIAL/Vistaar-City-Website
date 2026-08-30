import Footer from "@/components/Footer";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-ivory">
      <main className="flex-grow overflow-x-hidden pt-16 sm:pt-20">{children}</main>
      <Footer />
    </div>
  );
}

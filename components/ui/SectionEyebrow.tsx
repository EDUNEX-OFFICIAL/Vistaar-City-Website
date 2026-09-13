import { cn } from "@/lib/utils";

export default function SectionEyebrow({
  children,
  tone = "light",
  className,
}: {
  children: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-4 text-[11px] font-semibold uppercase tracking-[0.22em]",
        tone === "dark" ? "text-gold" : "text-gold-deep",
        className,
      )}
    >
      {children}
    </p>
  );
}

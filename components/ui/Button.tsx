"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Tone = "light" | "dark";

const styles: Record<Tone, Record<Variant, string>> = {
  light: {
    primary:
      "bg-forest-800 text-ivory hover:bg-forest-900 focus-visible:ring-forest-900 focus-visible:ring-offset-ivory",
    secondary:
      "border border-forest-900/20 text-forest-950 hover:border-forest-900/50 focus-visible:ring-forest-900 focus-visible:ring-offset-ivory",
    ghost: "px-0 text-forest-950 hover:text-forest-800",
  },
  dark: {
    primary:
      "bg-ivory text-forest-950 hover:bg-ivory-100 focus-visible:ring-gold focus-visible:ring-offset-forest-950",
    secondary:
      "border border-ivory/40 text-ivory hover:border-ivory focus-visible:ring-gold focus-visible:ring-offset-forest-950",
    ghost: "px-0 text-ivory hover:text-ivory-100",
  },
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  tone?: Tone;
  className?: string;
  event?: AnalyticsEvent;
  eventParams?: Record<string, string>;
  arrow?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  tone = "light",
  className,
  event,
  eventParams,
  arrow = true,
}: ButtonProps) {
  const ghost = variant === "ghost";
  return (
    <Link
      href={href}
      onClick={() => {
        if (event) trackEvent(event, eventParams);
      }}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-2 rounded-md text-sm font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        ghost ? "min-h-11" : "px-5",
        styles[tone][variant],
        className,
      )}
    >
      <span>{children}</span>
      {arrow ? (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={1.6}
          aria-hidden
        />
      ) : null}
    </Link>
  );
}

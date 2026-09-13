import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function ImageFrame({
  children,
  caption,
  organic = false,
  className,
}: {
  children: ReactNode;
  caption: string;
  organic?: boolean;
  className?: string;
}) {
  return (
    <figure className={cn("relative", className)}>
      <div
        className={cn(
          "relative overflow-hidden bg-forest-950",
          organic ? "rounded-[2.4rem_0.6rem_2.4rem_0.6rem]" : "rounded-md",
        )}
      >
        {children}
      </div>
      <figcaption className="mt-3 text-[13px] text-muted">{caption}</figcaption>
    </figure>
  );
}

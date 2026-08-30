import type { ReactNode } from "react";

type VistaarMarkSvgProps = {
  className?: string;
  gradientId?: string;
  children?: ReactNode;
};

/**
 * Vistaar three-peak mark — interlocking inverted-V strokes.
 * Geometry matched to brand mountain logo (equal peaks, flat base, overlapping legs).
 */
export const VISTAAR_PEAK_PATHS = [
  "M 12 54 L 36 8 L 60 54",
  "M 36 54 L 60 8 L 84 54",
  "M 60 54 L 84 8 L 108 54",
] as const;

export default function VistaarMarkSvg({
  className,
  gradientId = "vistaarGold",
  children,
}: VistaarMarkSvgProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={gradientId} x1="12" y1="8" x2="108" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E8D5A3" />
          <stop offset="35%" stopColor="#C5A059" />
          <stop offset="70%" stopColor="#C5A059" />
          <stop offset="100%" stopColor="#9C7A3C" />
        </linearGradient>
      </defs>
      {children ??
        VISTAAR_PEAK_PATHS.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke={`url(#${gradientId})`}
            strokeWidth={5.5}
            strokeLinecap="butt"
            strokeLinejoin="miter"
          />
        ))}
    </svg>
  );
}

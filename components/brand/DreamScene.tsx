import { useId } from "react";

type DreamSceneProps = {
  className?: string;
  /** Shift the composition so cards can frame different parts of one illustration. */
  focus?: "wide" | "field" | "home" | "hills";
};

/** Original illustration — not a photograph of a Vistar City site or customer. */
export default function DreamScene({ className, focus = "wide" }: DreamSceneProps) {
  const uid = useId().replace(/:/g, "");
  const sky = `${uid}-sky`;
  const field = `${uid}-field`;
  const sun = `${uid}-sun`;
  const view =
    focus === "field"
      ? "420 380 760 430"
      : focus === "home"
        ? "860 300 700 500"
        : focus === "hills"
          ? "200 80 900 420"
          : "0 0 1600 900";

  return (
    <svg
      viewBox={view}
      className={className}
      role="img"
      aria-label="Illustration of a family looking across open land toward a home at golden hour. Not a photograph of a Vistar City site or customer."
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={sky} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f4e2b0" />
          <stop offset="42%" stopColor="#e7c888" />
          <stop offset="100%" stopColor="#8ea894" />
        </linearGradient>
        <linearGradient id={field} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1d5c4a" />
          <stop offset="100%" stopColor="#06251e" />
        </linearGradient>
        <radialGradient id={sun} cx="78%" cy="28%" r="28%">
          <stop offset="0%" stopColor="#f7f3e8" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#c7a75b" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#c7a75b" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1600" height="900" fill={`url(#${sky})`} />
      <circle cx="1240" cy="250" r="280" fill={`url(#${sun})`} />

      <path
        d="M0 420 C180 360 280 470 460 430 C640 390 760 300 980 340 C1200 380 1360 300 1600 360 V900 H0 Z"
        fill="#185647"
      />
      <path
        d="M0 520 C220 460 340 560 560 510 C780 460 900 400 1120 450 C1320 490 1460 420 1600 470 V900 H0 Z"
        fill="#0d4437"
      />
      <path d="M0 640 C260 580 480 700 760 640 C1040 580 1280 690 1600 620 V900 H0 Z" fill={`url(#${field})`} />

      <path d="M180 760 C420 700 560 790 820 740 C1080 690 1280 800 1600 730" fill="none" stroke="#c7a75b" strokeOpacity="0.35" strokeWidth="1.5" />

      <g fill="#08352b">
        <ellipse cx="210" cy="610" rx="70" ry="28" />
        <rect x="198" y="470" width="18" height="150" rx="6" />
        <circle cx="206" cy="470" r="46" />
        <circle cx="168" cy="492" r="34" />
        <circle cx="246" cy="488" r="32" />
        <ellipse cx="1480" cy="560" rx="54" ry="20" />
        <rect x="1470" y="450" width="14" height="120" rx="5" />
        <circle cx="1476" cy="446" r="36" />
      </g>

      <g transform="translate(1040 500)">
        <rect x="0" y="70" width="210" height="120" fill="#fcfaf4" />
        <path d="M-16 74 L105 8 L226 74 Z" fill="#08352b" />
        <rect x="28" y="108" width="36" height="82" fill="#0d4437" />
        <rect x="92" y="112" width="34" height="28" fill="#c7a75b" />
        <rect x="146" y="112" width="34" height="28" fill="#eee8d9" />
      </g>

      <g fill="#06251e">
        <ellipse cx="980" cy="742" rx="18" ry="6" />
        <path d="M968 742 c2-46 8-70 14-70 c6 0 12 24 14 70" />
        <circle cx="982" cy="662" r="11" />
        <path d="M958 700 l24-18 26 8" fill="none" stroke="#06251e" strokeWidth="6" strokeLinecap="round" />

        <ellipse cx="1036" cy="748" rx="16" ry="5" />
        <path d="M1026 748 c2-40 7-58 12-58 c5 0 10 18 12 58" />
        <circle cx="1038" cy="682" r="9" />

        <ellipse cx="918" cy="746" rx="20" ry="6" />
        <path d="M906 746 c2-48 8-74 14-74 c7 0 13 26 16 74" />
        <circle cx="920" cy="662" r="12" />
        <path d="M900 708 c18 8 28-6 42-16" fill="none" stroke="#06251e" strokeWidth="6" strokeLinecap="round" />
      </g>
    </svg>
  );
}

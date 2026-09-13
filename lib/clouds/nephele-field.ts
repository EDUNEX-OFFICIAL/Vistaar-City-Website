/**
 * Photorealistic intro clouds — CSS-Tricks “Nephele” method:
 * fractalNoise turbulence + displacement of a soft source shape, stacked for depth.
 * https://css-tricks.com/drawing-realistic-clouds-with-svg-and-css/
 */

export type CloudKind = "sheet" | "cumulus";

export type CloudSpec = {
  id: string;
  kind: CloudKind;
  seed: number;
  left: string;
  top: string;
  width: string;
  x: string;
  y: string;
  delay: number;
  shape: number;
};

/** Overlapping banks so the hero stays covered until they part (desktop / wide). */
export const CLOUD_FIELD: readonly CloudSpec[] = [
  { id: "sL", kind: "sheet", seed: 2, left: "-18%", top: "-16%", width: "78vw", x: "-118vw", y: "-10vh", delay: 0, shape: 0 },
  { id: "sR", kind: "sheet", seed: 11, left: "40%", top: "-18%", width: "78vw", x: "118vw", y: "-8vh", delay: 0.04, shape: 1 },
  { id: "sT", kind: "sheet", seed: 19, left: "6%", top: "-28%", width: "88vw", x: "0vw", y: "-112vh", delay: 0.08, shape: 2 },
  { id: "c0", kind: "cumulus", seed: 3, left: "-42%", top: "8%", width: "72vw", x: "-130vw", y: "8vh", delay: 0.05, shape: 0 },
  { id: "c1", kind: "cumulus", seed: 7, left: "18%", top: "2%", width: "70vw", x: "8vw", y: "-118vh", delay: 0.1, shape: 1 },
  { id: "c2", kind: "cumulus", seed: 13, left: "52%", top: "14%", width: "68vw", x: "128vw", y: "6vh", delay: 0.06, shape: 2 },
  { id: "c3", kind: "cumulus", seed: 17, left: "-28%", top: "42%", width: "74vw", x: "-122vw", y: "18vh", delay: 0.09, shape: 3 },
  { id: "c4", kind: "cumulus", seed: 23, left: "22%", top: "48%", width: "76vw", x: "10vw", y: "122vh", delay: 0.07, shape: 0 },
  { id: "c5", kind: "cumulus", seed: 29, left: "48%", top: "56%", width: "70vw", x: "124vw", y: "28vh", delay: 0.11, shape: 1 },
  { id: "c6", kind: "cumulus", seed: 31, left: "-12%", top: "72%", width: "80vw", x: "-40vw", y: "108vh", delay: 0.05, shape: 2 },
];

/**
 * Portrait phones need oversized overlapping banks — vw widths that work on desktop
 * leave gaps on a tall 375×812 viewport.
 */
export const MOBILE_CLOUD_FIELD: readonly CloudSpec[] = [
  { id: "mS0", kind: "sheet", seed: 2, left: "-55%", top: "-22%", width: "160vw", x: "-140vw", y: "-18vh", delay: 0, shape: 0 },
  { id: "mS1", kind: "sheet", seed: 11, left: "10%", top: "-18%", width: "155vw", x: "130vw", y: "-12vh", delay: 0.04, shape: 1 },
  { id: "mS2", kind: "sheet", seed: 19, left: "-20%", top: "12%", width: "150vw", x: "0vw", y: "-110vh", delay: 0.06, shape: 2 },
  { id: "mC0", kind: "cumulus", seed: 3, left: "-48%", top: "28%", width: "145vw", x: "-135vw", y: "8vh", delay: 0.05, shape: 0 },
  { id: "mC1", kind: "cumulus", seed: 7, left: "5%", top: "38%", width: "150vw", x: "128vw", y: "10vh", delay: 0.08, shape: 1 },
  { id: "mC2", kind: "cumulus", seed: 13, left: "-40%", top: "52%", width: "155vw", x: "-40vw", y: "115vh", delay: 0.07, shape: 2 },
  { id: "mC3", kind: "cumulus", seed: 17, left: "8%", top: "62%", width: "148vw", x: "20vw", y: "125vh", delay: 0.09, shape: 3 },
  { id: "mC4", kind: "cumulus", seed: 23, left: "-30%", top: "74%", width: "160vw", x: "-120vw", y: "40vh", delay: 0.05, shape: 0 },
];

/** Fewer sprites on slow links — still oversized so portrait stays covered. */
export const MOBILE_CLOUD_FIELD_LOW: readonly CloudSpec[] = MOBILE_CLOUD_FIELD.filter((c) =>
  ["mS0", "mS1", "mS2", "mC2", "mC3"].includes(c.id),
);

/** cx, cy, rx, ry in a padded 900×520 viewBox — piled top, flatter base. */
export const CUMULUS_PUFFS: readonly (readonly [number, number, number, number][])[] = [
  [
    [450, 310, 240, 95],
    [250, 280, 150, 88],
    [140, 305, 110, 70],
    [620, 265, 165, 92],
    [760, 300, 115, 68],
    [430, 230, 145, 78],
    [330, 250, 100, 62],
    [540, 245, 110, 64],
  ],
  [
    [420, 318, 220, 88],
    [270, 270, 140, 92],
    [160, 300, 100, 66],
    [590, 255, 155, 86],
    [730, 295, 120, 72],
    [400, 220, 130, 74],
    [500, 235, 95, 58],
  ],
  [
    [470, 300, 250, 100],
    [280, 288, 155, 84],
    [150, 315, 105, 64],
    [640, 270, 150, 90],
    [780, 308, 100, 60],
    [460, 215, 155, 80],
    [360, 240, 88, 56],
  ],
  [
    [440, 322, 210, 86],
    [290, 275, 135, 90],
    [180, 308, 98, 62],
    [600, 262, 148, 82],
    [720, 302, 118, 70],
    [410, 228, 125, 70],
    [520, 248, 102, 60],
    [350, 258, 80, 50],
  ],
];

/** Wide banks that fill a 1400×900 viewBox. */
export const SHEET_PUFFS: readonly (readonly [number, number, number, number][])[] = [
  [
    [280, 420, 340, 180],
    [620, 360, 380, 200],
    [980, 430, 360, 190],
    [180, 260, 220, 140],
    [500, 220, 280, 150],
    [820, 240, 260, 145],
    [1120, 280, 240, 150],
    [400, 560, 300, 160],
    [760, 580, 320, 170],
    [1080, 540, 260, 150],
    [700, 140, 200, 110],
  ],
  [
    [360, 400, 360, 190],
    [740, 350, 400, 210],
    [1100, 410, 320, 180],
    [220, 240, 240, 150],
    [560, 200, 260, 140],
    [900, 230, 250, 145],
    [1240, 270, 220, 140],
    [480, 560, 310, 165],
    [860, 590, 300, 160],
    [200, 520, 240, 140],
    [640, 130, 210, 115],
  ],
  [
    [420, 380, 400, 200],
    [800, 420, 380, 190],
    [200, 340, 280, 170],
    [1100, 360, 300, 180],
    [500, 200, 300, 155],
    [880, 180, 260, 140],
    [300, 560, 320, 170],
    [700, 600, 340, 175],
    [1080, 540, 280, 155],
    [640, 120, 240, 120],
    [960, 280, 200, 120],
  ],
];

export type CloudQuality = "low" | "mid" | "high" | "ultra";

/**
 * Soft Nephele params for every tier — keep displacement mild so edges never shred
 * (the old scale ~170 caused the jagged screenshot).
 */
export function filterParams(quality: CloudQuality, seed: number) {
  if (quality === "low") {
    return {
      back: { blur: 28, freq: 0.007, octaves: 3, scale: 48, finish: 14, seed },
      mid: { blur: 20, freq: 0.009, octaves: 2, scale: 36, finish: 10, seed: seed + 5 },
      front: { blur: 14, freq: 0.011, octaves: 2, scale: 24, finish: 7, seed: seed + 11 },
    } as const;
  }
  if (quality === "mid") {
    return {
      back: { blur: 32, freq: 0.0065, octaves: 3, scale: 58, finish: 16, seed },
      mid: { blur: 24, freq: 0.008, octaves: 3, scale: 42, finish: 11, seed: seed + 5 },
      front: { blur: 16, freq: 0.01, octaves: 2, scale: 28, finish: 8, seed: seed + 11 },
    } as const;
  }
  // high + ultra: slightly cheaper than before (octaves/blur) — soft finish blur still hides edges
  return {
    back: { blur: 28, freq: 0.0065, octaves: 3, scale: 64, finish: 14, seed },
    mid: { blur: 20, freq: 0.008, octaves: 2, scale: 46, finish: 10, seed: seed + 5 },
    front: { blur: 14, freq: 0.01, octaves: 2, scale: 30, finish: 7, seed: seed + 11 },
  } as const;
}

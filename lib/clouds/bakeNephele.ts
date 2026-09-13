/**
 * Rasterize CSS-Tricks Nephele clouds (feTurbulence + feDisplacementMap)
 * before the reveal so motion only composites bitmaps.
 * https://css-tricks.com/drawing-realistic-clouds-with-svg-and-css/
 *
 * Bake sizes are intentionally below display CSS width — soft filters + canvas
 * smoothing read as high quality without 2K+ SVG filter cost per sprite.
 */
import {
  CUMULUS_PUFFS,
  SHEET_PUFFS,
  filterParams,
  type CloudKind,
  type CloudQuality,
  type CloudSpec,
} from "@/lib/clouds/nephele-field";

export function cloudPixelSize(kind: CloudKind, quality: CloudQuality) {
  // Tuned for speed: soft edges hide the lower native res when CSS-scaled.
  if (kind === "sheet") {
    if (quality === "ultra") return { w: 1920, h: 1234 };
    if (quality === "high") return { w: 1536, h: 988 };
    if (quality === "mid") return { w: 1200, h: 771 };
    return { w: 960, h: 617 };
  }
  if (quality === "ultra") return { w: 1536, h: 888 };
  if (quality === "high") return { w: 1152, h: 666 };
  if (quality === "mid") return { w: 960, h: 555 };
  return { w: 720, h: 416 };
}

function filterMarkup(id: string, blur: number, freq: number, octaves: number, scale: number, finish: number, seed: number) {
  // Tighter filter region = less GPU work than ±90%/280%.
  return `<filter id="${id}" x="-45%" y="-45%" width="190%" height="190%" color-interpolation-filters="sRGB">
    <feGaussianBlur in="SourceGraphic" stdDeviation="${blur}" result="blur"/>
    <feTurbulence type="fractalNoise" baseFrequency="${freq}" numOctaves="${octaves}" seed="${seed}" result="noise"/>
    <feDisplacementMap in="blur" in2="noise" scale="${scale}" xChannelSelector="R" yChannelSelector="G" result="displaced"/>
    <feGaussianBlur in="displaced" stdDeviation="${finish}"/>
  </filter>`;
}

function ellipses(kind: CloudKind, shape: number, fill: string) {
  const lobes = kind === "sheet" ? SHEET_PUFFS[shape % SHEET_PUFFS.length] : CUMULUS_PUFFS[shape % CUMULUS_PUFFS.length];
  return lobes.map(([cx, cy, rx, ry]) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}"/>`).join("");
}

export function nepheleSvgMarkup(spec: CloudSpec, quality: CloudQuality, width: number, height: number) {
  const p = filterParams(quality, spec.seed);
  const viewBox = spec.kind === "sheet" ? "0 0 1400 900" : "0 0 900 520";
  const backOp = spec.kind === "sheet" ? 0.72 : 0.55;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${viewBox}" preserveAspectRatio="xMidYMid meet">
    <defs>
      ${filterMarkup("b", p.back.blur, p.back.freq, p.back.octaves, p.back.scale, p.back.finish, p.back.seed)}
      ${filterMarkup("m", p.mid.blur, p.mid.freq, p.mid.octaves, p.mid.scale, p.mid.finish, p.mid.seed)}
      ${filterMarkup("f", p.front.blur, p.front.freq, p.front.octaves, p.front.scale, p.front.finish, p.front.seed)}
    </defs>
    <g filter="url(#b)" opacity="${backOp}">${ellipses(spec.kind, spec.shape, "#e8eef2")}</g>
    <g filter="url(#m)" opacity="0.88" transform="translate(10 -14)">${ellipses(spec.kind, spec.shape, "#f7f1e6")}</g>
    <g filter="url(#f)" opacity="0.96" transform="translate(6 -26)">${ellipses(spec.kind, spec.shape, "#fffdf9")}</g>
  </svg>`;
}

let softEdgeVerified = false;

export async function bakeNepheleBitmap(spec: CloudSpec, quality: CloudQuality): Promise<ImageBitmap> {
  const { w, h } = cloudPixelSize(spec.kind, quality);
  const svg = nepheleSvgMarkup(spec, quality, w, h);
  const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  try {
    // createImageBitmap(blob) skips an intermediate <img> decode pass when supported.
    let bitmap: ImageBitmap;
    try {
      bitmap = await createImageBitmap(blob);
    } catch {
      const img = new Image();
      img.decoding = "async";
      img.src = url;
      await img.decode();
      bitmap = await createImageBitmap(img);
    }
    if (!softEdgeVerified) {
      if (!spriteHasSoftEdge(bitmap)) {
        bitmap.close();
        throw new Error("svg-filters-not-rasterized");
      }
      softEdgeVerified = true;
    }
    return bitmap;
  } finally {
    URL.revokeObjectURL(url);
  }
}

function spriteHasSoftEdge(bitmap: ImageBitmap) {
  const canvas = document.createElement("canvas");
  canvas.width = 48;
  canvas.height = 48;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return true;
  ctx.drawImage(bitmap, 0, 0, 48, 48);
  const data = ctx.getImageData(0, 0, 48, 48).data;
  let partial = 0;
  for (let i = 3; i < data.length; i += 4) {
    if (data[i] > 8 && data[i] < 248) partial += 1;
  }
  return partial > 60;
}

/** Run async work with a concurrency cap (SVG filter bake is GPU-heavy). */
export async function mapPool<T, R>(
  items: readonly T[],
  limit: number,
  fn: (item: T, index: number) => Promise<R>,
  onProgress?: (done: number) => void,
): Promise<R[]> {
  const results = new Array<R>(items.length);
  let cursor = 0;
  let completed = 0;

  async function worker() {
    while (true) {
      const index = cursor;
      cursor += 1;
      if (index >= items.length) return;
      results[index] = await fn(items[index], index);
      completed += 1;
      onProgress?.(completed);
    }
  }

  const workers = Math.max(1, Math.min(limit, items.length));
  await Promise.all(Array.from({ length: workers }, () => worker()));
  return results;
}

"use client";

/** CSS-Tricks Nephele clouds: fractalNoise + displacement, baked before the reveal. */
import { motion, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { useHeroReveal } from "@/components/home/HeroReveal";
import { bakeNepheleBitmap, mapPool } from "@/lib/clouds/bakeNephele";
import { readCloudCache, writeCloudCache } from "@/lib/clouds/cloudCache";
import {
  CUMULUS_PUFFS,
  SHEET_PUFFS,
  filterParams,
  type CloudKind,
  type CloudQuality,
  type CloudSpec,
} from "@/lib/clouds/nephele-field";
import { pickCloudProfile, type CloudProfile } from "@/lib/clouds/networkQuality";

const DRIFT_MS = 2800;
const HOLD_MS = 300;

function preventScrollEvent(event: Event) {
  event.preventDefault();
}

/** Freeze scroll without hiding the scrollbar — keeps hero bg aligned to the track. */
function lockPageScroll() {
  const root = document.documentElement;
  if (root.classList.contains("scroll-locked")) return;
  root.classList.add("scroll-locked");
  window.addEventListener("wheel", preventScrollEvent, { passive: false });
  window.addEventListener("touchmove", preventScrollEvent, { passive: false });
  window.addEventListener("keydown", preventScrollKeys, { passive: false });
}

function preventScrollKeys(event: KeyboardEvent) {
  const keys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "];
  if (keys.includes(event.key)) event.preventDefault();
}

function unlockPageScroll() {
  const root = document.documentElement;
  if (!root.classList.contains("scroll-locked")) return;
  root.classList.remove("scroll-locked");
  window.removeEventListener("wheel", preventScrollEvent);
  window.removeEventListener("touchmove", preventScrollEvent);
  window.removeEventListener("keydown", preventScrollKeys);
}

function waitForRaster(ms: number) {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.setTimeout(resolve, ms);
      });
    });
  });
}

function TurbulenceFilter({
  id,
  blur,
  freq,
  octaves,
  scale,
  finish,
  seed,
}: {
  id: string;
  blur: number;
  freq: number;
  octaves: number;
  scale: number;
  finish: number;
  seed: number;
}) {
  return (
    <filter id={id} x="-90%" y="-90%" width="280%" height="280%" colorInterpolationFilters="sRGB">
      <feGaussianBlur in="SourceGraphic" stdDeviation={blur} result="blur" />
      <feTurbulence type="fractalNoise" baseFrequency={freq} numOctaves={octaves} seed={seed} result="noise" />
      <feDisplacementMap in="blur" in2="noise" scale={scale} xChannelSelector="R" yChannelSelector="G" result="displaced" />
      <feGaussianBlur in="displaced" stdDeviation={finish} result="soft" />
      <feComponentTransfer in="soft">
        <feFuncA type="gamma" amplitude="1" exponent="0.85" offset="0" />
      </feComponentTransfer>
    </filter>
  );
}

function Puffs({ kind, shape, fill }: { kind: CloudKind; shape: number; fill: string }) {
  const lobes = kind === "sheet" ? SHEET_PUFFS[shape % SHEET_PUFFS.length] : CUMULUS_PUFFS[shape % CUMULUS_PUFFS.length];
  return (
    <>
      {lobes.map(([cx, cy, rx, ry]) => (
        <ellipse key={`${cx}-${cy}-${rx}`} cx={cx} cy={cy} rx={rx} ry={ry} fill={fill} />
      ))}
    </>
  );
}

function LiveCloud({ spec, quality, prefix }: { spec: CloudSpec; quality: CloudQuality; prefix: string }) {
  const p = filterParams(quality, spec.seed);
  const back = `${prefix}-${spec.id}-b`;
  const mid = `${prefix}-${spec.id}-m`;
  const front = `${prefix}-${spec.id}-f`;
  const viewBox = spec.kind === "sheet" ? "0 0 1400 900" : "0 0 900 520";

  return (
    <svg viewBox={viewBox} className="block h-auto w-full overflow-visible" aria-hidden>
      <defs>
        <TurbulenceFilter id={back} {...p.back} />
        <TurbulenceFilter id={mid} {...p.mid} />
        <TurbulenceFilter id={front} {...p.front} />
      </defs>
      <g filter={`url(#${back})`} opacity={spec.kind === "sheet" ? 0.72 : 0.55}>
        <Puffs kind={spec.kind} shape={spec.shape} fill="#e8eef2" />
      </g>
      <g filter={`url(#${mid})`} opacity={0.88} transform="translate(10 -14)">
        <Puffs kind={spec.kind} shape={spec.shape} fill="#f7f1e6" />
      </g>
      <g filter={`url(#${front})`} opacity={0.96} transform="translate(6 -26)">
        <Puffs kind={spec.kind} shape={spec.shape} fill="#fffdf9" />
      </g>
    </svg>
  );
}

function BakedCloud({ spec, bitmap, play }: { spec: CloudSpec; bitmap: ImageBitmap; play: boolean }) {
  return (
    <motion.div
      className="absolute will-change-transform"
      style={{ left: spec.left, top: spec.top, width: spec.width }}
      initial={{ x: 0, y: 0 }}
      animate={play ? { x: spec.x, y: spec.y } : { x: 0, y: 0 }}
      transition={{ duration: DRIFT_MS / 1000, delay: spec.delay, ease: [0.45, 0.05, 0.2, 1] }}
      aria-hidden
    >
      <canvas
        className="block h-auto w-full"
        ref={(el) => {
          if (!el) return;
          if (el.width !== bitmap.width || el.height !== bitmap.height) {
            el.width = bitmap.width;
            el.height = bitmap.height;
          }
          const ctx = el.getContext("2d");
          if (!ctx) return;
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = "high";
          ctx.clearRect(0, 0, el.width, el.height);
          ctx.drawImage(bitmap, 0, 0);
        }}
      />
    </motion.div>
  );
}

export default function CloudReveal() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const { finish, markCloudsReady } = useHeroReveal();
  const filterPrefix = useId().replace(/:/g, "");
  const cancelRef = useRef(false);
  const [gone, setGone] = useState(false);
  const [profile, setProfile] = useState<CloudProfile | null>(null);
  const [bitmaps, setBitmaps] = useState<Record<string, ImageBitmap> | null>(null);
  const [useLive, setUseLive] = useState(false);
  const [phase, setPhase] = useState<"boot" | "play">("boot");
  const [done, setDone] = useState(0);
  const [total, setTotal] = useState(0);
  const [displayPct, setDisplayPct] = useState(0);
  const [showLoader, setShowLoader] = useState(true);
  const displayRef = useRef(0);
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;
    if (reduce) {
      finish();
      setGone(true);
      return;
    }
    setProfile(pickCloudProfile());
  }, [isHome, reduce, finish]);

  const targetPct = total > 0 ? Math.min(100, (done / total) * 100) : 0;
  const targetRef = useRef(0);
  targetRef.current = targetPct;

  useEffect(() => {
    if (!showLoader) return;
    let raf = 0;
    let alive = true;
    const step = () => {
      if (!alive) return;
      const target = targetRef.current;
      let cur = displayRef.current;
      if (target <= 0 && total > 0 && cur < 12) {
        cur += 0.22;
      } else {
        cur += (target - cur) * 0.08;
        if (Math.abs(target - cur) < 0.12) cur = target;
      }
      displayRef.current = cur;
      setDisplayPct(cur);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => {
      alive = false;
      cancelAnimationFrame(raf);
    };
  }, [showLoader, total]);

  useEffect(() => {
    if (!isHome || reduce || !profile || gone) return;

    lockPageScroll();
    cancelRef.current = false;

    const { quality, field } = profile;
    const keep: ImageBitmap[] = [];
    setTotal(field.length);
    setDone(0);
    setShowLoader(true);
    displayRef.current = 0;
    setDisplayPct(0);

    (async () => {
      let cachedAll = false;
      try {
        const next: Record<string, ImageBitmap> = {};
        let fromCache = 0;
        const concurrency = quality === "ultra" ? 2 : quality === "high" ? 3 : 2;

        await mapPool(
          field,
          concurrency,
          async (cloud) => {
            if (cancelRef.current) throw new Error("cancelled");
            let bitmap = await readCloudCache(quality, cloud.id);
            if (bitmap) {
              fromCache += 1;
            } else {
              bitmap = await bakeNepheleBitmap(cloud, quality);
              void writeCloudCache(quality, cloud.id, bitmap);
            }
            keep.push(bitmap);
            next[cloud.id] = bitmap;
            return bitmap;
          },
          (completed) => {
            if (cancelRef.current) return;
            setDone(completed);
            setBitmaps({ ...next });
          },
        );

        if (cancelRef.current) return;
        setBitmaps(next);
        cachedAll = fromCache === field.length;
      } catch (err) {
        if (cancelRef.current || (err instanceof Error && err.message === "cancelled")) return;
        keep.forEach((bitmap) => bitmap.close());
        keep.length = 0;
        setBitmaps(null);
        setUseLive(true);
        setDone(field.length);
        await waitForRaster(quality === "low" ? 400 : quality === "mid" ? 550 : 700);
      }

      if (cancelRef.current) return;
      setDone(field.length);
      await new Promise((r) => window.setTimeout(r, cachedAll ? 160 : 420));
      if (cancelRef.current) return;
      displayRef.current = 100;
      setDisplayPct(100);
      markCloudsReady();
      setShowLoader(false);
      await new Promise((r) => window.setTimeout(r, HOLD_MS + 200));
      if (cancelRef.current) return;
      setPhase("play");
      await new Promise((r) => window.setTimeout(r, DRIFT_MS + 200));
      if (cancelRef.current) return;
      unlockPageScroll();
      finish();
      setGone(true);
    })();

    return () => {
      cancelRef.current = true;
      keep.forEach((bitmap) => bitmap.close());
      unlockPageScroll();
    };
  }, [isHome, reduce, profile, gone, finish, markCloudsReady]);

  if (!isHome || reduce || gone) return null;

  const baking = showLoader;
  const ready = (Boolean(bitmaps) && total > 0 && done >= total) || useLive;
  const showSky = !ready;
  const field = profile?.field ?? [];
  const quality = profile?.quality ?? null;
  const pctLabel = Math.round(displayPct);

  return (
    <div className="cloud-layer pointer-events-none fixed inset-0 z-[60] overflow-hidden" aria-busy={baking}>
      {bitmaps ? (
        <div className="absolute inset-0">
          {field.map((cloud) =>
            bitmaps[cloud.id] ? (
              <BakedCloud key={cloud.id} spec={cloud} bitmap={bitmaps[cloud.id]} play={phase === "play"} />
            ) : null,
          )}
        </div>
      ) : useLive && quality ? (
        <div className="absolute inset-0 [transform:translateZ(0)]">
          {field.map((cloud) => (
            <motion.div
              key={cloud.id}
              className="absolute will-change-transform"
              style={{ left: cloud.left, top: cloud.top, width: cloud.width }}
              initial={{ x: 0, y: 0 }}
              animate={phase === "play" ? { x: cloud.x, y: cloud.y } : { x: 0, y: 0 }}
              transition={{ duration: DRIFT_MS / 1000, delay: cloud.delay, ease: [0.45, 0.05, 0.2, 1] }}
              aria-hidden
            >
              <LiveCloud spec={cloud} quality={quality} prefix={filterPrefix} />
            </motion.div>
          ))}
        </div>
      ) : null}

      <div
        className="cloud-preloader pointer-events-none absolute inset-0 z-[1] transition-opacity duration-500"
        style={{ opacity: showSky ? 1 : 0 }}
        aria-hidden
      />

      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-[18%] z-[2] flex flex-col items-center gap-2.5 px-6 text-center"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: showLoader ? 1 : 0, y: showLoader ? 0 : 6 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden={!showLoader}
      >
        <p className="font-sans text-sm font-medium tracking-[0.18em] text-forest-950/70 uppercase">Loading</p>
        <p className="font-serif text-3xl font-medium tabular-nums text-forest-950 md:text-4xl" aria-live="polite">
          {pctLabel}%
        </p>
        <div className="h-1 w-44 overflow-hidden rounded-full bg-forest-950/10 md:w-56">
          <div
            className="h-full rounded-full bg-forest-800"
            style={{
              width: `${Math.max(displayPct, showLoader ? 2 : 0)}%`,
              transition: "width 280ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}

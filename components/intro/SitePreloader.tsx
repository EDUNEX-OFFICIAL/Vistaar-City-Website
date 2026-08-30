"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import VistaarMarkSvg, { VISTAAR_PEAK_PATHS } from "@/components/intro/VistaarMarkSvg";

const DRAW_MS = 0.95;
const STAGGER = 0.14;
const WORDMARK_MS = 0.5;
const TAGLINE_DELAY_MS = 0.28;
const TAGLINE_MS = 0.45;
const HOLD_MS = 0.4;
const MORPH_MS = 0.75;
const FLY_MS = 1.05;
const EXIT_MS = 0.35;
const REDUCE_HOLD_MS = 0.28;
const FALLBACK_MS = 7200;

const EASE = [0.22, 1, 0.36, 1] as const;
const FLY_EASE = [0.45, 0, 0.15, 1] as const;
/** Native vistaar-logo.png aspect (782×288) */
const LOGO_ASPECT = 782 / 288;
/** Morph logo larger than constructed stack so the brand mark reads stronger */
const MORPH_LOGO_SCALE = 1.32;

type Phase = "draw" | "wordmark" | "tagline" | "morph" | "fly" | "done";

type FlyTarget = { x: number; y: number; scale: number };
type LockupSize = { width: number; height: number };

type SitePreloaderProps = {
  onFinished: () => void;
};

/** Painted size of an object-contain / width-fit logo inside a box */
function logoPaintSize(boxW: number, boxH: number) {
  const byWidth = { w: boxW, h: boxW / LOGO_ASPECT };
  if (byWidth.h <= boxH + 0.5) return byWidth;
  return { w: boxH * LOGO_ASPECT, h: boxH };
}

function measureFlyTarget(lockup: HTMLElement): FlyTarget {
  const headerImg =
    (document.getElementById("site-header-logo-image") as HTMLElement | null) ??
    document.querySelector<HTMLElement>("#site-header-logo img");
  if (!headerImg) return { x: 0, y: 0, scale: 0.35 };

  const hRect = headerImg.getBoundingClientRect();
  const lRect = lockup.getBoundingClientRect();

  /*
   * flyImg uses w-full h-auto inside lockup — paint size ≠ lockup box when box is taller.
   * Compute painted logo size from lockup + aspect, then scale so it equals header logo.
   */
  const paint = logoPaintSize(lRect.width, lRect.height);
  const headerH = Math.max(hRect.height, 1);
  const headerW = Math.max(hRect.width, 1);
  /* Prefer height match (header uses h-10 / h-11 / h-12); width follows same aspect */
  const scaleH = headerH / Math.max(paint.h, 1);
  const scaleW = headerW / Math.max(paint.w, 1);
  const scale = Math.max((scaleH + scaleW) / 2, 0.12);

  const headerCx = hRect.left + hRect.width / 2;
  const headerCy = hRect.top + hRect.height / 2;
  const lockupCx = lRect.left + lRect.width / 2;
  const lockupCy = lRect.top + lRect.height / 2;

  return {
    x: headerCx - lockupCx,
    y: headerCy - lockupCy,
    scale,
  };
}

function captureLockupSize(el: HTMLElement): LockupSize {
  const rect = el.getBoundingClientRect();
  const width = Math.ceil(rect.width * MORPH_LOGO_SCALE);
  const height = Math.ceil(Math.max(rect.height * MORPH_LOGO_SCALE, width / LOGO_ASPECT));
  return { width, height };
}

export default function SitePreloader({ onFinished }: SitePreloaderProps) {
  const prefersReduced = useReducedMotion();
  const lockupRef = useRef<HTMLDivElement>(null);
  const constructedRef = useRef<HTMLDivElement>(null);
  const finishedRef = useRef(false);
  const onFinishedRef = useRef(onFinished);
  onFinishedRef.current = onFinished;

  const [phase, setPhase] = useState<Phase>("draw");
  const [lockupSize, setLockupSize] = useState<LockupSize | null>(null);
  const [flyTarget, setFlyTarget] = useState<FlyTarget>({ x: 0, y: 0, scale: 1 });
  const [overlayGone, setOverlayGone] = useState(false);
  const [lockupGone, setLockupGone] = useState(false);

  const finishOnce = () => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    onFinishedRef.current();
  };

  useEffect(() => {
    const t = window.setTimeout(finishOnce, FALLBACK_MS);
    return () => window.clearTimeout(t);
  }, []);

  const drawEndAt = (DRAW_MS + STAGGER * (VISTAAR_PEAK_PATHS.length - 1)) * 1000;

  useEffect(() => {
    if (!prefersReduced) return;
    const hold = window.setTimeout(() => {
      setOverlayGone(true);
      setLockupGone(true);
      window.setTimeout(finishOnce, EXIT_MS * 1000);
    }, REDUCE_HOLD_MS * 1000);
    return () => window.clearTimeout(hold);
  }, [prefersReduced]);

  useEffect(() => {
    if (prefersReduced) return;

    const timers: number[] = [];
    const morphAt =
      drawEndAt +
      100 +
      WORDMARK_MS * 1000 +
      TAGLINE_DELAY_MS * 1000 +
      TAGLINE_MS * 1000 +
      HOLD_MS * 1000;
    const flyAt = morphAt + MORPH_MS * 1000;

    timers.push(window.setTimeout(() => setPhase("wordmark"), drawEndAt + 100));
    timers.push(
      window.setTimeout(
        () => setPhase("tagline"),
        drawEndAt + 100 + WORDMARK_MS * 1000 * 0.55,
      ),
    );
    timers.push(
      window.setTimeout(() => {
        const constructed = constructedRef.current;
        if (constructed) setLockupSize(captureLockupSize(constructed));
        window.requestAnimationFrame(() => setPhase("morph"));
      }, morphAt),
    );
    timers.push(
      window.setTimeout(() => {
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            const lockup = lockupRef.current;
            if (lockup) setFlyTarget(measureFlyTarget(lockup));
            setPhase("fly");
            setOverlayGone(true);
          });
        });
      }, flyAt),
    );
    timers.push(
      window.setTimeout(() => {
        finishOnce();
      }, flyAt + (FLY_MS - 0.12) * 1000),
    );

    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [prefersReduced, drawEndAt]);

  const showWordmark = phase === "wordmark" || phase === "tagline" || phase === "morph";
  const showTagline = phase === "tagline" || phase === "morph";
  const morphing = phase === "morph";
  const showLogo = phase === "morph" || phase === "fly" || phase === "done";
  const flying = phase === "fly" || phase === "done";
  const sizeLocked = lockupSize !== null;
  const paintSize = lockupSize
    ? logoPaintSize(lockupSize.width, lockupSize.height)
    : null;

  return (
    <motion.div
      className="site-preloader fixed inset-0 z-[300] flex flex-col items-center justify-center"
      role="status"
      aria-live="polite"
      aria-label="Loading Vistar City"
      initial={false}
      animate={{ opacity: overlayGone && lockupGone ? 0 : 1 }}
      transition={{ duration: EXIT_MS, ease: EASE }}
      style={{ pointerEvents: overlayGone && lockupGone ? "none" : "auto" }}
    >
      <motion.div
        className="absolute inset-0 bg-[#0B1812]"
        initial={false}
        animate={{ opacity: overlayGone ? 0 : 1 }}
        transition={{ duration: FLY_MS * 0.85, ease: EASE }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 48%, rgba(197,160,89,0.14) 0%, transparent 70%)",
          opacity: overlayGone ? 0 : undefined,
          transition: `opacity ${FLY_MS * 0.85}s cubic-bezier(0.22, 1, 0.36, 1)`,
        }}
        aria-hidden
      />

      <motion.div
        ref={lockupRef}
        className="relative z-[1] flex items-center justify-center"
        style={
          sizeLocked
            ? { width: lockupSize.width, height: lockupSize.height }
            : undefined
        }
        initial={prefersReduced ? false : { opacity: 0.92, scale: 0.96 }}
        animate={{
          opacity: lockupGone ? 0 : 1,
          x: flying ? flyTarget.x : 0,
          y: flying ? flyTarget.y : 0,
          scale: flying ? flyTarget.scale : 1,
        }}
        transition={{
          opacity: { duration: flying ? 0.2 : 0.5, ease: EASE },
          x: { duration: FLY_MS, ease: FLY_EASE },
          y: { duration: FLY_MS, ease: FLY_EASE },
          scale: { duration: FLY_MS, ease: FLY_EASE },
        }}
        onAnimationComplete={() => {
          if (!flying || prefersReduced) return;
          setLockupGone(true);
          finishOnce();
          setPhase("done");
        }}
      >
        {/* Constructed lockup: SVG peaks + wordmark + tagline */}
        <motion.div
          ref={constructedRef}
          className="flex flex-col items-center"
          initial={false}
          animate={{
            opacity: morphing || flying ? 0 : showWordmark || phase === "draw" ? 1 : 0,
            filter:
              showWordmark && !morphing && !flying
                ? "drop-shadow(0 0 28px rgba(197,160,89,0.35))"
                : "blur(0px)",
          }}
          transition={{
            opacity: { duration: morphing ? MORPH_MS * 0.55 : 0.4, ease: EASE },
            filter: { duration: morphing ? MORPH_MS * 0.4 : 0.3, ease: EASE },
          }}
          style={{
            pointerEvents: "none",
            position: sizeLocked ? "absolute" : "relative",
            inset: sizeLocked ? 0 : undefined,
            justifyContent: sizeLocked ? "center" : undefined,
          }}
          aria-hidden={showLogo && !morphing}
        >
          <VistaarMarkSvg className="h-[4.5rem] w-auto sm:h-24 md:h-28" gradientId="preloaderVistaarGold">
            {VISTAAR_PEAK_PATHS.map((d, i) => (
              <motion.path
                key={i}
                d={d}
                stroke="url(#preloaderVistaarGold)"
                strokeWidth={5.5}
                strokeLinecap="butt"
                strokeLinejoin="miter"
                initial={prefersReduced ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 1 }}
                animate={{ pathLength: 1, opacity: morphing ? 0 : 1 }}
                transition={
                  prefersReduced
                    ? { duration: 0 }
                    : morphing
                      ? { opacity: { duration: MORPH_MS * 0.45, ease: EASE } }
                      : {
                          pathLength: {
                            duration: DRAW_MS,
                            delay: i * STAGGER,
                            ease: [0.4, 0, 0.2, 1],
                          },
                        }
                }
              />
            ))}
          </VistaarMarkSvg>

          {showWordmark && !prefersReduced && phase === "wordmark" ? (
            <motion.div
              className="pointer-events-none absolute inset-0 top-0"
              initial={{ opacity: 0, x: "-40%" }}
              animate={{ opacity: [0, 0.5, 0], x: ["-40%", "45%"] }}
              transition={{ duration: 0.85, ease: "easeInOut" }}
              aria-hidden
            >
              <div
                className="h-full w-1/3"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(240,226,184,0.35), transparent)",
                }}
              />
            </motion.div>
          ) : null}

          <motion.div
            className="mt-5 flex w-full justify-center sm:mt-6"
            initial={false}
            animate={{
              opacity: morphing ? 0 : showWordmark || prefersReduced ? 1 : 0,
              y: morphing ? -6 : showWordmark || prefersReduced ? 0 : 10,
            }}
            transition={{ duration: morphing ? MORPH_MS * 0.45 : WORDMARK_MS, ease: EASE }}
          >
            <Image
              src="/preloader-wordmark.png"
              alt="VISTAAR"
              width={782}
              height={103}
              priority
              className="h-8 w-auto object-contain sm:h-10 md:h-12"
            />
          </motion.div>

          <motion.div
            className="mt-3 flex w-full justify-center sm:mt-3.5"
            initial={false}
            animate={{
              opacity: morphing ? 0 : showTagline || prefersReduced ? 0.95 : 0,
              y: morphing ? -4 : showTagline || prefersReduced ? 0 : 8,
            }}
            transition={{
              duration: morphing ? MORPH_MS * 0.4 : TAGLINE_MS,
              ease: EASE,
              delay: morphing ? 0 : prefersReduced ? 0 : TAGLINE_DELAY_MS * 0.15,
            }}
          >
            <Image
              src="/preloader-tagline.png"
              alt="Dream Home Maker"
              width={644}
              height={33}
              priority
              className="h-2.5 w-auto object-contain sm:h-3 md:h-3.5"
            />
          </motion.div>
        </motion.div>

        {/* Full brand logo — width-matched to lockup (VISTAAR stack width), natural aspect */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            opacity: showLogo ? 1 : 0,
            filter: showLogo && !flying ? "drop-shadow(0 0 26px rgba(197,160,89,0.3))" : "none",
          }}
          transition={{
            opacity: {
              duration: morphing ? MORPH_MS * 0.65 : 0.25,
              ease: EASE,
              delay: morphing ? MORPH_MS * 0.2 : 0,
            },
            filter: { duration: 0.4, ease: EASE },
          }}
          style={{ pointerEvents: "none" }}
        >
          <Image
            src="/vistaar-logo.png"
            alt=""
            width={782}
            height={288}
            priority
            data-preloader-logo
            className="object-contain"
            style={
              paintSize
                ? { width: paintSize.w, height: paintSize.h, maxWidth: "none" }
                : { width: "100%", height: "auto" }
            }
            aria-hidden
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

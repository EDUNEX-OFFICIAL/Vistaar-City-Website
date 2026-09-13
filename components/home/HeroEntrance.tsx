"use client";

import gsap from "gsap";
import { useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";
import { useHeroReveal } from "@/components/home/HeroReveal";

/**
 * After clouds part: eyebrow + headline → description → CTAs → proof → navbar.
 * Slow, readable beats for a premium land-brand feel.
 */
export default function HeroEntrance() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const { cloudsReady } = useHeroReveal();
  const isHome = pathname === "/";

  useLayoutEffect(() => {
    if (!isHome) return;

    const header = document.querySelector<HTMLElement>(".site-header");
    const eyebrow = document.querySelectorAll(".hero-d1");
    const lines = document.querySelectorAll(".hero-line > span");
    const body = document.querySelectorAll(".hero-d3");
    const ctas = document.querySelectorAll(".hero-d4");
    const proof = document.querySelectorAll(".hero-d5");

    if (reduce) {
      gsap.set([header, eyebrow, lines, body, ctas, proof], { clearProps: "all", opacity: 1, y: 0 });
      document.documentElement.classList.add("hero-intro-done");
      return;
    }

    if (!cloudsReady) {
      gsap.set([header, eyebrow, lines, body, ctas, proof], { opacity: 0 });
      if (header) gsap.set(header, { y: -28 });
      if (lines.length) gsap.set(lines, { y: 56 });
      if (eyebrow.length) gsap.set(eyebrow, { y: 28 });
      if (body.length) gsap.set(body, { y: 32 });
      if (ctas.length) gsap.set(ctas, { y: 28 });
      if (proof.length) gsap.set(proof, { y: 36 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          document.documentElement.classList.add("hero-intro-done");
        },
      });

      // 1) Eyebrow + headline (headline lines stagger)
      tl.fromTo(
        eyebrow,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 1.2, clearProps: "transform" },
        0.35,
      );
      tl.fromTo(
        lines,
        { opacity: 0, y: 64 },
        { opacity: 1, y: 0, duration: 1.45, stagger: 0.22, clearProps: "transform" },
        0.55,
      );

      // 2) Description
      tl.fromTo(
        body,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 1.25, clearProps: "transform" },
        1.55,
      );

      // 3) CTAs, then proof strip
      tl.fromTo(
        ctas,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 1.15, clearProps: "transform" },
        2.15,
      );
      tl.fromTo(
        proof,
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 1.2, clearProps: "transform" },
        2.55,
      );

      // 4) Navbar last — settles in from above
      if (header) {
        tl.fromTo(
          header,
          { opacity: 0, y: -28 },
          { opacity: 1, y: 0, duration: 1.2, clearProps: "transform" },
          3.15,
        );
      }
    });

    return () => ctx.revert();
  }, [isHome, cloudsReady, reduce]);

  return null;
}

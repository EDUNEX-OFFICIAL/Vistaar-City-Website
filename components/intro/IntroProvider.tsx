"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import SitePreloader from "@/components/intro/SitePreloader";

const PRELOADER_UNMOUNT_MS = 450;

const SCROLL_KEYS = new Set([
  "ArrowUp",
  "ArrowDown",
  "PageUp",
  "PageDown",
  "Home",
  "End",
  " ",
  "Spacebar",
]);

type IntroContextValue = {
  introComplete: boolean;
};

const IntroContext = createContext<IntroContextValue>({ introComplete: false });

export function useIntro() {
  return useContext(IntroContext);
}

export default function IntroProvider({ children }: { children: ReactNode }) {
  const [introComplete, setIntroComplete] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("intro-pending");
    return () => {
      document.documentElement.classList.remove("intro-pending");
    };
  }, []);

  /* Block scroll without hiding the scrollbar (avoids ivory gutter / layout shift) */
  useEffect(() => {
    if (introComplete) return;

    const blockWheel = (e: Event) => e.preventDefault();
    const blockTouch = (e: TouchEvent) => e.preventDefault();
    const blockKey = (e: KeyboardEvent) => {
      if (SCROLL_KEYS.has(e.key)) e.preventDefault();
    };

    window.addEventListener("wheel", blockWheel, { passive: false });
    window.addEventListener("touchmove", blockTouch, { passive: false });
    window.addEventListener("keydown", blockKey);

    return () => {
      window.removeEventListener("wheel", blockWheel);
      window.removeEventListener("touchmove", blockTouch);
      window.removeEventListener("keydown", blockKey);
    };
  }, [introComplete]);

  const finishIntro = useCallback(() => {
    setIntroComplete((prev) => {
      if (prev) return prev;
      document.documentElement.classList.remove("intro-pending");
      return true;
    });
    window.setTimeout(() => setShowPreloader(false), PRELOADER_UNMOUNT_MS);
  }, []);

  const value = useMemo(() => ({ introComplete }), [introComplete]);

  return (
    <IntroContext.Provider value={value}>
      {showPreloader ? <SitePreloader onFinished={finishIntro} /> : null}
      {children}
    </IntroContext.Provider>
  );
}

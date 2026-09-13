"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

type HeroRevealValue = {
  chromeReady: boolean;
  cloudsReady: boolean;
  markCloudsReady: () => void;
  finish: () => void;
};

const HeroRevealContext = createContext<HeroRevealValue>({
  chromeReady: true,
  cloudsReady: true,
  markCloudsReady: () => {},
  finish: () => {},
});

export function HeroRevealProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [chromeReady, setChromeReady] = useState(!isHome);
  const [cloudsReady, setCloudsReady] = useState(!isHome);

  const markCloudsReady = useCallback(() => {
    document.documentElement.classList.add("clouds-ready");
    setCloudsReady(true);
  }, []);

  const finish = useCallback(() => {
    document.documentElement.classList.add("hero-intro-done");
    setChromeReady(true);
  }, []);

  useEffect(() => {
    if (!isHome) {
      document.documentElement.classList.add("clouds-ready");
      document.documentElement.classList.add("hero-intro-done");
      setCloudsReady(true);
      setChromeReady(true);
    }
  }, [isHome]);

  useEffect(() => {
    if (!isHome || chromeReady) return;
    const id = window.setTimeout(() => finish(), 16000);
    return () => window.clearTimeout(id);
  }, [isHome, chromeReady, finish]);

  const value = useMemo(
    () => ({ chromeReady, cloudsReady, markCloudsReady, finish }),
    [chromeReady, cloudsReady, markCloudsReady, finish],
  );

  return <HeroRevealContext.Provider value={value}>{children}</HeroRevealContext.Provider>;
}

export function useHeroReveal() {
  return useContext(HeroRevealContext);
}

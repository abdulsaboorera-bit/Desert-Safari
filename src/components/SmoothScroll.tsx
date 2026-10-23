"use client";

import { useEffect } from "react";
import type Lenis from "lenis";
import { registerGsap, ScrollTrigger } from "@/lib/gsap";

export default function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let lenis: Lenis | null = null;
    let tickerFn: ((time: number) => void) | null = null;
    let onClick: ((event: MouseEvent) => void) | null = null;
    let cancelled = false;

    const setup = async () => {
      const { default: Lenis } = await import("lenis");
      const { gsap } = await import("@/lib/gsap");
      if (cancelled) return;

      registerGsap();

      lenis = new Lenis({ duration: 1.1, lerp: 0.09, wheelMultiplier: 1, touchMultiplier: 1.5, smoothWheel: true });
      document.documentElement.style.scrollBehavior = "auto";

      lenis.on("scroll", ScrollTrigger.update);
      tickerFn = (time: number) => lenis?.raf(time * 1000);
      gsap.ticker.add(tickerFn);
      gsap.ticker.lagSmoothing(0);

      onClick = (event: MouseEvent) => {
        if (event.defaultPrevented || event.button !== 0) return;
        if (event.metaKey || event.ctrlKey || event.shiftKey) return;
        const anchor = (event.target as HTMLElement | null)?.closest?.('a[href^="#"]');
        if (!anchor) return;
        const hash = anchor.getAttribute("href");
        if (!hash || hash === "#") return;
        const target = document.querySelector(hash);
        if (!target) return;
        event.preventDefault();
        lenis?.scrollTo(target, { offset: -80, duration: 1.2 });
        window.history.pushState(null, "", hash);
      };
      document.addEventListener("click", onClick);
    };

    setup();

    return () => {
      cancelled = true;
      if (tickerFn) {
        import("@/lib/gsap").then(({ gsap }) => gsap.ticker.remove(tickerFn!));
      }
      if (onClick) document.removeEventListener("click", onClick);
      lenis?.destroy();
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return null;
}

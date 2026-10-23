"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  Gauge,
  Info,
  MapPin,
  MessageCircle,
  Pause,
  Play,
  Share2,
  Sparkles,
  Users,
} from "lucide-react";
import { SERVICES, type Service } from "@/lib/services";
import { whatsappFor } from "@/lib/constants";
import { cn } from "@/utils/cn";

const AUTOPLAY_MS = 9000;

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export default function ShortsFeed() {
  const reduced = useReducedMotion();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const fillsRef = useRef<Array<HTMLSpanElement | null>>([]);
  const activeRef = useRef(0);
  const progressRef = useRef(0);
  const inViewRef = useRef(false);

  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [hint, setHint] = useState(true);
  const [shared, setShared] = useState(false);

  const total = SERVICES.length;
  const current = SERVICES[active];

  const goTo = useCallback(
    (index: number) => {
      const el = scrollerRef.current;
      if (!el) return;
      const next = Math.max(0, Math.min(total - 1, index));
      setHint(next === 0);
      el.scrollTo({
        top: next * el.clientHeight,
        behavior: reduced ? "auto" : "smooth",
      });
    },
    [reduced, total],
  );

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
        setInView(entry.isIntersecting);
      },
      { threshold: 0.45 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleScroll = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const index = Math.round(el.scrollTop / Math.max(1, el.clientHeight));
    if (index === activeRef.current) return;
    activeRef.current = index;
    progressRef.current = 0;
    fillsRef.current[index]?.style.setProperty("--p", "0");
    setActive(index);
    setHint(index === 0);
  }, []);

  useEffect(() => {
    if (!playing || reduced || !inView) return;
    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const delta = Math.min(now - last, 240);
      last = now;
      if (!document.hidden) {
        progressRef.current = Math.min(1, progressRef.current + delta / AUTOPLAY_MS);
        const fill = fillsRef.current[activeRef.current];
        if (fill) fill.style.setProperty("--p", progressRef.current.toFixed(4));
        if (progressRef.current >= 1) {
          progressRef.current = 0;
          goTo(
            activeRef.current + 1 >= total ? 0 : activeRef.current + 1,
          );
        }
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, reduced, inView, goTo, total]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!inViewRef.current) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest("button, a, input, textarea, select")) return;

      if (event.key === "ArrowDown" || event.key === "PageDown") {
        event.preventDefault();
        goTo(activeRef.current + 1);
      } else if (event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault();
        goTo(activeRef.current - 1);
      } else if (event.key === "Home") {
        event.preventDefault();
        goTo(0);
      } else if (event.key === "End") {
        event.preventDefault();
        goTo(total - 1);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goTo, total]);

  const share = useCallback(async (service: Service) => {
    const url = `${window.location.origin}/services#${service.id}`;
    const payload = {
      title: `${service.title} | Dubai Desert Safari`,
      text: service.description,
      url,
    };
    try {
      if (typeof navigator.share === "function") {
        await navigator.share(payload);
        return;
      }
      await navigator.clipboard.writeText(url);
      setShared(true);
      window.setTimeout(() => setShared(false), 1800);
    } catch {
      setShared(false);
    }
  }, []);

  return (
    <section id="services-feed" aria-label="Desert safari services feed">
      <div className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-[#17110D]">
        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          data-lenis-prevent
          role="region"
          aria-roledescription="carousel"
          aria-label="Desert safari services, swipe or scroll for the next service"
          tabIndex={0}
          className="hide-scrollbar h-full w-full snap-y snap-mandatory overflow-y-auto focus:outline-none"
        >
          {SERVICES.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${total}: ${service.title}`}
              className="relative flex h-full w-full shrink-0 snap-start snap-always flex-col justify-end overflow-hidden"
            >
              <Image
                src={service.image}
                alt={`${service.title} in the Dubai desert`}
                fill
                priority={index < 2}
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B08] via-[#17110D]/55 to-[#17110D]/25" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#17110D]/80 via-[#17110D]/20 to-[#17110D]/65" />
              <div className="grain absolute inset-0" aria-hidden="true" />

              <div className="relative z-10 flex h-full flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-12 lg:px-12 lg:pb-16">
                <div className="w-full max-w-2xl">
                  <div className="glass rounded-[26px] p-4 sm:p-6 lg:p-7">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#D9B77A] to-[#C99A45] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#17110D]">
                        <Sparkles className="h-3 w-3" aria-hidden="true" />
                        {service.kicker}
                      </span>
                      {service.badge && (
                        <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-md">
                          {service.badge}
                        </span>
                      )}
                      <span className="ml-auto hidden text-[10px] uppercase tracking-[0.2em] text-white/55 sm:block">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">
                      {service.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/80 sm:line-clamp-none sm:text-[15px] lg:text-base">
                      {service.description}
                    </p>

                    <ul className="mt-4 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                      {[
                        { icon: Clock, label: service.duration },
                        { icon: MapPin, label: service.pickup },
                        { icon: Users, label: service.group },
                        { icon: Gauge, label: service.intensity },
                      ].map(({ icon: Icon, label }, chipIndex) => (
                        <li
                          key={label}
                          className={cn(
                            "glass-chip inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-medium text-white/90",
                            chipIndex >= 2 && "hidden sm:inline-flex",
                          )}
                        >
                          <Icon className="h-3.5 w-3.5 text-[#D9B77A]" aria-hidden="true" />
                          {label}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {service.highlights.slice(0, 4).map((highlight, highlightIndex) => (
                        <li
                          key={highlight}
                          className={cn(
                            "flex items-start gap-2 text-[13px] leading-snug text-white/85",
                            highlightIndex >= 2 && "hidden sm:flex",
                          )}
                        >
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D9B77A]" aria-hidden="true" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-white/15 pt-4">
                      <a
                        href={whatsappFor(
                          `Hello, I'd like to book the ${service.title}. Please share the price, timing and what's included.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shine inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-r from-[#D9B77A] to-[#C99A45] px-4 py-3 text-[13px] font-bold text-[#17110D] shadow-lg shadow-black/30 transition-transform hover:-translate-y-0.5 sm:flex-none sm:px-5 sm:text-sm"
                      >
                        <MessageCircle className="h-4 w-4" aria-hidden="true" />
                        Book on WhatsApp
                      </a>
                      <a
                        href="#all-services"
                        className="hidden items-center gap-1.5 rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition-colors hover:border-[#D9B77A] hover:text-[#D9B77A] sm:inline-flex"
                      >
                        <Info className="h-4 w-4" aria-hidden="true" />
                        <span className="hidden sm:inline">Full details</span>
                        <span className="sm:hidden">Details</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => share(service)}
                        aria-label={`Share ${service.title}`}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 bg-white/10 text-white/90 backdrop-blur-md transition-colors hover:border-[#D9B77A] hover:text-[#D9B77A] sm:hidden"
                      >
                        <Share2 className="h-4 w-4" aria-hidden="true" />
                      </button>
                      <span className="w-full text-[11px] uppercase tracking-[0.16em] text-white/55 sm:w-auto">
                        {service.priceNote}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 bg-gradient-to-b from-[#0F0B08]/85 to-transparent px-4 pb-10 pt-20 sm:px-6 sm:pt-24 lg:px-12">
          <div className="pointer-events-auto flex items-center gap-3">
            <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-md">
              {current.category}
            </span>
            <span className="text-[11px] font-medium tracking-[0.2em] text-white/60">
              {pad(active + 1)} / {pad(total)}
            </span>

            <div className="ml-auto flex flex-1 items-center gap-1.5 sm:max-w-md">
              {SERVICES.map((service, index) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Go to ${service.title}`}
                  aria-current={index === active}
                  className="group h-6 flex-1 max-w-14"
                >
                  <span className="block h-1 w-full overflow-hidden rounded-full bg-white/25 transition-all group-hover:h-1.5">
                    <span
                      ref={(el) => {
                        fillsRef.current[index] = el;
                      }}
                      style={
                        index === active
                          ? { transform: "scaleX(var(--p, 0))" }
                          : { transform: index < active ? "scaleX(1)" : "scaleX(0)" }
                      }
                      className="block h-full w-full origin-left rounded-full bg-gradient-to-r from-[#D9B77A] to-[#C99A45]"
                    />
                  </span>
                </button>
              ))}
            </div>

            {!reduced && (
              <button
                type="button"
                onClick={() => setPlaying((value) => !value)}
                aria-label={playing ? "Pause autoplay" : "Start autoplay"}
                aria-pressed={playing}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/90 backdrop-blur-md transition-colors hover:border-[#D9B77A] hover:text-[#D9B77A]"
              >
                {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>
            )}
          </div>

          <p className="mt-3 hidden text-sm text-white/70 sm:block">
            <span className="font-semibold text-white/90">{current.kicker}</span>
            {" · "}
            {current.bestFor} · {current.timings}
          </p>
        </div>

        <div className="absolute bottom-24 right-3 z-30 hidden flex-col items-center gap-3 sm:bottom-auto sm:right-5 sm:top-1/2 sm:flex sm:-translate-y-1/2 lg:right-8">
          <button
            type="button"
            onClick={() => share(current)}
            aria-label={`Share ${current.title}`}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/90 backdrop-blur-md transition-all hover:border-[#D9B77A] hover:text-[#D9B77A]"
          >
            <Share2 className="h-5 w-5" aria-hidden="true" />
          </button>
          <span
            aria-live="polite"
            className={cn(
              "rounded-full bg-[#17110D]/85 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-[#D9B77A] transition-opacity",
              shared ? "opacity-100" : "pointer-events-none opacity-0",
            )}
          >
            Link copied
          </span>

          <span className="my-1 hidden h-8 w-px bg-white/25 sm:block" />

          <button
            type="button"
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            aria-label="Previous service"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/90 backdrop-blur-md transition-all hover:border-[#D9B77A] hover:text-[#D9B77A] disabled:pointer-events-none disabled:opacity-30 sm:flex"
          >
            <ChevronUp className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            disabled={active === total - 1}
            aria-label="Next service"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/90 backdrop-blur-md transition-all hover:border-[#D9B77A] hover:text-[#D9B77A] disabled:pointer-events-none disabled:opacity-30 sm:flex"
          >
            <ChevronDown className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div
          className={cn(
            "pointer-events-none absolute bottom-3 left-1/2 z-30 flex w-max -translate-x-1/2 flex-col items-center gap-1.5 transition-opacity duration-500 sm:bottom-6",
            hint ? "opacity-100" : "opacity-0",
          )}
        >
          <span className="glass-chip whitespace-nowrap rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85">
            Swipe for the next service
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce text-[#D9B77A]" aria-hidden="true" />
        </div>
      </div>

      <div className="border-y border-[#D9B77A]/20 bg-[#211C18]/50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#F8F1E5]/55">
            Scroll, swipe or use the arrow keys
          </p>
          <Link
            href="#all-services"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#D9B77A] transition-colors hover:text-[#F8F1E5]"
          >
            Compare every service
            <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

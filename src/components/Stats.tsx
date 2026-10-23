"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  CalendarCheck,
  Compass,
  Flame,
  Headset,
  type LucideIcon,
} from "lucide-react";

type Stat = {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  detail: string;
  icon: LucideIcon;
};

const STATS: Stat[] = [
  {
    value: 8,
    suffix: "+",
    label: "Years In The Desert",
    detail: "Running Dubai desert tours since 2017",
    icon: CalendarCheck,
  },
  {
    value: 10,
    suffix: "",
    label: "Signature Experiences",
    detail: "Safaris, adventure rides and city tours",
    icon: Compass,
  },
  {
    value: 4,
    suffix: "",
    label: "Live Shows Each Night",
    detail: "Fire, tanoura, belly dance and henna",
    icon: Flame,
  },
  {
    value: 24,
    suffix: "/7",
    label: "WhatsApp Support",
    detail: "Replies before, during and after your trip",
    icon: Headset,
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;

    if (reduced) {
      node.textContent = `${value}${suffix}`;
      return;
    }

    let raf = 0;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      node.textContent = `${Math.round(eased * value)}${suffix}`;
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, value, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      {`${reduced ? value : 0}${suffix}`}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="relative overflow-hidden py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#211C18]/50 via-[#17110D] to-[#211C18]/50" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D9B77A]/45 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="mb-3 block text-xs uppercase tracking-[0.28em] text-[#D9B77A]">
              Desert Safari In Numbers
            </span>
            <h2 className="font-display text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
              A Decade Of Dubai Desert Tours
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#F8F1E5]/70">
            Small team, sharp logistics and a simple promise: the desert should
            feel extraordinary from the first pickup to the last photo.
          </p>
        </div>

        <motion.ul
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <li
              key={stat.label}
              className="group relative overflow-hidden rounded-3xl border border-[#D9B77A]/15 bg-gradient-to-br from-[#211C18] via-[#1B1611] to-[#17110D] p-6 transition-colors hover:border-[#D9B77A]/40 sm:p-7"
            >
              <span className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#D9B77A]/10 blur-2xl transition-all duration-500 group-hover:bg-[#D9B77A]/25" />
              <div className="relative flex items-start justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D9B77A]/25 bg-[#D9B77A]/10">
                  <stat.icon className="h-5 w-5 text-[#D9B77A]" aria-hidden="true" />
                </span>
                <stat.icon className="hidden h-16 w-16 text-[#D9B77A]/10 sm:block" aria-hidden="true" />
              </div>
              <p className="relative mt-5 bg-gradient-to-r from-[#F8F1E5] via-[#D9B77A] to-[#C99A45] bg-clip-text font-display text-5xl font-bold text-transparent">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <h3 className="relative mt-2 text-base font-semibold text-[#F8F1E5]">
                {stat.label}
              </h3>
              <p className="relative mt-1.5 text-sm leading-relaxed text-[#F8F1E5]/65">
                {stat.detail}
              </p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

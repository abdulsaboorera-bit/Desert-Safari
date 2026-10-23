"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  CarFront,
  Headset,
  ShieldCheck,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { WHY_CHOOSE, type Reason } from "@/lib/constants";

const ICONS: Record<Reason["icon"], LucideIcon> = {
  calendar: CalendarCheck,
  car: CarFront,
  headset: Headset,
  zap: Zap,
  shield: ShieldCheck,
  star: Sparkles,
};

export default function WhyChoose() {
  return (
    <section id="why" className="relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[#211C18]/40" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 block text-xs uppercase tracking-[0.28em] text-[#D9B77A]">
            Why Book With Us
          </span>
          <h2 className="font-display text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
            Why Dubai Desert Safari
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-[#F8F1E5]/80 sm:text-lg">
            A Dubai-based safari operator running desert tours since 2017, built
            around easy booking and genuine Arabian hospitality.
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((reason, index) => {
            const Icon = ICONS[reason.icon];
            return (
              <motion.li
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
                className="rounded-2xl border border-[#D9B77A]/15 bg-gradient-to-br from-[#211C18] to-[#17110D] p-6 transition-colors hover:border-[#D9B77A]/35 sm:p-7"
              >
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#D9B77A]/25 bg-[#D9B77A]/10">
                  <Icon className="h-5 w-5 text-[#D9B77A]" />
                </span>
                <h3 className="font-display text-xl font-bold">{reason.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#F8F1E5]/75">
                  {reason.description}
                </p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

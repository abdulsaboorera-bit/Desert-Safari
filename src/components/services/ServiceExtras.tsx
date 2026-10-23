"use client";

import { motion } from "framer-motion";
import {
  Bike,
  Bird,
  Camera,
  CarFront,
  Flame,
  Gift,
  Hand,
  MessageCircle,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { BOOKING_STEPS, SERVICE_EXTRAS } from "@/lib/services";
import { whatsappFor } from "@/lib/constants";

const EXTRA_ICONS: LucideIcon[] = [
  Wind,
  Bike,
  CarFront,
  Bird,
  Hand,
  Flame,
  Camera,
  Gift,
];

export default function ServiceExtras() {
  return (
    <>
      <section id="extras" className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <span className="mb-4 block text-xs uppercase tracking-[0.28em] text-[#D9B77A]">
              Make It Yours
            </span>
            <h2 className="font-display text-balance text-4xl font-bold md:text-5xl">
              Add Extras To Any Tour
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-[#F8F1E5]/80">
              Every service can be extended with rides, photo moments and
              celebration setups. Add them when you book and the team schedules
              them into your day.
            </p>
          </motion.div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_EXTRAS.map((extra, index) => {
              const Icon = EXTRA_ICONS[index % EXTRA_ICONS.length];
              return (
                <motion.li
                  key={extra.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (index % 4) * 0.07 }}
                  className="glass-soft flex flex-col rounded-3xl p-5 transition-colors hover:border-[#D9B77A]/45"
                >
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#D9B77A]/30 bg-[#D9B77A]/12 text-[#D9B77A]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-bold">{extra.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#F8F1E5]/70">
                    {extra.description}
                  </p>
                  <span className="mt-4 inline-flex w-fit rounded-full border border-[#D9B77A]/30 bg-[#D9B77A]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#F8F1E5]/85">
                    {extra.availability}
                  </span>
                </motion.li>
              );
            })}
          </ul>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 rounded-3xl border border-[#D9B77A]/25 bg-[#17110D]/70 p-6 text-center backdrop-blur-md sm:flex-row"
          >
            <p className="max-w-xl text-sm leading-relaxed text-[#F8F1E5]/75">
              Combining more than one service? Share the whole plan and the team
              will quote it as a single day.
            </p>
            <a
              href={whatsappFor(
                "Hello, I'd like to customise a desert safari with add-ons. Please help me plan the day.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D9B77A] to-[#C99A45] px-6 py-3 text-sm font-bold text-[#17110D] shadow-lg shadow-[#C99A45]/20 transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Plan my day
            </a>
          </motion.div>
        </div>
      </section>

      <section id="booking-steps" className="relative overflow-hidden py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[#211C18]/40" />
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <span className="mb-4 block text-xs uppercase tracking-[0.28em] text-[#D9B77A]">
              Simple From The First Message
            </span>
            <h2 className="font-display text-balance text-4xl font-bold md:text-5xl">
              How Booking Works
            </h2>
          </motion.div>

          <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <span className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-[#D9B77A]/40 to-transparent lg:block" aria-hidden="true" />
            {BOOKING_STEPS.map((step, index) => (
              <motion.li
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="relative rounded-3xl border border-[#D9B77A]/18 bg-gradient-to-br from-[#211C18] to-[#17110D] p-6"
              >
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D9B77A]/35 bg-[#17110D] font-display text-xl font-bold text-[#D9B77A]">
                  {step.step}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#F8F1E5]/70">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

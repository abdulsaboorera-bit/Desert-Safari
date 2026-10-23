"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  CloudSun,
  Eye,
  Glasses,
  Shirt,
  ShieldCheck,
  Wallet,
  X,
} from "lucide-react";

const INCLUDED = [
  "Free hotel pickup and drop-off on most safaris",
  "Dune bashing in a 4x4 with an experienced driver",
  "Camp entry with Arabic coffee, dates and welcome drinks",
  "Camel ride and sandboarding at the dunes",
  "Barbecue buffet dinner with vegetarian options",
  "Live fire, tanoura and belly dance entertainment",
  "Soft drinks, water, tea and coffee all evening",
  "Bottled water and a guide for the whole trip",
];

const NOT_INCLUDED = [
  "Quad bike and dune buggy sessions (add-ons)",
  "Alcohol, personal shopping and souvenirs",
  "Tips for guides, drivers and camp staff",
  "Travel insurance and personal expenses",
];

const BEFORE_YOU_GO = [
  {
    icon: Shirt,
    title: "What to wear",
    body: "Comfortable casual clothes and closed shoes. Carry a light jacket for the desert after sunset.",
  },
  {
    icon: Glasses,
    title: "What to bring",
    body: "Sunglasses, sunscreen, a power bank and a camera. Sand gets everywhere, so keep valuables in a bag.",
  },
  {
    icon: Eye,
    title: "Who should take care",
    body: "Dune bashing is not advised during pregnancy, for guests with back or heart conditions or for infants.",
  },
  {
    icon: Wallet,
    title: "How to pay",
    body: "Cash in AED on the day or an online transfer in advance, with written confirmation on WhatsApp.",
  },
];

const CONFIDENCE = [
  "Instant WhatsApp confirmation",
  "Free pickup across Dubai",
  "24/7 support during the tour",
  "Family friendly options",
];

export default function Inclusions() {
  return (
    <section id="included" className="relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[#211C18]/40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_15%_100%,rgba(217,183,122,0.10),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="mb-4 block text-xs uppercase tracking-[0.28em] text-[#D9B77A]">
            Plan With Confidence
          </span>
          <h2 className="font-display text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
            Everything Before You Go
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-[#F8F1E5]/80 sm:text-lg">
            Clear inclusions, honest exclusions and the small details that make
            a desert day comfortable.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-[#D9B77A]/25 bg-gradient-to-br from-[#241E18] to-[#17110D] p-6 sm:p-8"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#7FBF8F]/40 bg-[#7FBF8F]/12">
                <BadgeCheck className="h-5 w-5 text-[#A8DDB4]" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold">Included In Every Safari</h3>
                <p className="text-sm text-[#F8F1E5]/65">Across morning, evening and overnight tours</p>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#F8F1E5]/85">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#A8DDB4]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-7 border-t border-[#D9B77A]/15 pt-5">
              <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F8F1E5]/60">
                Not included
              </h4>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {NOT_INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#F8F1E5]/60">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-[#E4845B]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="rounded-3xl border border-[#D9B77A]/20 bg-[#17110D]/75 p-6 backdrop-blur-md sm:p-8"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D9B77A]/30 bg-[#D9B77A]/12">
                  <Shirt className="h-5 w-5 text-[#D9B77A]" aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl font-bold">Before You Go</h3>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {BEFORE_YOU_GO.map((item) => (
                  <li key={item.title} className="glass-soft rounded-2xl p-4">
                    <item.icon className="mb-3 h-5 w-5 text-[#D9B77A]" aria-hidden="true" />
                    <h4 className="text-sm font-semibold text-[#F8F1E5]">{item.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#F8F1E5]/70">{item.body}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.6, delay: 0.14 }}
              className="rounded-3xl border border-[#D9B77A]/20 bg-gradient-to-br from-[#211C18] to-[#17110D] p-6 sm:p-8"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D9B77A]/30 bg-[#D9B77A]/12">
                  <ShieldCheck className="h-5 w-5 text-[#D9B77A]" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold">Safety & Weather</h3>
                  <p className="text-sm text-[#F8F1E5]/65">Handled by the team before every departure</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[#F8F1E5]/80">
                Dune bashing routes are chosen by drivers who know the Lahbab
                dunes, seat belts and roll cages are checked before every drive,
                and camp activity is supervised by staff on site.
              </p>
              <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-[#F8F1E5]/80">
                <CloudSun className="mt-0.5 h-4 w-4 shrink-0 text-[#D9B77A]" aria-hidden="true" />
                If conditions in the desert are unsafe, your tour is rescheduled
                or refunded instead of going ahead.
              </p>

              <ul className="mt-6 flex flex-wrap gap-2.5">
                {CONFIDENCE.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[#D9B77A]/30 bg-[#D9B77A]/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#F8F1E5]/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

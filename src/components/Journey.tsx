"use client";

import { motion } from "framer-motion";
import {
  Binoculars,
  Car,
  Coffee,
  Flame,
  Footprints,
  Home,
  MapPin,
  MoonStar,
  Sunset,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

type Stop = {
  time: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

const TIMELINE: Stop[] = [
  {
    time: "02:30 - 03:00 PM",
    title: "Hotel Pickup",
    body: "A 4x4 Land Cruiser collects you from your hotel or residence. Your guide confirms the pickup point the day before.",
    icon: Car,
  },
  {
    time: "03:30 PM",
    title: "Into The Lahbab Desert",
    body: "About an hour from downtown, the tarmac ends and the red dunes of Lahbab open up in every direction.",
    icon: MapPin,
  },
  {
    time: "03:45 - 04:30 PM",
    title: "Dune Bashing",
    body: "30 to 35 minutes of driving over the ridges with an experienced driver, cresting the high dunes at golden hour.",
    icon: Footprints,
  },
  {
    time: "04:30 PM",
    title: "Sunset Stop & Camel Ride",
    body: "A pause on top of a dune for photos, a short camel trek and a sandboard run while the desert turns gold.",
    icon: Sunset,
  },
  {
    time: "05:30 PM",
    title: "Arrive At The Camp",
    body: "Welcome drinks, Arabic coffee and dates, then henna painting, falcon photos and the shisha corner at your pace.",
    icon: Coffee,
  },
  {
    time: "07:00 PM",
    title: "Live Shows Begin",
    body: "A fire performance, the spinning tanoura dance and belly dance take the stage one after another.",
    icon: Flame,
  },
  {
    time: "07:45 PM",
    title: "BBQ Dinner Under The Stars",
    body: "Grilled meats and vegetarian dishes served at the buffet, with soft drinks, tea and Arabic coffee all evening.",
    icon: UtensilsCrossed,
  },
  {
    time: "08:30 - 09:00 PM",
    title: "Back To Your Hotel",
    body: "The 4x4 returns you to your door in Dubai, with the option to stay longer on the overnight safari.",
    icon: Home,
  },
];

function StopCard({ stop, index }: { stop: Stop; index: number }) {
  const isLeft = index % 2 === 0;
  return (
    <motion.li
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08 }}
      className="relative grid gap-4 lg:grid-cols-2 lg:gap-10"
    >
      <span className="absolute left-[18px] top-0 h-full w-px bg-gradient-to-b from-[#D9B77A]/40 via-[#D9B77A]/20 to-transparent lg:left-1/2" />

      <span className="absolute left-[11px] top-1.5 z-10 flex h-4 w-4 items-center justify-center rounded-full border border-[#D9B77A] bg-[#17110D] lg:left-1/2 lg:-translate-x-1/2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#D9B77A]" />
      </span>

      <div
        className={`pl-12 lg:pl-0 ${
          isLeft ? "lg:pr-14 lg:text-right" : "lg:col-start-2 lg:pl-14"
        }`}
      >
        <div className="glass-soft rounded-2xl p-5 transition-colors duration-300 hover:border-[#D9B77A]/40 sm:p-6">
          <div
            className={`flex items-center gap-3 ${
              isLeft ? "lg:flex-row-reverse" : ""
            }`}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D9B77A]/30 bg-[#D9B77A]/12">
              <stop.icon className="h-5 w-5 text-[#D9B77A]" aria-hidden="true" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D9B77A]">
              {stop.time}
            </span>
          </div>
          <h3 className="mt-4 font-display text-xl font-bold sm:text-2xl">
            {stop.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#F8F1E5]/75">
            {stop.body}
          </p>
        </div>
      </div>
    </motion.li>
  );
}

export default function Journey() {
  return (
    <section id="journey" className="relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[#211C18]/35" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_0%,rgba(217,183,122,0.10),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 block text-xs uppercase tracking-[0.28em] text-[#D9B77A]">
            Hour By Hour
          </span>
          <h2 className="font-display text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
            A Day In The Desert
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-[#F8F1E5]/80 sm:text-lg">
            The evening safari, minute by minute. Morning, overnight and private
            tours follow the same rhythm with their own timings.
          </p>
        </motion.div>

        <ol className="relative space-y-8">
          {TIMELINE.map((stop, index) => (
            <StopCard key={stop.title} stop={stop} index={index} />
          ))}
        </ol>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-center gap-5 rounded-3xl border border-[#D9B77A]/20 bg-[#17110D]/70 p-6 text-center backdrop-blur-md sm:flex-row sm:justify-between sm:text-left"
        >
          <div className="flex items-start gap-3">
            <MoonStar className="mt-0.5 h-5 w-5 shrink-0 text-[#D9B77A]" aria-hidden="true" />
            <div>
              <p className="font-display text-lg font-bold">
                Want the night to continue?
              </p>
              <p className="mt-1 text-sm text-[#F8F1E5]/70">
                The overnight safari keeps the camp open with a bonfire, tents and
                sunrise breakfast.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-[#D9B77A]">
            <Binoculars className="h-4 w-4" aria-hidden="true" />
            Scroll on for packages and gallery
          </div>
        </motion.div>
      </div>
    </section>
  );
}

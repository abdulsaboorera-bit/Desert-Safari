"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Clock, MessageCircle, Phone, Sparkles } from "lucide-react";
import { BUSINESS, WHATSAPP_DEFAULT } from "@/lib/constants";
import { SERVICES } from "@/lib/services";

const CATEGORIES = [
  { label: "Desert Safaris", count: SERVICES.filter((s) => s.category === "Desert Safari").length },
  { label: "Adventure Rides", count: SERVICES.filter((s) => s.category === "Adventure Ride").length },
  { label: "City Tours", count: SERVICES.filter((s) => s.category === "City Tour").length },
];

export default function ServicesHero() {
  return (
    <section id="services" className="relative flex min-h-[74svh] w-full flex-col justify-end overflow-hidden pb-14 pt-32">
      <motion.div
        initial={{ scale: 1.06, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/images/dunes-red.jpg"
          alt="Red dunes of the Lahbab desert near Dubai"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#17110D]/85 via-[#17110D]/60 to-[#17110D]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17110D]/85 via-transparent to-[#17110D]/60" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D9B77A]/35 bg-[#17110D]/50 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[#F8F1E5]/90 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-[#D9B77A]" aria-hidden="true" />
            Our Services
          </span>

          <h1 className="font-display text-balance text-[2.5rem] font-bold leading-[1.05] sm:text-6xl lg:text-[4.5rem]">
            Every Way To Meet
            <span className="block bg-gradient-to-r from-[#F8F1E5] via-[#D9B77A] to-[#C99A45] bg-clip-text text-transparent">
              The Arabian Desert.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[#F8F1E5]/85 sm:text-lg">
            Ten signature services in one feed: morning, evening and overnight
            safaris, VIP camps, quad and buggy rides, camel treks and private
            city tours across the UAE. Swipe through each one, then book in a
            single WhatsApp message.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {CATEGORIES.map((category) => (
              <span
                key={category.label}
                className="inline-flex items-center gap-2 rounded-full border border-[#D9B77A]/30 bg-[#17110D]/45 px-4 py-2 text-sm font-medium text-[#F8F1E5]/90 backdrop-blur-sm"
              >
                {category.label}
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#D9B77A] px-1.5 text-[11px] font-bold text-[#17110D]">
                  {category.count}
                </span>
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href={WHATSAPP_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D9B77A] to-[#C99A45] px-7 py-4 text-base font-semibold text-[#17110D] shadow-2xl shadow-[#C99A45]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[#C99A45]/40"
            >
              <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
              Book on WhatsApp
            </a>
            <a
              href="#services-feed"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#F8F1E5]/30 px-7 py-4 text-base font-semibold text-[#F8F1E5] backdrop-blur-sm transition-all duration-300 hover:border-[#D9B77A] hover:bg-[#D9B77A]/10"
            >
              Watch the service feed
              <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-[#F8F1E5]/70">
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-[#D9B77A]" aria-hidden="true" />
              Tours run daily, all year
            </span>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-[#D9B77A]"
            >
              <Phone className="h-4 w-4 text-[#D9B77A]" aria-hidden="true" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

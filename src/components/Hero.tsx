"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, MessageCircle, Phone, Sparkles, Star } from "lucide-react";
import { BUSINESS, WHATSAPP_DEFAULT } from "@/lib/constants";

const HeroAtmosphere = dynamic(() => import("./HeroAtmosphere"), { ssr: false });

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const easing = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden py-24"
    >
      <motion.div
        style={reduced ? undefined : { y: bgY }}
        className="absolute inset-0 scale-110"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#17110D]/55 via-[#17110D]/55 to-[#17110D]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17110D]/80 via-[#17110D]/25 to-[#17110D]/75" />
      </motion.div>

      <HeroAtmosphere />

      <motion.div
        style={reduced ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex flex-col items-center justify-center px-5 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easing }}
          className="mb-7 flex items-center gap-2 rounded-full border border-[#D9B77A]/30 bg-[#17110D]/40 px-4 py-2 backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-[#D9B77A]" />
          <span className="text-[11px] uppercase tracking-[0.28em] text-[#F8F1E5]/90 sm:text-xs">
            Discover the Arabian Desert
          </span>
        </motion.div>

        <h1 className="font-display text-balance text-[2.6rem] font-bold leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.2rem]">
          <motion.span
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: easing }}
            className="block"
          >
            Beyond the Dunes.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: easing }}
            className="block bg-gradient-to-r from-[#F8F1E5] via-[#D9B77A] to-[#C99A45] bg-clip-text text-transparent"
          >
            Into the Extraordinary.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: easing }}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[#F8F1E5]/85 sm:text-lg md:text-xl"
        >
          Experience the magic of Dubai&rsquo;s desert through unforgettable
          adventures, golden sunsets and authentic Arabian hospitality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: easing }}
          className="mt-9 flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4"
        >
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D9B77A] to-[#C99A45] px-8 py-4 text-base font-semibold text-[#17110D] shadow-2xl shadow-[#C99A45]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[#C99A45]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9B77A] sm:text-lg"
          >
            <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
            Book Your Safari
          </a>
          <Link
            href="#experiences"
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#F8F1E5]/30 px-8 py-4 text-base font-semibold text-[#F8F1E5] backdrop-blur-sm transition-all duration-300 hover:border-[#D9B77A] hover:bg-[#D9B77A]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9B77A] sm:text-lg"
          >
            Explore Experiences
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.9, ease: easing }}
          href={`tel:${BUSINESS.phone}`}
          className="mt-4 inline-flex items-center gap-2 text-sm text-[#F8F1E5]/75 transition-colors hover:text-[#D9B77A]"
        >
          <Phone className="h-4 w-4 text-[#D9B77A]" aria-hidden="true" />
          Or call us directly on {BUSINESS.phoneDisplay}
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-8 flex items-center gap-3 text-[#F8F1E5]/70"
        >
          <Star className="h-4 w-4 fill-[#D9B77A] text-[#D9B77A]" />
          <span className="text-xs tracking-wide sm:text-sm">
            Excellent rating on Google &middot; Trusted since {BUSINESS.founded}
          </span>
        </motion.div>
      </motion.div>

      <motion.a
        href="#trust"
        aria-label="Scroll to discover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#F8F1E5]/60 transition-colors hover:text-[#D9B77A] sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={reduced ? undefined : { y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}

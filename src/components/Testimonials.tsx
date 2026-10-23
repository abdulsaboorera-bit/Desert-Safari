"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 block text-xs uppercase tracking-[0.28em] text-[#D9B77A]">
            Guest Experiences
          </span>
          <h2 className="font-display text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
            Loved By Travellers
          </h2>
          <div className="mt-5 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
            <span className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-[#D9B77A] text-[#D9B77A]" aria-hidden="true" />
              <span className="text-sm font-medium text-[#F8F1E5]">Excellent rating on Google</span>
            </span>
            <span className="hidden text-[#F8F1E5]/40 sm:inline" aria-hidden="true">
              &middot;
            </span>
            <p className="text-sm text-[#F8F1E5]/70">
              Guest reviews shown on our website via Trustindex
            </p>
          </div>
        </motion.div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, index) => (
            <motion.li
              key={`${t.name}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
              className="rounded-2xl border border-[#D9B77A]/15 bg-gradient-to-br from-[#211C18] to-[#17110D] p-6"
            >
              <Quote className="mb-4 h-6 w-6 text-[#D9B77A]/70" aria-hidden="true" />
              <blockquote className="text-sm leading-relaxed text-[#F8F1E5]/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#D9B77A] to-[#C99A45] text-sm font-bold text-[#17110D]">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-[#F8F1E5]">{t.name}</span>
                  <span className="block text-xs text-[#F8F1E5]/55">{t.source}</span>
                </span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}


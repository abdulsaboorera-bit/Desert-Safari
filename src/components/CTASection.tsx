"use client";

import { motion } from "framer-motion";
import { Clock, MessageCircle, Phone, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { BUSINESS, TIMINGS, WHATSAPP_DEFAULT } from "@/lib/constants";

export default function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 lg:py-28">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/dunes-red.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#17110D]/96 via-[#17110D]/85 to-[#17110D]/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#D9B77A]" />
              <span className="text-xs uppercase tracking-[0.28em] text-[#D9B77A]">
                Ready When You Are
              </span>
            </div>
            <h2 className="font-display text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Your Desert Adventure Starts Here.
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-[#F8F1E5]/85 sm:text-lg">
              Ready to experience Dubai beyond the city? Get in touch to explore
              your safari options and confirm your tour in a single message.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={WHATSAPP_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D9B77A] to-[#C99A45] px-8 py-4 text-base font-semibold text-[#17110D] shadow-2xl shadow-[#C99A45]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[#C99A45]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9B77A]"
              >
                <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
                Book on WhatsApp
              </a>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#F8F1E5]/30 px-8 py-4 text-base font-semibold text-[#F8F1E5] transition-all duration-300 hover:border-[#D9B77A] hover:bg-[#D9B77A]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9B77A]"
              >
                <Phone className="h-5 w-5 text-[#D9B77A]" />
                Call {BUSINESS.phoneDisplay}
              </a>
            </div>

            <ul className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
              <li className="flex items-center gap-2 text-sm text-[#F8F1E5]/75">
                <Zap className="h-4 w-4 shrink-0 text-[#D9B77A]" aria-hidden="true" />
                Quick reply on WhatsApp, day or night
              </li>
              <li className="flex items-center gap-2 text-sm text-[#F8F1E5]/75">
                <ShieldCheck className="h-4 w-4 shrink-0 text-[#D9B77A]" aria-hidden="true" />
                Free pickup &amp; drop-off on most tours
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="rounded-3xl border border-[#D9B77A]/20 bg-[#17110D]/70 p-6 backdrop-blur-md sm:p-8"
          >
            <div className="mb-5 flex items-center gap-2">
              <Clock className="h-5 w-5 text-[#D9B77A]" />
              <h3 className="font-display text-xl font-bold">Safari Timings</h3>
            </div>
            <ul className="space-y-4">
              {TIMINGS.map((t) => (
                <li key={t.label} className="border-b border-[#D9B77A]/15 pb-4 last:border-0 last:pb-0">
                  <span className="block text-sm font-semibold text-[#F8F1E5]">
                    {t.label}
                  </span>
                  <span className="mt-1 block text-sm text-[#F8F1E5]/70">
                    {t.detail}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-[#F8F1E5]/55">
              Your safari guide calls before pickup to confirm details. Free pickup
              and drop-off is included depending on the package.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

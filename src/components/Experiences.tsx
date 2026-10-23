"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import {
  SAFARI_EXPERIENCES,
  whatsappFor,
  type Experience,
} from "@/lib/constants";

function BookLink({ exp, label = "Book on WhatsApp" }: { exp: Experience; label?: string }) {
  return (
    <a
      href={whatsappFor(
        `Hello, I'm interested in the ${exp.title} experience. Please share the price, timings and what's included.`,
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Book the ${exp.title} experience on WhatsApp`}
      className="inline-flex items-center gap-2 rounded-full border border-[#D9B77A]/40 bg-[#17110D]/60 px-4 py-2 text-sm font-semibold text-[#D9B77A] backdrop-blur-sm transition-all duration-300 hover:border-[#D9B77A] hover:bg-[#D9B77A] hover:text-[#17110D]"
    >
      {label}
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

function PriceNote() {
  return (
    <span className="text-[11px] uppercase tracking-[0.16em] text-[#F8F1E5]/50">
      Contact for price
    </span>
  );
}

function FeatureCard({ exp }: { exp: Experience }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="group relative flex min-h-[440px] flex-col justify-end overflow-hidden rounded-3xl border border-[#D9B77A]/20 md:col-span-7 md:min-h-[620px]"
    >
      <Image
        src={exp.image}
        alt={`${exp.title} at the red dunes of Lahbab, Dubai`}
        fill
        sizes="(max-width: 768px) 100vw, 58vw"
        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#17110D] via-[#17110D]/55 to-[#17110D]/10" />
      <div className="relative p-6 sm:p-8">
        {exp.tagline && (
          <span className="mb-3 inline-block rounded-full border border-[#D9B77A]/40 bg-[#17110D]/50 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#D9B77A] backdrop-blur-sm">
            {exp.tagline}
          </span>
        )}
        <h3 className="font-display text-3xl font-bold sm:text-4xl">{exp.title}</h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#F8F1E5]/85 sm:text-base">
          {exp.description}
        </p>
        <ul className="mt-5 grid max-w-xl grid-cols-1 gap-2 sm:grid-cols-2">
          {exp.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-[#F8F1E5]/90">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#D9B77A]" />
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center justify-between gap-4">
          <BookLink exp={exp} />
          <PriceNote />
        </div>
      </div>
    </motion.article>
  );
}

function CompactCard({ exp, delay = 0 }: { exp: Experience; delay?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      className="group relative flex min-h-[230px] flex-1 flex-col justify-end overflow-hidden rounded-3xl border border-[#D9B77A]/20"
    >
      <Image
        src={exp.image}
        alt={`${exp.title} in the Dubai desert`}
        fill
        sizes="(max-width: 768px) 100vw, 40vw"
        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#17110D] via-[#17110D]/45 to-transparent" />
      <div className="relative p-6">
        {exp.tagline && (
          <span className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-[#D9B77A]">
            {exp.tagline}
          </span>
        )}
        <h3 className="font-display text-2xl font-bold">{exp.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-[#F8F1E5]/80">{exp.description}</p>
        <div className="mt-4">
          <BookLink exp={exp} label="Book on WhatsApp" />
        </div>
      </div>
    </motion.article>
  );
}

function GridCard({ exp, delay = 0 }: { exp: Experience; delay?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      className="group relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-3xl border border-[#D9B77A]/20 md:col-span-4"
    >
      <Image
        src={exp.image}
        alt={`${exp.title} experience in Dubai`}
        fill
        sizes="(max-width: 768px) 100vw, 30vw"
        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#17110D] via-[#17110D]/45 to-transparent" />
      <div className="relative p-6">
        <h3 className="font-display text-2xl font-bold">{exp.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-[#F8F1E5]/80">{exp.description}</p>
        <div className="mt-4">
          <BookLink exp={exp} label="Book on WhatsApp" />
        </div>
      </div>
    </motion.article>
  );
}

function WideCard({ exp }: { exp: Experience }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-3xl border border-[#D9B77A]/20 md:col-span-12"
    >
      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[260px] md:min-h-[320px]">
          <Image
            src={exp.image}
            alt={`${exp.title} premium camp experience`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17110D] to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#211C18]" />
        </div>
        <div className="flex flex-col justify-center bg-gradient-to-br from-[#211C18] to-[#17110D] p-7 sm:p-10">
          <span className="mb-3 text-[10px] uppercase tracking-[0.22em] text-[#D9B77A]">
            {exp.tagline}
          </span>
          <h3 className="font-display text-3xl font-bold">{exp.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#F8F1E5]/85 sm:text-base">
            {exp.description}
          </p>
          <div className="mt-6 flex items-center justify-between gap-4">
            <BookLink exp={exp} />
            <PriceNote />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Experiences() {
  const [evening, morning, overnight, vip, quad, buggy, camel, hummer, dubaiCity, abuDhabi] =
    SAFARI_EXPERIENCES;

  return (
    <section id="experiences" className="relative py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#17110D] via-[#211C18]/30 to-[#17110D]" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 block text-xs uppercase tracking-[0.28em] text-[#D9B77A]">
            Our Desert Safaris
          </span>
          <h2 className="font-display text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
            Desert Experiences
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-[#F8F1E5]/80 sm:text-lg">
            From a golden morning drive to a night under the stars, choose the
            Dubai desert safari that suits you, or add a private city tour. Every
            experience is arranged by our team and confirmed instantly over
            WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <FeatureCard exp={evening} />

          <div className="flex flex-col gap-6 md:col-span-5">
            <CompactCard exp={morning} delay={0.05} />
            <CompactCard exp={overnight} delay={0.1} />
          </div>

          <GridCard exp={quad} delay={0.05} />
          <GridCard exp={buggy} delay={0.1} />
          <GridCard exp={camel} delay={0.15} />

          <WideCard exp={vip} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="mt-6 flex flex-col gap-2 border-t border-[#D9B77A]/15 pt-10 md:col-span-12 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <span className="block text-xs uppercase tracking-[0.28em] text-[#D9B77A]">
                More To Explore
              </span>
              <h3 className="mt-2 font-display text-3xl font-bold md:text-4xl">
                Tours &amp; Safaris
              </h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#F8F1E5]/70 sm:text-right">
              Add a luxury Hummer safari or a private city tour across the UAE,
              booked the same easy way.
            </p>
          </motion.div>

          <GridCard exp={hummer} delay={0.05} />
          <GridCard exp={dubaiCity} delay={0.1} />
          <GridCard exp={abuDhabi} delay={0.15} />
        </div>
      </div>
    </section>
  );
}



"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  BadgeCheck,
  Check,
  ChevronDown,
  Clock,
  Gauge,
  MapPin,
  MessageCircle,
  Share2,
  Timer,
  Users,
  X,
} from "lucide-react";
import { SERVICES, type ServiceCategory } from "@/lib/services";
import { whatsappFor } from "@/lib/constants";
import { cn } from "@/utils/cn";

const FILTERS: Array<{ label: string; value: ServiceCategory | "All" }> = [
  { label: "All services", value: "All" },
  { label: "Desert safaris", value: "Desert Safari" },
  { label: "Adventure rides", value: "Adventure Ride" },
  { label: "City tours", value: "City Tour" },
];

function ServiceCard({ service, index }: { service: (typeof SERVICES)[number]; index: number }) {
  const [shared, setShared] = useState(false);

  const share = async () => {
    const url = `${window.location.origin}/services#${service.id}`;
    try {
      if (typeof navigator.share === "function") {
        await navigator.share({ title: service.title, text: service.description, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setShared(true);
      window.setTimeout(() => setShared(false), 1800);
    } catch {
      setShared(false);
    }
  };

  return (
    <motion.article
      id={service.id}
      layout
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.08 }}
      className="group flex scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-[#D9B77A]/18 bg-gradient-to-b from-[#211C18] to-[#17110D] transition-colors hover:border-[#D9B77A]/45"
    >
      <div className="relative h-44 overflow-hidden sm:h-52">
        <Image
          src={service.image}
          alt={`${service.title} offered by Dubai Desert Safari`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17110D] via-[#17110D]/35 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-[#D9B77A] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#17110D]">
            {service.kicker}
          </span>
          {service.badge && (
            <span className="rounded-full border border-white/25 bg-[#17110D]/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#F8F1E5] backdrop-blur-sm">
              {service.badge}
            </span>
          )}
        </div>
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#D9B77A]">
              {service.category}
            </span>
            <h3 className="font-display text-2xl font-bold sm:text-3xl">{service.title}</h3>
          </div>
          <span className="glass-chip hidden shrink-0 rounded-full px-3 py-1.5 text-[11px] font-semibold text-[#F8F1E5] sm:block">
            {service.intensity}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            { icon: Timer, label: "Duration", value: service.duration },
            { icon: Clock, label: "Timing", value: service.timings },
            { icon: Users, label: "Group", value: service.group },
            { icon: Gauge, label: "Level", value: service.intensity },
          ].map(({ icon: Icon, label, value }) => (
            <li key={label} className="glass-soft rounded-xl px-3 py-2.5">
              <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.14em] text-[#D9B77A]/85">
                <Icon className="h-3 w-3" aria-hidden="true" />
                {label}
              </span>
              <span className="mt-1 block text-[13px] font-semibold text-[#F8F1E5]">
                {value}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-sm leading-relaxed text-[#F8F1E5]/80">{service.story}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D9B77A]/25 bg-[#D9B77A]/10 px-3 py-1.5 text-[11px] font-medium text-[#F8F1E5]/90">
            <MapPin className="h-3.5 w-3.5 text-[#D9B77A]" aria-hidden="true" />
            {service.pickup}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D9B77A]/25 bg-[#D9B77A]/10 px-3 py-1.5 text-[11px] font-medium text-[#F8F1E5]/90">
            <BadgeCheck className="h-3.5 w-3.5 text-[#D9B77A]" aria-hidden="true" />
            Best for {service.bestFor}
          </span>
        </div>

        <h4 className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F8F1E5]/55">
          Highlights
        </h4>
        <ul className="mt-2.5 grid gap-2 sm:grid-cols-2">
          {service.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2 text-[13px] leading-snug text-[#F8F1E5]/85">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D9B77A]" aria-hidden="true" />
              {highlight}
            </li>
          ))}
        </ul>

        <details className="group/details mt-5 overflow-hidden rounded-2xl border border-[#D9B77A]/18 bg-[#17110D]/60">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3.5 text-sm font-semibold text-[#F8F1E5] transition-colors hover:text-[#D9B77A] [&::-webkit-details-marker]:hidden">
            What is included
            <ChevronDown className="h-4 w-4 shrink-0 text-[#D9B77A] transition-transform group-open/details:rotate-180" aria-hidden="true" />
          </summary>
          <div className="space-y-4 border-t border-[#D9B77A]/15 px-4 py-4">
            <ul className="grid gap-2">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[13px] leading-snug text-[#F8F1E5]/85">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#A8DDB4]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div>
              <h5 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F8F1E5]/50">
                Not included
              </h5>
              <ul className="grid gap-2">
                {service.notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] leading-snug text-[#F8F1E5]/60">
                    <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#E4845B]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </details>

        <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-[#D9B77A]/15 pt-5">
          <a
            href={whatsappFor(
              `Hello, I'd like to book the ${service.title}. Please share the price, timing and what's included.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="shine inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D9B77A] to-[#C99A45] px-5 py-3 text-sm font-bold text-[#17110D] shadow-lg shadow-[#C99A45]/20 transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Book on WhatsApp
          </a>
          <button
            type="button"
            onClick={share}
            aria-label={`Share ${service.title}`}
            className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-[#D9B77A]/30 text-[#F8F1E5] transition-colors hover:border-[#D9B77A] hover:text-[#D9B77A]"
          >
            <Share2 className="h-4 w-4" aria-hidden="true" />
          </button>
          <AnimatePresence>
            {shared && (
              <motion.span
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="w-full text-[11px] uppercase tracking-[0.16em] text-[#D9B77A]"
              >
                Link copied to clipboard
              </motion.span>
            )}
          </AnimatePresence>
          <span className="w-full text-[11px] uppercase tracking-[0.16em] text-[#F8F1E5]/50 sm:w-auto">
            {service.priceNote}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function ServiceGrid() {
  const [filter, setFilter] = useState<ServiceCategory | "All">("All");
  const visible = SERVICES.filter(
    (service) => filter === "All" || service.category === filter,
  );

  return (
    <section id="all-services" className="relative scroll-mt-24 overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#17110D] via-[#211C18]/40 to-[#17110D]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <span className="mb-4 block text-xs uppercase tracking-[0.28em] text-[#D9B77A]">
              The Full List
            </span>
            <h2 className="font-display text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
              Every Service In Detail
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-[#F8F1E5]/80">
              Timings, group sizes, inclusions and exclusions for all ten
              services, so you can compare without opening ten tabs.
            </p>
          </div>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter services">
            {FILTERS.map((item) => (
              <button
                key={item.value}
                type="button"
                role="tab"
                aria-selected={filter === item.value}
                onClick={() => setFilter(item.value)}
                className={cn(
                  "rounded-full border px-4 py-2.5 text-sm font-medium transition-all",
                  filter === item.value
                    ? "border-transparent bg-gradient-to-r from-[#D9B77A] to-[#C99A45] text-[#17110D] shadow-lg shadow-[#C99A45]/20"
                    : "border-[#D9B77A]/25 text-[#F8F1E5]/80 hover:border-[#D9B77A]/60 hover:text-[#D9B77A]",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid gap-6 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

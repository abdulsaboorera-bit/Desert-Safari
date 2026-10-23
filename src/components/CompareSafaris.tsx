"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Gauge, Timer, Users } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { cn } from "@/utils/cn";

const INTENSITY_STYLES: Record<string, string> = {
  Relaxed: "border-[#7FBF8F]/35 bg-[#7FBF8F]/12 text-[#A8DDB4]",
  Moderate: "border-[#D9B77A]/45 bg-[#D9B77A]/12 text-[#E7CB99]",
  High: "border-[#E4845B]/40 bg-[#E4845B]/12 text-[#F0A987]",
};

type CompareProps = {
  cta?: { href: string; label: string };
};

export default function CompareSafaris({
  cta = { href: "/services", label: "Open the full services feed" },
}: CompareProps) {
  return (
    <section id="compare" className="relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#17110D] via-[#211C18]/45 to-[#17110D]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="mb-4 block text-xs uppercase tracking-[0.28em] text-[#D9B77A]">
            Side By Side
          </span>
          <h2 className="font-display text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
            Which Safari Suits You?
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-[#F8F1E5]/80 sm:text-lg">
            Every service compared in one view: time, pickup, group size and the
            moment it is built for.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="hidden overflow-hidden rounded-3xl border border-[#D9B77A]/20 bg-[#17110D]/75 backdrop-blur-md md:block"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#D9B77A]/25 bg-[#211C18]/70">
                  {["Experience", "Duration", "Pickup", "Group", "Best For", "Intensity", "Signature Moment"].map(
                    (head) => (
                      <th
                        key={head}
                        scope="col"
                        className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D9B77A]"
                      >
                        {head}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {SERVICES.map((service, index) => (
                  <tr
                    key={service.id}
                    className={`border-b border-[#D9B77A]/10 transition-colors last:border-0 hover:bg-[#D9B77A]/[0.07] ${
                      index % 2 === 1 ? "bg-[#211C18]/40" : ""
                    }`}
                  >
                    <th scope="row" className="px-5 py-4 align-top">
                      <a
                        href={`/services#${service.id}`}
                        className="font-display text-base font-bold text-[#F8F1E5] transition-colors hover:text-[#D9B77A]"
                      >
                        {service.title}
                      </a>
                      <span className="mt-0.5 block text-[11px] font-normal uppercase tracking-[0.14em] text-[#F8F1E5]/50">
                        {service.category}
                      </span>
                    </th>
                    <td className="px-5 py-4 align-top text-sm text-[#F8F1E5]/80">
                      {service.duration}
                    </td>
                    <td className="px-5 py-4 align-top text-sm text-[#F8F1E5]/80">
                      {service.pickup}
                    </td>
                    <td className="px-5 py-4 align-top text-sm text-[#F8F1E5]/80">
                      {service.group}
                    </td>
                    <td className="px-5 py-4 align-top text-sm text-[#F8F1E5]/80">
                      {service.bestFor}
                    </td>
                    <td className="px-5 py-4 align-top">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold",
                          INTENSITY_STYLES[service.intensity],
                        )}
                      >
                        <Gauge className="h-3 w-3" aria-hidden="true" />
                        {service.intensity}
                      </span>
                    </td>
                    <td className="px-5 py-4 align-top text-sm text-[#F8F1E5]/75">
                      {service.highlights[0]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <ul className="space-y-4 md:hidden">
          {SERVICES.map((service, index) => (
            <motion.li
              key={service.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.06 }}
              className="rounded-3xl border border-[#D9B77A]/18 bg-gradient-to-br from-[#211C18] to-[#17110D] p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <a href={`/services#${service.id}`} className="font-display text-xl font-bold">
                  {service.title}
                </a>
                <span
                  className={cn(
                    "shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-semibold",
                    INTENSITY_STYLES[service.intensity],
                  )}
                >
                  {service.intensity}
                </span>
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-[#D9B77A]/80">
                    <Timer className="h-3.5 w-3.5" aria-hidden="true" />
                    Duration
                  </dt>
                  <dd className="mt-1 text-[#F8F1E5]/85">{service.duration}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-[#D9B77A]/80">
                    <Users className="h-3.5 w-3.5" aria-hidden="true" />
                    Group
                  </dt>
                  <dd className="mt-1 text-[#F8F1E5]/85">{service.group}</dd>
                </div>
              </dl>
              <p className="mt-3 flex items-start gap-2 text-sm text-[#F8F1E5]/75">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#D9B77A]" aria-hidden="true" />
                {service.highlights[0]}
              </p>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <p className="text-sm text-[#F8F1E5]/65">
            Timings, inclusions and add-ons are listed for every service.
          </p>
          <Link
            href={cta.href}
            className="group inline-flex items-center gap-2 rounded-full border border-[#D9B77A]/40 px-5 py-2.5 text-sm font-semibold text-[#D9B77A] transition-all hover:border-[#D9B77A] hover:bg-[#D9B77A]/10"
          >
            {cta.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ACTIVITY_HIGHLIGHTS } from "@/lib/constants";

export default function Highlights() {
  return (
    <section id="highlights" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <span className="mb-4 block text-xs uppercase tracking-[0.28em] text-[#D9B77A]">
              What You Will Experience
            </span>
            <h2 className="font-display text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
              Moments That Stay With You
            </h2>
          </div>
          <p className="max-w-md text-pretty text-base leading-relaxed text-[#F8F1E5]/75">
            From the rush of the dunes to the calm of the camp, each activity is
            led by an experienced team and included across our safari packages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:auto-rows-[220px] md:grid-cols-12">
          {ACTIVITY_HIGHLIGHTS.map((item, index) => (
            <motion.figure
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
              className={`group relative min-h-[260px] overflow-hidden rounded-3xl border border-[#D9B77A]/15 ${item.span}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17110D] via-[#17110D]/30 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="font-display text-xl font-bold sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-1.5 max-w-md text-sm leading-relaxed text-[#F8F1E5]/85">
                  {item.description}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

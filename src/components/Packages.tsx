"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, MessageCircle, Sparkles, Users } from "lucide-react";
import { whatsappFor } from "@/lib/constants";

type Pkg = {
  id: string;
  name: string;
  tag: string;
  image: string;
  duration: string;
  group: string;
  bestFor: string;
  summary: string;
  includes: string[];
  featured?: boolean;
};

const PACKAGES: Pkg[] = [
  {
    id: "evening",
    name: "Classic Evening",
    tag: "Most Booked",
    image: "/images/evening.jpg",
    duration: "6 - 7 hours",
    group: "Shared or private",
    bestFor: "First timers in Dubai",
    summary:
      "The full Dubai evening in one trip: red-dune drive, sunset stop, camp shows and a barbecue buffet under the stars.",
    includes: [
      "Free hotel pickup and drop-off",
      "30-35 minute dune bashing",
      "Sunset photo stop and camel ride",
      "Fire, tanoura and belly dance shows",
      "BBQ buffet dinner with Arabic coffee",
      "Sandboarding and camp activities",
    ],
  },
  {
    id: "vip",
    name: "VIP Evening",
    tag: "Premium Pick",
    image: "/images/vip.jpg",
    duration: "6 - 7 hours",
    group: "Up to 4 per table",
    bestFor: "Couples and families",
    summary:
      "Everything in the classic evening, plus reserved raised seating, table service and a dedicated host for your group.",
    includes: [
      "VIP vehicle and reserved camp seating",
      "Unlimited barbecue served to the table",
      "All four live entertainment shows",
      "Henna, shisha lounge and falcon photos",
      "Dedicated host all evening",
      "Free hotel pickup and drop-off",
    ],
    featured: true,
  },
  {
    id: "overnight",
    name: "Overnight Camp",
    tag: "18 Hours",
    image: "/images/camp.jpg",
    duration: "18 hours",
    group: "Small groups",
    bestFor: "Star seekers",
    summary:
      "Stay after the shows for a bonfire, a tent under the stars and a hot breakfast at sunrise on the dunes.",
    includes: [
      "Tent, sleeping bags and blankets",
      "Evening dune bashing and live shows",
      "Barbecue dinner at the camp",
      "Bonfire, tea and night-time snacks",
      "Sunrise photo stop on the dunes",
      "Breakfast before the drive back",
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="relative py-20 lg:py-28">
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
              Curated Packages
            </span>
            <h2 className="font-display text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
              Three Ways To Do It Right
            </h2>
          </div>
          <div className="max-w-md space-y-4">
            <p className="text-pretty text-base leading-relaxed text-[#F8F1E5]/75">
              Not sure where to start? These are the three itineraries our team
              recommends most often, each confirmed in a single WhatsApp message.
            </p>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-[#D9B77A]/40 px-5 py-2.5 text-sm font-semibold text-[#D9B77A] transition-all hover:border-[#D9B77A] hover:bg-[#D9B77A]/10"
            >
              Browse all 10 services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
          {PACKAGES.map((pkg, index) => (
            <motion.article
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-[28px] border transition-colors duration-300 ${
                pkg.featured
                  ? "border-[#D9B77A]/55 bg-gradient-to-b from-[#2A2119] to-[#17110D] shadow-[0_30px_80px_rgba(201,154,69,0.16)] lg:-translate-y-4"
                  : "border-[#D9B77A]/18 bg-gradient-to-b from-[#211C18] to-[#17110D]"
              }`}
            >
              {pkg.featured && (
                <span className="absolute right-5 top-5 z-20 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#D9B77A] to-[#C99A45] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#17110D] shadow-lg">
                  <Sparkles className="h-3 w-3" aria-hidden="true" />
                  {pkg.tag}
                </span>
              )}

              <div className="relative h-52 overflow-hidden sm:h-60">
                <Image
                  src={pkg.image}
                  alt={`${pkg.name} desert safari package in Dubai`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17110D] via-[#17110D]/35 to-transparent" />
                {!pkg.featured && (
                  <span className="absolute left-5 top-5 rounded-full border border-[#D9B77A]/40 bg-[#17110D]/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D9B77A] backdrop-blur-sm">
                    {pkg.tag}
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className="font-display text-3xl font-bold">{pkg.name}</h3>
                  <p className="mt-1 text-sm text-[#F8F1E5]/80">{pkg.bestFor}</p>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D9B77A]/25 bg-[#D9B77A]/10 px-3 py-1.5 text-[11px] font-medium text-[#F8F1E5]/90">
                    <Clock className="h-3.5 w-3.5 text-[#D9B77A]" aria-hidden="true" />
                    {pkg.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D9B77A]/25 bg-[#D9B77A]/10 px-3 py-1.5 text-[11px] font-medium text-[#F8F1E5]/90">
                    <Users className="h-3.5 w-3.5 text-[#D9B77A]" aria-hidden="true" />
                    {pkg.group}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#F8F1E5]/80">
                  {pkg.summary}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#F8F1E5]/88">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#D9B77A]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col gap-3 border-t border-[#D9B77A]/15 pt-5">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#F8F1E5]/50">
                    Contact for the current package price
                  </span>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={whatsappFor(
                        `Hello, I'm interested in the ${pkg.name} package. Please share the price, timing and what's included.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
                        pkg.featured
                          ? "bg-gradient-to-r from-[#D9B77A] to-[#C99A45] text-[#17110D] shadow-lg shadow-[#C99A45]/25 hover:-translate-y-0.5"
                          : "border border-[#D9B77A]/40 text-[#D9B77A] hover:border-[#D9B77A] hover:bg-[#D9B77A]/10"
                      }`}
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      Book on WhatsApp
                    </a>
                    <Link
                      href={`/services#${pkg.id}`}
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-3 text-sm font-medium text-[#F8F1E5]/75 transition-colors hover:text-[#D9B77A]"
                    >
                      Details
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

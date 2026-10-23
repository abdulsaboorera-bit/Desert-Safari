"use client";

import { motion } from "framer-motion";
import { Car, ShieldCheck, Sparkles, HeartHandshake } from "lucide-react";

const items = [
  { icon: Car, label: "4x4 Land Cruiser Pickup" },
  { icon: ShieldCheck, label: "Experienced Safari Drivers" },
  { icon: Sparkles, label: "Lahbab Red Dunes" },
  { icon: HeartHandshake, label: "Authentic Arabian Hospitality" },
];

export default function TrustStrip() {
  return (
    <section
      id="trust"
      className="relative border-y border-[#D9B77A]/20 bg-[#211C18]/40 py-12 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-center gap-4 lg:justify-start"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D9B77A]/30 bg-gradient-to-br from-[#D9B77A]/20 to-[#C99A45]/10">
                <item.icon className="h-6 w-6 text-[#D9B77A]" />
              </span>
              <span className="text-sm font-medium text-[#F8F1E5] sm:text-base">
                {item.label}
              </span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

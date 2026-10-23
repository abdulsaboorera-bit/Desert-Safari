"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS, type Faq } from "@/lib/constants";

type FAQProps = {
  items?: Faq[];
  id?: string;
  kicker?: string;
  title?: string;
  intro?: string;
};

export default function FAQ({
  items = FAQS,
  id = "faq",
  kicker = "Good To Know",
  title = "Frequently Asked Questions",
  intro = "Everything you need before you book your Dubai desert safari.",
}: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id={id} className="relative py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[#211C18]/40" />
      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="mb-4 block text-xs uppercase tracking-[0.28em] text-[#D9B77A]">
            {kicker}
          </span>
          <h2 className="font-display text-balance text-4xl font-bold md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-pretty text-base text-[#F8F1E5]/75">{intro}</p>
        </motion.div>

        <dl className="space-y-3">
          {items.map((faq, index) => {
            const isOpen = open === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-[#D9B77A]/15 bg-gradient-to-br from-[#211C18] to-[#17110D]"
              >
                <dt>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="font-display text-base font-semibold text-[#F8F1E5] sm:text-lg">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D9B77A]/30 text-[#D9B77A]"
                    >
                      <Plus className="h-4 w-4" aria-hidden="true" />
                    </motion.span>
                  </button>
                </dt>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.dd
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-6 text-sm leading-relaxed text-[#F8F1E5]/80 sm:px-6 sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}

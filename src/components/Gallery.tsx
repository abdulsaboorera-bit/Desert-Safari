"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

const GALLERY = [
  { src: "/images/hero.jpg", caption: "A full day in the Lahbab desert", span: "md:col-span-6 md:row-span-2" },
  { src: "/images/sunset.jpg", caption: "Riding the dunes with the crew", span: "md:col-span-3" },
  { src: "/images/camel.jpg", caption: "Sand flying off the ridges", span: "md:col-span-3" },
  { src: "/images/quad.jpg", caption: "Two wheels through open desert", span: "md:col-span-4" },
  { src: "/images/camp.jpg", caption: "Buggies and 4x4s at golden hour", span: "md:col-span-4" },
  { src: "/images/vip.jpg", caption: "Evening entertainment at the camp", span: "md:col-span-4" },
  { src: "/images/dune.jpg", caption: "Sunset light on the red dunes", span: "md:col-span-5" },
  { src: "/images/buggy.jpg", caption: "Self-drive buggies on the flats", span: "md:col-span-3" },
  { src: "/images/hummer.jpg", caption: "Hummer pickup at the desert edge", span: "md:col-span-4" },
];

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % GALLERY.length)),
    [],
  );
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length)),
    [],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openIndex, close, next, prev]);

  const active = openIndex === null ? null : GALLERY[openIndex];

  return (
    <section id="gallery" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <span className="mb-4 block text-xs uppercase tracking-[0.28em] text-[#D9B77A]">
              From The Desert
            </span>
            <h2 className="font-display text-balance text-4xl font-bold md:text-5xl lg:text-6xl">
              Scenes From Our Tours
            </h2>
          </div>
          <p className="max-w-md text-pretty text-base leading-relaxed text-[#F8F1E5]/75">
            Real moments from the dunes, the camp and the rides. Tap any frame to
            open it full screen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[190px] md:grid-cols-12">
          {GALLERY.map((item, index) => (
            <motion.button
              key={item.src}
              type="button"
              onClick={() => setOpenIndex(index)}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (index % 3) * 0.07 }}
              aria-label={`Open photo: ${item.caption}`}
              className={`group relative min-h-[220px] overflow-hidden rounded-3xl border border-[#D9B77A]/15 text-left transition-colors hover:border-[#D9B77A]/45 ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-[#17110D] via-[#17110D]/25 to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-[#F8F1E5] opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                <Expand className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="absolute inset-x-0 bottom-0 p-5 text-sm font-medium text-[#F8F1E5]">
                {item.caption}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            key="lightbox"
            data-lenis-prevent
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label={active.caption}
            onClick={close}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-[#0C0906]/95 p-4 backdrop-blur-lg"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close gallery"
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-[#F8F1E5] backdrop-blur-md transition-colors hover:border-[#D9B77A] hover:text-[#D9B77A]"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                prev();
              }}
              aria-label="Previous photo"
              className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-[#F8F1E5] backdrop-blur-md transition-colors hover:border-[#D9B77A] hover:text-[#D9B77A] sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                next();
              }}
              aria-label="Next photo"
              className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-[#F8F1E5] backdrop-blur-md transition-colors hover:border-[#D9B77A] hover:text-[#D9B77A] sm:right-6"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>

            <motion.figure
              key={active.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="relative flex max-h-full w-full max-w-5xl flex-col items-center"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-[#D9B77A]/25">
                <Image
                  src={active.src}
                  alt={active.caption}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-contain"
                  priority
                />
              </div>
              <figcaption className="mt-4 flex w-full items-center justify-between gap-4 px-1">
                <span className="text-sm text-[#F8F1E5]/85">{active.caption}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-[#D9B77A]">
                  {String((openIndex ?? 0) + 1).padStart(2, "0")} / {String(GALLERY.length).padStart(2, "0")}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

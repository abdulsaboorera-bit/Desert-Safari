"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import type GSAPTimeline from "gsap/gsap-core";
import { registerGsap } from "@/lib/gsap";

const CHAPTERS = [
  {
    kicker: "The Departure",
    title: "Leave the city behind.",
    body: "Within about an hour of downtown Dubai, the skyline gives way to open desert. Your 4x4 collects you from your hotel and the noise fades into red sand.",
    image: "/images/dunes-red.jpg",
  },
  {
    kicker: "The Adventure",
    title: "Follow the golden horizon.",
    body: "Feel the dunes rise beneath you on a Lahbab dune-bashing drive, then slow down with a camel ride and a sunset photo stop as the desert glows.",
    image: "/images/camp.jpg",
  },
  {
    kicker: "The Evening",
    title: "Discover a different side of Dubai.",
    body: "Arabic coffee, henna and live fire, tanoura and belly dance shows at a Bedouin-style camp, followed by a barbecue buffet under the Arabian night sky.",
    image: "/images/sunset.jpg",
  },
];

export default function Storytelling() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !sectionRef.current) return;
    const section = sectionRef.current;
    const ctx = { killed: false };
    let timeline: GSAPTimeline | null = null;

    (async () => {
      registerGsap();
      const { gsap } = await import("@/lib/gsap");
      if (ctx.killed) return;

      const images = gsap.utils.toArray<HTMLElement>(".story-image");
      const copies = gsap.utils.toArray<HTMLElement>(".story-copy");
      if (images.length < 3 || copies.length < 3) return;

      gsap.set(images.slice(1), { autoAlpha: 0 });
      gsap.set(copies.slice(1), { autoAlpha: 0, y: 40 });

      timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .to({}, { duration: 1 })
        .to(images[0], { autoAlpha: 0, duration: 0.5 }, ">")
        .to(images[1], { autoAlpha: 1, duration: 0.5 }, "<")
        .to(copies[0], { autoAlpha: 0, y: -30, duration: 0.5 }, "<")
        .to(copies[1], { autoAlpha: 1, y: 0, duration: 0.5 }, "<")
        .to({}, { duration: 1 })
        .to(images[1], { autoAlpha: 0, duration: 0.5 }, ">")
        .to(images[2], { autoAlpha: 1, duration: 0.5 }, "<")
        .to(copies[1], { autoAlpha: 0, y: -30, duration: 0.5 }, "<")
        .to(copies[2], { autoAlpha: 1, y: 0, duration: 0.5 }, "<")
        .to({}, { duration: 1 });
    })();

    return () => {
      ctx.killed = true;
      if (timeline) {
        timeline.scrollTrigger?.kill();
        timeline.kill();
      }
    };
  }, [reduced]);

  if (reduced) {
    return (
      <section id="story" className="relative">
        {CHAPTERS.map((chapter) => (
          <div key={chapter.title} className="relative h-[80svh] min-h-[520px] overflow-hidden">
            <Image src={chapter.image} alt={chapter.title} fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17110D] via-[#17110D]/60 to-[#17110D]/30" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
              <ChapterCopy chapter={chapter} />
            </div>
          </div>
        ))}
      </section>
    );
  }

  return (
    <section id="story" ref={sectionRef} className="relative h-[320vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {CHAPTERS.map((chapter, index) => (
          <div
            key={chapter.image}
            className={`story-image absolute inset-0 ${index === 0 ? "" : "opacity-0"}`}
          >
            <Image src={chapter.image} alt={chapter.title} fill sizes="100vw" priority={index === 0} className="object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#17110D] via-[#17110D]/65 to-[#17110D]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17110D]/70 via-transparent to-[#17110D]/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center">
          {CHAPTERS.map((chapter, index) => (
            <div
              key={chapter.title}
              className={`story-copy absolute w-full max-w-3xl px-5 ${
                index === 0 ? "" : "translate-y-10 opacity-0"
              }`}
            >
              <ChapterCopy chapter={chapter} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChapterCopy({ chapter }: { chapter: (typeof CHAPTERS)[number] }) {
  return (
    <div className="mx-auto max-w-3xl">
      <span className="mb-4 block text-xs uppercase tracking-[0.32em] text-[#D9B77A]">{chapter.kicker}</span>
      <h2 className="font-display text-balance text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">{chapter.title}</h2>
      <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-[#F8F1E5]/85 sm:text-lg">{chapter.body}</p>
    </div>
  );
}

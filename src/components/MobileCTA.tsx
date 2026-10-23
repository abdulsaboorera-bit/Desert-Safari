"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { BUSINESS, WHATSAPP_DEFAULT } from "@/lib/constants";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const feed = document.getElementById("services-feed");
    let feedVisible = false;

    const update = () => setVisible(window.scrollY > 500 && !feedVisible);
    const onScroll = () => update();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    let observer: IntersectionObserver | undefined;
    if (feed) {
      observer = new IntersectionObserver(
        ([entry]) => {
          feedVisible = entry.isIntersecting;
          update();
        },
        { threshold: 0.35 },
      );
      observer.observe(feed);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-[#D9B77A]/25 bg-[#17110D]/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-10px_30px_rgba(0,0,0,0.45)] backdrop-blur-md transition-transform duration-300 motion-reduce:transition-none lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-md items-center gap-3">
        <a
          href={`tel:${BUSINESS.phone}`}
          tabIndex={visible ? 0 : -1}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#D9B77A]/30 py-3 text-sm font-semibold text-[#F8F1E5] transition-colors active:bg-[#D9B77A]/10"
        >
          <Phone className="h-4 w-4 text-[#D9B77A]" aria-hidden="true" />
          Call
        </a>
        <a
          href={WHATSAPP_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
          className="flex flex-[1.5] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D9B77A] to-[#C99A45] py-3 text-sm font-semibold text-[#17110D] shadow-lg shadow-[#C99A45]/25 transition-transform active:scale-[0.99]"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Book on WhatsApp
        </a>
      </div>
    </div>
  );
}

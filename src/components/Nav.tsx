"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { NAV_LINKS, BUSINESS, WHATSAPP_DEFAULT } from "@/lib/constants";
import { cn } from "@/utils/cn";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const isActiveLink = (href: string) =>
    href.startsWith("/#") ? pathname === "/" && href === "/#home" : pathname === href;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || isOpen
          ? "border-b border-[#D9B77A]/20 bg-[#17110D]/95 shadow-lg backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 md:h-20 lg:px-8"
      >
        <Link href="/#home" onClick={() => setIsOpen(false)} className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D9B77A]/40 bg-gradient-to-br from-[#D9B77A]/25 to-transparent">
            <span className="font-display text-sm font-bold text-[#D9B77A]">D</span>
          </span>
          <span className="font-display text-lg font-bold tracking-wide text-[#F8F1E5] transition-colors group-hover:text-[#D9B77A] md:text-xl">
            Dubai Desert Safari
          </span>
        </Link>

        <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActiveLink(link.href) ? "page" : undefined}
                className={cn(
                  "text-[13px] font-medium uppercase tracking-wider transition-colors",
                  isActiveLink(link.href)
                    ? "text-[#D9B77A]"
                    : "text-[#F8F1E5]/85 hover:text-[#D9B77A]",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${BUSINESS.phone}`}
            aria-label={`Call ${BUSINESS.phoneDisplay}`}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D9B77A]/30 text-[#F8F1E5] transition-all hover:border-[#D9B77A] hover:bg-[#D9B77A]/10 xl:hidden"
          >
            <Phone className="h-4 w-4" />
          </a>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="hidden items-center gap-2 rounded-lg border border-[#D9B77A]/30 px-4 py-2.5 text-sm font-medium text-[#F8F1E5] transition-all hover:border-[#D9B77A] hover:bg-[#D9B77A]/10 xl:flex"
          >
            <Phone className="h-4 w-4" />
            {BUSINESS.phoneDisplay}
          </a>
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book your desert safari on WhatsApp"
            className="group flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#D9B77A] to-[#C99A45] px-5 py-2.5 text-sm font-semibold text-[#17110D] shadow-lg shadow-[#C99A45]/20 transition-all hover:-translate-y-0.5 hover:shadow-[#C99A45]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9B77A]"
          >
            <MessageCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
            Book on WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#F8F1E5] transition-colors hover:bg-[#211C18]/70 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-[#D9B77A]/15 bg-[#17110D]/98 backdrop-blur-md lg:hidden"
        >
          <ul className="mx-auto max-w-7xl space-y-1 px-5 py-5 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActiveLink(link.href) ? "page" : undefined}
                  className={cn(
                    "block rounded-lg px-3 py-3 text-base font-medium transition-colors",
                    isActiveLink(link.href)
                      ? "bg-[#D9B77A]/10 text-[#D9B77A]"
                      : "text-[#F8F1E5]/90 hover:bg-[#211C18]/70 hover:text-[#D9B77A]",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mx-auto max-w-7xl space-y-3 px-5 pb-8 sm:px-6">
            <a
              href={`tel:${BUSINESS.phone}`}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 rounded-lg border border-[#D9B77A]/30 py-3.5 font-medium text-[#F8F1E5]"
            >
              <Phone className="h-4 w-4 text-[#D9B77A]" />
              {BUSINESS.phoneDisplay}
            </a>
            <a
              href={WHATSAPP_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#D9B77A] to-[#C99A45] py-3.5 font-semibold text-[#17110D] shadow-lg shadow-[#C99A45]/20 transition-transform active:scale-[0.99]"
            >
              <MessageCircle className="h-4 w-4" />
              Book on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

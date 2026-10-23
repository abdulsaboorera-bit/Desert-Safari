import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { BUSINESS, NAV_LINKS, SAFARI_EXPERIENCES, WHATSAPP_DEFAULT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[#D9B77A]/20 bg-[#17110D] pt-14 pb-24 lg:pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="font-display text-2xl font-bold">Dubai Desert Safari</h3>
            <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-[#F8F1E5]/70">
              A Dubai-based desert safari operator running tours since {BUSINESS.founded}.
              From dune bashing on the Lahbab red dunes to overnight camps under the
              stars, we offer authentic Arabian desert experiences with easy WhatsApp
              booking.
            </p>
            <div className="mt-6 space-y-3 text-sm text-[#F8F1E5]/70">
              <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-3 transition-colors hover:text-[#D9B77A]">
                <Phone className="h-4 w-4 shrink-0 text-[#D9B77A]" />
                {BUSINESS.phoneDisplay}
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 transition-colors hover:text-[#D9B77A]">
                <Mail className="h-4 w-4 shrink-0 text-[#D9B77A]" />
                {BUSINESS.email}
              </a>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D9B77A]" />
                {BUSINESS.address}
              </p>
            </div>
          </div>

          <nav className="lg:col-span-3" aria-label="Footer navigation">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#F8F1E5]">Explore</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#F8F1E5]/70 transition-colors hover:text-[#D9B77A]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-4" aria-label="Safari experiences">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#F8F1E5]">Safari Experiences</h4>
            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              {SAFARI_EXPERIENCES.map((exp) => (
                <li key={exp.id}>
                  <Link href="/#experiences" className="text-sm text-[#F8F1E5]/70 transition-colors hover:text-[#D9B77A]">
                    {exp.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-[#D9B77A]/15 pt-7 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-xs text-[#F8F1E5]/50">
              &copy; 2026 {BUSINESS.name}. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-[#F8F1E5]/40">
              Operated by Royal Extreme Tourism LLC, {BUSINESS.city}, {BUSINESS.country}.
            </p>
          </div>
          <a
            href={WHATSAPP_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#D9B77A]/30 px-5 py-2.5 text-sm font-medium text-[#F8F1E5] transition-colors hover:border-[#D9B77A] hover:bg-[#D9B77A]/10"
          >
            <MessageCircle className="h-4 w-4 text-[#D9B77A]" />
            Book on WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}


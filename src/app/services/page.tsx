import type { Metadata } from "next";
import Nav from "@/components/Nav";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";
import CompareSafaris from "@/components/CompareSafaris";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import SmoothScroll from "@/components/SmoothScroll";
import ServicesHero from "@/components/services/ServicesHero";
import ShortsFeed from "@/components/services/ShortsFeed";
import ServiceGrid from "@/components/services/ServiceGrid";
import ServiceExtras from "@/components/services/ServiceExtras";
import { BUSINESS } from "@/lib/constants";
import { SERVICES, SERVICES_FAQS } from "@/lib/services";

export const metadata: Metadata = {
  title: "Desert Safari Services & Tours",
  description:
    "Browse all 10 Dubai desert safari services in a swipeable feed: evening, morning, overnight and VIP safaris, quad and dune buggy rides, camel treks, Hummer tours and private Dubai and Abu Dhabi city tours with instant WhatsApp booking.",
  alternates: { canonical: "/services" },
  keywords: [
    "desert safari services Dubai",
    "Dubai safari packages",
    "quad bike safari Dubai",
    "Dubai city tour",
    "Abu Dhabi city tour",
    "VIP desert safari",
  ],
  openGraph: {
    title: "Desert Safari Services & Tours | Dubai Desert Safari",
    description:
      "Swipe through every Dubai desert safari service, compare timings and inclusions, then book in a single WhatsApp message.",
    url: "/services",
    siteName: "Dubai Desert Safari",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/dunes-red.jpg",
        width: 1536,
        height: 1024,
        alt: "Red dunes of the Lahbab desert on a Dubai desert safari",
      },
    ],
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BUSINESS.domain },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BUSINESS.domain}/services` },
  ],
};

const itemListData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Dubai Desert Safari Services",
  numberOfItems: SERVICES.length,
  itemListElement: SERVICES.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    description: service.description,
    url: `${BUSINESS.domain}/services#${service.id}`,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListData) }}
      />
      <SmoothScroll />
      <Nav />
      <main className="min-h-screen pb-20 lg:pb-0">
        <ServicesHero />
        <ShortsFeed />
        <ServiceGrid />
        <CompareSafaris
          cta={{ href: "#services-feed", label: "Back to the service feed" }}
        />
        <ServiceExtras />
        <WhyChoose />
        <Testimonials />
        <FAQ
          id="services-faq"
          kicker="Before You Book"
          title="Service Questions, Answered"
          intro="Timings, inclusions, group sizes and booking rules for every service we run."
          items={SERVICES_FAQS}
        />
        <CTASection />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}

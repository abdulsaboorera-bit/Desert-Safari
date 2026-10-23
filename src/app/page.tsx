import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Stats from "@/components/Stats";
import Experiences from "@/components/Experiences";
import Storytelling from "@/components/Storytelling";
import Journey from "@/components/Journey";
import Highlights from "@/components/Highlights";
import CompareSafaris from "@/components/CompareSafaris";
import Packages from "@/components/Packages";
import WhyChoose from "@/components/WhyChoose";
import Inclusions from "@/components/Inclusions";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import SmoothScroll from "@/components/SmoothScroll";
import { BUSINESS } from "@/lib/constants";
import { SERVICES } from "@/lib/services";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: BUSINESS.name,
  url: BUSINESS.domain,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  foundingDate: BUSINESS.founded,
  areaServed: {
    "@type": "City",
    name: "Dubai",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Damascus Street, Al Qusais Plaza, Office No A 204A",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  makesOffer: {
    "@type": "OfferCatalog",
    name: "Dubai Desert Safari Services",
    itemListElement: SERVICES.map((service, index) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "TouristTrip",
        name: service.title,
        description: service.description,
      },
      position: index + 1,
    })),
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SmoothScroll />
      <Nav />
      <main className="min-h-screen pb-20 lg:pb-0">
        <Hero />
        <TrustStrip />
        <Stats />
        <Experiences />
        <Storytelling />
        <Journey />
        <Highlights />
        <CompareSafaris />
        <Packages />
        <WhyChoose />
        <Inclusions />
        <Testimonials />
        <Gallery />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}

import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const headingFont = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://dubaidesertsafarii.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dubai Desert Safari | Premium Desert Safari Dubai Experiences",
    template: "%s | Dubai Desert Safari",
  },
  description:
    "Premium Dubai desert safari experiences. Book morning, evening and overnight safaris, dune bashing on the Lahbab red dunes, quad biking, dune buggy rides and desert camps with easy WhatsApp booking.",
  keywords: [
    "Dubai Desert Safari",
    "desert safari Dubai",
    "evening desert safari Dubai",
    "morning desert safari Dubai",
    "overnight desert safari Dubai",
    "VIP desert safari Dubai",
    "quad bike Dubai",
    "dune buggy Dubai",
    "Lahbab desert safari",
    "camel ride Dubai",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Dubai Desert Safari | Beyond the Dunes. Into the Extraordinary.",
    description:
      "Golden sunsets, dune bashing on the red dunes and authentic Arabian hospitality. Explore Dubai desert safari experiences and book instantly.",
    url: siteUrl,
    siteName: "Dubai Desert Safari",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1536,
        height: 768,
        alt: "Dubai desert safari across the golden red dunes at sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Desert Safari | Premium Desert Adventures",
    description:
      "Golden sunsets, dune bashing and authentic Arabian hospitality in the Dubai desert.",
    images: ["/images/hero.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#17110D",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const instrumentSans = localFont({
  src: "./fonts/InstrumentSans-latin.woff2",
  variable: "--font-instrument-sans",
  weight: "400 700",
  style: "normal",
  display: "swap",
});

const fraunces = localFont({
  src: "./fonts/Fraunces-latin.woff2",
  variable: "--font-fraunces",
  weight: "100 900",
  style: "normal",
  display: "swap",
});

const siteUrl = "https://espaiemocions.es";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Espai Emocions — Centre de psicologia a Sant Pau, Barcelona",
    template: "%s | Espai Emocions",
  },
  description:
    "Espai Emocions. Centre de psicologia a Sant Pau – Dos de Maig, Barcelona. T'acompanyem a retrobar el teu equilibri emocional, al teu ritme.",
  keywords: [
    "psicòleg Barcelona",
    "psicologia Barcelona",
    "teràpia de parella Barcelona",
    "psicòleg Sant Pau",
    "ansietat Barcelona",
    "centre de psicologia Barcelona",
    "teràpia humanista",
    "psicòleg humanista",
  ],
  authors: [{ name: "Esteve Planadecursach" }],
  creator: "Espai Emocions",
  publisher: "Espai Emocions",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Espai Emocions — Centre de psicologia a Sant Pau, Barcelona",
    description:
      "Centre de psicologia a Sant Pau – Dos de Maig, Barcelona. T'acompanyem a retrobar el teu equilibri emocional, al teu ritme.",
    url: siteUrl,
    siteName: "Espai Emocions",
    images: [
      {
        url: "/images/hero-despatx.webp",
        width: 1200,
        height: 630,
        alt: "Consulta d'Espai Emocions a Sant Pau, Barcelona",
      },
    ],
    locale: "ca_ES",
    alternateLocale: ["es_ES"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Espai Emocions — Centre de psicologia a Sant Pau, Barcelona",
    description:
      "Centre de psicologia a Sant Pau – Dos de Maig, Barcelona. T'acompanyem a retrobar el teu equilibri emocional.",
    images: ["/images/hero-despatx.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

// JSON-LD LocalBusiness — estructura de datos para Google
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: "Espai Emocions",
  description:
    "Centre de psicologia a Sant Pau – Dos de Maig, Barcelona. T'acompanyem a retrobar el teu equilibri emocional, al teu ritme.",
  url: siteUrl,
  image: `${siteUrl}/images/hero-despatx.webp`,
  telephone: "+34630643243",
  email: "eplanaso@gmail.com",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Carrer de la Indústria, 220, Entresòl",
    addressLocality: "Barcelona",
    addressRegion: "Catalunya",
    postalCode: "08026",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.4101,
    longitude: 2.1868,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  sameAs: ["https://espaiemocions.es"],
  founder: [
    {
      "@type": "Person",
      name: "Esteve Planadecursach",
      jobTitle: "Psicòleg humanista",
    },
    {
      "@type": "Person",
      name: "Carmen Estévez",
      jobTitle: "Psicòloga i cofundadora",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ca"
      className={`${instrumentSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

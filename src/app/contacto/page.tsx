import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Contacte } from "@/components/Contacte";
import { Footer } from "@/components/Footer";

const url = "https://espaiemocions.es/contacto";

export const metadata: Metadata = {
  title: { absolute: "Contacta · Espai Emocions — Psicología en Barcelona" },
  description:
    "Contacta con Espai Emocions, centro de psicología humanista en Barcelona (Sant Pau – Dos de Maig). Primera visita informativa, presencial u online. WhatsApp, teléfono y email.",
  alternates: { canonical: url },
  openGraph: {
    title: "Contacta · Espai Emocions — Psicología en Barcelona",
    description:
      "Primera visita informativa, presencial u online. WhatsApp, teléfono y email.",
    url,
    siteName: "Espai Emocions",
    locale: "es_ES",
    type: "website",
    images: ["/images/hero-despatx.webp"],
  },
};

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Contacte />
      </main>
      <Footer />
    </>
  );
}
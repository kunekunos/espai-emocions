import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { QuiSom } from "@/components/QuiSom";
import { Serveis } from "@/components/Serveis";
import { Enfocament } from "@/components/Enfocament";
import { Blog } from "@/components/Blog";
import { Contacte } from "@/components/Contacte";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    absolute: "Espai Emocions · Psicòleg a Barcelona (Sant Pau – Dos de Maig)",
  },
  description:
    "Psicòlegs humanistes a Barcelona. Teràpia individual i de parella, presencial a Sant Pau – Dos de Maig o online. Primera conversa informativa de 30 min sense cost.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuiSom />
        <Serveis />
        <Enfocament />
        <Blog />
        <Contacte />
      </main>
      <Footer />
    </>
  );
}
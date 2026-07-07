import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { QuiSom } from "@/components/QuiSom";
import { Serveis } from "@/components/Serveis";
import { Enfocament } from "@/components/Enfocament";
import { Blog } from "@/components/Blog";
import { Contacte } from "@/components/Contacte";
import { Footer } from "@/components/Footer";

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
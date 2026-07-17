import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="px-6 py-24 text-center sm:py-32">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">404</p>
          <h1 className="mt-4 font-heading text-4xl font-light text-foreground sm:text-5xl">
            Aquesta pàgina no existeix
          </h1>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-foreground/70">
            Esta página no existe o ya no está disponible. Puedes volver al inicio o consultar los
            artículos de Espai Emocions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="rounded-xl bg-primary px-7 py-3 font-medium text-primary-foreground transition-all hover:brightness-105"
            >
              Tornar a l&apos;inici · Volver al inicio
            </Link>
            <Link
              href="/blog"
              className="rounded-xl border border-primary px-7 py-3 font-medium text-primary transition-colors hover:bg-primary/10"
            >
              Blog
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


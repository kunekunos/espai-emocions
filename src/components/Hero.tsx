"use client";

import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-despatx.webp"
          alt="Sala de teràpia càlida i acollidora d'Espai Emocions a Sant Pau, Barcelona"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
      </div>

      {/* Content — left aligned */}
      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className="max-w-xl"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(12px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <h1 className="font-heading text-4xl md:text-6xl font-semibold text-foreground leading-tight mb-6">
            {t("hero.title.main")}&nbsp;
            <span className="text-primary">
              {t("hero.title.accent")}
            </span>
          </h1>
          <p className="text-lg text-foreground/80 max-w-lg mb-8 leading-relaxed">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contacte"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium text-lg hover:brightness-105 transition-all duration-300"
            >
              {t("hero.cta1")}
            </a>
            <a
              href="#qui-som"
              className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-xl font-medium text-lg hover:bg-primary/10 transition-all duration-300"
            >
              {t("hero.cta2")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
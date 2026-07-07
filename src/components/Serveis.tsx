"use client";

import { Heart, Users, Brain, Sprout, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n";

export function Serveis() {
  const { t } = useLanguage();

  const services = [
    { icon: Heart, title: t("serveis.1.title"), desc: t("serveis.1.desc") },
    { icon: Users, title: t("serveis.2.title"), desc: t("serveis.2.desc") },
    { icon: Brain, title: t("serveis.3.title"), desc: t("serveis.3.desc") },
    { icon: Sprout, title: t("serveis.4.title"), desc: t("serveis.4.desc") },
  ];

  return (
    <section id="serveis" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-muted/30">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-light text-foreground mb-4">
            {t("serveis.title")}
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            {t("serveis.subtitle")}
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={i * 100}>
                <div className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-border/40 p-8 h-full">
                  <Icon className="size-7 text-accent mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-heading text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    {service.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="text-center mt-12" delay={200}>
          <a
            href="#contacte"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:brightness-105 transition-all duration-300"
          >
            {t("serveis.cta")}
            <ArrowRight className="size-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
"use client";

import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n";

export function Enfocament() {
  const { t } = useLanguage();

  const stats = [
    { value: t("enfocament.stat1.value"), label: t("enfocament.stat1.label") },
    { value: t("enfocament.stat2.value"), label: t("enfocament.stat2.label") },
    { value: t("enfocament.stat3.value"), label: t("enfocament.stat3.label") },
  ];

  return (
    <section id="enfocament" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <h2 className="text-4xl sm:text-5xl font-heading font-light text-foreground mb-8">
            {t("enfocament.title")}
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-6 text-foreground/75 leading-relaxed text-lg text-center">
            <p>{t("enfocament.p1")}</p>
            <p>{t("enfocament.p2")}</p>
            <p>{t("enfocament.p3")}</p>
          </div>
        </Reveal>

        {/* Stats */}
        <Reveal delay={200}>
          <div className="grid grid-cols-3 gap-8 mt-16 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl sm:text-5xl font-heading text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="text-center mt-12" delay={300}>
          <a
            href="#contacte"
            className="inline-flex items-center rounded-xl bg-primary text-primary-foreground px-8 py-4 text-base font-medium hover:brightness-105 transition-all duration-300"
          >
            {t("enfocament.cta")}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
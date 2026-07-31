"use client";

import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n";

export function QuiSom() {
  const { t } = useLanguage();

  return (
    <section id="qui-som" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-light text-foreground mb-4">
            {t("quisom.title")}
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            {t("quisom.subtitle")}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Esteve */}
          <Reveal delay={100}>
            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img
                  src="/images/esteve.webp"
                  alt={t("quisom.esteve.name")}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-heading text-foreground mb-1">
                {t("quisom.esteve.name")}
              </h3>
              <p className="text-primary text-sm mb-1">{t("quisom.esteve.role")}</p>
              <p className="text-foreground/50 text-sm mb-4">{t("quisom.esteve.col")}</p>
              <p className="text-sm text-foreground/60 mb-4">
                {t("quisom.esteve.specs")}
              </p>
              <CredentialList
                items={[
                  t("quisom.esteve.credential1"),
                  t("quisom.esteve.credential2"),
                  t("quisom.esteve.credential3"),
                ]}
              />
              <p className="text-foreground/70 leading-relaxed max-w-md">
                {t("quisom.esteve.bio")}
              </p>
            </div>
          </Reveal>

          {/* Carmen */}
          <Reveal delay={200}>
            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-lg">
                <img
                  src="/images/carmen.webp"
                  alt={t("quisom.carmen.name")}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-heading text-foreground mb-1">
                {t("quisom.carmen.name")}
              </h3>
              <p className="text-primary text-sm mb-1">{t("quisom.carmen.role")}</p>
              <p className="text-foreground/50 text-sm mb-4">{t("quisom.carmen.col")}</p>
              <p className="text-sm text-foreground/60 mb-4">
                {t("quisom.carmen.specs")}
              </p>
              <CredentialList
                items={[
                  t("quisom.carmen.credential1"),
                  t("quisom.carmen.credential2"),
                  t("quisom.carmen.credential3"),
                ]}
              />
              <p className="text-foreground/70 leading-relaxed max-w-md">
                {t("quisom.carmen.bio")}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CredentialList({ items }: { items: string[] }) {
  return (
    <ul className="mb-5 w-full max-w-md divide-y divide-border/50 rounded-2xl bg-muted/40 px-6 py-2 text-center">
      {items.map((item) => (
        <li key={item} className="py-3 text-sm leading-relaxed text-foreground/75">
          {item}
        </li>
      ))}
    </ul>
  );
}


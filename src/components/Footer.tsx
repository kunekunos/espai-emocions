"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer className="border-t border-border/40 py-12 px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl text-center">
        <Link href="/" className="flex items-center justify-center gap-2 mb-4">
          <img
            src="/images/logo.png"
            alt="Espai Emocions"
            width={160}
            height={32}
            className="h-8 w-auto"
          />
          <span className="font-heading text-lg font-medium text-foreground tracking-tight">
            Espai Emocions
          </span>
        </Link>
        <p className="text-sm text-foreground/60 mb-2">{t("footer.tagline")}</p>
        <Link
          href="/privacidad"
          className="mb-3 inline-flex text-xs text-foreground/55 underline-offset-4 transition-colors hover:text-primary hover:underline"
        >
          {lang === "CA" ? "Privacitat del formulari" : "Privacidad del formulario"}
        </Link>
        <p className="text-xs text-foreground/40">{t("footer.copy")}</p>
        <div className="mt-4 pt-4 border-t border-border/20">
          <a
            href="https://planadecursach.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-foreground/50 transition-colors hover:text-primary hover:underline"
          >
            {lang === "CA"
              ? "Plana de Cursach — Psicologia i psicoteràpia"
              : "Plana de Cursach — Psicología y psicoterapia"}
          </a>
        </div>
      </div>
    </footer>
  );
}

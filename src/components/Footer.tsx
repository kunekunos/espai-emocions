"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/40 py-12 px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl text-center">
        <a href="/" className="flex items-center justify-center gap-2 mb-4">
          <Image
            src="/images/logo.webp"
            alt="Espai Emocions"
            width={160}
            height={32}
            className="h-8 w-auto"
          />
          <span className="font-heading text-lg font-medium text-foreground tracking-tight">
            Espai Emocions
          </span>
        </a>
        <p className="text-sm text-foreground/60 mb-2">{t("footer.tagline")}</p>
        <p className="text-xs text-foreground/40">{t("footer.copy")}</p>
      </div>
    </footer>
  );
}
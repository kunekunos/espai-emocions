"use client";

import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  const navLinks = [
    { label: t("nav.qui-som"), href: "#qui-som" },
    { label: t("nav.serveis"), href: "#serveis" },
    { label: t("nav.enfocament"), href: "#enfocament" },
    { label: t("nav.blog"), href: "#blog" },
    { label: t("nav.contacte"), href: "#contacte" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <nav className="container mx-auto flex items-center justify-between py-3 px-6">
        <Link href="/" className="flex items-center gap-2">
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

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacte"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-medium hover:brightness-105 transition-all duration-300"
          >
            {t("nav.cta")}
          </a>
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 text-sm text-foreground/60 hover:text-foreground transition-colors"
            aria-label="Canviar idioma"
          >
            <Globe className="size-4" />
            <span>{lang}</span>
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacte"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-medium text-center"
              onClick={() => setOpen(false)}
            >
              {t("nav.cta")}
            </a>
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              <Globe className="size-4" />
              <span>{lang}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
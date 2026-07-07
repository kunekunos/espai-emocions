"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Contacte() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ nom: "", email: "", missatge: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ nom: "", email: "", missatge: "" });
  };

  return (
    <section id="contacte" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl sm:text-5xl font-heading font-light text-center text-foreground mb-4">
          {t("contacte.title")}
        </h2>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16 leading-relaxed">
          {t("contacte.subtitle")}
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder={t("contacte.nom")}
                  required
                  value={form.nom}
                  onChange={(e) => setForm({ ...form, nom: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-5 py-3.5 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={t("contacte.email")}
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-5 py-3.5 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder={t("contacte.missatge")}
                  required
                  rows={5}
                  value={form.missatge}
                  onChange={(e) => setForm({ ...form, missatge: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-5 py-3.5 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground hover:brightness-105 transition-all duration-300"
              >
                {sent ? t("contacte.sent") : t("contacte.submit")}
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="size-5 text-primary mt-0.5 shrink-0" />
              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">
                  {t("contacte.adress.title")}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {t("contacte.adress.value")}
                  <br />
                  {t("contacte.adress.city")}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="size-5 text-primary mt-0.5 shrink-0" />
              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">
                  {t("contacte.phone.title")}
                </h3>
                <a
                  href="tel:+34630643243"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  +34 630643243
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="size-5 text-primary mt-0.5 shrink-0" />
              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">
                  {t("contacte.email.title")}
                </h3>
                <a
                  href="mailto:eplanaso@gmail.com"
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  eplanaso@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="size-5 text-primary mt-0.5 shrink-0" />
              <div>
                <h3 className="text-sm font-medium text-foreground mb-1">
                  {t("contacte.hours.title")}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {t("contacte.hours.value")}
                  <br />
                  {t("contacte.hours.time")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
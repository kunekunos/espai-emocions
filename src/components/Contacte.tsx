"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { Check, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { trackContactClick, trackGenerateLead } from "@/lib/analytics";

type ContactPreference = "email" | "phone" | "whatsapp";
type Service = "individual" | "couple" | "family" | "information" | "other";
type Modality = "presential" | "online" | "either";

type FormState = {
  name: string;
  email: string;
  phone: string;
  contactPreference: ContactPreference;
  service: Service;
  modality: Modality;
  message: string;
  consent: boolean;
  website: string;
};

type Acquisition = {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  referrer: string;
  landingPath: string;
};

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  contactPreference: "email",
  service: "individual",
  modality: "presential",
  message: "",
  consent: false,
  website: "",
};

const EMPTY_ACQUISITION: Acquisition = {
  utmSource: "",
  utmMedium: "",
  utmCampaign: "",
  utmContent: "",
  referrer: "",
  landingPath: "",
};

const COPY = {
  CA: {
    intro: "Explica'ns només el necessari per poder orientar-te. La Carmen o l'Esteve et respondran personalment.",
    name: "Nom",
    email: "Correu electrònic",
    phone: "Telèfon",
    preference: "Com prefereixes que et contactem?",
    service: "Servei",
    modality: "Modalitat",
    message: "Motiu general de la consulta (opcional)",
    messageHelp: "Amb una frase n'hi ha prou. No hi incloguis diagnòstics, medicació ni informació clínica detallada.",
    consent: "He llegit i accepto la",
    privacy: "política de privacitat",
    submit: "Sol·licita una primera visita",
    sending: "Enviant…",
    success: "Hem rebut la teva sol·licitud. La Carmen o l'Esteve et respondran personalment dins l'horari del centre.",
    error: "No hem pogut enviar la sol·licitud. Torna-ho a provar o contacta amb el centre per WhatsApp o telèfon.",
    chooseChannel: "Tria com prefereixes contactar-nos",
    chooseChannelText: "La Carmen o l'Esteve atendran personalment la teva consulta.",
    reassuranceTitle: "Pots començar sense tenir-ho tot clar",
    reassuranceItems: [
      "Conversa informativa de 30 minuts sense cost, si la necessites.",
      "La Carmen o l'Esteve t'atendran personalment.",
      "Sessions presencials a Barcelona o online.",
    ],
    whatsapp: "Escriu-nos per WhatsApp",
    call: "Truca'ns",
    write: "Escriu-nos per correu",
    preferences: { email: "Correu", phone: "Trucada", whatsapp: "WhatsApp" },
    services: { individual: "Psicoteràpia individual", couple: "Teràpia de parella", family: "Teràpia familiar", information: "Conversa informativa", other: "Una altra consulta" },
    modalities: { presential: "Presencial a Barcelona", online: "Online", either: "M'és indiferent" },
    whatsappMessage: "Hola, voldria sol·licitar una primera visita a Espai Emocions.",
  },
  ES: {
    intro: "Cuéntanos solo lo necesario para poder orientarte. Carmen o Esteve responderán personalmente.",
    name: "Nombre",
    email: "Correo electrónico",
    phone: "Teléfono",
    preference: "¿Cómo prefieres que te contactemos?",
    service: "Servicio",
    modality: "Modalidad",
    message: "Motivo general de la consulta (opcional)",
    messageHelp: "Una frase es suficiente. No incluyas diagnósticos, medicación ni información clínica detallada.",
    consent: "He leído y acepto la",
    privacy: "política de privacidad",
    submit: "Solicita una primera visita",
    sending: "Enviando…",
    success: "Hemos recibido tu solicitud. Carmen o Esteve responderán personalmente dentro del horario del centro.",
    error: "No hemos podido enviar la solicitud. Inténtalo de nuevo o contacta con el centro por WhatsApp o teléfono.",
    chooseChannel: "Elige cómo prefieres contactarnos",
    chooseChannelText: "Carmen o Esteve atenderán personalmente tu consulta.",
    reassuranceTitle: "Puedes empezar sin tenerlo todo claro",
    reassuranceItems: [
      "Conversación informativa de 30 minutos sin coste, si la necesitas.",
      "Carmen o Esteve te atenderán personalmente.",
      "Sesiones presenciales en Barcelona u online.",
    ],
    whatsapp: "Escríbenos por WhatsApp",
    call: "Llámanos",
    write: "Escríbenos por correo",
    preferences: { email: "Correo", phone: "Llamada", whatsapp: "WhatsApp" },
    services: { individual: "Psicoterapia individual", couple: "Terapia de pareja", family: "Terapia familiar", information: "Conversación informativa", other: "Otra consulta" },
    modalities: { presential: "Presencial en Barcelona", online: "Online", either: "Me es indiferente" },
    whatsappMessage: "Hola, quisiera solicitar una primera visita en Espai Emocions.",
  },
} as const;

function clean(value: string | null, max = 120) {
  return (value ?? "").trim().slice(0, max);
}

function captureAcquisition(): Acquisition {
  const key = "ee_acquisition_v1";
  try {
    const stored = sessionStorage.getItem(key);
    if (stored) return JSON.parse(stored) as Acquisition;
    const params = new URLSearchParams(window.location.search);
    const value: Acquisition = {
      utmSource: clean(params.get("utm_source")),
      utmMedium: clean(params.get("utm_medium")),
      utmCampaign: clean(params.get("utm_campaign")),
      utmContent: clean(params.get("utm_content")),
      referrer: clean(document.referrer, 300),
      landingPath: clean(`${window.location.pathname}${window.location.search}`, 300),
    };
    sessionStorage.setItem(key, JSON.stringify(value));
    return value;
  } catch {
    return EMPTY_ACQUISITION;
  }
}

export function Contacte() {
  const { t, lang } = useLanguage();
  const copy = COPY[lang];
  const formEnabled =
    process.env.NEXT_PUBLIC_CONTACT_FORM_ENABLED === "true" &&
    process.env.NEXT_PUBLIC_PRIVACY_NOTICE_READY === "true";
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [acquisition, setAcquisition] = useState<Acquisition>(EMPTY_ACQUISITION);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => setAcquisition(captureAcquisition()), []);

  const whatsappUrl = `https://wa.me/34614629670?text=${encodeURIComponent(copy.whatsappMessage)}`;
  const inputClass = "w-full rounded-xl border border-border bg-background px-5 py-3.5 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors";

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, language: lang, acquisition }),
      });
      const result = (await response.json()) as { ok?: boolean; requestId?: string };
      if (!response.ok || !result.ok) throw new Error("delivery_failed");
      trackGenerateLead({
        service: form.service,
        modality: form.modality,
        contactPreference: form.contactPreference,
        requestId: result.requestId,
      });
      setForm(INITIAL_FORM);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacte" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl sm:text-5xl font-heading font-light text-center text-foreground mb-4">{t("contacte.title")}</h2>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16 leading-relaxed">{t("contacte.subtitle")}</p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-6 rounded-2xl bg-primary/8 p-5 sm:p-6">
              <p className="font-heading text-xl text-foreground">{copy.reassuranceTitle}</p>
              <ul className="mt-4 space-y-3">
                {copy.reassuranceItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/75">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {formEnabled ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <p className="text-sm leading-relaxed text-foreground/70">{copy.intro}</p>
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">{copy.name} *</label>
                  <input id="contact-name" className={inputClass} required maxLength={80} autoComplete="name" value={form.name} onChange={(event) => update("name", event.target.value)} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">{copy.email}{form.contactPreference === "email" ? " *" : ""}</label>
                    <input id="contact-email" className={inputClass} type="email" required={form.contactPreference === "email"} maxLength={160} autoComplete="email" value={form.email} onChange={(event) => update("email", event.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium">{copy.phone}{form.contactPreference !== "email" ? " *" : ""}</label>
                    <input id="contact-phone" className={inputClass} type="tel" required={form.contactPreference !== "email"} maxLength={30} autoComplete="tel" value={form.phone} onChange={(event) => update("phone", event.target.value)} />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-preference" className="mb-2 block text-sm font-medium">{copy.preference} *</label>
                  <select id="contact-preference" className={inputClass} value={form.contactPreference} onChange={(event) => update("contactPreference", event.target.value as ContactPreference)}>
                    {Object.entries(copy.preferences).map(([value, label]) => <option value={value} key={value}>{label}</option>)}
                  </select>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-service" className="mb-2 block text-sm font-medium">{copy.service} *</label>
                    <select id="contact-service" className={inputClass} value={form.service} onChange={(event) => update("service", event.target.value as Service)}>
                      {Object.entries(copy.services).map(([value, label]) => <option value={value} key={value}>{label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-modality" className="mb-2 block text-sm font-medium">{copy.modality} *</label>
                    <select id="contact-modality" className={inputClass} value={form.modality} onChange={(event) => update("modality", event.target.value as Modality)}>
                      {Object.entries(copy.modalities).map(([value, label]) => <option value={value} key={value}>{label}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">{copy.message}</label>
                  <textarea id="contact-message" className={`${inputClass} resize-none`} rows={3} maxLength={600} value={form.message} onChange={(event) => update("message", event.target.value)} aria-describedby="contact-message-help" />
                  <p id="contact-message-help" className="mt-2 text-xs leading-relaxed text-foreground/60">{copy.messageHelp}</p>
                </div>
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="contact-website">Website</label>
                  <input id="contact-website" tabIndex={-1} autoComplete="off" value={form.website} onChange={(event) => update("website", event.target.value)} />
                </div>
                <label className="flex items-start gap-3 text-sm leading-relaxed text-foreground/70">
                  <input type="checkbox" className="mt-1 size-4 accent-primary" required checked={form.consent} onChange={(event) => update("consent", event.target.checked)} />
                  <span>{copy.consent} <Link href="/privacidad" className="underline underline-offset-2 hover:text-primary">{copy.privacy}</Link>. *</span>
                </label>
                <button type="submit" disabled={status === "sending"} className="w-full rounded-xl bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground hover:brightness-105 transition-all duration-300 disabled:cursor-wait disabled:opacity-60">
                  {status === "sending" ? copy.sending : copy.submit}
                </button>
                <div aria-live="polite" aria-atomic="true">
                  {status === "success" && <p className="rounded-xl bg-primary/10 p-4 text-sm leading-relaxed text-foreground">{copy.success}</p>}
                  {status === "error" && <p className="rounded-xl border border-red-300 bg-red-50 p-4 text-sm leading-relaxed text-red-900">{copy.error}</p>}
                </div>
              </form>
            ) : (
              <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm sm:p-8">
                <h3 className="font-heading text-2xl text-foreground">{copy.chooseChannel}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{copy.chooseChannelText}</p>
                <div className="mt-6 space-y-3">
                  <a href={whatsappUrl} onClick={() => trackContactClick("whatsapp")} className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-medium text-primary-foreground transition-all hover:brightness-105">
                    <MessageCircle className="size-5" />{copy.whatsapp}
                  </a>
                  <a href="tel:+34614629670" onClick={() => trackContactClick("phone")} className="flex items-center justify-center gap-2 rounded-xl border border-primary px-6 py-3.5 font-medium text-primary transition-colors hover:bg-primary/10">
                    <Phone className="size-5" />{copy.call}
                  </a>
                  <a href="mailto:eplanaso@gmail.com" onClick={() => trackContactClick("email")} className="flex items-center justify-center gap-2 px-6 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-primary">
                    <Mail className="size-4" />{copy.write}
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            <ContactItem icon={<MapPin className="size-5 text-primary" />} title={t("contacte.adress.title")}>
              <p>{t("contacte.adress.value")}<br />{t("contacte.adress.city")}</p>
            </ContactItem>
            <ContactItem icon={<MessageCircle className="size-5 text-primary" />} title="WhatsApp">
              <a href={whatsappUrl} onClick={() => trackContactClick("whatsapp")} className="hover:text-primary">+34 614 629 670</a>
            </ContactItem>
            <ContactItem icon={<Phone className="size-5 text-primary" />} title={t("contacte.phone.title")}>
              <a href="tel:+34614629670" onClick={() => trackContactClick("phone")} className="hover:text-primary">+34 614 629 670</a>
            </ContactItem>
            <ContactItem icon={<Mail className="size-5 text-primary" />} title={t("contacte.email.title")}>
              <a href="mailto:eplanaso@gmail.com" onClick={() => trackContactClick("email")} className="hover:text-primary">eplanaso@gmail.com</a>
            </ContactItem>
            <ContactItem icon={<Clock className="size-5 text-primary" />} title={t("contacte.hours.title")}>
              <p>{t("contacte.hours.value")}<br />{t("contacte.hours.time")}</p>
            </ContactItem>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-0.5 shrink-0">{icon}</div>
      <div>
        <h3 className="text-sm font-medium text-foreground mb-1">{title}</h3>
        <div className="text-sm text-foreground/70 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

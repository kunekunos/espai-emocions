"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "CA" | "ES";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  CA: {
    // Nav
    "nav.qui-som": "Qui som",
    "nav.serveis": "Serveis",
    "nav.enfocament": "Enfocament",
    "nav.blog": "Blog",
    "nav.contacte": "Contacte",
    "nav.cta": "Demana una cita",
    // Hero
    "hero.title": "Un espai per a tu.",
    "hero.title.main": "Un espai",
    "hero.title.accent": "per a tu.",
    "hero.subtitle": "No estàs sol/a en això. T'acompanyem a retrobar el teu equilibri emocional, al teu ritme. Psicòlegs a Sant Pau, Barcelona.",
    "hero.cta1": "Demana una cita",
    "hero.cta2": "Coneix-nos",
    // Qui som
    "quisom.title": "Qui som",
    "quisom.subtitle": "Els dos socis fundadors d'Espai Emocions, el teu centre de psicologia a Sant Pau – Dos de Maig, Barcelona.",
    "quisom.esteve.name": "Esteve Planadecursach",
    "quisom.esteve.role": "Psicòleg humanista",
    "quisom.esteve.col": "Col. 21691",
    "quisom.esteve.specs": "Teràpia humanista · Creixement personal · Acompanyament emocional",
    "quisom.esteve.bio": "L'Esteve creu en el poder de la relació terapèutica com a motor de canvi. Amb un enfocament humanista, t'acompanya a connectar amb els teus recursos interns.",
    "quisom.carmen.name": "Carmen Estévez",
    "quisom.carmen.role": "Psicòloga i cofundadora",
    "quisom.carmen.specs": "Teràpia sistèmica · Teràpia familiar · Teràpia de parella",
    "quisom.carmen.bio": "La Carmen està especialitzada en teràpia sistèmica, familiar i de parella. Aporta caldesa, creativitat i rigor professional a cada sessió, ajudant-te a trobar noves perspectives i camins de benestar.",
    // Serveis
    "serveis.title": "Com podem ajudar-te",
    "serveis.subtitle": "Cada persona és única. Al nostre centre de psicologia a Sant Pau, Barcelona, adaptem la teràpia a les teves necessitats.",
    "serveis.1.title": "Ansietat i estrès",
    "serveis.1.desc": "Eines pràctiques i acompanyament emocional per gestionar l'ansietat i recuperar la calma interior.",
    "serveis.2.title": "Teràpia de parella",
    "serveis.2.desc": "Un espai neutre i segur per millorar la comunicació i enfortir el vincle afectiu.",
    "serveis.3.title": "Autoestima i creixement",
    "serveis.3.desc": "Treballa el teu autoconeixement i desenvolupa una relació més sana amb tu mateix/a.",
    "serveis.4.title": "Dol i pèrdua",
    "serveis.4.desc": "Acompanyament respectuós en els processos de pèrdua, al teu propi ritme.",
    "serveis.cta": "Contacta ara",
    // Enfocament
    "enfocament.title": "El nostre enfocament",
    "enfocament.p1": "A Espai Emocions, creiem que la teràpia és un camí de descobriment personal. No busquem solucions ràpides, sinó un procés profund i respectuós que et permeti entendre't millor i trobar els teus propis recursos.",
    "enfocament.p2": "Treballem des d'un enfocament integrador que combina diferents corrents psicològics — cognitivo-conductual, humanista i sistèmic — adaptant-nos sempre a les necessitats i el ritme de cada persona.",
    "enfocament.p3": "El nostre espai, al barri de Sant Pau a Barcelona, és un lloc segur, lliure de judicis, on pots expressar-te amb total llibertat. Perquè créixer emocionalment comença per sentir-se acollit/da.",
    "enfocament.stat1.value": "+15",
    "enfocament.stat1.label": "Anys d'experiència",
    "enfocament.stat2.value": "+500",
    "enfocament.stat2.label": "Persones acompanyades",
    "enfocament.stat3.value": "3",
    "enfocament.stat3.label": "Professionals",
    "enfocament.cta": "Demana una cita",
    // Blog
    "blog.title": "Últims articles",
    "blog.readmore": "Llegir més",
    "blog.seeall": "Veure tots els articles",
    // Contacte
    "contacte.title": "Demana una cita",
    "contacte.subtitle": "Fes el primer pas. Escriu-nos i et respondrem en menys de 24 hores.",
    "contacte.nom": "Nom",
    "contacte.email": "Correu electrònic",
    "contacte.missatge": "Missatge",
    "contacte.submit": "Enviar missatge",
    "contacte.sent": "Missatge enviat ✓",
    "contacte.adress.title": "Adreça",
    "contacte.adress.value": "Carrer de la Indústria, 220, Entresòl",
    "contacte.adress.city": "Sant Martí, 08026 Barcelona",
    "contacte.phone.title": "Telèfon",
    "contacte.email.title": "Correu",
    "contacte.hours.title": "Horari",
    "contacte.hours.value": "Dilluns a divendres",
    "contacte.hours.time": "9:00 – 20:00",
    // Footer
    "footer.tagline": "Centre de psicologia a Sant Pau – Dos de Maig, Barcelona",
    "footer.copy": "© 2026 Espai Emocions. Tots els drets reservats.",
  },
  ES: {
    // Nav
    "nav.qui-som": "Quiénes somos",
    "nav.serveis": "Servicios",
    "nav.enfocament": "Enfoque",
    "nav.blog": "Blog",
    "nav.contacte": "Contacto",
    "nav.cta": "Pide una cita",
    // Hero
    "hero.title": "Un espacio para ti.",
    "hero.title.main": "Un espacio",
    "hero.title.accent": "para ti.",
    "hero.subtitle": "No estás solo/a en esto. Te acompañamos a recuperar tu equilibrio emocional, a tu ritmo. Psicólogos en Sant Pau, Barcelona.",
    "hero.cta1": "Pide una cita",
    "hero.cta2": "Conócenos",
    // Qui som
    "quisom.title": "Quiénes somos",
    "quisom.subtitle": "Los dos socios fundadores de Espai Emocions, tu centro de psicología en Sant Pau – Dos de Maig, Barcelona.",
    "quisom.esteve.name": "Esteve Planadecursach",
    "quisom.esteve.role": "Psicólogo humanista",
    "quisom.esteve.col": "Col. 21691",
    "quisom.esteve.specs": "Terapia humanista · Crecimiento personal · Acompañamiento emocional",
    "quisom.esteve.bio": "Esteve cree en el poder de la relación terapéutica como motor de cambio. Con un enfoque humanista, te acompaña a conectar con tus recursos internos.",
    "quisom.carmen.name": "Carmen Estévez",
    "quisom.carmen.role": "Psicóloga y cofundadora",
    "quisom.carmen.specs": "Terapia sistémica · Terapia familiar · Terapia de pareja",
    "quisom.carmen.bio": "Carmen está especializada en terapia sistémica, familiar y de pareja. Aporta calidez, creatividad y rigor profesional a cada sesión, ayudándote a encontrar nuevas perspectivas y caminos de bienestar.",
    // Serveis
    "serveis.title": "Cómo podemos ayudarte",
    "serveis.subtitle": "Cada persona es única. En nuestro centro de psicología en Sant Pau, Barcelona, adaptamos la terapia a tus necesidades.",
    "serveis.1.title": "Ansiedad y estrés",
    "serveis.1.desc": "Herramientas prácticas y acompañamiento emocional para gestionar la ansiedad y recuperar la calma interior.",
    "serveis.2.title": "Terapia de pareja",
    "serveis.2.desc": "Un espacio neutro y seguro para mejorar la comunicación y fortalecer el vínculo afectivo.",
    "serveis.3.title": "Autoestima y crecimiento",
    "serveis.3.desc": "Trabaja tu autoconocimiento y desarrolla una relación más sana contigo mismo/a.",
    "serveis.4.title": "Duelo y pérdida",
    "serveis.4.desc": "Acompañamiento respetuoso en los procesos de pérdida, a tu propio ritmo.",
    "serveis.cta": "Contacta ahora",
    // Enfocament
    "enfocament.title": "Nuestro enfoque",
    "enfocament.p1": "En Espai Emocions, creemos que la terapia es un camino de descubrimiento personal. No buscamos soluciones rápidas, sino un proceso profundo y respetuoso que te permita entenderte mejor y encontrar tus propios recursos.",
    "enfocament.p2": "Trabajamos desde un enfoque integrador que combina diferentes corrientes psicológicas — cognitivo-conductual, humanista y sistémico — adaptándonos siempre a las necesidades y el ritmo de cada persona.",
    "enfocament.p3": "Nuestro espacio, en el barrio de Sant Pau de Barcelona, es un lugar seguro, libre de juicios, donde puedes expresarte con total libertad. Porque crecer emocionalmente empieza por sentirse acogido/a.",
    "enfocament.stat1.value": "+15",
    "enfocament.stat1.label": "Años de experiencia",
    "enfocament.stat2.value": "+500",
    "enfocament.stat2.label": "Personas acompañadas",
    "enfocament.stat3.value": "3",
    "enfocament.stat3.label": "Profesionales",
    "enfocament.cta": "Pide una cita",
    // Blog
    "blog.title": "Últimos artículos",
    "blog.readmore": "Leer más",
    "blog.seeall": "Ver todos los artículos",
    // Contacte
    "contacte.title": "Pide una cita",
    "contacte.subtitle": "Da el primer paso. Escríbenos y te responderemos en menos de 24 horas.",
    "contacte.nom": "Nombre",
    "contacte.email": "Correo electrónico",
    "contacte.missatge": "Mensaje",
    "contacte.submit": "Enviar mensaje",
    "contacte.sent": "Mensaje enviado ✓",
    "contacte.adress.title": "Dirección",
    "contacte.adress.value": "Calle de la Indústria, 220, Entresòl",
    "contacte.adress.city": "Sant Martí, 08026 Barcelona",
    "contacte.phone.title": "Teléfono",
    "contacte.email.title": "Correo",
    "contacte.hours.title": "Horario",
    "contacte.hours.value": "Lunes a viernes",
    "contacte.hours.time": "9:00 – 20:00",
    // Footer
    "footer.tagline": "Centro de psicología en Sant Pau – Dos de Maig, Barcelona",
    "footer.copy": "© 2026 Espai Emocions. Todos los derechos reservados.",
  },
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("lang") as Lang | null;
      if (stored === "CA" || stored === "ES") return stored;
    }
    return "CA";
  });

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  const toggleLang = () => {
    const next = lang === "CA" ? "ES" : "CA";
    setLang(next);
  };

  const t = (key: string) => {
    return translations[lang][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
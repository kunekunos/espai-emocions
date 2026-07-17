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
    "nav.cta": "Sol·licita una primera visita",
    // Hero
    "hero.title": "Un espai per a tu.",
    "hero.title.main": "Un espai",
    "hero.title.accent": "per a tu.",
    "hero.subtitle": "No estàs sol/a en això. T'acompanyem a retrobar el teu equilibri emocional, al teu ritme. Psicòlegs a Sant Pau, Barcelona.",
    "hero.cta1": "Sol·licita una primera visita",
    "hero.cta2": "Coneix-nos",
    "hero.reassurance": "Si ho necessites, abans de començar podem fer una conversa informativa de 30 minuts sense cost.",
    // Qui som
    "quisom.title": "Qui som",
    "quisom.subtitle": "La Carmen i l'Esteve dirigeixen personalment Espai Emocions. Psicologia basada en l'evidència, experiència clínica i una relació terapèutica propera.",
    "quisom.esteve.name": "Esteve Planadecursach",
    "quisom.esteve.role": "Psicòleg i cofundador",
    "quisom.esteve.col": "Col. 21691",
    "quisom.esteve.specs": "Humanista · Crisis vitals i identitat · Teràpia de parella",
    "quisom.esteve.credential1": "Llicenciat en Psicologia · Universitat de Barcelona",
    "quisom.esteve.credential2": "Màster en Sexologia i Teràpia de Parella",
    "quisom.esteve.credential3": "Experiència professional a Quantum Psicologia",
    "quisom.esteve.bio": "Treballa des d'una mirada humanista i integradora per entendre la persona com un tot. Acompanya especialment processos d'ansietat, crisi vital, identitat i relacions.",
    "quisom.carmen.name": "Carmen Estévez",
    "quisom.carmen.role": "Psicòloga i cofundadora",
    "quisom.carmen.col": "Col. 18180",
    "quisom.carmen.specs": "Sistèmica · Psicoteràpia individual · Família i parella",
    "quisom.carmen.credential1": "Psicòloga General Sanitària",
    "quisom.carmen.credential2": "Màster en Psicologia Clínica i de la Salut · UB",
    "quisom.carmen.credential3": "Experiència professional a Parèntesi Psicologia",
    "quisom.carmen.bio": "Treballa des d'una mirada sistèmica i integradora, atenta a la història, els vincles i els contextos que donen sentit al malestar. Acompanya processos individuals, familiars i de parella.",
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
    "serveis.cta": "Sol·licita una primera visita",
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
    "enfocament.cta": "Sol·licita una primera visita",
    // Blog
    "blog.title": "Últims articles",
    "blog.readmore": "Llegir més",
    "blog.seeall": "Veure tots els articles",
    // Contacte
    "contacte.title": "Sol·licita una primera visita",
    "contacte.subtitle": "Escriu-nos per explicar-nos què necessites. La Carmen o l'Esteve atendran personalment la teva consulta.",
    "contacte.nom": "Nom",
    "contacte.email": "Correu electrònic",
    "contacte.missatge": "Missatge",
    "contacte.submit": "Sol·licita una primera visita",
    "contacte.sent": "Sol·licitud rebuda ✓",
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
    "nav.cta": "Solicita una primera visita",
    // Hero
    "hero.title": "Un espacio para ti.",
    "hero.title.main": "Un espacio",
    "hero.title.accent": "para ti.",
    "hero.subtitle": "No estás solo/a en esto. Te acompañamos a recuperar tu equilibrio emocional, a tu ritmo. Psicólogos en Sant Pau, Barcelona.",
    "hero.cta1": "Solicita una primera visita",
    "hero.cta2": "Conócenos",
    "hero.reassurance": "Si lo necesitas, antes de empezar podemos hacer una conversación informativa de 30 minutos sin coste.",
    // Qui som
    "quisom.title": "Quiénes somos",
    "quisom.subtitle": "Carmen y Esteve dirigen personalmente Espai Emocions. Psicología basada en la evidencia, experiencia clínica y una relación terapéutica cercana.",
    "quisom.esteve.name": "Esteve Planadecursach",
    "quisom.esteve.role": "Psicólogo y cofundador",
    "quisom.esteve.col": "Col. 21691",
    "quisom.esteve.specs": "Humanista · Crisis vitales e identidad · Terapia de pareja",
    "quisom.esteve.credential1": "Licenciado en Psicología · Universidad de Barcelona",
    "quisom.esteve.credential2": "Máster en Sexología y Terapia de Pareja",
    "quisom.esteve.credential3": "Experiencia profesional en Quantum Psicología",
    "quisom.esteve.bio": "Trabaja desde una mirada humanista e integradora para comprender a la persona como un todo. Acompaña especialmente procesos de ansiedad, crisis vital, identidad y relaciones.",
    "quisom.carmen.name": "Carmen Estévez",
    "quisom.carmen.role": "Psicóloga y cofundadora",
    "quisom.carmen.col": "Col. 18180",
    "quisom.carmen.specs": "Sistémica · Psicoterapia individual · Familia y pareja",
    "quisom.carmen.credential1": "Psicóloga General Sanitaria",
    "quisom.carmen.credential2": "Máster en Psicología Clínica y de la Salud · UB",
    "quisom.carmen.credential3": "Experiencia profesional en Parèntesi Psicologia",
    "quisom.carmen.bio": "Trabaja desde una mirada sistémica e integradora, atenta a la historia, los vínculos y los contextos que dan sentido al malestar. Acompaña procesos individuales, familiares y de pareja.",
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
    "serveis.cta": "Solicita una primera visita",
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
    "enfocament.cta": "Solicita una primera visita",
    // Blog
    "blog.title": "Últimos artículos",
    "blog.readmore": "Leer más",
    "blog.seeall": "Ver todos los artículos",
    // Contacte
    "contacte.title": "Solicita una primera visita",
    "contacte.subtitle": "Escríbenos para explicarnos qué necesitas. Carmen o Esteve atenderán personalmente tu consulta.",
    "contacte.nom": "Nombre",
    "contacte.email": "Correo electrónico",
    "contacte.missatge": "Mensaje",
    "contacte.submit": "Solicita una primera visita",
    "contacte.sent": "Solicitud recibida ✓",
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


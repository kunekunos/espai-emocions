import { landings, type Landing } from "@/lib/landings";
import Image from "next/image";
import { TrackedLink } from "./TrackedLink";
import { OpenAIAdsPixel } from "./OpenAIAdsPixel";
import styles from "./LandingPage.module.css";

const phone = "+34 614 629 670";
const whatsapp = "https://wa.me/34614629670";

function c(...classNames: string[]) {
  return classNames
    .flatMap((className) => className.split(/\s+/))
    .filter(Boolean)
    .map((className) => styles[className] ?? className)
    .join(" ");
}

const therapists = {
  esteve: [{ name: "Esteve Planadecursach", role: "Psicólogo y cofundador · Col. 21691", image: "/images/esteve.webp", focus: "Enfoque humanista e integrador" }],
  carmen: [{ name: "Carmen Estévez", role: "Psicóloga General Sanitaria y cofundadora · Col. 18180", image: "/images/carmen.webp", focus: "Enfoque sistémico e integrador" }],
  both: [
    { name: "Carmen Estévez", role: "Psicóloga General Sanitaria y cofundadora · Col. 18180", image: "/images/carmen.webp", focus: "Enfoque sistémico e integrador" },
    { name: "Esteve Planadecursach", role: "Psicólogo y cofundador · Col. 21691", image: "/images/esteve.webp", focus: "Enfoque humanista e integrador" }
  ]
};

const relatedMap: Record<string, string[]> = {
  "psicologo-barcelona": ["terapia-ansiedad-barcelona", "terapia-autoestima-barcelona", "crisis-vital-barcelona"],
  "psicologo-sant-pau": ["psicologo-barcelona", "terapia-pareja-barcelona", "terapia-familiar-barcelona"],
  "terapia-ansiedad-barcelona": ["estres-laboral-burnout-barcelona", "terapia-autoestima-barcelona", "psicologo-barcelona"],
  "terapia-pareja-barcelona": ["terapia-familiar-barcelona", "terapia-autoestima-barcelona", "psicologo-barcelona"],
  "terapia-autoestima-barcelona": ["terapia-ansiedad-barcelona", "crisis-vital-barcelona", "psicoterapia-online"],
  "terapia-duelo-barcelona": ["crisis-vital-barcelona", "terapia-familiar-barcelona", "psicoterapia-online"],
  "crisis-vital-barcelona": ["terapia-duelo-barcelona", "terapia-autoestima-barcelona", "psicologo-barcelona"],
  "estres-laboral-burnout-barcelona": ["terapia-ansiedad-barcelona", "crisis-vital-barcelona", "psicoterapia-online"],
  "terapia-familiar-barcelona": ["terapia-pareja-barcelona", "terapia-duelo-barcelona", "psicologo-sant-pau"],
  "psicoterapia-online": ["psicologo-barcelona", "terapia-ansiedad-barcelona", "terapia-pareja-barcelona"]
};

function WhatsAppLink({ landing, className = "button button-primary", label = "Solicitar una primera conversación" }: { landing: Landing; className?: string; label?: string }) {
  const href = whatsapp + "?text=" + encodeURIComponent(landing.whatsappText);
  return (
    <TrackedLink
      href={href}
      className={c(className)}
      contactMethod="whatsapp"
      landingSlug={landing.slug}
      aria-label="Solicitar una primera conversación por WhatsApp"
    >
      {label} <span aria-hidden="true">→</span>
    </TrackedLink>
  );
}

export function LandingPage({ landing }: { landing: Landing }) {
  const selectedTherapists = therapists[landing.therapist];
  const relatedLandings = (relatedMap[landing.slug] ?? [])
    .map((slug) => landings.find((item) => item.slug === slug))
    .filter((item): item is Landing => Boolean(item));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Psychologist",
        name: "Espai Emocions",
        url: "https://espaiemocions.es/" + landing.slug,
        telephone: "+34614629670",
        email: "eplanaso@gmail.com",
        address: { "@type": "PostalAddress", streetAddress: "Carrer de la Indústria, 220, Entresòl", addressLocality: "Barcelona", postalCode: "08026", addressCountry: "ES" }
      },
      {
        "@type": "Service",
        name: landing.eyebrow,
        description: landing.seoDescription,
        provider: { "@type": "Psychologist", name: "Espai Emocions" },
        areaServed: "Barcelona",
        offers: { "@type": "Offer", price: "70", priceCurrency: "EUR" }
      },
      { "@type": "FAQPage", mainEntity: landing.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }
    ]
  };

  return (
    <>
      {landing.slug === "psicologo-barcelona" ? <OpenAIAdsPixel /> : null}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className={styles.landingRoot} lang="es">
      <header className={c("site-header")}>
        <a className={c("brand")} href="https://espaiemocions.es" aria-label="Espai Emocions, página principal">
          <Image src="/images/logo.png" alt="" width={34} height={34} />
          <span>Espai Emocions</span>
        </a>
        <WhatsAppLink landing={landing} className={c("header-contact")} label="Primera conversación" />
      </header>

      <main>
        <section className={c("hero")}>
          <div className={c("hero-image")} aria-hidden="true"><Image src="/images/hero-despatx.webp" alt="" fill priority sizes="100vw" /></div>
          <div className={c("hero-wash")} />
          <div className={c("shell hero-content")}>
            <p className={c("eyebrow")}>{landing.eyebrow}</p>
            <h1>{landing.title} <em>{landing.titleAccent}</em></h1>
            <p className={c("hero-lead")}>{landing.lead}</p>
            <div className={c("hero-actions")}>
              <WhatsAppLink landing={landing} />
              <a href="#como-empezar" className={c("button button-secondary")}>Ver cómo funciona</a>
            </div>
            <p className={c("contact-note")}>30 minutos informativos sin coste, si los necesitas · Te responderá personalmente Carmen o Esteve en menos de 24 h laborables.</p>
            <div className={c("trust-line")} aria-label="Información clave">
              <span><i>✓</i> Sesiones de 60 min</span>
              <span><i>✓</i> 70 € por sesión</span>
              <span><i>✓</i> Presencial u online</span>
            </div>
          </div>
        </section>

        <section className={c("intro-strip")}>
          <div className={c("shell intro-grid")}>
            <p className={c("section-label")}>¿Es para mí?</p>
            <p className={c("intro-copy")}>{landing.audience}</p>
          </div>
        </section>

        <section className={c("early-trust")}>
          <div className={c("shell early-trust-grid")}>
            <div className={c("early-faces")}>
              {selectedTherapists.map((therapist) => <Image key={therapist.name} src={therapist.image} alt={therapist.name} width={78} height={78} />)}
            </div>
            <div>
              <p className={c("section-label")}>Atención personal desde el primer contacto</p>
              <h2>{selectedTherapists.length === 1 ? selectedTherapists[0].name : "Carmen y Esteve"} te acompañarán en el proceso.</h2>
              <p>{landing.therapistReason}</p>
            </div>
            <div className={c("early-credentials")}>
              <span><strong>+15</strong> años de experiencia</span>
              <span><strong>+500</strong> personas acompañadas</span>
            </div>
          </div>
        </section>

        <section className={c("section shell split-section")}>
          <div className={c("section-copy")}>
            <p className={c("section-label")}>Lo que puede estar pasando</p>
            <h2>{landing.signalsTitle}</h2>
            <p>{landing.signalsIntro}</p>
          </div>
          <ul className={c("signal-list")}>
            {landing.signals.map((signal, index) => <li key={signal}><span>0{index + 1}</span>{signal}</li>)}
          </ul>
        </section>

        <section className={c("section warm-section")}>
          <div className={c("shell")}>
            <div className={c("center-heading")}>
              <p className={c("section-label")}>Cómo trabajaremos</p>
              <h2>{landing.helpTitle}</h2>
              <p>{landing.helpIntro}</p>
            </div>
            <div className={c("outcome-grid")}>
              {landing.outcomes.map((outcome, index) => <article key={outcome}><span aria-hidden="true">{index + 1}</span><p>{outcome}</p></article>)}
            </div>
          </div>
        </section>

        <section id="como-empezar" className={c("section shell practical-section")}>
          <div className={c("practical-heading")}>
            <p className={c("section-label")}>Información práctica</p>
            <h2>Todo lo importante antes de empezar.</h2>
            <p>Queremos que puedas decidir con información clara, sin sorpresas y sin tener que preguntar por cada detalle.</p>
          </div>
          <div className={c("facts-grid")}>
            <article><span>01</span><h3>Duración y precio</h3><p>Cada sesión dura 60 minutos y tiene un precio de 70 €.</p></article>
            <article><span>02</span><h3>Frecuencia</h3><p>Las tres primeras sesiones suelen ser semanales. Después las espaciamos según el caso, la evolución y la gravedad del malestar.</p></article>
            <article><span>03</span><h3>Conversación informativa</h3><p>Sirve para explicarte cómo funcionamos y valorar si lo que necesitas encaja con lo que podemos ofrecerte. No es una sesión de terapia.</p></article>
            <article><span>04</span><h3>Cancelaciones</h3><p>Puedes cancelar por WhatsApp, correo o teléfono. Con 24 horas o más de antelación no se cobra; con menos de 24 horas se abona el importe íntegro.</p></article>
            <article><span>05</span><h3>Sesiones online</h3><p>Nos vemos por videollamada. Antes de la cita te enviamos un enlace de Google Meet para conectarte a la hora acordada.</p></article>
            <article><span>06</span><h3>Respuesta personal</h3><p>Carmen o Esteve responderán a tu consulta en horario laboral en menos de 24 horas.</p></article>
          </div>
          <div className={c("start-flow")}>
            <article><span>1</span><div><h3>Nos cuentas qué necesitas</h3><p>No hace falta que sepas explicarlo todo de golpe.</p></div></article>
            <article><span>2</span><div><h3>Valoramos si podemos ayudarte</h3><p>Te explicamos el proceso y resolvemos tus dudas.</p></div></article>
            <article><span>3</span><div><h3>Empezamos a tu ritmo</h3><p>Acordamos objetivos y modalidad, presencial u online.</p></div></article>
          </div>
        </section>

        <section className={c("section shell faq-section")}>
          <div className={c("faq-heading")}><p className={c("section-label")}>Preguntas frecuentes</p><h2>Lo que quizá quieras saber antes de escribirnos.</h2></div>
          <div className={c("faqs")}>
            {landing.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}
          </div>
        </section>

        <section className={c("related-section")}>
          <div className={c("shell")}>
            <div className={c("related-heading")}><p className={c("section-label")}>También podemos ayudarte con</p><h2>Otros motivos de consulta relacionados.</h2></div>
            <div className={c("related-grid")}>
              {relatedLandings.map((item) => <a key={item.slug} href={"/" + item.slug}><span>{item.eyebrow}</span><strong>Ver información →</strong></a>)}
            </div>
          </div>
        </section>

        <section id="contacto" className={c("contact-section")}>
          <div className={c("shell contact-card")}>
            <div>
              <p className={c("section-label")}>Puedes empezar sin tenerlo todo claro</p>
              <h2>Cuéntanos qué necesitas. Carmen o Esteve te responderán personalmente.</h2>
              <p>La conversación informativa de 30 minutos no tiene coste: te explicaremos cómo funcionamos y valoraremos si tu necesidad encaja con lo que podemos ofrecerte.</p>
              <p className={c("response-note")}>Respondemos en horario laboral en menos de 24 horas.</p>
            </div>
            <div className={c("contact-actions")}>
              <WhatsAppLink landing={landing} className={c("button button-light")} />
              <TrackedLink href="tel:+34614629670" contactMethod="phone" landingSlug={landing.slug}>Llamar al {phone}</TrackedLink>
              <TrackedLink href="mailto:eplanaso@gmail.com" contactMethod="email" landingSlug={landing.slug}>eplanaso@gmail.com</TrackedLink>
              <p className={c("privacy-note")}>Al contactar, trataremos tus datos únicamente para responder a tu consulta. Consulta nuestra <a href="https://espaiemocions.es/privacidad">política de privacidad</a>.</p>
            </div>
          </div>
          <p className={c("emergency-note")}>WhatsApp, correo y teléfono de consulta no son canales de atención urgente. Si existe un riesgo inmediato, contacta con los servicios de emergencia.</p>
        </section>
      </main>

      <footer className={c("landing-footer")}>
        <div className={c("shell footer-grid")}>
          <div><strong>Espai Emocions</strong><p>Centro de psicología en Sant Pau · Barcelona</p></div>
          <div><strong>Consulta</strong><p>Carrer de la Indústria, 220, Entresòl<br />08026 Barcelona</p></div>
          <div><strong>Horario</strong><p>Lunes a viernes<br />9:00 – 20:00</p></div>
        </div>
        <div className={c("shell footer-bottom")}>
          <span>© 2026 Espai Emocions</span>
          <div><a href="https://espaiemocions.es/privacidad">Privacidad</a><a href="https://espaiemocions.es">Web principal</a></div>
        </div>
      </footer>
      <div className={c("mobile-cta")}><WhatsAppLink landing={landing} /></div>
      </div>
    </>
  );
}

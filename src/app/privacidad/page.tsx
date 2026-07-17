import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacidad del formulario",
  description: "Información sobre el tratamiento de datos del formulario de Espai Emocions.",
  robots: { index: false, follow: true },
};

const controller = process.env.PRIVACY_CONTROLLER_NAME?.trim();
const controllerId = process.env.PRIVACY_CONTROLLER_ID?.trim();
const postalAddress = process.env.PRIVACY_POSTAL_ADDRESS?.trim();
const privacyEmail = process.env.PRIVACY_CONTACT_EMAIL?.trim();
const processors = process.env.PRIVACY_PROCESSORS?.trim();
const transfers = process.env.PRIVACY_TRANSFERS?.trim();
const ready =
  process.env.PRIVACY_NOTICE_READY === "true" &&
  Boolean(controller && controllerId && postalAddress && privacyEmail && processors && transfers);

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 px-6 pb-24 pt-32 sm:px-8">
        <article className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">
            Espai Emocions
          </p>
          <h1 className="mt-3 font-heading text-4xl font-light text-foreground sm:text-5xl">
            Privacidad del formulario
          </h1>

          {!ready ? (
            <div className="mt-10 rounded-2xl border border-primary/30 bg-primary/10 p-6">
              <h2 className="font-heading text-2xl text-foreground">Información pendiente de validación</h2>
              <p className="mt-3 leading-relaxed text-foreground/75">
                El formulario web permanece desactivado hasta que Carmen y Esteve confirmen la
                identidad jurídica del responsable, el contacto de privacidad, los proveedores y
                las posibles transferencias. Mientras tanto puedes contactar por WhatsApp o teléfono.
              </p>
              <Link href="/#contacte" className="mt-5 inline-flex font-medium text-primary underline underline-offset-4">
                Ver canales de contacto
              </Link>
            </div>
          ) : (
            <div className="mt-10 space-y-10 leading-relaxed text-foreground/75">
              <section>
                <h2 className="font-heading text-2xl text-foreground">Información básica</h2>
                <dl className="mt-5 grid gap-4 rounded-2xl border border-border/50 bg-card p-6 sm:grid-cols-[10rem_1fr]">
                  <dt className="font-medium text-foreground">Responsable</dt>
                  <dd>{controller} · {controllerId}</dd>
                  <dt className="font-medium text-foreground">Finalidad</dt>
                  <dd>Atender tu solicitud de información o de primera visita y responder por el canal que elijas.</dd>
                  <dt className="font-medium text-foreground">Legitimación</dt>
                  <dd>Aplicación de medidas precontractuales solicitadas por ti y, cuando corresponda, tu consentimiento.</dd>
                  <dt className="font-medium text-foreground">Destinatarios</dt>
                  <dd>{processors}</dd>
                  <dt className="font-medium text-foreground">Derechos</dt>
                  <dd>Puedes solicitar acceso, rectificación, supresión, oposición, limitación y portabilidad mediante {privacyEmail}.</dd>
                </dl>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-foreground">Datos tratados y finalidad</h2>
                <p className="mt-3">
                  Tratamos los datos identificativos y de contacto que introduzcas, tu preferencia de
                  contacto, el servicio y modalidad que selecciones y, si decides escribirlo, un motivo
                  general de consulta. También conservamos datos de atribución no clínicos, como la campaña
                  o página de entrada, para evaluar qué vías de información resultan útiles.
                </p>
                <p className="mt-3">
                  No utilices el formulario para compartir diagnósticos, medicación, informes ni una historia
                  clínica detallada. El formulario no es un servicio de urgencias ni sustituye una valoración profesional.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-foreground">Conservación</h2>
                <p className="mt-3">
                  Los datos se conservarán durante el tiempo necesario para atender la solicitud y, después,
                  durante los plazos imprescindibles para atender posibles responsabilidades legales. Si se
                  inicia una relación asistencial, la información clínica se regirá por su documentación y
                  plazos específicos, no por este formulario.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-foreground">Proveedores y transferencias</h2>
                <p className="mt-3"><strong>Proveedores:</strong> {processors}</p>
                <p className="mt-3"><strong>Transferencias internacionales:</strong> {transfers}</p>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-foreground">Cómo ejercer tus derechos</h2>
                <p className="mt-3">
                  Puedes escribir a {privacyEmail} o dirigirte por correo postal a {postalAddress}. También
                  puedes presentar una reclamación ante la Agencia Española de Protección de Datos.
                </p>
                <a
                  href="https://www.aepd.es/derechos-y-deberes/ejerce-tus-derechos"
                  className="mt-3 inline-flex text-primary underline underline-offset-4"
                >
                  Información oficial de la AEPD sobre tus derechos
                </a>
              </section>

              <p className="border-t border-border/50 pt-6 text-sm text-foreground/60">
                Responsable: {controller} · {controllerId} · {postalAddress} · {privacyEmail}
              </p>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}


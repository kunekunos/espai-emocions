import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const SERVICES = new Set(["individual", "couple", "family", "information", "other"]);
const MODALITIES = new Set(["presential", "online", "either"]);
const PREFERENCES = new Set(["email", "phone", "whatsapp"]);
const LANGUAGES = new Set(["CA", "ES"]);

function asText(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function acquisitionFrom(value: unknown) {
  const source = value && typeof value === "object" ? (value as Record<string, unknown>) : {};
  return {
    utmSource: asText(source.utmSource, 120),
    utmMedium: asText(source.utmMedium, 120),
    utmCampaign: asText(source.utmCampaign, 120),
    utmContent: asText(source.utmContent, 120),
    referrer: asText(source.referrer, 300),
    landingPath: asText(source.landingPath, 300),
  };
}

function json(body: object, status: number) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function allowedOrigins() {
  const configured = (process.env.ALLOWED_CONTACT_ORIGINS ?? "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
  const vercelOrigin = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null;
  return new Set(vercelOrigin ? [...configured, vercelOrigin] : configured);
}

export async function POST(request: NextRequest) {
  if (
    process.env.CONTACT_FORM_ENABLED !== "true" ||
    process.env.PRIVACY_NOTICE_READY !== "true"
  ) {
    return json({ ok: false, code: "form_disabled" }, 503);
  }

  const requestId = randomUUID();
  const contentType = request.headers.get("content-type") ?? "";
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (!contentType.startsWith("application/json")) return json({ ok: false }, 415);
  if (contentLength > 20_000) return json({ ok: false }, 413);

  const origin = request.headers.get("origin");
  if (process.env.NODE_ENV === "production" && (!origin || !allowedOrigins().has(origin))) {
    return json({ ok: false }, 403);
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false }, 400);
  }

  // Honeypot. A bot sees a neutral success response, but no message is delivered.
  if (asText(body.website, 200)) return json({ ok: true, requestId }, 200);

  const name = asText(body.name, 80);
  const email = asText(body.email, 160).toLowerCase();
  const phone = asText(body.phone, 30);
  const contactPreference = asText(body.contactPreference, 20);
  const service = asText(body.service, 30);
  const modality = asText(body.modality, 30);
  const message = asText(body.message, 600);
  const language = asText(body.language, 2);
  const consent = body.consent === true;
  const acquisition = acquisitionFrom(body.acquisition);

  const validEmail = !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validPhone = !phone || /^[+()\d\s.-]{6,30}$/.test(phone);
  const preferredContactExists = contactPreference === "email" ? Boolean(email) : Boolean(phone);

  if (
    name.length < 2 ||
    !validEmail ||
    !validPhone ||
    !PREFERENCES.has(contactPreference) ||
    !SERVICES.has(service) ||
    !MODALITIES.has(modality) ||
    !LANGUAGES.has(language) ||
    !preferredContactExists ||
    !consent
  ) {
    return json({ ok: false, code: "invalid_request" }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !from || !to) {
    console.error("contact_delivery_not_configured", { requestId });
    return json({ ok: false, code: "delivery_not_configured" }, 503);
  }

  const emailBody = [
    "Nueva solicitud desde espaiemocions.es",
    `Referencia: ${requestId}`,
    `Fecha UTC: ${new Date().toISOString()}`,
    "",
    `Nombre: ${name}`,
    `Correo: ${email || "No indicado"}`,
    `Teléfono: ${phone || "No indicado"}`,
    `Preferencia de contacto: ${contactPreference}`,
    `Servicio: ${service}`,
    `Modalidad: ${modality}`,
    `Idioma: ${language}`,
    `Motivo general: ${message || "No indicado"}`,
    "",
    "Atribución sin datos clínicos",
    `utm_source: ${acquisition.utmSource || "—"}`,
    `utm_medium: ${acquisition.utmMedium || "—"}`,
    `utm_campaign: ${acquisition.utmCampaign || "—"}`,
    `utm_content: ${acquisition.utmContent || "—"}`,
    `Página de entrada: ${acquisition.landingPath || "—"}`,
    `Referente: ${acquisition.referrer || "—"}`,
    "",
    "La persona ha marcado la aceptación de la política de privacidad.",
  ].join("\n");

  let delivery: Response;
  try {
    delivery = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": requestId,
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `[Web Espai Emocions] Solicitud de primera visita · ${service}`,
        text: emailBody,
        ...(email ? { reply_to: email } : {}),
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });
  } catch {
    console.error("contact_delivery_unavailable", { requestId });
    return json({ ok: false, code: "delivery_failed" }, 502);
  }

  if (!delivery.ok) {
    console.error("contact_delivery_failed", { requestId, status: delivery.status });
    return json({ ok: false, code: "delivery_failed" }, 502);
  }

  return json({ ok: true, requestId }, 200);
}

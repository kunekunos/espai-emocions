type LeadEvent = {
  service: string;
  modality: string;
  contactPreference: string;
  requestId?: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackGenerateLead(event: LeadEvent) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "generate_lead", {
    service: event.service,
    modality: event.modality,
    contact_preference: event.contactPreference,
    request_id: event.requestId,
  });
}

export function trackContactClick(channel: "whatsapp" | "phone" | "email") {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "contact_click", {
    channel,
    placement: "contact_section",
  });
}


export function trackCtaClick(placement: "hero") {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "cta_click", {
    placement,
    destination: "contact_section",
  });
}

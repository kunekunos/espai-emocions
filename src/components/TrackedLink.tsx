"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  contactMethod: "whatsapp" | "phone" | "email";
  landingSlug: string;
};

export function TrackedLink({ contactMethod, landingSlug, onClick, href, ...props }: Props) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const query = new URLSearchParams(window.location.search);
    window.gtag?.("event", "generate_lead", {
      method: contactMethod,
      landing_slug: landingSlug,
      link_url: typeof href === "string" ? href : "",
      utm_source: query.get("utm_source") ?? "(direct)",
      utm_medium: query.get("utm_medium") ?? "(none)",
      utm_campaign: query.get("utm_campaign") ?? "(not set)"
    });
    onClick?.(event);
  }

  return <a href={href} data-contact-method={contactMethod} onClick={handleClick} {...props} />;
}

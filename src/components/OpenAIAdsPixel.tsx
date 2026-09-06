"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const CONSENT_KEY = "espai_emocions_ads_measurement_consent";
const PIXEL_ID = "QAn2yA6TagqoPFMhf8SUkD";

declare global {
  interface Window {
    oaiq?: (...args: unknown[]) => void;
  }
}

type ConsentChoice = "granted" | "denied" | null;

export function OpenAIAdsPixel() {
  const [choice, setChoice] = useState<ConsentChoice>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    window.setTimeout(() => {
      let stored: string | null = null;
      try {
        stored = window.localStorage.getItem(CONSENT_KEY);
      } catch {
        // La medición permanece desactivada si el navegador bloquea el almacenamiento.
      }
      setChoice(stored === "granted" || stored === "denied" ? stored : null);
      setReady(true);
    }, 0);
  }, []);

  function choose(nextChoice: Exclude<ConsentChoice, null>) {
    try {
      window.localStorage.setItem(CONSENT_KEY, nextChoice);
    } catch {
      // La elección sigue aplicándose durante la sesión actual.
    }
    window.oaiq?.("consent", nextChoice === "granted");
    setChoice(nextChoice);
  }

  function reviewChoice() {
    try {
      window.localStorage.removeItem(CONSENT_KEY);
    } catch {
      // La revocación se aplica igualmente durante la sesión actual.
    }
    window.oaiq?.("consent", false);
    setChoice(null);
  }

  return (
    <>
      <Script id="openai-ads-measurement" strategy="afterInteractive">
        {`
          (function(w,d,s,u){
            if(!w.oaiq){
              var q=function(){q.q.push(arguments)};
              q.q=[];
              w.oaiq=q;
              var j=d.createElement(s);
              j.async=true;
              j.src=u;
              var f=d.getElementsByTagName(s)[0];
              f.parentNode.insertBefore(j,f);
            }
            var allowed=false;
            try { allowed=localStorage.getItem("${CONSENT_KEY}")==="granted"; } catch(e) {}
            w.oaiq("consent",allowed);
            w.oaiq("init",{pixelId:"${PIXEL_ID}"});
          })(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");
        `}
      </Script>

      {ready && choice === null ? (
        <aside
          aria-label="Preferencias de medición publicitaria"
          style={{
            position: "fixed",
            zIndex: 1000,
            right: "1rem",
            bottom: "1rem",
            maxWidth: "26rem",
            border: "1px solid rgba(255,255,255,.18)",
            borderRadius: "1rem",
            background: "#25201d",
            color: "#fffdfb",
            padding: "1rem",
            boxShadow: "0 16px 48px rgba(0,0,0,.28)",
          }}
        >
          <p style={{ margin: 0, fontSize: ".9rem", lineHeight: 1.55 }}>
            ¿Nos permites medir si este anuncio genera solicitudes de contacto? OpenAI recibirá
            datos de atribución y el tipo de clic, pero no el contenido de tu consulta.
          </p>
          <div style={{ display: "flex", gap: ".65rem", marginTop: ".85rem", justifyContent: "flex-end" }}>
            <button
              type="button"
              onClick={() => choose("denied")}
              style={{ border: "1px solid rgba(255,255,255,.35)", borderRadius: "999px", background: "transparent", color: "inherit", padding: ".55rem .9rem", cursor: "pointer" }}
            >
              Rechazar
            </button>
            <button
              type="button"
              onClick={() => choose("granted")}
              style={{ border: 0, borderRadius: "999px", background: "#fffdfb", color: "#25201d", padding: ".55rem .9rem", cursor: "pointer", fontWeight: 600 }}
            >
              Permitir medición
            </button>
          </div>
        </aside>
      ) : ready ? (
        <button
          type="button"
          onClick={reviewChoice}
          style={{
            position: "fixed",
            zIndex: 999,
            left: ".75rem",
            bottom: ".75rem",
            border: "1px solid rgba(37,32,29,.22)",
            borderRadius: "999px",
            background: "rgba(255,253,251,.92)",
            color: "#25201d",
            padding: ".4rem .7rem",
            fontSize: ".72rem",
            cursor: "pointer",
          }}
        >
          Privacidad de anuncios
        </button>
      ) : null}
    </>
  );
}

"use client";

import { useEffect, useRef } from "react";

export default function ScrollWorld() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const posterRef = useRef<HTMLImageElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const poster = posterRef.current;
    const scrollHint = scrollHintRef.current;
    if (!video || !poster) return;

    let videoReady = false;
    let videoDuration = 5.0;
    let ticking = false;

    const stills = document.querySelectorAll<HTMLElement>(".scene-still");
    const sections = document.querySelectorAll<HTMLElement>(".scene-section");
    const dots = document.querySelectorAll<HTMLElement>(".progress-dot");
    const numScenes = sections.length;

    const onLoadedMetadata = () => {
      videoDuration = video.duration || 5.0;
      videoReady = true;
      video.pause();
      video.currentTime = 0;
      poster.style.opacity = "0";
    };

    const getScrollProgress = () => {
      const sw = document.querySelector(".scroll-world") as HTMLElement;
      if (!sw) return 0;
      const total = sw.offsetHeight - window.innerHeight;
      if (total <= 0) return 0;
      return Math.max(0, Math.min(1, window.scrollY / total));
    };

    const getCurrentScene = () => {
      return Math.min(
        numScenes - 1,
        Math.floor(getScrollProgress() * numScenes)
      );
    };

    const update = () => {
      ticking = false;
      const progress = getScrollProgress();
      const sceneIndex = getCurrentScene();
      const sceneProgress = progress * numScenes - sceneIndex;

      // Scene 1: Video scrub
      if (sceneIndex === 0 && videoReady) {
        const t = Math.min(videoDuration - 0.01, sceneProgress * videoDuration);
        try {
          video.currentTime = t;
        } catch {}
        video.style.opacity = "1";
        poster.style.opacity = "0";
        const scale = 1.08 + sceneProgress * 0.04;
        video.style.transform = `translate(-50%,-50%) scale(${scale})`;
      } else {
        if (videoReady) {
          try {
            video.currentTime = videoDuration - 0.05;
          } catch {}
        }
        video.style.opacity = sceneIndex === 0 ? "1" : "0";
        video.style.transition = "opacity 0.6s ease";
      }

      // Scenes 2-4: Still visibility + parallax
      stills.forEach((still) => {
        const si = parseInt(still.dataset.scene || "0");
        if (si === sceneIndex) {
          still.classList.add("active");
          const scale = 1.08 + sceneProgress * 0.07;
          const ty = -sceneProgress * 20;
          still.style.transform = `translate(-50%,-50%) scale(${scale}) translateY(${ty}px)`;
        } else {
          still.classList.remove("active");
        }
      });

      // Content reveal
      sections.forEach((section, i) => {
        const content = section.querySelector(".scene-content");
        if (!content) return;
        if (i === sceneIndex) {
          if (sceneProgress > 0.15 && sceneProgress < 0.85) {
            content.classList.add("visible");
          } else if (sceneProgress >= 0.85) {
            content.classList.remove("visible");
          }
        } else {
          content.classList.remove("visible");
        }
      });

      // Progress dots
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === sceneIndex);
      });

      // Scroll hint
      if (scrollHint) {
        scrollHint.classList.toggle("hidden", progress > 0.02);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    // Try muted autoplay for scrub
    video.muted = true;
    video.play().then(() => {
      video.pause();
      video.currentTime = 0;
    }).catch(() => {});

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // IntersectionObserver fallback for content
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            (entry.target as HTMLElement).classList.add("visible");
          }
        });
      },
      { threshold: [0, 0.3, 0.6] }
    );
    sections.forEach((s) => {
      const c = s.querySelector(".scene-content");
      if (c) observer.observe(c);
    });

    update();

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box}
        :root{
          --terracota:#C2725A;
          --terracota-dark:#A85A44;
          --crema:#F5EDE0;
          --crema-light:#FAF6F0;
          --sage:#A8B89A;
          --sage-dark:#8A9C7C;
          --ink:#3A3230;
          --ink-soft:#6B5D57;
        }
        html{scroll-behavior:auto}
        body{background:var(--ink) !important;color:var(--crema) !important;font-family:'Inter',sans-serif !important;overflow-x:hidden;-webkit-font-smoothing:antialiased}
        .scroll-world{position:relative;width:100%}
        .scene-backdrop{position:sticky;top:0;width:100vw;height:100vh;overflow:hidden;display:flex;align-items:center;justify-content:center}
        #scene1-video{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(1.08);min-width:100%;min-height:100%;object-fit:cover;z-index:1}
        .scene-still{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(1.08);min-width:100%;min-height:100%;object-fit:cover;z-index:1;opacity:0;transition:opacity 0.8s ease,transform 0.1s linear}
        .scene-still.active{opacity:1}
        .scene-overlay{position:absolute;inset:0;z-index:2;pointer-events:none;background:linear-gradient(180deg,rgba(58,50,48,0.5) 0%,rgba(58,50,48,0.15) 30%,rgba(58,50,48,0.15) 60%,rgba(58,50,48,0.7) 100%)}
        .scene-section{position:relative;z-index:3;min-height:100vh;display:flex;align-items:center;padding:0 8vw}
        .scene-section:nth-child(odd){justify-content:flex-start}
        .scene-section:nth-child(even){justify-content:flex-end}
        .scene-content{max-width:520px;opacity:0;transform:translateY(40px);transition:opacity 0.8s ease,transform 0.8s ease}
        .scene-content.visible{opacity:1;transform:translateY(0)}
        .eyebrow{font-size:0.75rem;font-weight:500;letter-spacing:0.2em;text-transform:uppercase;color:var(--sage);margin-bottom:1.2rem}
        .headline{font-family:var(--font-fraunces),Georgia,serif;font-size:clamp(2rem,5vw,3.5rem);font-weight:500;line-height:1.1;color:var(--crema);margin-bottom:1.5rem;letter-spacing:-0.02em}
        .body-text{font-size:clamp(1rem,1.5vw,1.15rem);font-weight:300;line-height:1.6;color:rgba(245,237,224,0.85);margin-bottom:2rem}
        .pills{display:flex;flex-wrap:wrap;gap:0.6rem}
        .pill{padding:0.4rem 1rem;border:1px solid rgba(168,184,154,0.4);border-radius:999px;font-size:0.8rem;font-weight:400;color:var(--sage);background:rgba(168,184,154,0.08);backdrop-filter:blur(8px)}
        .cta-button{display:inline-flex;align-items:center;gap:0.6rem;padding:1rem 2.2rem;background:var(--terracota);color:var(--crema-light);border:none;border-radius:999px;font-size:1rem;font-weight:500;text-decoration:none;cursor:pointer;transition:background 0.3s ease,transform 0.2s ease;margin-top:0.5rem}
        .cta-button:hover{background:var(--terracota-dark);transform:translateY(-2px)}
        .cta-arrow{font-size:1.2rem;line-height:1}
        .scroll-progress{position:fixed;right:1.5rem;top:50%;transform:translateY(-50%);z-index:100;display:flex;flex-direction:column;gap:0.8rem}
        .progress-dot{width:8px;height:8px;border-radius:50%;background:rgba(245,237,224,0.25);transition:background 0.3s ease,transform 0.3s ease}
        .progress-dot.active{background:var(--sage);transform:scale(1.4)}
        .scroll-hint{position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);z-index:100;color:rgba(245,237,224,0.6);font-size:0.75rem;letter-spacing:0.1em;text-transform:uppercase;display:flex;flex-direction:column;align-items:center;gap:0.5rem;transition:opacity 0.5s ease;pointer-events:none}
        .scroll-hint.hidden{opacity:0}
        .scroll-hint::after{content:'';width:1px;height:24px;background:rgba(245,237,224,0.4);animation:scrollLine 2s ease-in-out infinite}
        @keyframes scrollLine{0%,100%{transform:scaleY(0.3);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}}
        .seo-block{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}
        @media(max-width:768px){.scene-section{padding:0 6vw}.scene-content{max-width:90vw}.scroll-progress{right:0.8rem}.scene-section:nth-child(even){justify-content:flex-start}}
        .poster-img{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(1.08);min-width:100%;min-height:100%;object-fit:cover;z-index:0;transition:opacity 0.5s ease}
      `}</style>

      {/* SEO block */}
      <div className="seo-block">
        <h1>Espai Emocions — Psicologia a Barcelona</h1>
        <p>
          Espai Emocions és un centre de psicologia a Barcelona que ofereix
          teràpia individual, teràpia de parella i acompanyament psicològic.
          Dos psicòlegs clínics especialitzats en salut mental, benestar
          emocional i teràpia. Primera sessió gratuïta. Atenció presencial i
          online.
        </p>
      </div>

      {/* Progress dots */}
      <nav className="scroll-progress" aria-label="Progress">
        <div className="progress-dot active" data-scene="0"></div>
        <div className="progress-dot" data-scene="1"></div>
        <div className="progress-dot" data-scene="2"></div>
        <div className="progress-dot" data-scene="3"></div>
      </nav>

      {/* Scroll hint */}
      <div className="scroll-hint" ref={scrollHintRef}>
        Scroll
      </div>

      {/* Backdrop */}
      <div className="scene-backdrop">
        <img
          className="poster-img"
          src="/scroll-world/videos/scene1_poster.png"
          alt=""
          ref={posterRef}
        />
        <video
          id="scene1-video"
          ref={videoRef}
          preload="auto"
          playsInline
          muted
        >
          <source src="/scroll-world/videos/scene1.mp4" type="video/mp4" />
        </video>

        <img
          className="scene-still"
          src="/scroll-world/stills/scene2_office.png"
          alt="Interior del despatx de psicologia"
          data-scene="1"
        />
        <img
          className="scene-still"
          src="/scroll-world/stills/scene3_team.png"
          alt="Dos psicòlegs fundadors d'Espai Emocions"
          data-scene="2"
        />
        <img
          className="scene-still"
          src="/scroll-world/stills/scene4_closing.png"
          alt="Tancament simbòlic de sessió de psicologia"
          data-scene="3"
        />

        <div className="scene-overlay"></div>
      </div>

      {/* Scene sections */}
      <div className="scroll-world">
        <section className="scene-section" data-scene="0">
          <div className="scene-content">
            <div className="eyebrow">Espai Emocions</div>
            <h2 className="headline">Benvingut al teu espai</h2>
            <p className="body-text">
              Un carrer de Barcelona. Una cafeteria a la cantonada, un portal,
              un cartell. A vegades, el primer pas és el que més costa. I és
              també el més important.
            </p>
            <div className="pills">
              <span className="pill">Psicologia</span>
              <span className="pill">Benestar</span>
              <span className="pill">Acompanyament</span>
            </div>
          </div>
        </section>

        <section className="scene-section" data-scene="1">
          <div className="scene-content">
            <div className="eyebrow">La consulta</div>
            <h2 className="headline">Un lloc segur per sentir</h2>
            <p className="body-text">
              Butaca verd salvia, manta crema, llum càlida de tarda. Aquí no hi
              ha pressa. Aquí pots ser exactament com estàs, sense filtres ni
              màscares.
            </p>
            <div className="pills">
              <span className="pill">Confidencial</span>
              <span className="pill">Sense judicis</span>
              <span className="pill">Al teu ritme</span>
            </div>
          </div>
        </section>

        <section className="scene-section" data-scene="2">
          <div className="scene-content">
            <div className="eyebrow">Qui som</div>
            <h2 className="headline">Dues mirades, un mateix propòsit</h2>
            <p className="body-text">
              Dos psicòlegs que escolten de veritat. Que entenen que cada
              persona és un món i que el camí no es recorre sol. Investigació,
              evidència i humanitat, en cada sessió.
            </p>
            <div className="pills">
              <span className="pill">Psicologia clínica</span>
              <span className="pill">Teràpia de parella</span>
              <span className="pill">Acompanyament individual</span>
            </div>
          </div>
        </section>

        <section className="scene-section" data-scene="3">
          <div className="scene-content">
            <div className="eyebrow">Després de la sessió</div>
            <h2 className="headline">I els pensaments s'ordenen</h2>
            <p className="body-text">
              Surts per la porta i el cap pesa una mica menys. Els fils
              embolicats troben el seu lloc. No és màgia, és psicologia. Un pas
              cada vegada. El següent pot ser avui.
            </p>
            <a
              href="mailto:hola@espaiemocions.es"
              className="cta-button"
            >
              Reserva la teva primera sessió
              <span className="cta-arrow">→</span>
            </a>
            <div className="pills" style={{ marginTop: "1.5rem" }}>
              <span className="pill">Primera sessió gratuïta</span>
              <span className="pill">Online o presencial</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
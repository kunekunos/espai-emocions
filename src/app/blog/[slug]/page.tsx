"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n";
import { articles } from "@/lib/articles";
import { articlesPart2 } from "@/lib/articles-part2";
import { articlesPart3 } from "@/lib/articles-part3";
import type { ContentBlock } from "@/lib/articles";

const allArticles = [...articles, ...articlesPart2, ...articlesPart3];

export default function BlogArticlePage() {
  const params = useParams<{ slug: string }>();
  const { lang } = useLanguage();

  const article = allArticles.find((a) => a.slug === params.slug);

  if (!article) {
    return (
      <>
        <Navbar />
        <main className="pt-20">
          <div className="py-16 px-6 text-center">
            <h1 className="text-4xl font-heading text-foreground mb-4">404</h1>
            <p className="text-foreground/70 mb-8">
              {lang === "CA" ? "Article no trobat" : "Artículo no encontrado"}
            </p>
            <a href="/blog" className="text-primary hover:text-primary/80">
              ← {lang === "CA" ? "Tornar al blog" : "Volver al blog"}
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const blocks = lang === "CA" ? article.blocksCA : article.blocksES;
  const category = lang === "CA" ? article.categoryCA : article.categoryES;
  const title = lang === "CA" ? article.titleCA : article.titleES;
  const excerpt = lang === "CA" ? article.excerptCA : article.excerptES;
  const backText = lang === "CA" ? "Tornar al blog" : "Volver al blog";
  const ctaText =
    lang === "CA"
      ? "Si sents que necessites parlar amb un professional, estem aquí per tu."
      : "Si sientes que necesitas hablar con un profesional, estamos aquí para ti.";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.titleES,
    description: article.excerptES,
    image: `https://espaiemocions.es/blog/${article.slug}.webp`,
    author: {
      "@type": "Organization",
      name: "Espai Emocions",
    },
    publisher: {
      "@type": "Organization",
      name: "Espai Emocions",
      url: "https://espaiemocions.es",
    },
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://espaiemocions.es/blog/${article.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Navbar />
      <main className="pt-20">
        <article className="py-16 px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="size-4" />
              {backText}
            </a>

            <Reveal>
              <span className="text-xs text-primary font-medium uppercase tracking-wide">
                {category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-heading font-light text-foreground mt-3 mb-4">
                {title}
              </h1>
              <p className="text-lg text-foreground/60 leading-relaxed mb-2">
                {excerpt}
              </p>
              <time className="text-sm text-foreground/40">
                {article.datePublished}
              </time>
            </Reveal>

            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl mt-8 mb-12 bg-muted">
              <Image
                src={`/blog/${article.slug}.webp`}
                alt={title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>

            <div className="mt-12 space-y-6">
              {blocks.map((block, i) => (
                <BlockRenderer key={i} block={block} index={i} />
              ))}
            </div>

            <Reveal delay={300}>
              <div className="mt-16 pt-8 border-t border-border/40 text-center">
                <p className="text-foreground/70 mb-6">{ctaText}</p>
                <a
                  href="/#contacte"
                  className="inline-flex items-center rounded-xl bg-primary text-primary-foreground px-8 py-4 text-base font-medium hover:brightness-105 transition-all duration-300"
                >
                  {lang === "CA" ? "Demana una cita" : "Pide una cita"}
                </a>
              </div>
            </Reveal>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

function BlockRenderer({ block, index }: { block: ContentBlock; index: number }) {
  const delay = Math.min(index * 50, 400);

  switch (block.type) {
    case "paragraph":
      return (
        <Reveal delay={delay}>
          <p className="text-foreground/75 leading-relaxed text-lg">
            {block.text}
          </p>
        </Reveal>
      );

    case "heading":
      return (
        <Reveal delay={delay}>
          <h2 className="text-2xl font-heading font-medium text-foreground mt-10 mb-4">
            {block.text}
          </h2>
        </Reveal>
      );

    case "subheading":
      return (
        <Reveal delay={delay}>
          <h3 className="text-xl font-heading text-foreground mt-8 mb-3">
            {block.text}
          </h3>
        </Reveal>
      );

    case "list":
      return (
        <Reveal delay={delay}>
          <ul className="space-y-2 pl-6">
            {block.items.map((item, j) => (
              <li
                key={j}
                className="text-foreground/75 leading-relaxed text-lg list-disc marker:text-primary"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      );

    case "tips":
      return (
        <div className="space-y-4 mt-8">
          {block.tips.map((tip, j) => (
            <Reveal key={j} delay={delay + j * 50}>
              <div className="bg-card rounded-2xl p-6 border border-border/40 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    {j + 1}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-heading text-foreground">
                      {tip.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {tip.desc}
                    </p>
                    <p className="text-sm text-foreground/60 leading-relaxed italic">
                      {tip.how}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      );

    case "faq":
      return (
        <div className="space-y-4 mt-8">
          {block.items.map((item, j) => (
            <Reveal key={j} delay={delay + j * 50}>
              <div className="bg-card rounded-2xl p-6 border border-border/40">
                <h3 className="text-lg font-heading text-foreground mb-2">
                  {item.question}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      );

    default:
      return null;
  }
}
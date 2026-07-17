"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n";
import { trackCtaClick } from "@/lib/analytics";
import type { ArticleMeta } from "@/lib/article-meta";
import type { ContentBlock, ArticleContent } from "@/lib/articles";

export function BlogArticleClient({
  article,
  meta,
}: {
  article: ArticleContent;
  meta: ArticleMeta;
}) {
  const { lang } = useLanguage();
  const blocks = lang === "CA" ? article.blocksCA : article.blocksES;
  const category = lang === "CA" ? meta.categoryCA : meta.categoryES;
  const title = lang === "CA" ? meta.titleCA : meta.titleES;
  const excerpt = lang === "CA" ? meta.excerptCA : meta.excerptES;
  const backText = lang === "CA" ? "Tornar al blog" : "Volver al blog";
  const ctaText =
    lang === "CA"
      ? "Si valores començar un procés, podem parlar de què necessites i veure si podem acompanyar-te."
      : "Si estás valorando empezar un proceso, podemos hablar de qué necesitas y ver si podemos acompañarte.";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.titleES,
    description: meta.excerptES,
    author: { "@type": "Organization", name: "Espai Emocions" },
    publisher: {
      "@type": "Organization",
      name: "Espai Emocions",
      url: "https://espaiemocions.es",
    },
    datePublished: meta.datePublished,
    dateModified: meta.datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://espaiemocions.es/blog/${meta.slug}`,
    },
  };

  const faqBlocks = article.blocksES.filter((block) => block.type === "faq");
  const faqJsonLd =
    faqBlocks.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqBlocks
            .flatMap((block) => (block.type === "faq" ? block.items : []))
            .map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <Navbar />
      <main className="pt-20">
        <article className="py-16 px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="size-4" />
              {backText}
            </Link>

            <Reveal>
              <span className="text-xs text-primary font-medium uppercase tracking-wide">
                {category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-heading font-light text-foreground mt-3 mb-4">
                {title}
              </h1>
              <p className="text-lg text-foreground/60 leading-relaxed mb-2">{excerpt}</p>
              <time className="text-sm text-foreground/40">{meta.datePublished}</time>
            </Reveal>

            <div className="mt-12 space-y-6">
              {blocks.map((block, index) => (
                <BlockRenderer key={index} block={block} index={index} />
              ))}
            </div>

            <Reveal delay={300}>
              <div className="mt-16 pt-8 border-t border-border/40 text-center">
                <p className="text-foreground/70 mb-6">{ctaText}</p>
                <Link
                  href="/#contacte"
                  onClick={() => trackCtaClick("blog_article")}
                  className="inline-flex items-center rounded-xl bg-primary text-primary-foreground px-8 py-4 text-base font-medium hover:brightness-105 transition-all duration-300"
                >
                  {lang === "CA" ? "Sol·licita una primera visita" : "Solicita una primera visita"}
                </Link>
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
          <p className="text-foreground/75 leading-relaxed text-lg">{block.text}</p>
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
          <h3 className="text-xl font-heading text-foreground mt-8 mb-3">{block.text}</h3>
        </Reveal>
      );
    case "list":
      return (
        <Reveal delay={delay}>
          <ul className="space-y-2 pl-6">
            {block.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
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
          {block.tips.map((tip, tipIndex) => (
            <Reveal key={tipIndex} delay={delay + tipIndex * 50}>
              <div className="bg-card rounded-2xl p-6 border border-border/40 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 flex items-center justify-center size-8 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    {tipIndex + 1}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-heading text-foreground">{tip.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{tip.desc}</p>
                    <p className="text-sm text-foreground/60 leading-relaxed italic">{tip.how}</p>
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
          {block.items.map((item, itemIndex) => (
            <Reveal key={itemIndex} delay={delay + itemIndex * 50}>
              <div className="bg-card rounded-2xl p-6 border border-border/40">
                <h3 className="text-lg font-heading text-foreground mb-2">{item.question}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      );
    default:
      return null;
  }
}


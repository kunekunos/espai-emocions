"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n";
import { articles } from "@/lib/articles";
import { articlesPart2 } from "@/lib/articles-part2";
import { articlesPart3 } from "@/lib/articles-part3";

const allArticles = [...articles, ...articlesPart2, ...articlesPart3];

export function Blog() {
  const { t, lang } = useLanguage();

  const blogArticles = allArticles.slice(0, 3).map((a) => ({
    slug: a.slug,
    category: lang === "CA" ? a.categoryCA : a.categoryES,
    title: lang === "CA" ? a.titleCA : a.titleES,
    excerpt: lang === "CA" ? a.excerptCA : a.excerptES,
  }));

  return (
    <section id="blog" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-heading font-light text-foreground">
            {t("blog.title")}
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {blogArticles.map((article, i) => (
            <Reveal key={article.slug} delay={i * 100}>
              <a
                href={`/blog/${article.slug}`}
                className="block bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-border/40 group h-full"
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-muted">
                  <Image
                    src={`/blog/${article.slug}.png`}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary font-medium uppercase tracking-wide">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-heading text-foreground mt-3 mb-3 group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                    {t("blog.readmore")}
                    <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-12" delay={300}>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-base font-medium text-primary hover:text-primary/80 transition-colors"
          >
            {t("blog.seeall")}
            <ArrowRight className="size-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
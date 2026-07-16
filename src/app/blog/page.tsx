"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/lib/i18n";
import { articleMeta as allArticles } from "@/lib/article-meta";

export default function BlogPage() {
  const { lang } = useLanguage();

  const blogArticles = allArticles.map((a) => ({
    slug: a.slug,
    category: lang === "CA" ? a.categoryCA : a.categoryES,
    title: lang === "CA" ? a.titleCA : a.titleES,
    excerpt: lang === "CA" ? a.excerptCA : a.excerptES,
    date: a.datePublished,
  }));

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-16 px-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="size-4" />
              {lang === "CA" ? "Tornar" : "Volver"}
            </Link>
            <h1 className="text-4xl sm:text-5xl font-heading font-light text-foreground mb-8">
              {lang === "CA" ? "Últims articles" : "Últimos artículos"}
            </h1>
            <div className="space-y-6">
              {blogArticles.map((article, i) => (
                <Reveal key={article.slug} delay={i * 50}>
                  <a
                    href={`/blog/${article.slug}`}
                    className="block bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-border/40 group p-8"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-primary font-medium uppercase tracking-wide">
                        {article.category}
                      </span>
                      <span className="text-xs text-foreground/30">
                        {article.date}
                      </span>
                    </div>
                    <h2 className="text-xl font-heading text-foreground mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                      {lang === "CA" ? "Llegir més" : "Leer más"}
                      <ArrowRight className="size-3.5" />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
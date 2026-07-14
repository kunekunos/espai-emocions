import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { articlesPart2 } from "@/lib/articles-part2";
import { articlesPart3 } from "@/lib/articles-part3";
import { articlesPart4 } from "@/lib/articles-part4";
import { articlesPart5 } from "@/lib/articles-part5";

const allArticles = [...articles, ...articlesPart2, ...articlesPart3, ...articlesPart4, ...articlesPart5];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://espaiemocions.es";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = allArticles.map((article) => ({
    url: `${siteUrl}/blog/${article.slug}`,
    lastModified: new Date(article.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
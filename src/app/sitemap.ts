import type { MetadataRoute } from "next";
import { allArticles } from "@/lib/all-articles";

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

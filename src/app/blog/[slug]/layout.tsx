import type { Metadata } from "next";
import { allArticles } from "@/lib/all-articles";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = allArticles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Página no encontrada",
      robots: { index: false, follow: false },
    };
  }

  const title = article.titleES;
  const description = article.excerptES;
  const url = `https://espaiemocions.es/blog/${article.slug}`;
  const imageUrl = `https://espaiemocions.es/blog/${article.slug}.webp`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Espai Emocions",
      type: "article",
      publishedTime: article.datePublished,
      locale: "es_ES",
      images: [{ url: imageUrl, width: 1536, height: 1024, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default function BlogSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

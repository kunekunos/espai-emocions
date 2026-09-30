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

  // SEO (criterio Yoast): título ≤60 caracteres y metadescripción de 120-156 caracteres.
  const rawTitle = article.titleES;
  let title = rawTitle;
  if (rawTitle.length > 60) {
    const titleCut = rawTitle.slice(0, 57).trimEnd();
    title = titleCut.slice(0, titleCut.lastIndexOf(" ")) + "…";
  }
  const rawDesc = article.excerptES || "";
  let description = rawDesc;
  if (rawDesc.length > 156) {
    // recortar por frase si cabe; si no, por palabra + elipsis, siempre ≤156 chars
    const cut = rawDesc.slice(0, 156);
    const lastDot = cut.lastIndexOf(". ");
    if (lastDot > 120) {
      description = cut.slice(0, lastDot + 1);
    } else {
      const wordCut = rawDesc.slice(0, 155).trimEnd();
      description = wordCut.slice(0, wordCut.lastIndexOf(" ")) + "…";
    }
  }
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

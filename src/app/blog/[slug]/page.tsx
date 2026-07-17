import { notFound } from "next/navigation";
import { BlogArticleClient } from "@/components/BlogArticleClient";
import { allArticles } from "@/lib/all-articles";
import { articleMeta } from "@/lib/article-meta";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return allArticles.map((article) => ({ slug: article.slug }));
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = allArticles.find((item) => item.slug === slug);
  const meta = articleMeta.find((item) => item.slug === slug);

  if (!article || !meta) {
    notFound();
  }

  return <BlogArticleClient article={article} meta={meta} />;
}

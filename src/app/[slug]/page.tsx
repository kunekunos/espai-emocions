import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/LandingPage";
import { getLanding, landings } from "@/lib/landings";

export const dynamicParams = false;

export function generateStaticParams() {
  return landings.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const landing = getLanding(slug);
  if (!landing) return {};

  const url = `https://espaiemocions.es/${landing.slug}`;

  return {
    title: { absolute: landing.seoTitle },
    description: landing.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: landing.seoTitle,
      description: landing.seoDescription,
      url,
      siteName: "Espai Emocions",
      locale: "es_ES",
      type: "website",
      images: ["/images/hero-despatx.webp"],
    },
    twitter: {
      card: "summary_large_image",
      title: landing.seoTitle,
      description: landing.seoDescription,
      images: ["/images/hero-despatx.webp"],
    },
  };
}

export default async function LandingRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const landing = getLanding(slug);

  if (!landing) notFound();

  return <LandingPage landing={landing} />;
}

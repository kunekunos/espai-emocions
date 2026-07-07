import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Psicologia i benestar emocional",
  description:
    "Articles sobre psicologia, ansietat, teràpia de parella, autoestima i benestar emocional. Consells pràctics dels psicòlegs d'Espai Emocions a Barcelona.",
  alternates: {
    canonical: "https://espaiemocions.es/blog",
  },
  openGraph: {
    title: "Blog — Espai Emocions",
    description:
      "Articles sobre psicologia, ansietat, teràpia de parella i benestar emocional. Espai Emocions, Barcelona.",
    url: "https://espaiemocions.es/blog",
    siteName: "Espai Emocions",
    type: "website",
    locale: "ca_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Espai Emocions",
    description:
      "Articles sobre psicologia i benestar emocional. Espai Emocions, Barcelona.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
import type { Metadata } from "next";
import ScrollWorld from "./scroll-world";

export const metadata: Metadata = {
  title: "Espai Emocions — Descobreix el nostre espai",
  description:
    "Un viatge pel nostre centre de psicologia a Barcelona. Un espai segur per sentir, al teu ritme. Psicologia clínica, teràpia de parella i acompanyament individual.",
  openGraph: {
    title: "Espai Emocions — Descobreix el nostre espai",
    description:
      "Un espai segur per sentir. Dos psicòlegs que escolten de veritat.",
    images: ["/scroll-world/stills/scene1_arrival.png"],
    type: "website",
  },
};

export default function Page() {
  return <ScrollWorld />;
}
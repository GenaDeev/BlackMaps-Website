import { notFound } from "next/navigation";

export async function generateMetadata() {
  return {
    title: "Black Maps | Página no encontrada",
    description:
      "La URL introducida no ha arrojado resultados dentro del sitio web de Black Maps.",
    openGraph: {
      title: "Black Maps | Página no encontrada",
      description:
        "La URL introducida no ha arrojado resultados dentro del sitio web de Black Maps.",
      images: "https://blackmaps.com.ar/image/og-nf.png",
    },
    twitter: {
      card: "summary_large_image",
      title: "Black Maps | Página no encontrada",
      description:
        "La URL introducida no ha arrojado resultados dentro del sitio web de Black Maps.",
      creator: "@maps_black",
      creatorId: "1274191176267071490",
      images: ["https://blackmaps.com.ar/image/og-nf.png"],
    },
  };
}

export default async function NotFoundPage({ params: { locale } }) {
  notFound(locale);
}

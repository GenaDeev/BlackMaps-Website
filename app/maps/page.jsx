import ClientSide from '../components/ClientSide';
import Error from '../components/ErrorMessage';
import Script from "next/script";

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Galería de Mapas",
    "description": "Explora todos los mapas de Black Maps.",
    "url": "https://blackmaps.com.ar/maps"
};


export const metadata = {
    title: "Black Maps | Galeria de Mapas",
    description: "Todos los mapas de Black Maps, archivados en una web multipagina y con filtros de busqueda. Imagenes en alta resolucipn y enlace a los posts originales.",
    keywords: ["Maps", "Twitter", "Black", "BlackMaps"],
    openGraph: {
        title: "Black Maps | Galeria de Mapas",
        description: "Todos los mapas de Black Maps, archivados en una web multipagina y con filtros de busqueda. Imagenes en alta resolucipn y enlace a los posts originales.",
        images: 'https://blackmaps.com.ar/image/og-maps.png',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Black Maps | Galeria de Mapas',
        description: 'Todos los mapas de Black Maps, archivados en una web multipagina y con filtros de busqueda. Imagenes en alta resolucipn y enlace a los posts originales.',
        creator: '@maps_black',
        creatorId: '1274191176267071490',
        images: ['https://blackmaps.com.ar/image/og-maps.png'],
    },
    alternates: {
        canonical: 'https://blackmaps.com.ar/maps',
    }
};

export default function MapsPage() {

    return (
        <>
            <Script
                id="col-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />
            <main className="flex flex-col">
                <div className="pt-20 px-12 sm:px-20 my-12 items-center flex flex-col gap-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        Black Maps - Galería de Mapas
                    </h1>
                    <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl">
                        Explora una recopilación exhaustiva de todos los mapas que han sido compartidos por la vibrante comunidad de Mapitas Negros desde los albores de su cuenta hasta la fecha presente. Desde fascinantes diagramas urbanos hasta intrincadas representaciones cartográficas, esta galería ofrece una ventana única hacia la diversidad de narrativas geoespaciales que han surgido en el universo de los Mapitas Negros.
                    </h2>
                    <Error type="warning" message="Atención: Esta página se encuntra en desarrollo constante, por lo que los mapas más recientes no se encuentran aquí. Cuando logremos ponernos al día con la subida de mapas este mensaje habrá desaparecido. Lamentamos las Molestias." />
                    <ClientSide />
                </div>
            </main>
        </>
    )
}

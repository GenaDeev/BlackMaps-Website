import ClientSide from '../components/ClientSide';
export const metadata = {
    title: "Black Maps | Galeria de Mapas",
    description: "Todos los mapas de Black Maps, archivados en una web multipagina y con filtros de busqueda. Imagenes en alta resolucipn y enlace a los posts originales.",
    keywords: ["Maps", "Twitter", "Black", "BlackMaps"],
    openGraph: {
        title: "Black Maps | Galeria de Mapas",
        description: "Todos los mapas de Black Maps, archivados en una web multipagina y con filtros de busqueda. Imagenes en alta resolucipn y enlace a los posts originales.",
        images: 'https://blackmaps.vercel.app/og-maps.png',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Black Maps | Galeria de Mapas',
        description: 'Todos los mapas de Black Maps, archivados en una web multipagina y con filtros de busqueda. Imagenes en alta resolucipn y enlace a los posts originales.',
        creator: '@maps_black',
        creatorId: '1274191176267071490',
        images: ['https://blackmaps.vercel.app/og-maps.png'],
    },
    alternates: {
        canonical: 'https://blackmaps.vercel.app/maps',
    }
};
export default function MapsPage() {

    return (
        <main className="flex flex-col">
            <div className="pt-20 px-12 sm:px-20 my-12 items-center flex flex-col">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                    Black Maps - Galeria de Mapas
                </h1>
                <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl">
                    Todos los mapas publicados por Mapitas Negros desde la creacion
                    de su cuenta.
                </h2>
                <ClientSide />
            </div>
        </main>
    )
}
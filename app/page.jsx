import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Black Maps | Los mejores mapas, ahora online",
    description: "Black Maps Web te proporciona acceso a todos los mapas de Black Maps con la máxima calidad. Explora, descarga y disfruta de nuestros mapas únicos.",
    keywords: ["Mapas", "Twitter", "BlackMaps", "Cartografía", "Exploración"],
    openGraph: {
        title: "Black Maps | Los mejores mapas, ahora online",
        description: "Black Maps Web te proporciona acceso web a todos tus mapas favoritos permitiéndote descargarlos con la máxima calidad. Descubre un mundo de información y visualización sin precedentes.",
        images: "https://blackmaps.com.ar//image/og-home.png",
    },
    twitter: {
        card: "summary_large_image",
        title: "Black Maps | Los mejores mapas, ahora online",
        description: "Black Maps Web te proporciona acceso web a todos tus mapas favoritos permitiéndote descargarlos con la máxima calidad. Sumérgete en la experiencia visual que hemos preparado para ti.",
        creator: "@maps_black",
        creatorId: "1274191176267071490",
        images: ["https://blackmaps.com.ar//image/og-home.png"],
    },
    alternates: {
        canonical: "https://blackmaps.com.ar",
    }
};

export default function Home() {
    return (
        <main className="pt-[60px] flex flex-col items-center justify-center w-full">
            <section className="hero flex items-center justify-center h-screen w-full">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg sm:p-0 p-12">
                        <p className="text-5xl font-bold">🌍</p>
                        <h1 className="mb-5 text-5xl font-bold">¡Sitio web de Black Maps!</h1>
                        <h2 className="mb-5 text-xl">
                            Este es el sitio web oficial de <strong>Black Maps</strong>, una cuenta de X (antes Twitter) que se dedica a publicar mapas sobre todo tipo de temas. Si algo existe, le hacemos un mapa. Desde geopolítica hasta datos curiosos, aquí encontrarás un mapa para todo.
                        </h2>
                        <div className="links flex gap-3 justify-center flex-wrap">
                            <Link href="/maps" title="Galería de Mapas" className="gap-2 flex items-center justify-center hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#3d3d3d] bg-[#aaa] rounded-xl p-2 font-bold flex-shrink-1">
                                Galería de Mapas
                            </Link>
                            <a href="https://x.com/maps_black" className="gap-2 flex items-center justify-center hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#3d3d3d] bg-[#aaa] rounded-xl p-2 font-bold flex-shrink-1" rel="noopener noreferrer" target="_blank">Perfil en X</a>
                            <a href="#about" className="gap-2 flex items-center justify-center hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#3d3d3d] bg-[#aaa] rounded-xl p-2 font-bold flex-shrink-1">Historia</a>
                            <Link href="/contact" title="Formulario de Contacto" className="gap-2 flex items-center justify-center hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#3d3d3d] bg-[#aaa] rounded-xl p-2 font-bold flex-shrink-1">
                                Contactame
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="flex flex-col gap-8 w-full items-start justify-center p-8">
                <h2 className="text-7xl font-bold text-center mx-auto underline">Historia</h2>
                <article className="flex flex-col md:flex-row w-full gap-8 bg-white dark:bg-[#3d3d3d] items-center justify-center rounded-xl p-12">
                    <div className="flex mt-4 md:w-1/2 items-center justify-center md:justify-between flex-wrap gap-24">
                        <Image
                            loading="lazy"
                            src="/image/first-map.webp"
                            className="rounded-xl p-2 w-full hover:scale-105 transition duration-500 filter hover:drop-shadow-custom-lg"
                            alt="Primer Mapa de Black Maps"
                            width={400}
                            height={200}
                        />
                    </div>
                    <div className="flex flex-col gap-8 md:w-1/2">
                        <h3 className="text-[#2d2d2d] dark:text-[#eee] font-bold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Orígenes de Black Maps</h3>
                        <p className="text-[20px] max-w-[600px] text-[#3d3d3d] dark:text-gray-400">
                            Black Maps subió su primer mapa el <strong>20 de junio de 2020</strong>, marcando el inicio de una <strong>apasionante travesía en el mundo de la cartografía digital</strong>. A partir de ese momento, hemos crecido hasta convertirnos en un referente en la creación de mapas únicos y detallados, explorando temáticas diversas y ofreciendo una perspectiva visual única.
                        </p>
                    </div>
                </article>

                <article className="flex flex-col md:flex-row w-full gap-8 bg-white dark:bg-[#3d3d3d] items-center justify-center rounded-xl p-12">
                    <div className="flex flex-col gap-8 md:w-1/2">
                        <h3 className="text-[#2d2d2d] dark:text-[#eee] font-bold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl">¿Quién es Black Maps?</h3>
                        <p className="text-[20px] max-w-[600px] text-[#3d3d3d] dark:text-gray-400">
                            Black Maps es el seudónimo de Agustín Sánchez, un joven argentino con una profunda pasión por la cartografía y la visualización de datos. Nació el <strong>12 de diciembre</strong> y es un ávido seguidor del Club Atlético River Plate. Comparte su vida con 4 adorables gatos: dos marrones, uno tricolor y otro gris, quienes inspiran su trabajo diario con su curiosa presencia.
                        </p>
                    </div>
                    <div className="flex mt-4 md:w-1/2 items-center justify-center md:justify-between flex-wrap gap-24">
                        <Image
                            loading="lazy"
                            src="/image/agus-p1.webp"
                            className="rounded-xl p-2 w-full hover:scale-105 transition duration-500 filter hover:drop-shadow-custom-lg"
                            alt="Agustín Sánchez, más conocido como Black Maps"
                            width={400}
                            height={200}
                        />
                    </div>
                </article>
                <article className="flex flex-col md:flex-row w-full gap-8 bg-white dark:bg-[#3d3d3d] items-center justify-center rounded-xl p-12">
                    <div className="flex mt-4 md:w-1/2 items-center justify-center md:justify-between flex-wrap gap-24">
                        <Image
                            loading="lazy"
                            src="/image/map-example-1.webp"
                            className="rounded-xl p-2 w-full hover:scale-105 transition duration-500 filter hover:drop-shadow-custom-lg"
                            alt="Mapa de Black Maps llamado: Club de ESTADOS UNIDOS 🇺🇸 más buscado en Google por país (desde 2004)"
                            width={400}
                            height={200}
                        />
                    </div>
                    <div className="flex flex-col gap-8 md:w-1/2">
                        <h3 className="text-[#2d2d2d] dark:text-[#eee] font-bold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl">¿Qué carajo sube?</h3>
                        <p className="text-[20px] max-w-[600px] text-[#3d3d3d] dark:text-gray-400">
                            Black Maps sube diversos tipos de mapas, desde los más cómicos hasta los más serios. Sus mapas abarcan múltiples temas, tanto <strong>políticos, sociales o simplemente territoriales</strong>. Uno de sus tipos de mapa más populares son aquellos donde utiliza el servicio de <strong>Google Trends</strong> para mostrar las búsquedas más comunes de los países.
                        </p>
                    </div>
                </article>
                <p className="hidden seo-declaration-title">Black Maps | Los mejores mapas, ahora online.</p>
            </section>
        </main>
    );
}

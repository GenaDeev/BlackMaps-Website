import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Black Maps | Los mejores mapas, ahora online",
    description: "Black Maps Web te proporciona acceso a todos tus mapas favoritos con la máxima calidad. Explora, descarga y disfruta de nuestros mapas únicos, todos creados con un enfoque en la precisión y el detalle.",
    keywords: ["Mapas", "Twitter", "BlackMaps", "Cartografía", "Exploración"],
    openGraph: {
        title: "Black Maps | Los mejores mapas, ahora online",
        description: "Black Maps Web te proporciona acceso web a todos tus mapas favoritos permitiéndote descargarlos con la máxima calidad. Descubre un mundo de información y visualización sin precedentes.",
        images: "https://blackmaps.com.ar/og-home.png",
    },
    twitter: {
        card: "summary_large_image",
        title: "Black Maps | Los mejores mapas, ahora online",
        description: "Black Maps Web te proporciona acceso web a todos tus mapas favoritos permitiéndote descargarlos con la máxima calidad. Sumérgete en la experiencia visual que hemos preparado para ti.",
        creator: "@maps_black",
        creatorId: "1274191176267071490",
        images: ["https://blackmaps.com.ar/og-home.png"],
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
                        <h1 className="mb-5 text-5xl font-bold">🌍<br />¡Bienvenido/a a Black Maps!</h1>
                        <h2 className="mb-5 text-xl">
                            Este es el sitio web oficial de <strong>Black Maps</strong>, una cuenta de X (antes Twitter) que se dedica a publicar mapas sobre todo tipo de temas. Si algo existe, le hacemos un mapa. Desde <strong>geopolítica</strong> hasta datos curiosos, aquí encontrarás un mapa para todo.
                        </h2>
                        <div className="links flex gap-3 justify-center flex-wrap">
                            <Link href="/maps" title="Galería de Mapas" className="gap-2 flex items-center justify-center hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#3d3d3d] bg-[#aaa] rounded-xl p-2 font-bold flex-shrink-1">
                                Galería de Mapas
                            </Link>
                            <a href="https://x.com/maps_black" className="gap-2 flex items-center justify-center hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#3d3d3d] bg-[#aaa] rounded-xl p-2 font-bold flex-shrink-1" rel="noopener noreferrer" target="_blank">Perfil en X</a>
                            <a href="#about" className="gap-2 flex items-center justify-center hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#3d3d3d] bg-[#aaa] rounded-xl p-2 font-bold flex-shrink-1">Historia</a>
                            <Link href="/contact" title="Formulario de Contacto" className="gap-2 flex items-center justify-center hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#3d3d3d] bg-[#aaa] rounded-xl p-2 font-bold flex-shrink-1">
                                Contacto
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="flex flex-col gap-8 w-full items-start justify-center p-8">
                <article className="flex flex-col md:flex-row w-full gap-8 bg-white dark:bg-[#3d3d3d] items-center justify-center rounded-xl p-12">
                    <div className="flex mt-4 md:w-1/2 items-center justify-center md:justify-between flex-wrap gap-24">
                        <Image
                            loading="lazy"
                            src="/first-map.webp"
                            className="rounded-xl p-2 w-full hover:scale-105 transition duration-500 filter hover:drop-shadow-custom-lg"
                            alt="Primer Mapa de Black Maps"
                            width={400}
                            height={200}
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-[#2d2d2d] dark:text-[#eee] font-bold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-6xl">Orígenes de Black Maps</h3>
                        <p className="text-[#3d3d3d] dark:text-gray-400">
                            <strong>Black Maps</strong> subió su primer mapa el <strong>20 de junio de 2020</strong>, marcando el inicio de una apasionante travesía en el mundo de la cartografía digital. A partir de ese momento, hemos crecido hasta convertirnos en un referente en la creación de <strong>mapas únicos y detallados</strong>, explorando temáticas diversas y ofreciendo una <strong>perspectiva visual única</strong>.
                        </p>
                    </div>
                </article>

                <article className="flex flex-col md:flex-row w-full gap-8 bg-white dark:bg-[#3d3d3d] items-center justify-center rounded-xl p-12">
                    <div className="md:w-1/2">
                        <h3 className="text-[#2d2d2d] dark:text-[#eee] font-bold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-6xl">¿Quién es Black Maps?</h3>
                        <p className="text-[#3d3d3d] dark:text-gray-400">
                            Black Maps es el seudónimo de <strong>Agustín Sánchez</strong>, un joven <strong>argentino</strong> con una profunda pasión por la <strong>cartografía</strong> y la visualización de datos. Nació el <strong>12 de diciembre</strong> y es un ávido seguidor del <strong>Club Atlético River Plate</strong>. Comparte su vida con <strong>4 adorables gatos</strong>: dos marrones, uno tricolor y otro gris, quienes inspiran su trabajo diario con su curiosa presencia.
                        </p>
                    </div>
                    <div className="flex mt-4 md:w-1/2 items-center justify-center md:justify-between flex-wrap gap-24">
                        <Image
                            loading="lazy"
                            src="/agus-p1.webp"
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
                            src="/map-example-1.webp"
                            className="rounded-xl p-2 w-full hover:scale-105 transition duration-500 filter hover:drop-shadow-custom-lg"
                            alt="Mapa de Black Maps llamado: Club de ESTADOS UNIDOS 🇺🇸 más buscado en Google por país (desde 2004)"
                            width={400}
                            height={200}
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-[#2d2d2d] dark:text-[#eee] font-bold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-6xl">¿Qué carajo sube?</h3>
                        <p className="text-[#3d3d3d] dark:text-gray-400">
                            Black Maps sube diversos tipos de <strong>mapas</strong>, desde los más <strong>cómicos</strong> hasta los más <strong>serios</strong>. Sus <strong>mapas</strong> abarcan múltiples <strong>temas</strong>, tanto <strong>políticos</strong>, <strong>sociales</strong> o simplemente <strong>territoriales</strong>. Uno de sus tipos de <strong>mapa</strong> más populares son aquellos donde utiliza el servicio de Google Trends para mostrar las <strong>búsquedas más comunes</strong> de los países.
                        </p>
                    </div>
                </article>
            </section>
        </main>
    );
}

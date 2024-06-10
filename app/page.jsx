import Image from "next/image";
import Link from "next/link";
import Logo from "./components/Logo";

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
                        <p className="mb-5 text-xl">
                            Este es el sitio web oficial de <span className="font-bold">Black Maps</span>, una cuenta de X (antes Twitter) que se dedica a publicar mapas sobre todo tipo de temas. Si algo existe, le hacemos un mapa. Desde <span className="font-bold">geopolítica</span> hasta datos curiosos, aquí encontrarás un mapa para todo.
                        </p>
                        <div className="links flex gap-3 justify-center flex-wrap">
                            <Link title="Galería de Mapas" className="gap-2 flex items-center justify-center hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#3d3d3d] bg-[#aaa] rounded-xl p-2 font-bold flex-shrink-1" href="/maps">Galería de Mapas</Link>
                            <a title="Perfil en X" className="gap-2 flex items-center justify-center hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#3d3d3d] bg-[#aaa] rounded-xl p-2 font-bold flex-shrink-1" href="https://x.com/maps_black">Perfil en X</a>
                            <a title="Historia de Black Maps" className="gap-2 flex items-center justify-center hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#3d3d3d] bg-[#aaa] rounded-xl p-2 font-bold flex-shrink-1" href="#about">Historia</a>
                            <a title="Formulario de Contacto" className="gap-2 flex items-center justify-center hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#3d3d3d] bg-[#aaa] rounded-xl p-2 font-bold flex-shrink-1" href="/contact">Contacto</a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="flex flex-col gap-8 w-full items-start justify-center p-8">
                <div className="flex flex-col md:flex-row w-full gap-8 bg-white dark:bg-[#3d3d3d] items-center justify-center rounded-xl p-12">
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
                        <h2 className="text-[#2d2d2d] dark:text-[#eee] font-bold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-6xl">Orígenes de Black Maps</h2>
                        <p className="text-[#3d3d3d] dark:text-gray-400">
                            <span className="font-bold">Black Maps</span> subió su primer mapa el <span className="font-bold">20 de junio de 2020</span>, marcando el inicio de una apasionante travesía en el mundo de la cartografía digital. A partir de ese momento, hemos crecido hasta convertirnos en un referente en la creación de <span className="font-bold">mapas únicos y detallados</span>, explorando temáticas diversas y ofreciendo una <span className="font-bold">perspectiva visual única</span>.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row w-full gap-8 bg-white dark:bg-[#3d3d3d] items-center justify-center rounded-xl p-12">
                    <div className="md:w-1/2">
                        <h2 className="text-[#2d2d2d] dark:text-[#eee] font-bold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-6xl">¿Quién es Black Maps?</h2>
                        <p className="text-[#3d3d3d] dark:text-gray-400">
                            Black Maps es el seudónimo de <span className="font-bold">Agustín Sánchez</span>, un joven <span className="font-bold">argentino</span> con una profunda pasión por la <span className="font-bold">cartografía</span> y la visualización de datos. Nació el <span className="font-bold">12 de diciembre</span> y es un ávido seguidor del <span className="font-bold">Club Atlético River Plate</span>. Comparte su vida con <span className="font-bold">4 adorables gatos</span>: dos marrones, uno tricolor y otro gris, quienes inspiran su trabajo diario con su curiosa presencia.
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
                </div>
                <div className="flex flex-col md:flex-row w-full gap-8 bg-white dark:bg-[#3d3d3d] items-center justify-center rounded-xl p-12">
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
                        <h2 className="text-[#2d2d2d] dark:text-[#eee] font-bold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-6xl">¿Qué carajo sube?</h2>
                        <p className="text-[#3d3d3d] dark:text-gray-400">
                            Black Maps sube diversos tipos de <span className="font-bold">mapas</span>, desde los más <span className="font-bold">cómicos</span> hasta los más <span className="font-bold">serios</span>. Sus <span className="font-bold">mapas</span> abarcan múltiples <span className="font-bold">temas</span>, tanto <span className="font-bold">políticos</span>, <span className="font-bold">sociales</span> o simplemente <span className="font-bold">territoriales</span>. Uno de sus tipos de <span className="font-bold">mapa</span> más populares son aquellos donde utiliza el servicio de Google Trends para mostrar las <span className="font-bold">búsquedas más comunes</span> de los países.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
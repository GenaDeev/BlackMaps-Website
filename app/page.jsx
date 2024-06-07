import Image from "next/image";
import Link from 'next/link';
import Logo from './components/Logo';

export const metadata = {
    title: "Black Maps | Los mejores mapas, ahora online",
    description: "Black Maps Web te proporciona acceso a todos tus mapas favoritos con la máxima calidad. Explora, descarga y disfruta de nuestros mapas únicos.",
    keywords: ["Mapas", "Twitter", "BlackMaps", "Cartografía"],
    openGraph: {
        title: "Black Maps | Los mejores mapas, ahora online",
        description: "Black Maps Web te proporciona acceso web a todos tus mapas favoritos permitiéndote descargarlos con la máxima calidad.",
        images: 'https://blackmaps.vercel.app/og-home.png',
    },
    twitter: {
        card: "summary_large_image",
        title: "Black Maps | Los mejores mapas, ahora online",
        description: "Black Maps Web te proporciona acceso web a todos tus mapas favoritos permitiéndote descargarlos con la máxima calidad.",
        creator: "@maps_black",
        creatorId: "1274191176267071490",
        images: ["https://blackmaps.vercel.app/og-home.png"],
    },
    alternates: {
        canonical: "https://blackmaps.vercel.app",
    }
};

export default function Home() {
    return (
        <main className="pt-[60px] flex flex-col items-center justify-center w-full">
            <section className="hero flex items-center justify-center h-screen w-full">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg sm:p-0 p-12">
                        <h1 className="mb-5 text-5xl font-bold">🌍<br/>¡Bienvenido/a a Black Maps!</h1>
                        <p className="mb-5 text-xl">
                            Este es el sitio web oficial de <span className="font-bold">Black Maps</span>, una cuenta de X (antes Twitter) que se dedica a publicar mapas sobre todo tipo de temas. Si algo existe, le hacemos un mapa.
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
                            Black Maps subió su primer mapa el <span className="font-bold">20 de junio de 2020</span>, comenzando una emocionante historia que continúa hasta el día de hoy en <span className="font-bold">2024</span>. Su primer mapa publicado se llama <span className="font-bold">&quot;Life expectancy by country&quot;</span>, traducido como <span className="font-bold">&quot;Esperanza de vida por país&quot;</span>.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row w-full gap-8 bg-white dark:bg-[#3d3d3d] items-center justify-center rounded-xl p-12">
                    <div className="md:w-1/2">
                        <h2 className="text-[#2d2d2d] dark:text-[#eee] font-bold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-6xl">¿Quién es Black Maps?</h2>
                        <p className="text-[#3d3d3d] dark:text-gray-400">
                            Black Maps es el seudónimo de <span className="font-bold">Agustín Sánchez</span>, un joven <span className="font-bold">argentino</span> apasionado por la <span className="font-bold">cartografía</span>. Nació el <span className="font-bold">12 de diciembre</span> y es un gran fan del <span className="font-bold">Club Atlético River Plate</span>. Tiene <span className="font-bold">4 gatos</span>: dos marrones, uno tricolor y otro gris, aunque sus nombres son desconocidos.
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
            </section>
        </main>
    );
}

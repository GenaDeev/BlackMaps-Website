import Image from "next/image";
import Logo from './components/Logo'

export const metadata = {
  title: "Black Maps | Los mejores mapas, ahora online.",
  description: "Black Maps Web te proporciona acceso web a todos tus mapas favoritos del X (antes Twitter) de BlackMaps pero en la Web, permitiendote descargarlos con la maxima calidad.",
  keywords: ["Maps", "Twitter", "Black", "BlackMaps"],
  openGraph: {
    title: "Black Maps | Los mejores mapas, ahora online.",
    description: "Black Maps Web te proporciona acceso web a todos tus mapas favoritos del X (antes Twitter) de BlackMaps pero en la Web, permitiendote descargarlos con la maxima calidad.",
    images: 'https://blackmaps.vercel.app/og-home.png',
  },
};
export default function Home() {
  return (
    <main className="pt-[60px]">
                <section className="hero flex items-center justify-center h-screen">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-lg sm:p-0 p-12">
                            <h1 className="mb-5 text-5xl font-bold">🗺️Bienvenido/a</h1>
                            <p className="mb-5 text-xl">
                                Este es el sitio web oficial de <span className="font-bold"
                                >Black Maps</span
                                >, una cuenta de X (antes Twitter) que se dedica a
                                publicar mapas sobre absolutamente todo. Algo existe? Le
                                hacemos un mapa.
                            </p>
                            <div className="links flex gap-3 justify-center flex-wrap">
                                <a
                                    title="Mapas"
                                    className="gap-2 flex items-center justify-center hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#3d3d3d] bg-[#aaa] rounded-xl p-2 font-bold flex-shrink-1"
                                    href="/maps">Galeria de Mapas
                                </a>
                                <a
                                    title="Twitter"
                                    className="gap-2 flex items-center justify-center hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#3d3d3d] bg-[#aaa] rounded-xl p-2 font-bold flex-shrink-1"
                                    href="https://x.com/maps_black">Twitter</a
                                >
                                <a
                                    title="Historia"
                                    className="gap-2 flex items-center justify-center hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#3d3d3d] bg-[#aaa] rounded-xl p-2 font-bold flex-shrink-1"
                                    href="#about">Historia</a
                                >
                                <a
                                    title="Contacto"
                                    className="gap-2 flex items-center justify-center hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#3d3d3d] bg-[#aaa] rounded-xl p-2 font-bold flex-shrink-1"
                                    href="contact">Contacto</a
                                >
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about" className="flex items-center justify-center py-[400px] h-screen p-12">
                    <div className="flex flex-col sm:w-3/4 bg-white dark:bg-[#3d3d3d] items-center justify-center rounded-xl p-4">
                        <p
                            className="text-[#2d2d2d] dark:text-[#eee] font-bold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-6xl"
                        >
                            Origenes de Black Maps, Primer Mapa
                        </p>
                        <p className="text-[#3d3d3d] dark:text-gray-400">
                            Black Maps subio su primer mapa un <span className="font-bold">sabado 20 de junio de
                                2020</span>, con el cual empezaria una emocionante historia que
                            data hasta el dia de hoy en <span className="font-bold">2024</span>. En aquella epoca Maps
                            escribia sus tuits en ingles, por lo que su primer mapa
                            publicado se llama <span className="font-bold">"Life expectancy by country"</span>, es decir
                            <span className="font-bold">"Esperanza de vida por pais"</span>.
                        </p>
                        <div className="flex mt-4 items-center justify-center flex-wrap gap-24">
                            <Image
                                loading="lazy"
                                src="/first-map.webp"
                                className="rounded-xl p-2 w-full sm:w-1/2 hover:scale-105 transition duration-500 filter hover:drop-shadow-custom-lg"
                                alt="Primer Mapa de Black Maps"
                                width={400}
                                height={200}
                            />
                            <Logo
                                width="128px"
                                height="128px"
                                className="dark:invert hover:scale-110 transition duration-500 filter hover:drop-shadow-custom-lg"
                            />
                        </div>
                    </div>
                </section>
            </main>
  );
}

import Logo from "../components/Logo";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
            <main className="pt-[60px]">
                <Helmet>
                <title>Black Maps | Los mejores mapas, ahora online.</title>
                <meta name="description" content="Black Maps Web te proporciona acceso web a todos tus mapas favoritos del X (antes Twitter) de BlackMaps pero en la Web, permitiendote descargarlos con la maxima calidad." />
                <meta property="og:title" content="Black Maps | Los mejores mapas, ahora online." />
                <meta property="og:description" content="Black Maps Web te proporciona acceso web a todos tus mapas favoritos del X (antes Twitter) de BlackMaps pero en la Web, permitiendote descargarlos con la maxima calidad." />
                <meta property="og:image" content="https://blackmaps.vercel.app/home-og.png" />
                <meta property="og:url" content="https://blackmaps.vercel.app/" />
                <meta name="twitter:title" content="Black Maps | Los mejores mapas, ahora online." />
                <meta name="twitter:description" content="Black Maps Web te proporciona acceso web a todos tus mapas favoritos del X (antes Twitter) de BlackMaps pero en la Web, permitiendote descargarlos con la maxima calidad." />
                <meta name="twitter:image" content="https://blackmaps.vercel.app/home-og.png" />
                <meta name="twitter:url" content="https://blackmaps.vercel.app/" />
            </Helmet>
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
                                <Link
                                    title="Mapas"
                                    className="gap-2 flex items-center justify-center hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#3d3d3d] bg-[#aaa] rounded-xl p-2 font-bold flex-shrink-1"
                                    to="/maps">Galeria de Mapas
                                </Link>
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
                            <img
                                loading="lazy"
                                src="first-map.webp"
                                className="rounded-xl p-2 w-full sm:w-1/2 hover:scale-105 transition duration-500 filter hover:drop-shadow-custom-lg"
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
    )
}
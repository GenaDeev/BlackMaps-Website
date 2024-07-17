import Pathname from "./components/Pathname";
import NotFoundTitle from "./components/NotFoundTitle";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="h-screen pt-20 flex flex-col items-center justify-center p-4">
            <div className="404 shadow-xl dark:bg-[#1d1d1d] bg-[#ddd] flex flex-col md:flex-row border rounded-xl w-[300px] md:w-[85%] lg:w-[75%] h-[320px] md:h-[220px] p-6 md:p-12 border-white/40">
                <div className="md:border-r border-white md:pr-12 h-full flex gap-2 justify-between items-center">
                    <div className="relative w-24 h-24"> {/* Contenedor con tamaño fijo */}
                        <Link
                            title="Inicio"
                            className="block w-full h-full transform transition-all hover:border-2 border-neutral-300 rounded-2xl hover:shadow-xl hover:shadow-white hover:scale-110 active:scale-95 will-change-transform"
                            href="/"
                        >
                            <Image
                                src="/image/app-icon-256.webp"
                                width={256}
                                height={256}
                                className="rounded-xl p-2 w-full h-full bg-white"
                                alt="Logo de Black Maps"
                            />
                        </Link>
                    </div>
                    <div className="relative w-24 h-24"> {/* Contenedor con tamaño fijo */}
                        <Link
                            title="GenaDeev"
                            className="block w-full h-full transform transition-all hover:border-4 border-neutral-300 rounded-2xl hover:shadow-xl hover:shadow-white hover:scale-110 active:scale-95 will-change-transform"
                            href="https://www.linkedin.com/in/genadev"
                        >
                            <Image
                                src="/image/genadev-v-nobg-2.webp"
                                width={256}
                                height={256}
                                className="rounded-xl p-2 w-full h-full bg-white"
                                alt="Logo de GenaDev"
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col flex-wrap justify-center pt-12 md:pt-0 md:pl-12">
                    <h2 className="opacity-60">Error: 404</h2>
                    <h1 className="flex flex-wrap text-2xl">
                        <NotFoundTitle /> &quot;<Pathname className="text-red-400 cursor-pointer" />&quot;
                    </h1>
                    <h3 className="opacity-60">
                        BlackMaps Website by <a href="https://www.linkedin.com/in/genadev">GenaDeev</a>
                    </h3>
                </div>
            </div>
        </main>


    )
}
"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ClientHeader() {
    const pathname = usePathname();

    const mapsLinkStyle = {
        display: pathname === "/maps" ? 'none' : 'flex',
    };
    const contactLinkStyle = {
        display: pathname === "/contact" ? 'none' : 'flex',
    };

    return (
        <div className="flex gap-3">
            <Link title="Mapas" style={mapsLinkStyle} className="gap-2 w-12 h-12 sm:w-auto items-center justify-center hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#4d4d4d] bg-[#aaa] rounded-xl p-2 font-bold" href="/maps">
                <svg
                    className="dark:text-white text-[#1d1d1d] w-[32px] h-[32px] sm:w-[24px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    style={{ fill: "currentColor", transform: "", msfilter: "" }}
                >
                    <path d="m9 6.882-7-3.5v13.236l7 3.5 6-3 7 3.5V7.382l-7-3.5-6 3zM15 15l-6 3V9l6-3v9z" />
                </svg>

                <p className="hidden sm:block">Mapas</p>
            </Link>
            <Link title="Contacto" style={contactLinkStyle} className="gap-2 w-12 h-12 sm:w-auto items-center justify-center hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#4d4d4d] bg-[#aaa] rounded-xl p-2 font-bold" href="/contact">
                <svg style={{ fill: "currentColor", transform: "", msfilter: "" }} className="dark:text-white text-[#1d1d1d] w-[32px] h-[32px] sm:w-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path><path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path></svg>
                <p className="hidden sm:block">Contacto</p>
            </Link>
            <a title="X (Antes Twitter)" className="gap-2 w-12 h-12 sm:w-auto flex items-center justify-center hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#4d4d4d] bg-[#aaa] rounded-xl p-2 font-bold" href="https://x.com/maps_black">
                <svg className="dark:text-white text-[#1d1d1d] w-[24px] h-[24px] sm:w-[16px]" fill="currentColor" viewBox="0 0 300 300.3" xmlns="http://www.w3.org/2000/svg"><path d="M179 127 290 0h-26l-97 110L89 0H0l117 167L0 300h26l103-116 82 116h89M36 20h41l187 262h-41" /></svg>
                <p className="hidden sm:block">Twitter</p>
            </a>
        </div>
    )
}
"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';

export default function ClientHeader() {
    const pathname = usePathname();
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();
    const [lang, setLang] = useState(currentLocale); // Initialize lang with currentLocale
    const [newLocale, setNewLocale] = useState(currentLocale);
    const [colorScheme, setColorScheme] = useState("");
    const [originalColorScheme, setOriginalColorScheme] = useState("");

    const handleChange = (e) => {
        const selectedLocale = e.target.value;
        setNewLocale(selectedLocale); // Update newLocale state with selected value

        // Set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${selectedLocale};expires=${expires};path=/`;

        // Redirect to the new locale path
        if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
            router.push('/' + selectedLocale + currentPathname);
        } else {
            router.push(currentPathname.replace(`/${currentLocale}`, `/${selectedLocale}`));
        }

        router.refresh();
    };

    const handleSchemeChange = () => {
        if (colorScheme === "dark") {
            if (originalColorScheme !== "Light") {
                localStorage.setItem("forced-color-scheme", "Light");
            } else {
                localStorage.removeItem("forced-color-scheme");
            }
            document.body.classList.remove('dark');
            document.body.classList.add('light');
            setColorScheme("light");
        } else {
            if (originalColorScheme !== "Dark") {
                localStorage.setItem("forced-color-scheme", "Dark");
            } else {
                localStorage.removeItem("forced-color-scheme");
            }
            document.body.classList.remove('light');
            document.body.classList.add('dark');
            setColorScheme("dark");
        }
    }


    useEffect(() => {
        setLang(currentLocale);
    }, [currentLocale]);

    useEffect(() => {
        if (document.body.classList.contains('light')) {
            setColorScheme("light")
        }
        else {
            setColorScheme("dark")
        }
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setOriginalColorScheme("Dark")
        }
        else {
            setOriginalColorScheme("Light")
        }
    })


    const mapsLinkStyle = {
        display: pathname === "/maps" || pathname === "/en/maps" && 'none',
    };
    const contactLinkStyle = {
        display: pathname === "/contact" || pathname === "/en/contact" && 'none',
    };

    const schemeButtonTitle = {
        en: "Change color scheme to " + (colorScheme === "dark" ? "light" : "dark"),
        es: "Cambiar esquema de color a " + (colorScheme === "dark" ? "claro" : "oscuro"),
    }

    return (
        <nav>
            <ul className='flex gap-3'>
                <li>
                    {colorScheme ?
                        <button
                            title={lang === "es" ? schemeButtonTitle.es : schemeButtonTitle.en}
                            onClick={handleSchemeChange}
                            className={"w-12 h-12 flex items-center justify-center sm:hover:scale-105 active:scale-95 transition rounded-xl p-2 "
                                +
                                (
                                    colorScheme === "dark" ?
                                        'text-yellow-400 active:bg-[#2d2d2d] bg-[#4d4d4d]'
                                        :
                                        'text-[#4d4d4d] active:bg-yellow-500 bg-yellow-400'
                                )
                            }>
                            {
                                colorScheme === "light" ?
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        stroke="#2c3e50"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        className="icon icon-tabler icon-tabler-sun-filled"
                                        viewBox="0 0 24 24"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z"></path>
                                        <path
                                            fill="currentColor"
                                            stroke="none"
                                            d="M12 19a1 1 0 01.993.883L13 20v1a1 1 0 01-1.993.117L11 21v-1a1 1 0 011-1zM18.313 16.91l.094.083.7.7a1 1 0 01-1.32 1.497l-.094-.083-.7-.7a1 1 0 011.218-1.567l.102.07zM7.007 16.993a1 1 0 01.083 1.32l-.083.094-.7.7a1 1 0 01-1.497-1.32l.083-.094.7-.7a1 1 0 011.414 0zM4 11a1 1 0 01.117 1.993L4 13H3a1 1 0 01-.117-1.993L3 11h1zM21 11a1 1 0 01.117 1.993L21 13h-1a1 1 0 01-.117-1.993L20 11h1zM6.213 4.81l.094.083.7.7a1 1 0 01-1.32 1.497l-.094-.083-.7-.7A1 1 0 016.11 4.74l.102.07zM19.107 4.893a1 1 0 01.083 1.32l-.083.094-.7.7a1 1 0 01-1.497-1.32l.083-.094.7-.7a1 1 0 011.414 0zM12 2a1 1 0 01.993.883L13 3v1a1 1 0 01-1.993.117L11 4V3a1 1 0 011-1zM12 7a5 5 0 11-4.995 5.217L7 12l.005-.217A5 5 0 0112 7z"
                                        ></path>
                                    </svg>
                                    :
                                    colorScheme === "dark" ?
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="none"
                                            stroke="#2c3e50"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            className="icon icon-tabler icon-tabler-moon-filled"
                                            viewBox="0 0 24 24"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z"></path>
                                            <path
                                                fill="currentColor"
                                                stroke="none"
                                                d="M12 1.992a10 10 0 109.236 13.838c.341-.82-.476-1.644-1.298-1.31a6.5 6.5 0 01-6.864-10.787l.077-.08c.551-.63.113-1.653-.758-1.653h-.266l-.068-.006-.06-.002z"
                                            ></path>
                                        </svg>
                                        :
                                        <></>
                            }
                        </button> :
                        <button className="w-12 h-12 flex items-center justify-center sm:hover:scale-105 active:scale-95 transition rounded-xl p-2 active:bg-[#2d2d2d] bg-[#4d4d4d]">
                            <svg className="spinner_z9k8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"/></svg>
                        </button>
                    }
                </li>
                <li>
                    <div className="langselect gap-1 flex w-12 h-12 sm:w-auto items-center justify-center sm:hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#4d4d4d] bg-[#aaa] rounded-xl p-2 font-bold">
                        <span className={`flag-icon flag-icon-${lang === "en" ? "en" : "es"} block`}></span>
                        <select aria-label="Language" className='hidden sm:block pb-[1px] bg-transparent rounded-xl outline-none h-full' onChange={handleChange} value={currentLocale}>
                            <option label='Español' className='langselect gap-2 flex w-12 h-12 sm:w-auto items-center justify-center sm:hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#4d4d4d] bg-[#aaa] rounded-xl p-2 font-bold' value="es">Español</option>
                            <option label='English' className='langselect gap-2 flex w-12 h-12 sm:w-auto items-center justify-center sm:hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#4d4d4d] bg-[#aaa] rounded-xl p-2 font-bold' value="en">English</option>
                        </select>
                        <select aria-label="Language" className='sm:hidden text-xl block bg-transparent rounded-xl outline-none h-full' onChange={handleChange} value={currentLocale}>
                            <option value="es">🇪🇸</option>
                            <option value="en">🇬🇧</option>
                        </select>
                    </div>
                </li>
                <li style={mapsLinkStyle}>
                    <Link title={lang === "en" ? "Maps" : lang === "es" ? "Mapas" : ''} className="gap-2 flex w-12 h-12 sm:w-auto items-center justify-center sm:hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#4d4d4d] bg-[#aaa] rounded-xl p-2 font-bold" href="/maps">
                        <svg
                            className="dark:text-white text-[#1d1d1d] w-[32px] h-[32px] sm:w-[24px]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={{ fill: "currentColor", transform: "", msfilter: "" }}
                        >
                            <path d="m9 6.882-7-3.5v13.236l7 3.5 6-3 7 3.5V7.382l-7-3.5-6 3zM15 15l-6 3V9l6-3v9z" />
                        </svg>
                        <p className="hidden sm:block">{lang === "en" ? "Maps" : lang === "es" ? "Mapas" : ''}</p>
                    </Link>
                </li>
                <li style={contactLinkStyle}>
                    <Link title={lang === "en" ? "Contact" : lang === "es" ? "Contacto" : ''} className="gap-2 flex w-12 h-12 sm:w-auto items-center justify-center sm:hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#4d4d4d] bg-[#aaa] rounded-xl p-2 font-bold" href="/contact">
                        <svg style={{ fill: "currentColor", transform: "", msfilter: "" }} className="dark:text-white text-[#1d1d1d] w-[32px] h-[32px] sm:w-[24px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path><path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path></svg>
                        <p className="hidden sm:block">{lang === "en" ? "Contact" : lang === "es" ? "Contacto" : ''}</p>
                    </Link>
                </li>
                <li>
                    <a title="X (Antes Twitter)" className="gap-2 w-12 h-12 sm:w-auto flex items-center justify-center sm:hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#4d4d4d] bg-[#aaa] rounded-xl p-2 font-bold" href="https://x.com/maps_black">
                        <svg className="dark:text-white text-[#1d1d1d] w-[24px] h-[24px] sm:w-[16px]" fill="currentColor" viewBox="0 0 300 300.3" xmlns="http://www.w3.org/2000/svg"><path d="M179 127 290 0h-26l-97 110L89 0H0l117 167L0 300h26l103-116 82 116h89M36 20h41l187 262h-41" /></svg>
                        <p className="hidden sm:block">Twitter</p>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

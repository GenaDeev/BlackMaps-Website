"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';

export default function ClientHeader() {
    const pathname = usePathname();
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const [lang, setLang] = useState(currentLocale);
    const [newLocale, setNewLocale] = useState(currentLocale);
    const [colorScheme, setColorScheme] = useState("");
    const [originalColorScheme, setOriginalColorScheme] = useState("");

    const handleChange = (e) => {
        const selectedLocale = e.target.value;
        setNewLocale(selectedLocale);

        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${selectedLocale};expires=${expires};path=/`;

        if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
            router.push('/' + selectedLocale + pathname);
        } else {
            router.push(pathname.replace(`/${currentLocale}`, `/${selectedLocale}`));
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
    };

    useEffect(() => {
        setLang(currentLocale);
    }, [currentLocale]);

    useEffect(() => {
        if (document.body.classList.contains('light')) {
            setColorScheme("light");
        } else {
            setColorScheme("dark");
        }
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setOriginalColorScheme("Dark");
        } else {
            setOriginalColorScheme("Light");
        }
    }, []);

    const mapsLinkStyle = {
        display: pathname === "/maps" || pathname === "/en/maps" ? 'none' : 'block',
    };
    const contactLinkStyle = {
        display: pathname === "/contact" || pathname === "/en/contact" ? 'none' : 'block',
    };

    const schemeButtonTitle = {
        en: "Change color scheme to " + (colorScheme === "dark" ? "light" : "dark"),
        es: "Cambiar esquema de color a " + (colorScheme === "dark" ? "claro" : "oscuro"),
    };

    return (
        <nav>
            <ul className='flex gap-3'>
                <li>
                    <button
                        title={lang === "es" ? schemeButtonTitle.es : schemeButtonTitle.en}
                        onClick={handleSchemeChange}
                        className={"w-12 h-12 flex items-center justify-center sm:hover:scale-105 active:scale-95 transition rounded-xl p-2 " +
                            (colorScheme === "dark"
                                ? 'text-yellow-400 active:bg-[#2d2d2d] bg-[#4d4d4d]'
                                : 'text-[#4d4d4d] active:bg-yellow-500 bg-yellow-400')
                        }>
                        {colorScheme === "light" ? (
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
                        ) : (
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
                        )}
                    </button>
                </li>
                <li>
                    <div className="langselect gap-1 flex w-12 h-12 sm:w-auto items-center justify-center sm:hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#4d4d4d] bg-[#aaa] rounded-xl p-2 font-bold">
                        <span className={`flag-icon flag-icon-${lang === "en" ? "en" : "es"} block`}></span>
                        <select aria-label="Language" className='hidden sm:block pb-[1px] bg-transparent rounded-xl outline-none h-full' onChange={handleChange} value={currentLocale}>
                            <option value="es">Español</option>
                            <option value="en">English</option>
                        </select>
                        <select aria-label="Language" className='sm:hidden text-xl block bg-transparent rounded-xl outline-none h-full' onChange={handleChange} value={currentLocale}>
                            <option value="es">🇪🇸</option>
                            <option value="en">🇬🇧</option>
                        </select>
                    </div>
                </li>
                <li style={mapsLinkStyle}>
                    <Link href={lang === "en" ? "/en/maps" : "/maps"} title={lang === "en" ? "Map Gallery" : "Galeria de Mapas"} aria-label={lang === "en" ? "Map Gallery" : "Galeria de Mapas"} className="gap-2 flex w-12 h-12 sm:w-auto items-center justify-center sm:hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#4d4d4d] bg-[#aaa] rounded-xl p-2 font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
                            <polygon points="3 6 9 3 15 6 21 3 21 17 15 21 9 18 3 21 3 6"></polygon>
                            <line x1="9" x2="9" y1="3" y2="18"></line>
                            <line x1="15" x2="15" y1="6" y2="21"></line>
                            <line x1="3" x2="21" y1="6" y2="3"></line>
                        </svg>
                        <span className='hidden sm:inline'>{lang === "en" ? "Maps" : "Mapas"}</span>
                    </Link>
                </li>
                <li style={contactLinkStyle}>
                    <Link href={lang === "en" ? "/en/contact" : "/contact"} title={lang === "en" ? "Contact form" : "Formulario de contacto"} aria-label={lang === "en" ? "Contact form" : "Formulario de contacto"} className="gap-2 flex w-12 h-12 sm:w-auto items-center justify-center sm:hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#4d4d4d] bg-[#aaa] rounded-xl p-2 font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
                            <path d="M22 6c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V6z"></path>
                            <path d="m22 6-10 7L2 6"></path>
                        </svg>
                        <span className='hidden sm:inline'>{lang === "en" ? "Contact" : "Contacto"}</span>
                    </Link>
                </li>
                <li>
                    <Link href="https://x.com/maps_black" title={lang === "en" ? "Twitter account" : "Cuenta de Twitter"} aria-label={lang === "en" ? "Twitter account" : "Cuenta de Twitter"} className="gap-2 flex w-12 h-12 sm:w-auto items-center justify-center sm:hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#4d4d4d] bg-[#aaa] rounded-xl p-2 font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 1200 1227"><path fill="currentColor" d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z" /></svg>
                        <span className='hidden sm:inline'>Twitter</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

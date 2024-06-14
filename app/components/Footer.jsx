import Logo from "./Logo";
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-[#ccc] dark:bg-[#242424]">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link title="Inicio" href="/" className="flex items-center">
                            <Logo className="dark:invert logo" width="128px" height="128px" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Secciones</h2>
                            <ul className="font-medium flex flex-col gap-4">
                                <li>
                                    <Link href="/" className="hover:underline">Página de Inicio</Link>
                                </li>
                                <li>
                                <a href="#about" className="hover:underline">Nuestra Historia</a>
                                </li>
                                <li>
                                    <Link href="/maps" className="hover:underline">Todod mis Mapas</Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:underline">Formulario de Contacto</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Desarrollo</h2>
                            <ul className="font-medium flex flex-col gap-4">
                                <li>
                                    <a href="https://github.com/GenaAaaj/BlackMaps-Website/" className="hover:underline ">Repositorio</a>
                                </li>
                                <li>
                                    <a href="https://github.com/GenaAaaj/BlackMaps-Website/blob/main/LICENSE" className="hover:underline">Licencia</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/genadev" className="hover:underline">@GenaDev</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm sm:text-xs  sm:text-center dark:text-white">© 2024 <Link href="/" className="hover:underline">BlackMaps™</Link> | Sitio web desarrollado por <a href="https://www.linkedin.com/in/genadev" className="hover:underline">GenaDev</a> y alojado por <a href="https://genahost.vercel.app/" className="hover:underline">GenaHost</a>. | Los mapas y logos del sitio son propiedad de BlackMaps y no deben ser utilizados sin autorizacion.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a title="Twitch" href="https://www.twitch.tv/mapsblack/" className="hover:text-gray-500 text-gray-900 dark:text-white dark:hover:text-gray-500">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M2 0 1 4v17h5v3h3l4-3h4l6-6V0H2zm19 14-3 3h-6l-3 3v-3H4V2h17v12zm-3-8v7h-2V6h2zm-6 0v7h-2V6h2z" fillRule="evenodd" clipRule="evenodd" /></svg>
                            <span className="sr-only">Canal de Twitch</span>
                        </a>
                        <a title="Instagram" href="https://www.instagram.com/maps_black/" className="hover:text-gray-500 text-gray-900 dark:text-white dark:hover:text-gray-500 ms-5">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor" /></svg>
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a title="Twitter" href="https://x.com/maps_black/" className="hover:text-gray-500 text-gray-900 dark:text-white dark:hover:text-gray-500 ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a title="GitHub" href="https://github.com/GenaAaaj/BlackMaps-Website/" className="hover:text-gray-500 text-gray-900 dark:text-white dark:hover:text-gray-500 ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Repositorio de GitHub</span>
                        </a>
                        <a title="E-Mail" href="mailto:maps.black8@gmail.com" className="hover:text-gray-500 text-gray-900 dark:text-white dark:hover:text-gray-500 ms-5">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" /></svg>
                            <span className="sr-only">Correo Electronico</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
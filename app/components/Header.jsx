import Logo from "./Logo.jsx"

export default function Header() {
    return (
        <header className="fixed w-full p-2 z-50 bg-[#ccc] dark:bg-[#242424] flex justify-between items-center">
            <div className="flex">
                <a href="https://blackmaps.vercel.app"><Logo svgclass="dark:invert" width="48px" height="48px" classNameName="text-white hover:scale-105 active:scale-95 transition active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#3d3d3d] bg-[#aaa] rounded-xl p-2" /></a>
            </div>
            <div className="flex gap-3">
                <a title="Mapas" className="gap-2 w-12 h-12 sm:w-auto flex items-center justify-center hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#3d3d3d] bg-[#aaa] rounded-xl p-2 font-bold" href="https://blackmaps.vercel.app/maps">
                    <svg
                        className="dark:text-white text-[#1d1d1d] w-[32px] h-[32px] sm:w-[24px]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        style={{ fill: "currentColor", transform: "", msfilter: "" }}
                    >
                        <path d="m9 6.882-7-3.5v13.236l7 3.5 6-3 7 3.5V7.382l-7-3.5-6 3zM15 15l-6 3V9l6-3v9z" />
                    </svg>

                    <p className="hidden sm:block">Mapas</p>
                </a>
                <a title="X (Antes Twitter)" className="gap-2 w-12 h-12 sm:w-auto flex items-center justify-center hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#3d3d3d] bg-[#aaa] rounded-xl p-2 font-bold" href="https://x.com/maps_black">
                    <svg className="dark:text-white text-[#1d1d1d] w-[24px] h-[24px] sm:w-[16px]" fill="currentColor" viewBox="0 0 300 300.3" xmlns="http://www.w3.org/2000/svg"><path d="M179 127 290 0h-26l-97 110L89 0H0l117 167L0 300h26l103-116 82 116h89M36 20h41l187 262h-41" /></svg>
                    <p className="hidden sm:block">Twitter</p>
                </a>
            </div>
        </header>)
}
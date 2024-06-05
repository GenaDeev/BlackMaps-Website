import Logo from "./Logo.jsx"
import ClientHeader from "./ClientHeader.jsx"
export default function Header() {
    return (
        <header className="fixed w-full p-2 z-50 bg-[#ccc] dark:bg-[#242424] flex justify-between items-center">
            <div className="flex">
                <a href="https://blackmaps.vercel.app"><Logo svgclass="dark:invert" width="48px" height="48px" className="logo text-white hover:scale-105 active:scale-95 transition active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#3d3d3d] bg-[#aaa] rounded-xl p-2" /></a>
            </div>
            <ClientHeader/>
        </header>)
}
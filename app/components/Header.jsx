import Logo from "./Logo.jsx"
import Link from 'next/link'
import dynamic from 'next/dynamic'
 
const ClientHeader = dynamic(() => import('../components/ClientHeader.jsx'), {
  loading: () => <p></p>,
})

export default function Header() {
    return (
        <header className="overflow-x-hidden sm:overflow-x-auto fixed w-full p-2 z-50 backdrop-blur-md border-b border-b-neutral-500 dark:border-neutral-800 flex justify-between items-center">
            <div className="flex">
                <Link href="/" title="Inicio"><Logo svgclass="dark:invert" width="48px" height="48px" className="logo text-white hover:scale-105 active:scale-95 transition active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#4d4d4d] bg-[#aaa] rounded-xl p-2" /></Link>
            </div>
            <ClientHeader/>
        </header>)
}
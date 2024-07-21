import Logo from "./Logo.jsx"
import Link from 'next/link'
import dynamic from 'next/dynamic'
import TranslationsProvider from './TranslationsProvider';
const i18nNamespaces = ['header'];
import initTranslations from '../../i18n';

const ClientHeader = dynamic(() => import('./ClientHeader.jsx'), {
    loading: () => <p></p>,
})

export default async function Header({ locale }) {
    const { t, resources } = await initTranslations(locale, i18nNamespaces);

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <header className="overflow-x-hidden sm:overflow-x-auto fixed w-full p-2 z-50 backdrop-blur-md border-b border-b-neutral-500 dark:border-neutral-800 flex justify-between items-center">
                <div className="flex">
                    <Link href="/" title={t('home')}><Logo width={48} height={48} imageClass="dark:invert" className="text-white hover:scale-105 active:scale-95 transition active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#4d4d4d] bg-[#aaa] rounded-xl w-12 h-12" /></Link>
                </div>
                <ClientHeader />
            </header>
        </TranslationsProvider>
    )
}
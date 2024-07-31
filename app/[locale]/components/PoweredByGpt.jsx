import TranslationsProvider from './TranslationsProvider';
const i18nNamespaces = ['ai-card'];
import initTranslations from '../../i18n';

export default async function PoweredByGpt({ locale }) {
    const { t, resources } = await initTranslations(locale, i18nNamespaces);
    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <div className="flex gap-4 w-full h-auto py-3 md:py-0 md:w-[300px] md:h-[100px] bg-neutral-800 hover:bg-neutral-700 dark:bg-neutral-200 dark:hover:bg-neutral-300 text-neutral-200 dark:text-neutral-800 items-center rounded-xl px-4 hover:outline outline-4 hover:outline-neutral-400 dark:hover:outline-neutral-600 hover:-rotate-6 hover:scale-105 hover:shadow-xl hover:shadow-black dark:hover:shadow-white select-none transition-all duration-300">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 hover:text-yellow-400 transition-colors duration-200" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z" />
                    </svg>
                </div>
                <div>
                    <p className='font-bold'>{t('ai-enhanced')}</p>
                    <p className='text-xs'>{t('ai-enhanced-lore')}</p>
                </div>
            </div>
        </TranslationsProvider>
    )
}
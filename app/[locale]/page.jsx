import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import TranslationsProvider from './components/TranslationsProvider';
const i18nNamespaces = ['home'];
import initTranslations from '../i18n';

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Black Maps",
    "description": "Es una cuenta de Twitter conocida por crear mapas entretenidos y variados para sus seguidores.",
    "founder": {
        "@type": "Person",
        "name": "Agustín Sánchez"
    },
    "image": "https://blackmaps.com.ar/image/og-home.png",
    "url": "https://blackmaps.com.ar",
    "sameAs": ["https://x.com/maps_black"],
    "logo": "https://blackmaps.com.ar/image/app-icon-1024.webp",
    "ContactPoint": {
        "@type": "ContactPoint",
        "email": "ayuda@blackmaps.com.ar",
        "contactType": "Customer Service",
        "availableLanguage": ["Spanish", "English"]
    }
};
export async function generateMetadata({ params: { locale } }) {
    const { t } = await initTranslations(locale, i18nNamespaces);
const baseUrl = "https://blackmaps.com.ar";
    const canonicalUrl = locale && locale !== 'default' ? `${baseUrl}/${locale}` : baseUrl;
    return {
        title: t('meta_title'),
        description: t('meta_description'),
        keywords: [t('kw0'), "Twitter", "BlackMaps", t('kw3'), t('kw4')],
        openGraph: {
            title: t('meta_title'),
            description: t('meta_description'),
            images: "https://blackmaps.com.ar/image/og-home.png",
        },
        twitter: {
            card: "summary_large_image",
            title: t('meta_title'),
            description: t('meta_description'),
            creator: "@maps_black",
            creatorId: "1274191176267071490",
            images: ["https://blackmaps.com.ar/image/og-home.png"],
        },
        alternates: {
            canonical: canonicalUrl,
        }
    };
}

export default async function Home({ params: { locale } }) {
    const { t, resources } = await initTranslations(locale, i18nNamespaces);
    
    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <Script
                id="col-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />
            <Script
                id="org-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />

            <main className="pt-[60px] flex flex-col items-center justify-center w-full">
                <section className="hero flex items-center justify-center h-screen w-full">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-lg sm:p-0 p-12">
                            <p className="text-5xl font-bold">🌍</p>
                            <h1 className="mb-5 text-5xl font-bold">{t('hero_title')}</h1>
                            <h2 className="mb-5 text-xl">
                                {t('hero_subtitle')}
                            </h2>
                            <div className="links flex gap-3 justify-center flex-wrap">
                                <Link href="/maps" title="Galería de Mapas" className="gap-2 flex items-center justify-center hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#3d3d3d] bg-[#aaa] rounded-xl p-2 font-bold flex-shrink-1">
                                    {t('hero_link_maps')}
                                </Link>
                                <a href="https://x.com/maps_black" className="gap-2 flex items-center justify-center hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#3d3d3d] bg-[#aaa] rounded-xl p-2 font-bold flex-shrink-1" rel="noopener noreferrer" target="_blank">{t('hero_link_twitter')}</a>
                                <a href="#about" className="gap-2 flex items-center justify-center hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#3d3d3d] bg-[#aaa] rounded-xl p-2 font-bold flex-shrink-1">{t('hero_link_about')}</a>
                                <Link href="/contact" title="Formulario de Contacto" className="gap-2 flex items-center justify-center hover:scale-105 active:scale-95 transition dark:text-white text-[#1d1d1d] active:bg-[#bbb] dark:active:bg-[#2d2d2d] dark:bg-[#3d3d3d] bg-[#aaa] rounded-xl p-2 font-bold flex-shrink-1">
                                    {t('hero_link_contact')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about" className="flex flex-col gap-8 w-full items-start justify-center p-8">
                    <h2 className="text-7xl font-bold text-center mx-auto underline">{t('about_title')}</h2>
                    <article className="flex flex-col md:flex-row w-full gap-8 bg-white dark:bg-[#3d3d3d] items-center justify-center rounded-xl p-12">
                        <div className="flex mt-4 md:w-1/2 items-center justify-center md:justify-between flex-wrap gap-24">
                            <Image
                                loading="lazy"
                                src="/image/first-map.webp"
                                className="rounded-xl p-2 w-full hover:scale-105 transition duration-500 filter hover:drop-shadow-custom-lg"
                                alt={t('first_map_alternate')}
                                width={400}
                                height={200}
                            />
                        </div>
                        <div itemScope itemType="https://schema.org/Question" className="flex flex-col gap-8 md:w-1/2">
                            <h3 itemProp="name" className="text-[#2d2d2d] dark:text-[#eee] font-bold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{t('first_question')}</h3>
                            <div itemProp="suggestedAnswer" itemScope itemType="https://schema.org/Answer">
                                <p itemProp="text" className="text-[20px] max-w-[600px] text-[#3d3d3d] dark:text-gray-400">
                                    {t('first_answer')}
                                </p>
                            </div>
                        </div>
                    </article>

                    <article className="flex flex-col md:flex-row w-full gap-8 bg-white dark:bg-[#3d3d3d] items-center justify-center rounded-xl p-12">
                        <div itemScope itemType="https://schema.org/Question" className="flex flex-col gap-8 md:w-1/2">
                            <h3 itemProp="name" className="text-[#2d2d2d] dark:text-[#eee] font-bold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{t('second_question')}</h3>
                            <div itemProp="suggestedAnswer" itemScope itemType="https://schema.org/Answer">
                                <p itemProp="text" className="text-[20px] max-w-[600px] text-[#3d3d3d] dark:text-gray-400">
                                {t('second_answer')}
                                </p>
                            </div>
                        </div>
                        <div className="flex mt-4 md:w-1/2 items-center justify-center md:justify-between flex-wrap gap-24">
                            <Image
                                loading="lazy"
                                src="/image/agus-p1.webp"
                                className="rounded-xl p-2 w-full hover:scale-105 transition duration-500 filter hover:drop-shadow-custom-lg"
                                alt={t('agus_image_alternate')}
                                width={400}
                                height={200}
                            />
                        </div>
                    </article>
                    <article className="flex flex-col md:flex-row w-full gap-8 bg-white dark:bg-[#3d3d3d] items-center justify-center rounded-xl p-12">
                        <div className="flex mt-4 md:w-1/2 items-center justify-center md:justify-between flex-wrap gap-24">
                            <Image
                                loading="lazy"
                                src="/image/map-example-1.webp"
                                className="rounded-xl p-2 w-full hover:scale-105 transition duration-500 filter hover:drop-shadow-custom-lg"
                                alt="Mapa de Black Maps llamado: Club de ESTADOS UNIDOS 🇺🇸 más buscado en Google por país (desde 2004)"
                                width={400}
                                height={200}
                            />
                        </div>
                        <div itemScope itemType="https://schema.org/Question" className="flex flex-col gap-8 md:w-1/2">
                            <h3 itemProp="name" className="text-[#2d2d2d] dark:text-[#eee] font-bold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{t('third_question')}</h3>
                            <div itemProp="suggestedAnswer" itemScope itemType="https://schema.org/Answer">
                                <p itemProp="text" className="text-[20px] max-w-[600px] text-[#3d3d3d] dark:text-gray-400">
                                {t('third_answer')}
                                </p>
                            </div>
                        </div>
                    </article>
                    <p className="hidden seo-declaration-title">{t('meta_title')}</p>
                </section>
            </main >
        </TranslationsProvider>
    );
}

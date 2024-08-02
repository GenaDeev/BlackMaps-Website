import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import TranslationsProvider from './components/TranslationsProvider';
const i18nNamespaces = ['home'];
import initTranslations from '../i18n';
import HomeArticle from "./components/HomeArticle";

export async function generateSchemas(t, locale) {
    const baseUrl = "https://blackmaps.com.ar"
    const schema_url = locale && locale !== 'default' ? `${baseUrl}/${locale}` : baseUrl;
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Black Maps",
        "description": t('schema_description'),
        "founder": {
            "@type": "Person",
            "name": "Agustín Sánchez"
        },
        "image": "https://blackmaps.com.ar/image/og-home.png",
        "url": schema_url,
        "sameAs": ["https://x.com/maps_black"],
        "logo": "https://blackmaps.com.ar/image/app-icon-1024.webp",
        "ContactPoint": {
            "@type": "ContactPoint",
            "email": "ayuda@blackmaps.com.ar",
            "contactType": "Customer Service",
            "availableLanguage": ["Spanish", "English"]
        }
    }
}

export async function generateMetadata({ params: { locale } }) {
    const { t } = await initTranslations(locale, i18nNamespaces);
    const baseUrl = "https://blackmaps.com.ar";
    const canonicalUrl = locale && locale !== 'default' ? `${baseUrl}/${locale !== 'es' ? locale : ''}` : baseUrl;

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
            languages: {
                'x-default': "https://blackmaps.com.ar",
                'en': "https://blackmaps.com.ar/en",
            }
        }
    };
}


export default async function Home({ params: { locale } }) {
    const { t, resources } = await initTranslations(locale, i18nNamespaces);
    const schemas = await generateSchemas(t, locale);
    const schemaJSON = JSON.stringify(schemas);

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}>
            <Script
                id="org-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schemaJSON),
                }}
            />

            <main className="flex flex-col items-center justify-center w-full">
                <section className="min-h-[calc(100svh+20px)] hero flex items-center justify-center w-full bg-hero-light dark:bg-hero-dark">
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

                <section id="about" className="flex flex-col gap-8 w-full items-start md:items-center justify-center p-8">
                    <h2 className="text-7xl font-bold text-center mx-auto underline">{t('about_title')}</h2>

                    <HomeArticle
                        title={t('first_question')}
                        image={
                            {
                                source: "/image/first-map.webp",
                                alternate: t('first_map_alternate')
                            }
                        }
                        locale={locale}
                        alignement="right"
                    >
                        {t('first_answer')}
                    </HomeArticle>

                    <HomeArticle
                        title={t('second_question')}
                        image={
                            {
                                source: "/image/agus-p1.webp",
                                alternate: t('agus_image_alternate')
                            }
                        }
                        locale={locale}
                        alignement="left"
                    >
                        {t('second_answer')}
                    </HomeArticle>
                    
                    <HomeArticle 
                        title={t('third_question')}
                        image={
                            {
                                source: "/image/map-example-1.webp",
                                alternate: "Mapa de Black Maps llamado: Club de ESTADOS UNIDOS 🇺🇸 más buscado en Google por país (desde 2004)"
                            }
                        }
                        locale={locale}
                        alignement="right"
                    >
                        {t('third_answer')}
                    </HomeArticle>
                    <p className="hidden seo-declaration-title">{t('meta_title')}</p>
                </section>
            </main >
        </TranslationsProvider>
    );
}

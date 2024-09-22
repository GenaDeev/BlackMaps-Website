import ClientSide from '../components/ClientSide';
import Error from '../components/ErrorMessage';
import Script from "next/script";
import TranslationsProvider from '../components/TranslationsProvider';
import initTranslations from '../../i18n';
const i18nNamespaces = ['maps'];

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Galería de Mapas",
    "description": "Explora todos los mapas de Black Maps.",
    "url": "https://blackmaps.com.ar/maps"
};

export async function generateSchemas(t, locale) {
    const baseUrl = "https://blackmaps.com.ar"
    const schema_url = locale && locale !== 'default' ? `${baseUrl}/${locale}/maps` : baseUrl;
    return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": t('schema_name'),
        "description": t('schema_description'),
        "url": schema_url,
    }
}

export async function generateMetadata({ params: { locale } }) {
    const { t } = await initTranslations(locale, i18nNamespaces);
    const baseUrl = "https://blackmaps.com.ar";
    const canonicalUrl = locale && locale !== 'default' ? `${baseUrl}/${locale !== 'es' ? locale : ''}/maps` : baseUrl;
    return {
        title: t('meta_title'),
        description: t('meta_description'),
        keywords: [t('kw0'), "Twitter", "BlackMaps", t('kw3'), t('kw4')],
        openGraph: {
            title: t('meta_title'),
            description: t('meta_description'),
            images: "https://blackmaps.com.ar/image/og-maps.png",
        },
        twitter: {
            card: "summary_large_image",
            title: t('meta_title'),
            description: t('meta_description'),
            creator: "@maps_black",
            creatorId: "1274191176267071490",
            images: ["https://blackmaps.com.ar/image/og-maps.png"],
        },
        alternates: {
            canonical: canonicalUrl,
            languages: {
                'x-default': "https://blackmaps.com.ar/maps",
                'en': "https://blackmaps.com.ar/en/maps",
            }
        }
    };
}

export default async function MapsPage({ params: { locale } }) {
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
            <main className="flex flex-col">
                <div className="pt-20 px-12 sm:px-20 my-12 items-center flex flex-col gap-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        {t('main_title')}
                    </h1>
                    <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl">
                        {t('main_subtitle')}
                    </h2>
                    <Error type="minor" message={t('error_message')} />
                    <ClientSide/>
                </div>
            </main>
        </TranslationsProvider>
    );
}

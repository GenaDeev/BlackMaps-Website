import ContactForm from "../components/ContactForm";
import Script from "next/script";
import TranslationsProvider from "../components/TranslationsProvider";
import initTranslations from "../../i18n";
const i18nNamespaces = ["contact"];

export async function generateSchemas(t, locale) {
  const baseUrl = "https://blackmaps.com.ar";
  const schema_url =
    locale && locale !== "default" ? `${baseUrl}/${locale}/contact` : baseUrl;
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: t("schema_name"),
    image: "https://blackmaps.com.ar/image/og-contact.png",
    url: schema_url,
  };
}

export async function generateMetadata({ params: { locale } }) {
  const { t } = await initTranslations(locale, i18nNamespaces);
  const baseUrl = "https://blackmaps.com.ar";
  const canonicalUrl =
    locale && locale !== "default"
      ? `${baseUrl}/${locale !== "es" ? locale : ""}/contact`
      : baseUrl;
  return {
    title: t("meta_title"),
    description: t("meta_description"),
    keywords: [
      t("kw0"),
      "Twitter",
      "BlackMaps",
      t("kw3"),
      t("kw4"),
      t("kw5"),
      t("kw6"),
    ],
    openGraph: {
      title: t("meta_title"),
      description: t("meta_description"),
      images: "https://blackmaps.com.ar/image/og-contact.png",
    },
    twitter: {
      card: "summary_large_image",
      title: t("meta_title"),
      description: t("meta_description"),
      creator: "@maps_black",
      creatorId: "1274191176267071490",
      images: ["https://blackmaps.com.ar/image/og-contact.png"],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "x-default": "https://blackmaps.com.ar/contact",
        en: "https://blackmaps.com.ar/en/contact",
      },
    },
  };
}

export default async function ContactPage({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const schemas = await generateSchemas(t, locale);
  const schemaJSON = JSON.stringify(schemas);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Script
        id="ctc-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: schemaJSON,
        }}
      />
      <main className="bg-white dark:bg-neutral-900 pt-20">
        <div className="container px-6 py-12 mx-auto">
          <div>
            <p className="font-medium text-blue-500 dark:text-blue-400">
              BlackMaps
            </p>

            <h1 className="mt-2 text-4xl font-bold text-neutral-800 md:text-6xl dark:text-white">
              {t("title")}
            </h1>

            <p className="mt-3 text-neutral-500 dark:text-neutral-400">
              {t("subtitle")}.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div className="mx-auto text-center md:mx-0">
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-neutral-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-neutral-800 dark:text-white">
                  Email
                </h2>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                  {t("email_data")}
                </p>
                <a
                  href="mailto:maps.black8@gmail.com"
                  className="mt-2 text-sm text-blue-500 dark:text-blue-400"
                >
                  maps.black8@gmail.com
                </a>
              </div>

              <div className="mx-auto text-center md:mx-0">
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-neutral-800">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 300 300.3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M179 127 290 0h-26l-97 110L89 0H0l117 167L0 300h26l103-116 82 116h89M36 20h41l187 262h-41"></path>
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-neutral-800 dark:text-white">
                  Twitter (X)
                </h2>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                  {t("tw_data")}
                </p>
                <a
                  href="https://x.com/maps_black"
                  className="mt-2 text-sm text-blue-500 dark:text-blue-400"
                >
                  @maps_black
                </a>
              </div>

              <div className="mx-auto text-center md:mx-0">
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-neutral-800">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" stroke="none" />
                    <path d="M4 8a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-4 4H8a4 4 0 01-4-4z" />
                    <path d="M9 12a3 3 0 106 0 3 3 0 10-6 0M16.5 7.5v.01" />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-neutral-800 dark:text-white">
                  Instagram
                </h2>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                  {t("ig_data")}
                </p>
                <a
                  href="https://instagram.com/maps_black"
                  className="mt-2 text-sm text-blue-500 dark:text-blue-400"
                >
                  @maps_black
                </a>
              </div>

              <div className="mx-auto text-center md:mx-0">
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-neutral-800">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
                    <circle cx="11.994" cy="11.979" r="3.003"></circle>
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-neutral-800 dark:text-white">
                  {t("perig")}
                </h2>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                  {t("perig_data")}
                </p>
                <a
                  href="https://instagram.com/agustinnschez"
                  className="mt-2 text-sm text-blue-500 dark:text-blue-400"
                >
                  @agustinnschez
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </main>
    </TranslationsProvider>
  );
}

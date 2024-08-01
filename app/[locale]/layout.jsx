import "../globals.css";
import Footer from './components/Footer';
import Header from './components/Header';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import i18nConfig from '@/i18nConfig';

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} dir={locale}>
      <head>
        <link rel="icon" type="image/webp" href="https://blackmaps.com.ar/image/favicon.webp" />
        <meta property="fb:app_id" content="1179608519718137" />
        <meta property="og:site_name" content="Black Maps" />
        <meta property="og:locale" content="es_MX" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@maps_black" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://blackmaps.com.ar/image/at-180.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="https://blackmaps.com.ar/image/at-120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="https://blackmaps.com.ar/image/at-167.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="https://blackmaps.com.ar/image/at-152.png"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Black Maps" />

        <meta name="msapplication-TileColor" content="#333333" />
        <meta name="msapplication-TileImage" content="https://blackmaps.com.ar/image/mstile-144x144.png" />
        <meta name="msapplication-config" content="https://blackmaps.com.ar/browserconfig.xml" />
        <meta name="theme-color" content="#333333" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        <link rel="manifest" href="https://blackmaps.com.ar/manifest.json" />

        <meta name="author" content="BlackMaps" />
        <meta name="publisher" content="GenaDev" />
        <meta name="rating" content="5" />
        <meta name="distribution" content="global" />
        <meta name="copyright" content="BlackMaps™ 2024" />
        <meta name="keywords" content="blackmaps, mapas, twitter, web, negro" />
      </head>
      <body className="text-[#1d1d1d] bg-[#eee] dark:bg-[#1d1d1d] dark:text-white no-js dark font-inter">
        <Header locale={locale}/>
        {children}
        <SpeedInsights/>
        <Footer locale={locale}/>
        </body>
    </html>
  );
}

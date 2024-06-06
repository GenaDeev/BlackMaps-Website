import "./globals.css";
import Footer from './components/Footer';
import Header from './components/Header';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="es">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/webp" href="https://blackmaps.vercel.app/favicon.webp" />
        <meta property="fb:app_id" content="1179608519718137" />
        <meta property="og:site_name" content="Black Maps" />
        <meta property="og:locale" content="es_MX" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@maps_black" />
        <link rel="preload" href="https://blackmaps.vercel.app/bg-map-d.webp" as="image"> 
        <link rel="preload" href="https://blackmaps.vercel.app/bg-map-l.webp" as="image"> 
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://blackmaps.vercel.app/at-180.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="https://blackmaps.vercel.app/at-120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="https://blackmaps.vercel.app/at-167.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="https://blackmaps.vercel.app/at-152.png"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Black Maps" />

        <meta name="msapplication-TileColor" content="#333333" />
        <meta name="msapplication-TileImage" content="https://blackmaps.vercel.app/mstile-144x144.png" />
        <meta name="msapplication-config" content="https://blackmaps.vercel.app/browserconfig.xml" />
        <meta name="theme-color" content="#333333" />

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://blackmaps.vercel.app/" />

        <link rel="manifest" href="https://blackmaps.vercel.app/manifest.json" />

        <meta name="author" content="BlackMaps" />
        <meta name="publisher" content="GenaDev" />
        <meta name="rating" content="5" />
        <meta name="distribution" content="global" />
        <meta name="copyright" content="BlackMaps™ 2024" />
        <meta name="keywords" content="blackmaps, mapas, twitter, web, negro" />
      </head>
      <body className="text-[#1d1d1d] bg-[#eee] dark:bg-[#1d1d1d] dark:text-white">
        <Header/>
        {children}
        <Analytics/>
        <SpeedInsights/>
        <Footer/>
        </body>
    </html>
  );
}

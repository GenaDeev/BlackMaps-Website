![BlackMaps Banner](public/image/readme-banner.webp)
# 🗺️ BlackMaps™ - Sitio en desarrollo

## Descripción

Bienvenido al sitio web oficial de **BlackMaps**, una cuenta de X (antes Twitter) que se dedica a publicar mapas sobre absolutamente todo. ¿Algo existe? Le hacemos un mapa.

## Paginas

- **[Inicio](https://blackmaps.com.ar/)**
- **[Mapas](https://blackmaps.com.ar/maps)**
- **[Contact](https://blackmaps.com.ar/contact)**

## Desarrollo

Este sitio web ha sido desarrollado por **[GenaDev](https://www.linkedin.com/in/genadev)** y alojado por **[GenaHost](https://genahost.vercel.app/)**. Los mapas y logos del sitio son propiedad de BlackMaps y no deben ser utilizados sin autorización.

- **[Repositorio](https://github.com/GenaAaaj/BlackMaps-Website/)**
- **[Licencia](https://github.com/GenaAaaj/BlackMaps-Website/blob/main/LICENSE)**
- **[GenaDev](https://www.linkedin.com/in/genadev)**

## Contacta a BlackMaps

- [Twitch](https://www.twitch.tv/mapsblack/)
- [Instagram](https://www.instagram.com/maps_black/)
- [Twitter](https://x.com/maps_black/)
- [GitHub](https://github.com/GenaAaaj/BlackMaps-Website/)
- [Correo Electrónico](mailto:maps.black8@gmail.com)

## Información Adicional

© 2024 **[BlackMaps™](https://blackmaps.com.ar/)**. Sitio web desarrollado por **[GenaDev](https://www.linkedin.com/in/genadev)** y alojado por **[GenaHost](https://genahost.vercel.app/)**. Los mapas y logos del sitio son propiedad de BlackMaps y no deben ser utilizados sin autorización.

## Estructura del Proyecto
### Framework: **[NextJS 14.2.5](http://nextjs.org)**
![BlackMaps Logo](public/image/readme-framework.webp)
Using APP Router
```
🗺️ BlackMaps
├─ 📦 app
│  ├─ 🈲 [locale] -> Envuelve el contenido y varia segun el idioma del usuario
│  │  ├─ ❌ [...notfound] -> Redirige las paginas no encontradas al archivo not-found.jsx
│  │  │  └─ page.jsx
│  │  ├─ 🧩 components
│  │  │  ├─ ClientHeader.jsx -> 🧑‍💻 Client Component
│  │  │  ├─ ClientSide.jsx -> 🧑‍💻 Client Component
│  │  │  ├─ ContactForm.jsx -> 🧑‍💻 Client Component
│  │  │  ├─ ErrorMessage.jsx -> 🛜 Server Component
│  │  │  ├─ Footer.jsx -> 🛜 Server Component
│  │  │  ├─ Header.jsx -> 🛜 Server Component
│  │  │  ├─ HomeArticle.jsx -> 🛜 Server Component
│  │  │  ├─ Logo.jsx -> 🛜 Server Component
│  │  │  ├─ MapCard.jsx -> 🛜 Server Component
│  │  │  ├─ NotFoundTitle.jsx -> 🛜 Server Component
│  │  │  ├─ Pathname.jsx -> 🧑‍💻 Client Component
│  │  │  ├─ PoweredByGpt.jsx -> 🛜 Server Component
│  │  │  └─ TranslationsProvider.jsx -> 🛜 Server Component
│  │  ├─ 📨 contact
│  │  │  └─ page.jsx
│  │  ├─ 🌱 layout.jsx
│  │  ├─ 🗺️ maps
│  │  │  └─ page.jsx
│  │  ├─ ❌ not-found.jsx -> Pagina 404
│  │  ├─ 🏠 page.jsx -> Homepage
│  │  └─ 🎨 template.jsx -> Aplica animaciones y resuelve algunas gestiones antes de cargar la pagina.
│  ├─ 🛜 api -> Backend
│  │  ├─ 📨 mail -> Envia correos electronicos (Formulario de contacto)
│  │  │  ├─ route.js -> Realmente devuelve 405 (Method not allowed)
│  │  │  └─ send
│  │  │     └─ route.js
│  │  ├─ 🗺️ maps -> Carga los mapas desde otro servidor
│  │  │  └─ route.js
│  │  └─ route.js -> Realmente devuelve 405 (Method not allowed)
│  ├─ 🎨 globals.css -> CSS Principal
│  └─ 🈲 i18n.js -> Plugin de idioma
├─ 🈲⚙️ i18nConfig.js -> Configuracion lugin de idioma
├─ 🈲 locales -> Carpeta que almacena las traducciones
│  ├─ 🇬🇧 en -> English
│  │  ├─ ai-card.json
│  │  ├─ contact.json
│  │  ├─ footer.json
│  │  ├─ header.json
│  │  ├─ home.json
│  │  ├─ maps.json
│  │  └─ notfound.json
│  └─ 🇪🇸 es -> Español
│     ├─ ai-card.json
│     ├─ contact.json
│     ├─ footer.json
│     ├─ header.json
│     ├─ home.json
│     ├─ maps.json
│     └─ notfound.json
├─ 🛜 middleware.js -> Se ejecuta antes de cargar la pagina
├─ 📦 package.json
├─ public
│  ├─ browserconfig.xml
│  ├─ favicon.ico
│  ├─ 📷 image
│  │  ├─ 🏳️ flags
│  │  │  ├─ en.svg
│  │  │  └─ es.svg
│  │  └─ 🖼️ Imagenes del sitio
│  ├─ 📲 manifest.json
│  ├─ 🤖 robots.txt
│  ├─ 🛡️ security.txt
│  └─ 🗺️ sitemap.xml
├─ ©️ LICENSE.md
└─ 📖 README.md
```

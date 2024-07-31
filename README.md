![BlackMaps Banner](public/image/readme-banner.webp)
# 🗺️ BlackMaps™ - Sitio en desarrollo
<div style="font-family: Inter;">

## Descripción

Bienvenido al sitio web oficial de **BlackMaps**, una cuenta de X (antes Twitter) que se dedica a publicar mapas sobre absolutamente todo. ¿Algo existe? Le hacemos un mapa.

## Paginas

- **[Inicio](https://blackmaps.com.ar/)**
- **[Mapas](https://blackmaps.com.ar/maps)**
- **[Contacto](https://blackmaps.com.ar/contact)**

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

<pre style="font-family: 'Inter'; font-size: 14px; white-space: pre-wrap; word-wrap: break-word; color: white; background: #46776">
🗺️ BlackMaps
├─ 📦 <a href="https://github.com/GenaDeev/BlackMaps-Website/tree/main/app" style="color: #0366d6;">app</a>
│  ├─ 🈲 <a href="https://github.com/GenaDeev/BlackMaps-Website/tree/main/app/%5Blocale%5D" style="color: #0366d6;">locale</a> -> Envuelve el contenido y varía según el idioma del usuario
│  │  ├─ ❌ <a href="https://github.com/GenaDeev/BlackMaps-Website/tree/main/app/%5Blocale%5D/%5B...notfound%5D" style="color: #0366d6;">[...notfound]</a> -> Redirige inexistentes al archivo not-found.jsx
│  │  │  └─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/app/%5Blocale%5D/%5B...notfound%5D/page.jsx" style="color: #0366d6;">page.jsx</a>
│  │  ├─ 🧩 <a href="https://github.com/GenaDeev/BlackMaps-Website/tree/main/app/%5Blocale%5D/components" style="color: #0366d6;">components</a>
│  │  │  ├─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/app/%5Blocale%5D/components/ClientHeader.jsx" style="color: #0366d6;">ClientHeader.jsx</a> -> 🧑‍💻 Client Component
│  │  │  ├─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/app/%5Blocale%5D/components/ClientSide.jsx" style="color: #0366d6;">ClientSide.jsx</a> -> 🧑‍💻 Client Component
│  │  │  ├─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/app/%5Blocale%5D/components/ContactForm.jsx" style="color: #0366d6;">ContactForm.jsx</a> -> 🧑‍💻 Client Component
│  │  │  ├─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/app/%5Blocale%5D/components/ErrorMessage.jsx" style="color: #0366d6;">ErrorMessage.jsx</a> -> 🛜 Server Component
│  │  │  ├─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/app/%5Blocale%5D/components/Footer.jsx" style="color: #0366d6;">Footer.jsx</a> -> 🛜 Server Component
│  │  │  ├─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/app/%5Blocale%5D/components/Header.jsx" style="color: #0366d6;">Header.jsx</a> -> 🛜 Server Component
│  │  │  ├─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/app/%5Blocale%5D/components/HomeArticle.jsx" style="color: #0366d6;">HomeArticle.jsx</a> -> 🛜 Server Component
│  │  │  ├─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/app/%5Blocale%5D/components/Logo.jsx" style="color: #0366d6;">Logo.jsx</a> -> 🛜 Server Component
│  │  │  ├─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/app/%5Blocale%5D/components/MapCard.jsx" style="color: #0366d6;">MapCard.jsx</a> -> 🛜 Server Component
│  │  │  ├─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/app/%5Blocale%5D/components/NotFoundTitle.jsx" style="color: #0366d6;">NotFoundTitle.jsx</a> -> 🛜 Server Component
│  │  │  ├─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/app/%5Blocale%5D/components/Pathname.jsx" style="color: #0366d6;">Pathname.jsx</a> -> 🧑‍💻 Client Component
│  │  │  ├─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/app/%5Blocale%5D/components/PoweredByGpt.jsx" style="color: #0366d6;">PoweredByGpt.jsx</a> -> 🛜 Server Component
│  │  │  └─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/app/%5Blocale%5D/components/TranslationsProvider.jsx" style="color: #0366d6;">TranslationsProvider.jsx</a> -> 🛜 Server Component
│  │  ├─ 📨 <a href="https://github.com/GenaDeev/BlackMaps-Website/tree/main/app/%5Blocale%5D/contact" style="color: #0366d6;">contact</a>
│  │  │  └─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/app/%5Blocale%5D/contact/page.jsx" style="color: #0366d6;">page.jsx</a>
│  │  ├─ 🌱 <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/app/%5Blocale%5D/layout.jsx" style="color: #0366d6;">layout.jsx</a>
│  │  ├─ 🗺️ <a href="https://github.com/GenaDeev/BlackMaps-Website/tree/main/app/%5Blocale%5D/maps" style="color: #0366d6;">maps</a>
│  │  │  └─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/app/%5Blocale%5D/maps/page.jsx" style="color: #0366d6;">page.jsx</a>
│  │  ├─ ❌ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/app/%5Blocale%5D/not-found.jsx" style="color: #0366d6;">not-found.jsx</a> -> Página 404
│  │  ├─ 🏠 <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/app/%5Blocale%5D/page.jsx" style="color: #0366d6;">page.jsx</a> -> Homepage
│  │  └─ 🎨 <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/app/%5Blocale%5D/template.jsx" style="color: #0366d6;">template.jsx</a> -> Aplica animaciones y resuelve algunas gestiones antes de cargar la página.
│  ├─ 🛜 <a href="https://github.com/GenaDeev/BlackMaps-Website/tree/main/app/api" style="color: #0366d6;">api</a> -> Backend
│  │  ├─ 📨 <a href="https://github.com/GenaDeev/BlackMaps-Website/tree/main/app/api/mail" style="color: #0366d6;">mail</a> -> Envía correos electrónicos (Formulario de contacto)
│  │  │  ├─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/app/api/mail/route.js" style="color: #0366d6;">route.js</a> -> Realmente devuelve 405 (Method not allowed)
│  │  │  └─ <a href="https://github.com/GenaDeev/BlackMaps-Website/tree/main/app/api/mail/send" style="color: #0366d6;">send</a>
│  │  │     └─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/app/api/mail/send/route.js" style="color: #0366d6;">route.js</a>
│  │  ├─ 🗺️ <a href="https://github.com/GenaDeev/BlackMaps-Website/tree/main/app/api/maps" style="color: #0366d6;">maps</a> -> Carga los mapas desde otro servidor
│  │  │  └─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/app/api/maps/route.js" style="color: #0366d6;">route.js</a>
│  │  └─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/app/api/route.js" style="color: #0366d6;">route.js</a> -> Realmente devuelve 405 (Method not allowed)
│  ├─ 🎨 <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/app/globals.css" style="color: #0366d6;">globals.css</a> -> CSS Principal
│  └─ 🈲 <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/app/i18n.js" style="color: #0366d6;">i18n.js</a> -> Plugin de idioma
├─ 🈲⚙️ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/i18nConfig.js" style="color: #0366d6;">i18nConfig.js</a> -> Configuración plugin de idioma
├─ 🈲 <a href="https://github.com/GenaDeev/BlackMaps-Website/tree/main/locales" style="color: #0366d6;">locales</a> -> Carpeta que almacena las traducciones
│  ├─ 🇬🇧 <a href="https://github.com/GenaDeev/BlackMaps-Website/tree/main/locales/en" style="color: #0366d6;">en</a> -> English
│  │  ├─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/locales/en/ai-card.json" style="color: #0366d6;">ai-card.json</a>
│  │  ├─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/locales/en/contact.json" style="color: #0366d6;">contact.json</a>
│  │  ├─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/locales/en/footer.json" style="color: #0366d6;">footer.json</a>
│  │  ├─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/locales/en/header.json" style="color: #0366d6;">header.json</a>
│  │  ├─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/locales/en/home.json" style="color: #0366d6;">home.json</a>
│  │  ├─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/locales/en/maps.json" style="color: #0366d6;">maps.json</a>
│  │  └─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/locales/en/notfound.json" style="color: #0366d6;">notfound.json</a>
│  └─ 🇪🇸 <a href="https://github.com/GenaDeev/BlackMaps-Website/tree/main/locales/es" style="color: #0366d6;">es</a> -> Español
│     ├─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/locales/es/ai-card.json" style="color: #0366d6;">ai-card.json</a>
│     ├─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/locales/es/contact.json" style="color: #0366d6;">contact.json</a>
│     ├─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/locales/es/footer.json" style="color: #0366d6;">footer.json</a>
│     ├─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/locales/es/header.json" style="color: #0366d6;">header.json</a>
│     ├─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/locales/es/home.json" style="color: #0366d6;">home.json</a>
│     ├─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/locales/es/maps.json" style="color: #0366d6;">maps.json</a>
│     └─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/locales/es/notfound.json" style="color: #0366d6;">notfound.json</a>
├─ 🛜 <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/middleware.js" style="color: #0366d6;">middleware.js</a> -> Se ejecuta antes de cargar la página
├─ 📦 <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/package.json" style="color: #0366d6;">package.json</a>
├─ 📢 <a href="https://github.com/GenaDeev/BlackMaps-Website/tree/main/public" style="color: #0366d6;">public</a>
│  ├─ ⚙️ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/public/browserconfig.xml" style="color: #0366d6;">browserconfig.xml</a>
│  ├─ 🖼️ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/public/favicon.ico" style="color: #0366d6;">favicon.ico</a>
│  ├─ 📷 <a href="https://github.com/GenaDeev/BlackMaps-Website/tree/main/public/image" style="color: #0366d6;">image</a>
│  │  ├─ 🏳️ <a href="https://github.com/GenaDeev/BlackMaps-Website/tree/main/public/image/flags" style="color: #0366d6;">flags</a>
│  │  │  ├─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/public/image/flags/en.svg" style="color: #0366d6;">en.svg</a>
│  │  │  └─ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/public/image/flags/es.svg" style="color: #0366d6;">es.svg</a>
│  │  └─ 🖼️ <a href="https://github.com/GenaDeev/BlackMaps-Website/tree/main/public/image" style="color: #0366d6;">Imagenes del sitio</a>
│  ├─ 📲 <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/public/manifest.json" style="color: #0366d6;">manifest.json</a>
│  ├─ 🤖 <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/public/robots.txt" style="color: #0366d6;">robots.txt</a>
│  ├─ 🛡️ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/public/security.txt" style="color: #0366d6;">security.txt</a>
│  └─ 🗺️ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/public/sitemap.xml" style="color: #0366d6;">sitemap.xml</a>
├─ ©️ <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/LICENSE.md" style="color: #0366d6;">LICENSE.md</a>
└─ 📖 <a href="https://github.com/GenaDeev/BlackMaps-Website/blob/main/README.md" style="color: #0366d6;">README.md</a>
</pre>
---
<div style="display:flex; align-items: center; justify-content: space-between;">
    <img alt="Logo de GenaDeev" src="public/image/app-icon-512.webp" width="256" style="scale: .6;" alt="BlackMaps Logo">
    <div>
    <h6 style="font-size: 24px"><span style="color:white">BlackMaps</span> by <span style="color:white">Agustin Sanchez</span> ©2024</h6>
    <ul style="list-style: none;">
        <li style="display:flex; align-items: center; gap: 4px;"><img src="https://img.freepik.com/vector-gratis/twitter-nuevo-logotipo-2023-x-vector-fondo-blanco_1017-45422.jpg?size=338&ext=jpg" style="border-radius: 999px;" width="16px" height="16px"><a style="color:inherit;" href="https://x.com/maps_black"> Twitter</a></li>
    </ul>
    </div>
</div>

---

<div style="display:flex; align-items: center; justify-content: space-between;">
    <img alt="Logo de GenaDeev" src="public/image/genadev-v-nobg-2.webp">
    <div>
    <h6 style="font-size: 24px">Developed by <span style="color:white">GenaDeev</span> ©2024</h6>
    <ul style="list-style: none;">
        <li style="display:flex; align-items: center; gap: 4px;"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png" width="16px" height="16px"><a style="color:inherit;" href="https://github.com/GenaDeev"> GitHub</a></li>
        <li style="display:flex; align-items: center; gap: 4px;"><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" width="16px" height="16px"><a style="color:inherit;" href="https://www.linkedin.com/in/genadev/"> LinkedIn</a></li>
        <li style="display:flex; align-items: center; gap: 4px;"><img src="https://img.freepik.com/vector-gratis/twitter-nuevo-logotipo-2023-x-vector-fondo-blanco_1017-45422.jpg?size=338&ext=jpg" style="border-radius: 999px;" width="16px" height="16px"><a style="color:inherit;" href="https://x.com/genaaaaj"> Twitter</a></li>
    </ul>
    </div>
</div>

---

</div>
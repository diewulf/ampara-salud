# Ampara Salud Mental · Next.js

Migración local de la versión HTML de Ampara a Next.js 16 (App Router). Incluye la portada y las rutas `/politica-de-privacidad/`, `/condiciones-de-atencion/` y `/derechos-del-paciente/`. Conserva el contenido, la identidad visual, el carrusel automático, el acceso flotante de WhatsApp y el botón de Encuadrado. No se ha publicado.

## Requisitos

- Node.js 20.9 o superior.
- npm.
- Conexión a Internet para cargar Google Fonts y el agendamiento de Encuadrado durante la vista previa.

## Levantar en local

```bash
npm ci
npm run dev
```

Abrir `http://localhost:4176/`. El puerto se define en `package.json`.

## Generar y comprobar la entrega

```bash
npm run build
npm run verify
```

`next.config.mjs` usa `output: "export"` y `trailingSlash: true`. `npm run build` genera el sitio en `out/`, listo para un alojamiento estático que sirva los archivos `index.html` de cada carpeta. El código fuente entregable está en `app/`, `components/` y `public/`. `node_modules/`, `.next/` y `out/` son generados y no se incluyen en el ZIP.

## Dónde modificar

- `app/page.jsx`: portada, servicios, testimonios, reservas y preguntas frecuentes.
- `app/{politica-de-privacidad,condiciones-de-atencion,derechos-del-paciente}/page.jsx`: contenido de las páginas informativas y sus metadatos.
- `components/SiteShell.jsx`: navegación, pie, WhatsApp y botones de reserva compartidos.
- `components/HomeEnhancements.jsx`: movimiento ambiental y avance automático de testimonios, con respeto a movimiento reducido.
- `app/styles/`: CSS original adaptado a la estructura Next.js.
- `public/assets/`: logos y fotografías.

El botón oficial de Encuadrado usa la URL `https://encuadrado.com/p/ignacia-mendoza/s/atencion-medica-en-salud-mental/embed/popup` y el script `https://encuadrado.com/p/embed.js`. WhatsApp apunta a `https://wa.me/56932266295`. Las reservas y pagos ocurren fuera de esta web.

Antes de publicar, revisar [VALIDACION-PREVIA-PUBLICACION.md](./VALIDACION-PREVIA-PUBLICACION.md), confirmar la operación de hosting y validar jurídicamente los textos informativos.

# Validación previa a una eventual publicación

Esta versión permanece local. Las páginas informativas reflejan el código y los datos suministrados al 23 de octubre de 2026.

## Puntos administrativos y jurídicos

- Confirmar quién opera jurídicamente el sitio y quién responde por los datos técnicos de su alojamiento. Completar la identificación y el canal de consultas de privacidad que correspondan antes de publicar.
- Confirmar el proveedor y la configuración de alojamiento, incluidos registros técnicos, retención y servicios de protección. Actualizar la política de privacidad con esa información.
- Confirmar directamente en el perfil de reserva de la Dra. Mendoza que la regla de reagendamiento de 24 horas y la ausencia de devolución para cancelación voluntaria o inasistencia continúan vigentes. Los términos generales de Encuadrado indican que cada profesional define su política de cancelación.
- Revisar jurídicamente la redacción de las tres páginas, en particular cancelaciones, devoluciones, responsabilidades y derechos de pacientes.
- La Ley 21.719 modifica la normativa de protección de datos y su entrada en vigencia debe verificarse según la fecha efectiva de publicación. La redacción actual no presenta sus nuevas obligaciones como vigentes al 23 de octubre de 2026.
- Revisar las políticas enlazadas de Encuadrado al publicar. El documento de privacidad consultado muestra una fecha de vigencia futura respecto de esta versión local.

## Datos y servicios técnicos observados en el código

- No hay formularios propios, almacenamiento de fichas, pasarela de pago propia, Google Analytics, Google Tag Manager ni Meta Pixel en el código revisado.
- No hay llamadas propias a `document.cookie`, `localStorage` ni `sessionStorage`.
- La página carga Google Fonts y `https://encuadrado.com/p/embed.js`. Esos terceros pueden recibir datos técnicos al cargarse. WhatsApp solo se abre al activar sus enlaces.
- No se añadió seguimiento ni un banner de cookies. Revisar el comportamiento efectivo de terceros y el alojamiento antes de decidir si se necesita consentimiento o información adicional.

## SEO y despliegue

- Las páginas tienen títulos y descripciones individuales. No se añadió URL canónica ni sitemap porque aún no se ha definido un dominio público ni existe uno en el proyecto.
- Next.js genera una exportación estática en `out/` con barra final en las rutas. Al elegir alojamiento, configurar la resolución de cada carpeta mediante `index.html`.

## Referencias consultadas

- [Términos para pacientes de Encuadrado](https://encuadrado.com/privacidad/terminos-de-servicio-pacientes)
- [Privacidad de Encuadrado](https://encuadrado.com/privacidad/politica-de-privacidad)
- [Derechos de pacientes, Superintendencia de Salud](https://www.superdesalud.gob.cl/preguntas-frecuentes/cuales-son-los-derechos-de-las-personas-en-su-atencion-de-salud/)
- [Ley 19.628](https://www.bcn.cl/leychile/navegar?idNorma=141599), [Ley 20.584](https://www.bcn.cl/leychile/navegar?idNorma=1039348), [Ley 21.719](https://www.bcn.cl/leychile/navegar?idNorma=1209272)

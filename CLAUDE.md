# Macaví — sitio de Macarena Vicuña

Portafolio de la artista visual Macarena Vicuña (Macaví), migrado de Wix a este stack.
Réplica original de macaviart.cl, en fase de reemplazo de contenido placeholder por el material real.

## Stack y comandos

- React 18 + Vite + TypeScript + Tailwind CSS + react-router-dom
- `npm install` — instalar dependencias
- `npm run dev` — servidor de desarrollo (localhost:5173)
- `npm run build` — build de producción (corre `tsc -b` primero, debe quedar sin errores)

## Estructura

- `src/pages/` — una página por ruta (Home, Clases, Contacto, y subcarpetas `obras/` y `artista/`)
- `src/data/` — contenido en datos (series de Obras, CV de exhibiciones, notas de prensa, nota de artista)
- `src/components/` — Nav, Footer, Layout, PlaceholderImage
- `public/images/prensa/` — recortes de prensa ya descargados (reales, no placeholder)

## Estado actual / pendiente

- **Imágenes de obras**: todas las series en `/obras/*` muestran `PlaceholderImage` (bloques grises). Faltan las fotos reales de cada cuadro/escultura que Macarena tiene que enviar.
- **Retrato de la artista** (`Nota de Artista`): placeholder, falta foto real.
- **Formulario de Contacto**: solo simula el envío (no está conectado a ningún servicio como Formspree). Hay que decidir con qué se conecta antes de publicar.
- **Textos**: Nota de Artista, Exhibiciones y Estudios, y Prensa (34 publicaciones) ya tienen el contenido real, extraído del sitio Wix original y de las fuentes de prensa. No son placeholder.
- **Deploy**: el repo vive en GitHub (`Macaviart/macaviart`), pero aún no hay deploy automático (ej. Cloudflare Pages) conectado. El dominio macaviart.cl sigue apuntando a Wix.

## Cómo pedir cambios

Este proyecto se edita por chat con Claude Code, no a mano. Alguna ideas de cómo pedir cosas:
- "Reemplaza el placeholder de Parejas 1 por esta foto: [ruta o descripción]"
- "Cambia el texto de la sección Clases por este: [texto]"
- "Sube estos cambios a GitHub"

Después de cualquier cambio visual, conviene correr `npm run dev` y mirarlo en el navegador antes de darlo por terminado.

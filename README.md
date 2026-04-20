# Portafolio — Bryan A. Ramírez

Proyecto para **Diseño de interfaces · Momento 2**: Next.js, TypeScript, Tailwind CSS y despliegue recomendado en **Vercel**.

## Requisitos cumplidos (código)

- Menú de navegación (escritorio y móvil).
- Hero / bienvenida con acceso a **CV** (`/cv` y botón en el hero).
- Sobre mí, proyectos (GitHub + demo/Vercel), testimonios (3+), experiencia académica y laboral, contacto, pie de página.
- Sección adicional: **Habilidades**.
- **Modo claro y oscuro** (`next-themes`, clase `dark` en `<html>`).
- Diseño **responsivo** (móvil, tablet, escritorio).

## Cómo correrlo

Necesitas [Node.js](https://nodejs.org/) (LTS) con `npm` en el PATH.

```bash
cd bryan-portafolio
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Hoja de vida en PDF

1. Exporta tu CV a PDF.
2. Guárdalo como `public/Bryan-Ramirez-CV.pdf` (exactamente ese nombre) **o** cambia la ruta en `src/app/cv/page.tsx`.

## Vercel

1. Sube este repo a GitHub (público).
2. En [vercel.com](https://vercel.com) importa el repositorio y deja el directorio raíz en `bryan-portafolio` si subes solo esa carpeta como repo.

## Archivos estáticos en Descargas

También tienes `index.html` y `cv.html` en la misma carpeta de Descargas: útiles como prototipo o respaldo; la entrega académica con stack pedido es este proyecto Next.

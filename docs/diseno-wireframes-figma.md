# Wireframes y diseño visual en Figma — Portafolio Bryan A. Ramírez

Guía para completar el entregable de **wireframes** + **diseño visual** alineado con lo que ya está implementado en Next.js (`/` y `/cv`).

---

## Los 3 links que suele pedir el profe

El **portafolio en Vercel** es solo el **tercer** enlace. Los wireframes deben vivir **fuera** de ese sitio (otro URL), para que el profe vea claro qué es boceto y qué es ya implementado.

| Entregable | Dónde va el link (ejemplos) |
|------------|----------------------------|
| **1. Wireframes** | **Apart del portafolio:** archivo **FigJam**, **otro proyecto Figma** solo con wireframes, o **Google Drive** (PDF). Copia el enlace “Compartir” que te dé esa herramienta. |
| **2. Diseño visual** | **Figma** (archivo de UI / mockups): `https://www.figma.com/design/...` o `.../file/...` con permiso de ver. |
| **3. Portafolio implementado** | Tu deploy: `https://TU-PROYECTO.vercel.app/` |

Sustituye `TU-PROYECTO.vercel.app` por tu dominio real en Vercel.

---

## 1. Qué pediría un profe (checklist)

- [ ] **Wireframes** (baja o media fidelidad): al menos **Home** desktop + **Home** móvil (menú); opcional **CV**.
- [ ] **Diseño visual / UI**: paleta, tipografías, botones, tarjetas (puede ser la misma línea que el sitio final).
- [ ] **Flujo o anotaciones**: qué hace cada botón (CTA → `#proyectos`, CV → `/cv`, etc.).
- [ ] **Export**: PDF o enlace **“Share”** de Figma con permiso de ver.

No hace falta que el Figma sea 100% idéntico al código; sí que se vea **coherencia** entre wireframe → UI → sitio.

---

## 2. Estructura recomendada del archivo Figma

Crea **4 páginas** (pestañas arriba en Figma):

| Página            | Contenido |
|-------------------|-----------|
| `00 · Cover`      | Título del proyecto, tu nombre, fecha, curso. |
| `01 · Wireframes` | Cajas grises, sin color final; desktop + mobile. |
| `02 · UI kit`     | Colores, tipos, botón primario/secundario, tarjeta, etiquetas. |
| `03 · Mockups`    | Pantallas “bonitas” tipo captura final (desktop 1440, mobile 390). |

**Tamaños de frame útiles**

- Desktop: **1440 × 3200** (scroll largo) o varios frames de **1440 × 900** por sección.
- Mobile: **390 × 844** (iPhone estándar en Figma).

---

## 3. Wireframe — Home (desktop), flujo vertical

Orden igual que el sitio: `#inicio` → `#sobre-mi` → `#proyectos` → `#testimonios` → `#experiencia` → `#habilidades` → `#contacto`.

### 3.1 Leyenda (en Figma usa rectángulos grises + texto)

```
┌─────────────────────────────────────────────────────────────┐
│  [LOGO Bryan.]     Sobre mí  Proyectos  …   [ES|EN]  [CV]    │  ← Nav sticky
└─────────────────────────────────────────────────────────────┘
┌──────────────────────────┬──────────────────────────────────┐
│  [badge línea texto]     │   ┌────────────────────────────┐ │
│  TÍTULO HERO             │   │  [foto perfil]             │ │
│  párrafo intro           │   │  nombre · rol              │ │
│  [CTA] [CV] [PDF]        │   │  [tag][tag]…               │ │
│  stat | stat | stat     │   │  GH  in  mail              │ │
└──────────────────────────┴──────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│  01 · Sobre mí    TÍTULO                                    │
│  texto | texto | texto   │   [bloque decorativo / imagen]   │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│  02 · Proyectos   TÍTULO                                    │
│  ┌─────────────────────┐ ┌──────────┐ ┌──────────┐         │
│  │ panel + ribbon      │ │ tarjeta  │ │ tarjeta  │         │
│  │ título · texto      │ │ …        │ │ …        │         │
│  │ tags    [Demo]      │ │ …        │ │ …        │         │
│  └─────────────────────┘ └──────────┘ └──────────┘         │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Wireframe — Mobile

```
┌─────────────────────┐
│ Bryan.    [CV] [≡] │
├─────────────────────┤
│ hero…               │
│ [foto]              │
│ stats               │
├─────────────────────┤
│ sobre mí…         │
│ proyectos…        │
│ …                 │
└─────────────────────┘
```

En Figma: duplica el frame desktop, reduce ancho a **390**, apila bloques con **Auto layout** (vertical, gap 16–24).

---

## 4. Wireframe — Página CV (`/cv`)

```
┌─────────────────────────────────────────────┐
│  Nombre + rol          [ES|EN] [←] [PDF]   │
├─────────────────────────────────────────────┤
│  Perfil (párrafo)                           │
│  Educación                                  │
│  Proyectos (lista)                          │
│  Stack (bloques)                            │
│  Idiomas · Blandas · Experiencia            │
└─────────────────────────────────────────────┘
```

---

## 5. Diseño visual — tokens (copiar a Figma “Local variables”)

Alineados a tu UI actual (Tailwind / sitio en azul).

### Colores (hex)

| Token        | Hex       | Uso |
|--------------|-----------|-----|
| `brand/900`  | `#0f172a` | Textos fuertes, footer. |
| `brand/700`  | `#1d4ed8` | Botón primario, acentos. |
| `brand/600`  | `#2563eb` | Links, énfasis. |
| `brand/500`  | `#3b82f6` | Hover, detalles. |
| `sky/400`    | `#38bdf8` | Acento secundario, gradientes. |
| `surface`    | `#ffffff` | Tarjetas. |
| `surface-muted` | `#f8fafc` | Fondos (slate-50). |
| `border`     | `#dbeafe` | Bordes suaves (blue-100). |

### Tipografía (igual que `layout.tsx`)

| Uso        | Fuente              | Figma |
|------------|---------------------|--------|
| Títulos    | **Playfair Display** | Bold / Black, ~36–56 desktop. |
| Cuerpo     | **DM Sans**         | Regular / Medium, 16. |
| Etiquetas  | **Space Mono**      | Uppercase, tracking, 11–12. |

En Figma: **Text → “Apply font”** y si no están, enlaza **Google Fonts** desde el menú de fuentes.

### Espaciado

- Base **8 px**: márgenes 16, 24, 32, 48, 64 entre secciones.
- Radio de tarjetas: **16** (rounded-2xl aprox.).

---

## 6. Pasos rápidos en Figma (orden sugerido)

1. **File → New design file** → renombra y guarda en tu cuenta.
2. Página **01 · Wireframes**: `F` frame **1440×3200**, fondo `#F8FAFC`.
3. Activa **Layout grid → Columns**, 12 columnas, margen 64, gutter 24 (similar a `max-w-[1200px]` centrado).
4. Dibuja **rectángulos grises** (#E2E8F0) con texto “Nav”, “Hero”, etc. (wireframe).
5. Página **02 · UI kit**: rectángulos con rellenos de la tabla de colores + textos “H1”, “Body”, “Button primary”.
6. Página **03 · Mockups**: copia wireframes y **sustituye** grises por estilos finales (o pega capturas del navegador como referencia encima).
7. **Prototype** (opcional): clic en “CV” → frame CV (transición instantánea).
8. **Share** → “Anyone with the link can view” → copia URL para el informe o el profe.

---

## 7. Si el profe pide “FigJam” para wireframes

**FigJam** (mismo login Figma) sirve para mapas y wireflows más libres. Puedes pegar los mismos bloques o enlazar el archivo de diseño.

---

## 8. Coherencia con el código (referencia rápida)

| Sección (id)   | Contenido principal |
|----------------|---------------------|
| `#inicio`      | Badge, H1, subtítulo, 3 CTAs, stats, tarjeta con foto y tags. |
| `#sobre-mi`    | Título + 3 párrafos + tags + bloque visual. |
| `#proyectos`   | Grid: 1 destacado + 2 tarjetas; Demo (sin GitHub en UI). |
| `#testimonios` | 3 tarjetas cita + avatar iniciales. |
| `#experiencia` | 2 columnas: timeline académico + bullets práctica. |
| `#habilidades` | Grid de herramientas (icono + nombre). |
| `#contacto`    | Formulario + tarjetas email/LinkedIn. |

---

## 9. Entrega mínima viable (si vas justo de tiempo)

1. **1 frame** wireframe desktop home (gris).
2. **1 frame** wireframe mobile home.
3. **1 frame** UI kit (colores + 2 botones + 1 tarjeta).
4. **1 frame** mockup “final” (puede ser **captura** del `localhost` o Vercel importada a Figma con título “Implementado”).

Con eso + enlace de Figma suele alcanzar para demostrar proceso **diseño → implementación**.

---

*Documento generado para el repo PORTAFOLIO; actualiza fechas o nombres de curso en la portada del archivo Figma.*

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wireframes · Bryan A. Ramírez",
  description: "Wireframes de baja fidelidad del portafolio — entregable académico.",
};

function Box({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center border-2 border-dashed border-neutral-800 bg-neutral-200/80 text-xs font-bold uppercase tracking-wide text-neutral-700 ${className}`}
    >
      {children}
    </div>
  );
}

export default function WireframesPage() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900">
      <header className="border-b-2 border-neutral-800 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">Entregable · Wireframes</p>
            <h1 className="mt-1 font-serif text-2xl font-black tracking-tight">Portafolio — baja fidelidad</h1>
            <p className="mt-1 text-sm text-neutral-600">Bryan A. Ramírez · Diseño de interfaces</p>
          </div>
          <Link
            href="/"
            className="rounded-lg border-2 border-neutral-800 bg-white px-4 py-2 text-sm font-semibold hover:bg-neutral-100"
          >
            ← Portafolio (implementado)
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-16 px-6 py-12">
        {/* Desktop */}
        <section>
          <h2 className="mb-4 font-mono text-sm font-bold uppercase tracking-widest text-neutral-600">Desktop · ~1440px ancho</h2>
          <div className="overflow-x-auto border-4 border-neutral-900 bg-white p-6 shadow-lg">
            <div className="min-w-[900px] space-y-4">
              <Box className="h-14 w-full">Nav — logo · enlaces · idioma ES/EN · CV</Box>

              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-7 space-y-4">
                  <Box className="h-8 w-48">Badge estado</Box>
                  <Box className="h-24 w-full">Título hero + subtítulo</Box>
                  <div className="flex gap-3">
                    <Box className="h-10 flex-1">CTA proyectos</Box>
                    <Box className="h-10 flex-1">CTA CV</Box>
                    <Box className="h-10 w-24">PDF</Box>
                  </div>
                  <div className="flex gap-6">
                    <Box className="h-16 w-24">Stat</Box>
                    <Box className="h-16 w-24">Stat</Box>
                    <Box className="h-16 w-24">Stat</Box>
                  </div>
                </div>
                <div className="col-span-5">
                  <Box className="min-h-[220px] w-full">Tarjeta — foto · nombre · tags · redes</Box>
                </div>
              </div>

              <Box className="min-h-[140px] w-full">Sobre mí — textos + chips + bloque visual</Box>
              <Box className="min-h-[200px] w-full">Proyectos — grid (destacado + 2 tarjetas) · Demo</Box>
              <Box className="min-h-[120px] w-full">Testimonios — 3 columnas</Box>
              <div className="grid grid-cols-2 gap-4">
                <Box className="min-h-[180px] w-full">Experiencia — timeline académico</Box>
                <Box className="min-h-[180px] w-full">Experiencia — práctica en programa</Box>
              </div>
              <Box className="min-h-[100px] w-full">Herramientas — grid iconos + nombre</Box>
              <Box className="min-h-[160px] w-full">Contacto — formulario + enlaces</Box>
              <Box className="h-12 w-full">Footer</Box>
            </div>
          </div>
        </section>

        {/* Mobile */}
        <section>
          <h2 className="mb-4 font-mono text-sm font-bold uppercase tracking-widest text-neutral-600">Mobile · ~390px ancho</h2>
          <div className="inline-block border-4 border-neutral-900 bg-white p-4 shadow-lg" style={{ width: 390 }}>
            <div className="space-y-3">
              <Box className="h-12 w-full">Nav — logo · CV · menú hamburguesa</Box>
              <Box className="h-36 w-full">Hero — texto apilado</Box>
              <Box className="h-40 w-full">Tarjeta perfil</Box>
              <Box className="h-28 w-full">Sobre mí</Box>
              <Box className="h-32 w-full">Proyecto 1</Box>
              <Box className="h-28 w-full">Proyecto 2</Box>
              <Box className="h-28 w-full">Proyecto 3</Box>
              <Box className="h-24 w-full">Testimonios (scroll)</Box>
              <Box className="h-28 w-full">Experiencia</Box>
              <Box className="h-24 w-full">Herramientas</Box>
              <Box className="h-28 w-full">Contacto</Box>
              <Box className="h-10 w-full">Footer</Box>
            </div>
          </div>
        </section>

        <footer className="border-t border-neutral-300 pt-8 text-center text-xs text-neutral-500">
          <p>
            Esta URL es solo el entregable de <strong>wireframes</strong>. El diseño visual detallado (colores, tipografías finales) va en{" "}
            <strong>Figma</strong>; la implementación en la raíz del sitio.
          </p>
        </footer>
      </main>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hoja de vida · Bryan A. Ramírez",
  description: "Currículum — Bryan A. Ramírez",
};

export default function CvPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-800 dark:bg-slate-950 dark:text-slate-100 sm:px-6">
      <article className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-10">
        <header className="flex flex-col gap-4 border-b border-blue-100 pb-8 dark:border-slate-700 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="font-serif text-3xl font-black text-blue-950 dark:text-slate-50">Bryan A. Ramírez</h1>
            <p className="mt-1 font-mono text-sm text-slate-500 dark:text-slate-400">Estudiante de Ingeniería de Software · 5.º semestre · Pasto, Colombia</p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              <a href="mailto:vxillaxl4@gmail.com" className="text-blue-600 hover:underline dark:text-blue-400">
                vxillaxl4@gmail.com
              </a>
              {" · "}
              <a href="https://github.com/vxillaxl" className="text-blue-600 hover:underline dark:text-blue-400" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/" className="rounded-xl border-2 border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 dark:border-slate-600 dark:text-blue-300 dark:hover:bg-slate-800">
              ← Portafolio
            </Link>
            <a
              href="/cv_bryan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 dark:bg-blue-500"
            >
              Descargar PDF
            </a>
          </div>
        </header>

        <section className="mt-8">
          <h2 className="border-l-4 border-blue-600 pl-3 font-serif text-lg font-bold text-blue-950 dark:border-blue-400 dark:text-slate-50">Perfil</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Estudiante enfocado en desarrollo web y diseño de interfaces: maquetación responsiva, componentes reutilizables y buenas prácticas con React, Next.js, TypeScript y Tailwind CSS.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="border-l-4 border-blue-600 pl-3 font-serif text-lg font-bold text-blue-950 dark:border-blue-400 dark:text-slate-50">Educación</h2>
          <p className="mt-3 font-semibold text-blue-950 dark:text-slate-100">Ingeniería de Software</p>
          <p className="text-sm text-slate-600 dark:text-slate-300">Universidad Cooperativa de Colombia · Sede Pasto · 5.º semestre (en curso)</p>
        </section>

        <section className="mt-8">
          <h2 className="border-l-4 border-blue-600 pl-3 font-serif text-lg font-bold text-blue-950 dark:border-blue-400 dark:text-slate-50">Experiencia laboral</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Aún no cuento con experiencia laboral formal en desarrollo de software. Mi trayectoria se centra en la formación académica, laboratorios y proyectos del programa.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="border-l-4 border-blue-600 pl-3 font-serif text-lg font-bold text-blue-950 dark:border-blue-400 dark:text-slate-50">Stack</h2>
          <p className="mt-3 flex flex-wrap gap-2">
            {["React", "Next.js", "TypeScript", "Tailwind", "Git", "Figma", "Vercel"].map((t) => (
              <span key={t} className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 font-mono text-xs dark:border-slate-600 dark:bg-slate-800">
                {t}
              </span>
            ))}
          </p>
        </section>
      </article>
    </main>
  );
}

import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { ThemeToggle } from "@/components/theme-toggle";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <ThemeToggle />

      <main>
        <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-16 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:px-6 lg:px-8 lg:py-24">
          <div className="relative z-[1] mx-auto grid max-w-[1100px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="text-center lg:text-left">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 font-mono text-xs font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" aria-hidden />
                Disponible para proyectos
              </p>
              <h1 className="font-serif text-4xl font-black leading-tight tracking-tight text-blue-950 dark:text-slate-50 sm:text-5xl lg:text-6xl">
                Bryan A. <em className="text-blue-600 not-italic dark:text-blue-400">Ramírez</em>
              </h1>
              <p className="mt-4 max-w-xl text-lg text-slate-600 dark:text-slate-300 lg:mx-0 mx-auto">
                Desarrollador web. Este portafolio es responsivo (móvil, tablet, escritorio) y soporta modo claro y oscuro.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                <a href="#proyectos" className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400">
                  Ver proyectos
                </a>
                <Link
                  href="/cv"
                  className="rounded-xl border-2 border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 hover:border-blue-400 dark:border-slate-600 dark:bg-slate-900 dark:text-blue-300"
                >
                  Ver mi hoja de vida
                </Link>
              </div>
              <dl className="mt-10 flex flex-wrap justify-center gap-8 lg:justify-start">
                {[
                  ["3+", "Años exp."],
                  ["12+", "Proyectos"],
                  ["8+", "Clientes"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <dt className="font-serif text-3xl font-black text-blue-600 dark:text-blue-400">{n}</dt>
                    <dd className="font-mono text-xs uppercase tracking-wide text-slate-400">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-sm rounded-3xl border border-blue-100 bg-white p-8 shadow-xl dark:border-slate-700 dark:bg-slate-900">
                <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-blue-200 to-blue-500 text-4xl shadow-md dark:border-slate-900">
                  👨‍💻
                </div>
                <p className="text-center font-serif text-xl font-bold text-blue-950 dark:text-slate-100">Bryan A. Ramírez</p>
                <p className="mt-1 text-center font-mono text-xs text-slate-500">Frontend · UX</p>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {["React", "Next.js", "Tailwind", "Git", "Figma"].map((t) => (
                    <span key={t} className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 font-mono text-xs text-blue-700 dark:border-slate-600 dark:bg-slate-800 dark:text-blue-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex justify-center gap-2">
                  <a href="https://github.com/vxillaxl" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 font-mono text-xs font-bold text-blue-700 hover:bg-blue-600 hover:text-white dark:border-slate-600 dark:bg-slate-800">
                    GH
                  </a>
                  <a
                    href="https://www.linkedin.com/in/alex-ramirez-86071b3b6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 font-mono text-xs font-bold text-blue-700 hover:bg-blue-600 hover:text-white dark:border-slate-600 dark:bg-slate-800"
                  >
                    in
                  </a>
                  <a href="mailto:vxillaxl4@gmail.com" className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white dark:border-slate-600 dark:bg-slate-800">
                    ✉
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1100px]">
            <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-blue-600 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300">
              01 · Sobre mí
            </span>
            <h2 className="mt-3 font-serif text-3xl font-black text-blue-950 dark:text-slate-50 lg:text-4xl">¿Quién soy?</h2>
            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="space-y-4 text-slate-600 dark:text-slate-300">
                <p>Desarrollador web enfocado en interfaces claras, accesibles y responsivas.</p>
                <p>Stack principal: React, Next.js, TypeScript y Tailwind CSS.</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["React / Next.js", "TypeScript", "Tailwind", "Node.js", "GitHub", "Figma"].map((t) => (
                    <span key={t} className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 font-mono text-xs text-blue-700 dark:border-slate-600 dark:bg-slate-800 dark:text-blue-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex min-h-[220px] items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-100 to-blue-200 text-6xl dark:border-slate-700 dark:from-slate-800 dark:to-slate-900">
                🧑‍💻
              </div>
            </div>
          </div>
        </section>

        <section id="proyectos" className="bg-blue-50/80 px-4 py-16 dark:bg-slate-900/50 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1100px]">
            <span className="inline-block rounded-full border border-blue-200 bg-white px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-blue-600 dark:border-slate-700 dark:bg-slate-950 dark:text-blue-300">
              02 · Proyectos
            </span>
            <h2 className="mt-3 font-serif text-3xl font-black text-blue-950 dark:text-slate-50">Mis proyectos</h2>
            <p className="mt-2 max-w-xl text-slate-600 dark:text-slate-300">GitHub y demo (Vercel) según la guía del curso.</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  emoji: "🛒",
                  title: "Checkout · Lab 3",
                  desc: "Next.js, TypeScript y Tailwind.",
                  gh: "https://github.com/vxillaxl/CHECKOUT",
                  demo: "https://vercel.com",
                  grad: "from-sky-100 to-blue-100 dark:from-slate-800 dark:to-blue-950",
                },
                {
                  emoji: "🎨",
                  title: "Card de producto · Lab 2",
                  desc: "Maquetación HTML/CSS.",
                  gh: "https://github.com/vxillaxl",
                  demo: "#",
                  grad: "from-cyan-100 to-sky-100 dark:from-slate-800 dark:to-cyan-950",
                },
                {
                  emoji: "📱",
                  title: "Landing · Lab 1",
                  desc: "Responsive: navbar, hero y footer.",
                  gh: "https://github.com/vxillaxl",
                  demo: "#",
                  grad: "from-violet-100 to-purple-100 dark:from-slate-800 dark:to-violet-950",
                },
              ].map((p) => (
                <article key={p.title} className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
                  <div className={`flex h-40 items-center justify-center bg-gradient-to-br text-5xl ${p.grad}`}>{p.emoji}</div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-bold text-blue-950 dark:text-slate-100">{p.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <a href={p.gh} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-slate-800 px-3 py-2 font-mono text-xs font-semibold text-white hover:bg-slate-600 dark:bg-slate-700">
                        GitHub
                      </a>
                      <a href={p.demo} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-blue-600 px-3 py-2 font-mono text-xs font-semibold text-white hover:bg-blue-700 dark:bg-blue-500">
                        Demo ↗
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonios" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1100px]">
            <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-blue-600 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300">
              03 · Testimonios
            </span>
            <h2 className="mt-3 font-serif text-3xl font-black text-blue-950 dark:text-slate-50">Lo que dicen de mí</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { q: "«Entrega a tiempo y con calidad.»", n: "Carlos Ruiz", r: "CEO · StartupCo", a: "CR" },
                { q: "«Rápido entendiendo requerimientos.»", n: "María López", r: "PM · TechCorp", a: "ML" },
                { q: "«Profesional y buen criterio de diseño.»", n: "Andrés Pérez", r: "Designer", a: "AP" },
              ].map((t) => (
                <blockquote key={t.n} className="relative rounded-2xl border border-blue-100 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                  <p className="text-slate-600 dark:text-slate-300">{t.q}</p>
                  <footer className="mt-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-200 to-blue-500 font-bold text-white">{t.a}</div>
                    <div>
                      <p className="font-semibold text-blue-950 dark:text-slate-100">{t.n}</p>
                      <p className="font-mono text-xs text-slate-400">{t.r}</p>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencia" className="bg-blue-50/80 px-4 py-16 dark:bg-slate-900/50 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1100px]">
            <span className="inline-block rounded-full border border-blue-200 bg-white px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-blue-600 dark:border-slate-700 dark:bg-slate-950 dark:text-blue-300">
              04 · Experiencia
            </span>
            <h2 className="mt-3 font-serif text-3xl font-black text-blue-950 dark:text-slate-50">Trayectoria</h2>
            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="mb-6 flex items-center gap-3 font-serif text-xl font-bold text-blue-950 dark:text-slate-100">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-xl dark:bg-slate-800">🎓</span>
                  Académica
                </h3>
                <ul className="space-y-4 border-l-2 border-blue-200 pl-6 dark:border-slate-600">
                  <li className="relative">
                    <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-blue-500 bg-white dark:bg-slate-900" />
                    <p className="font-mono text-xs text-blue-600 dark:text-blue-400">En curso</p>
                    <p className="font-semibold text-blue-950 dark:text-slate-100">Ingeniería de Software</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">UCC · Pasto</p>
                  </li>
                  <li className="relative pt-2">
                    <span className="absolute -left-[29px] top-3 h-3 w-3 rounded-full border-2 border-blue-500 bg-white dark:bg-slate-900" />
                    <p className="font-mono text-xs text-blue-600 dark:text-blue-400">2022 – 2023</p>
                    <p className="font-semibold text-blue-950 dark:text-slate-100">UI/UX</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Platzi</p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-6 flex items-center gap-3 font-serif text-xl font-bold text-blue-950 dark:text-slate-100">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-xl dark:bg-slate-800">💼</span>
                  Laboral
                </h3>
                <ul className="space-y-4 border-l-2 border-blue-200 pl-6 dark:border-slate-600">
                  <li className="relative">
                    <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-blue-500 bg-white dark:bg-slate-900" />
                    <p className="font-mono text-xs text-blue-600 dark:text-blue-400">2024 – Presente</p>
                    <p className="font-semibold text-blue-950 dark:text-slate-100">Frontend freelance</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Independiente · Pasto</p>
                  </li>
                  <li className="relative pt-2">
                    <span className="absolute -left-[29px] top-3 h-3 w-3 rounded-full border-2 border-blue-500 bg-white dark:bg-slate-900" />
                    <p className="font-mono text-xs text-blue-600 dark:text-blue-400">2023 – 2024</p>
                    <p className="font-semibold text-blue-950 dark:text-slate-100">Asistente desarrollo web</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Empresa local</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="habilidades" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1100px]">
            <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-blue-600 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300">
              05 · Sección adicional
            </span>
            <h2 className="mt-3 font-serif text-3xl font-black text-blue-950 dark:text-slate-50">Habilidades</h2>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {[
                ["React / Next", "88%"],
                ["TypeScript", "72%"],
                ["Tailwind", "90%"],
                ["Figma", "68%"],
                ["GitHub", "85%"],
                ["Vercel", "70%"],
              ].map(([name, w]) => (
                <div key={name} className="rounded-2xl border border-blue-100 bg-white p-4 text-center dark:border-slate-700 dark:bg-slate-900">
                  <p className="font-semibold text-blue-950 dark:text-slate-100">{name}</p>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <div className="h-full rounded-full bg-blue-600 dark:bg-blue-400" style={{ width: w }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-blue-50/80 px-4 py-16 dark:bg-slate-900/50 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1100px]">
            <span className="inline-block rounded-full border border-blue-200 bg-white px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-blue-600 dark:border-slate-700 dark:bg-slate-950 dark:text-blue-300">
              06 · Contacto
            </span>
            <h2 className="mt-3 font-serif text-3xl font-black text-blue-950 dark:text-slate-50">Hablemos</h2>
            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <form className="space-y-4" action="#" method="get">
                <div>
                  <label className="text-sm font-semibold text-blue-950 dark:text-slate-200" htmlFor="nm">
                    Nombre
                  </label>
                  <input id="nm" className="mt-1 w-full rounded-xl border-2 border-blue-100 bg-white px-4 py-3 dark:border-slate-600 dark:bg-slate-950" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-blue-950 dark:text-slate-200" htmlFor="em">
                    Email
                  </label>
                  <input id="em" type="email" className="mt-1 w-full rounded-xl border-2 border-blue-100 bg-white px-4 py-3 dark:border-slate-600 dark:bg-slate-950" placeholder="tu@email.com" />
                </div>
                <button type="button" className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 dark:bg-blue-500">
                  Enviar (conecta a Formspree o API)
                </button>
              </form>
              <div className="space-y-3">
                <a href="mailto:vxillaxl4@gmail.com" className="flex items-center gap-4 rounded-xl border border-blue-100 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="font-mono text-xs text-slate-400">Email</p>
                    <p className="font-semibold text-blue-950 dark:text-slate-100">vxillaxl4@gmail.com</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/alex-ramirez-86071b3b6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-blue-100 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"
                >
                  <span className="font-mono font-bold text-blue-600">in</span>
                  <div>
                    <p className="font-mono text-xs text-slate-400">LinkedIn</p>
                    <p className="font-semibold text-blue-950 dark:text-slate-100">Alex Ramírez</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-950 px-4 py-10 text-white dark:bg-black">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-serif text-xl font-black">
              Bryan<span className="text-blue-400">.</span>
            </p>
            <p className="mt-1 font-mono text-xs text-white/50">© 2026 · Pasto, Colombia · Next.js + Tailwind</p>
          </div>
          <div className="flex gap-2">
            <a href="https://github.com/vxillaxl" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/20 px-3 py-2 font-mono text-xs hover:bg-blue-600">
              GH
            </a>
            <a href="mailto:vxillaxl4@gmail.com" className="rounded-lg border border-white/20 px-3 py-2 font-mono text-xs hover:bg-blue-600">
              ✉
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

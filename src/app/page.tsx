import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { ThemeToggle } from "@/components/theme-toggle";

function AboutVisual() {
  return (
    <figure
      className="relative flex min-h-[260px] w-full overflow-hidden rounded-2xl border border-blue-100 bg-slate-950 shadow-inner dark:border-slate-700"
      aria-hidden
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#6366f1" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="g2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="18" />
          </filter>
        </defs>
        <rect width="400" height="280" fill="url(#g1)" />
        <circle cx="320" cy="40" r="90" fill="#38bdf8" opacity="0.35" filter="url(#blur)" />
        <circle cx="60" cy="220" r="70" fill="#a78bfa" opacity="0.4" filter="url(#blur)" />
        <rect x="0" y="0" width="400" height="280" fill="url(#g2)" />
        <g opacity="0.22" stroke="white" strokeWidth="1.2">
          <path d="M40 60h320M40 100h320M40 140h320M40 180h320M40 220h320" />
          <path d="M80 40v200M140 40v200M200 40v200M260 40v200M320 40v200" />
        </g>
        <g transform="translate(52 72)" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
          <path d="M8 12h88c8 0 14 6 14 14v52c0 8-6 14-14 14H8c-8 0-14-6-14-14V26c0-8 6-14 14-14z" />
          <path d="M24 36h56M24 52h40M24 68h56" opacity="0.85" strokeWidth="2.5" />
        </g>
        <g transform="translate(248 148)" opacity="0.95">
          <rect x="0" y="0" width="92" height="64" rx="12" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
          <rect x="12" y="14" width="28" height="8" rx="4" fill="white" opacity="0.85" />
          <rect x="12" y="28" width="68" height="6" rx="3" fill="white" opacity="0.35" />
          <rect x="12" y="40" width="52" height="6" rx="3" fill="white" opacity="0.25" />
        </g>
        <text x="200" y="248" textAnchor="middle" fill="white" opacity="0.55" fontSize="11" fontFamily="ui-monospace, monospace" letterSpacing="0.2em">
          UI · COMPONENTES · RESPONSIVE
        </text>
      </svg>
    </figure>
  );
}

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
                Ingeniería de Software · 5.º semestre
              </p>
              <h1 className="font-serif text-4xl font-black leading-tight tracking-tight text-blue-950 dark:text-slate-50 sm:text-5xl lg:text-6xl">
                Bryan A. <em className="text-blue-600 not-italic dark:text-blue-400">Ramírez</em>
              </h1>
              <p className="mt-4 max-w-xl text-lg text-slate-600 dark:text-slate-300 lg:mx-0 mx-auto">
                Estudiante de Ingeniería de Software en la UCC, sede Pasto. Me gusta construir interfaces ordenadas, accesibles y bien maquetadas.
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
                <a
                  href="/cv_bryan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border-2 border-slate-200 bg-slate-50 px-6 py-3 font-semibold text-slate-800 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                >
                  PDF
                </a>
              </div>
              <dl className="mt-10 flex flex-wrap justify-center gap-8 lg:justify-start">
                {[
                  ["5.º", "Semestre"],
                  ["UCC", "Pasto"],
                  ["IS", "Enfoque web"],
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
                <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-blue-600 via-indigo-500 to-sky-400 text-3xl font-black tracking-tight text-white shadow-md dark:border-slate-900">
                  BAR
                </div>
                <p className="text-center font-serif text-xl font-bold text-blue-950 dark:text-slate-100">Bryan A. Ramírez</p>
                <p className="mt-1 text-center font-mono text-xs text-slate-500">Estudiante · Interfaces web</p>
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
                <p>
                  Soy estudiante de Ingeniería de Software (5.º semestre) en la Universidad Cooperativa de Colombia, sede Pasto. Disfruto pasar del
                  wireframe al código: tipografías claras, espaciado consistente y componentes que se comporten bien en móvil y escritorio.
                </p>
                <p>
                  En laboratorio he trabajado con HTML y CSS, luego con React y, en proyectos recientes, con Next.js, TypeScript y Tailwind. Me
                  interesa seguir profundizando en accesibilidad y buenas prácticas de front.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["React / Next.js", "TypeScript", "Tailwind", "Node.js", "GitHub", "Figma"].map((t) => (
                    <span key={t} className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 font-mono text-xs text-blue-700 dark:border-slate-600 dark:bg-slate-800 dark:text-blue-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <AboutVisual />
            </div>
          </div>
        </section>

        <section id="proyectos" className="bg-blue-50/80 px-4 py-16 dark:bg-slate-900/50 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1100px]">
            <span className="inline-block rounded-full border border-blue-200 bg-white px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-blue-600 dark:border-slate-700 dark:bg-slate-950 dark:text-blue-300">
              02 · Proyectos
            </span>
            <h2 className="mt-3 font-serif text-3xl font-black text-blue-950 dark:text-slate-50">Mis proyectos</h2>
            <p className="mt-2 max-w-xl text-slate-600 dark:text-slate-300">Laboratorios y entregas donde practico maquetación, componentes y despliegue.</p>
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
                  desc: "Navbar, hero y footer responsivos.",
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
            <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
              Compañeros y personas cercanas con las que he colaborado en proyectos o retos técnicos.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  q: "«Cuando armamos el entregable en grupo, llevó buena parte del frontend: dejó el layout limpio y nos ayudó a cuadrar tipografías y espaciados en Tailwind sin pelear con el diseño.»",
                  n: "Daniela Vélez",
                  r: "Compañera de semestre · Ingeniería de Software",
                  a: "DV",
                },
                {
                  q: "«En el proyecto del curso se encargó de la interfaz y del repo: integró Figma con el código, explicó los componentes y mantuvo todo ordenado para la entrega.»",
                  n: "Juan Muñoz",
                  r: "Compañero de equipo · Proyecto universitario",
                  a: "JM",
                },
                {
                  q: "«Me ayudó a revisar mi portafolio y me sugirió mejoras de usabilidad y responsive; se nota que le gusta pulir detalles hasta que se vea bien en el celular.»",
                  n: "Álvaro Salazar",
                  r: "Amigo · Colaboración en proyectos personales",
                  a: "AS",
                },
              ].map((t) => (
                <blockquote key={t.n} className="relative rounded-2xl border border-blue-100 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{t.q}</p>
                  <footer className="mt-5 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-200 to-blue-500 text-xs font-bold text-white">{t.a}</div>
                    <div>
                      <p className="font-semibold text-blue-950 dark:text-slate-100">{t.n}</p>
                      <p className="font-mono text-[11px] leading-snug text-slate-400">{t.r}</p>
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
                  Formación académica
                </h3>
                <ul className="space-y-4 border-l-2 border-blue-200 pl-6 dark:border-slate-600">
                  <li className="relative">
                    <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-blue-500 bg-white dark:bg-slate-900" />
                    <p className="font-mono text-xs text-blue-600 dark:text-blue-400">En curso · 5.º semestre</p>
                    <p className="font-semibold text-blue-950 dark:text-slate-100">Ingeniería de Software</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Universidad Cooperativa de Colombia · Sede Pasto</p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-6 flex items-center gap-3 font-serif text-xl font-bold text-blue-950 dark:text-slate-100">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-xl dark:bg-slate-800">📚</span>
                  Práctica en el programa
                </h3>
                <ul className="space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  <li className="rounded-xl border border-blue-100 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                    Laboratorios de <strong className="text-slate-800 dark:text-slate-100">diseño de interfaces</strong>: maquetación responsive, componentes y entregas con HTML, CSS y luego con frameworks.
                  </li>
                  <li className="rounded-xl border border-blue-100 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                    <strong className="text-slate-800 dark:text-slate-100">Trabajo en equipo</strong> en proyectos formativos: reparto de tareas, revisiones entre pares y documentación básica en el repo.
                  </li>
                  <li className="rounded-xl border border-blue-100 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                    <strong className="text-slate-800 dark:text-slate-100">Experiencia laboral formal</strong> en desarrollo de software: aún no aplica; mi foco hoy es la formación y los proyectos académicos.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="habilidades" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1100px]">
            <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-blue-600 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300">
              05 · Habilidades
            </span>
            <h2 className="mt-3 font-serif text-3xl font-black text-blue-950 dark:text-slate-50">Stack y herramientas</h2>
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
                  Enviar
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
            <p className="mt-1 font-mono text-xs text-white/50">© 2026 · Pasto, Colombia</p>
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

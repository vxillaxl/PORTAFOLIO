"use client";

import { ProjectCoverPanel } from "@/app/project-cover-panel";
import { useLanguage } from "@/components/language-provider";
import { getMessages } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";

const projectMeta = [{ demo: "https://vercel.com" }, { demo: "#" }, { demo: "#" }] as const;

const TECH_TOOLS = [
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invertDark: true },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invertDark: true },
  { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
] as const;

function AboutVisual() {
  return (
    <figure
      className="relative flex min-h-[280px] w-full overflow-hidden rounded-2xl border border-blue-200 bg-slate-950 shadow-[0_24px_80px_-24px_rgba(30,58,138,0.45)] dark:border-blue-900"
      aria-hidden
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 300" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="cv-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#0369a1" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="cv-shine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <filter id="cv-blur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="22" />
          </filter>
        </defs>
        <rect width="420" height="300" fill="url(#cv-grad)" />
        <circle cx="340" cy="48" r="100" fill="#38bdf8" opacity="0.25" filter="url(#cv-blur)" />
        <circle cx="72" cy="248" r="86" fill="#60a5fa" opacity="0.22" filter="url(#cv-blur)" />
        <rect width="420" height="300" fill="url(#cv-shine)" />
        <g opacity="0.35" stroke="#bfdbfe" strokeWidth="1">
          <path d="M32 52h356M32 92h356M32 132h356M32 172h356M32 212h356M32 252h356" />
          <path d="M72 32v236M132 32v236M192 32v236M252 32v236M312 32v236" />
        </g>
        <g transform="translate(48 78)" fill="none" stroke="#e0f2fe" strokeWidth="2.5" strokeLinecap="round" opacity="0.92">
          <path d="M12 8h120a10 10 0 0 1 10 10v64a10 10 0 0 1-10 10H12a10 10 0 0 1-10-10V18A10 10 0 0 1 12 8z" />
          <path d="M28 40h88M28 58h64M28 76h96" strokeWidth="2" opacity="0.85" />
        </g>
        <g transform="translate(248 156)">
          <rect
            x="0"
            y="0"
            width="112"
            height="72"
            rx="14"
            fill="rgba(255,255,255,0.08)"
            stroke="rgba(191,219,254,0.4)"
            strokeWidth="1.5"
          />
          <rect x="14" y="16" width="36" height="9" rx="4" fill="#e0f2fe" opacity="0.9" />
          <rect x="14" y="32" width="84" height="6" rx="3" fill="#e0f2fe" opacity="0.35" />
          <rect x="14" y="44" width="64" height="6" rx="3" fill="#e0f2fe" opacity="0.22" />
        </g>
        <text
          x="210"
          y="268"
          textAnchor="middle"
          fill="#bfdbfe"
          opacity="0.5"
          fontSize="11"
          fontFamily="var(--font-space-mono), ui-monospace, monospace"
          letterSpacing="0.28em"
        >
          UI · COMPONENTS · A11Y
        </text>
      </svg>
    </figure>
  );
}

export function HomeClient() {
  const { locale } = useLanguage();
  const t = getMessages(locale);

  return (
    <>
      <main className="relative">
        <section
          id="inicio"
          className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-b from-slate-50 via-white to-blue-50/80 px-4 py-16 dark:border-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-blue-950/30 sm:px-6 lg:px-8 lg:py-24"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.15]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(59,130,246,0.2) 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-blue-400/30 blur-3xl dark:bg-blue-600/20" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-sky-400/25 blur-3xl dark:bg-sky-500/15" />

          <div className="relative z-[1] mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-flex rotate-[-1deg] items-center gap-2 rounded-sm border border-blue-200 bg-white px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-blue-900 shadow-sm dark:border-blue-800 dark:bg-slate-900 dark:text-blue-100">
                <span className="h-2 w-2 animate-pulse rounded-sm bg-blue-500" aria-hidden />
                {t.hero.badge}
              </div>
              <h1 className="font-serif text-[clamp(2.5rem,6vw,4.25rem)] font-black leading-[0.95] tracking-tight text-slate-900 dark:text-slate-50">
                Bryan A.{" "}
                <span className="relative inline-block">
                  <span className="relative z-[1] bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 bg-clip-text text-transparent dark:from-blue-300 dark:via-sky-300 dark:to-blue-200">
                    Ramírez
                  </span>
                  <span className="pointer-events-none absolute -inset-1 -z-0 rounded-lg bg-blue-500/15 dark:bg-blue-400/10" aria-hidden />
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 lg:mx-0">{t.hero.subtitle}</p>
              <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
                <a
                  href="#proyectos"
                  className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
                >
                  {t.hero.ctaProjects}
                  <span className="transition group-hover:translate-x-0.5" aria-hidden>
                    →
                  </span>
                </a>
                <Link
                  href="/cv"
                  className="rounded-full border-2 border-blue-200 bg-white px-7 py-3.5 text-sm font-semibold text-blue-900 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-400 dark:border-blue-800 dark:bg-slate-900 dark:text-blue-100 dark:hover:border-blue-500"
                >
                  {t.hero.ctaCv}
                </Link>
                <a
                  href="/cv_bryan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-dashed border-blue-300 px-6 py-3.5 text-sm font-semibold text-blue-800 transition hover:border-blue-500 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-200 dark:hover:bg-slate-900"
                >
                  {t.hero.ctaPdf}
                </a>
              </div>
              <dl className="mt-14 flex flex-wrap justify-center gap-10 lg:justify-start">
                {[
                  [t.hero.statSemVal, t.hero.statSem],
                  [t.hero.statUniVal, t.hero.statUni],
                  [t.hero.statFocusVal, t.hero.statFocus],
                ].map(([n, l]) => (
                  <div key={String(l)} className="text-center lg:text-left">
                    <dt className="font-serif text-3xl font-black text-blue-600 dark:text-blue-400">{n}</dt>
                    <dd className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute -left-4 top-1/2 hidden -translate-y-1/2 select-none font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-blue-300/80 [writing-mode:vertical-rl] dark:text-blue-800 lg:block">
                2026 — PORTFOLIO
              </div>
              <div className="w-full max-w-sm rotate-[0.5deg] rounded-3xl border border-blue-100 bg-white p-8 shadow-[0_30px_80px_-40px_rgba(37,99,235,0.35)] transition hover:rotate-0 dark:border-slate-700 dark:bg-slate-900">
                <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-2xl border-4 border-white bg-gradient-to-br from-blue-600 via-blue-700 to-sky-500 text-2xl font-black tracking-tight text-white shadow-inner dark:border-slate-900">
                  BAR
                </div>
                <p className="text-center font-serif text-xl font-bold text-slate-900 dark:text-slate-50">Bryan A. Ramírez</p>
                <p className="mt-1 text-center font-mono text-xs text-slate-500 dark:text-slate-400">{t.hero.cardRole}</p>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {["React", "Next.js", "Tailwind", "Git", "Figma"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-blue-100 bg-blue-50/80 px-2.5 py-1 font-mono text-[11px] font-semibold text-blue-900 dark:border-blue-900 dark:bg-slate-800 dark:text-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex justify-center gap-2">
                  <a
                    href="https://github.com/vxillaxl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 font-mono text-xs font-bold text-blue-800 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white dark:border-slate-600 dark:bg-slate-800 dark:text-blue-200 dark:hover:bg-blue-500"
                  >
                    GH
                  </a>
                  <a
                    href="https://www.linkedin.com/in/alex-ramirez-86071b3b6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 font-mono text-xs font-bold text-blue-800 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white dark:border-slate-600 dark:bg-slate-800 dark:text-blue-200 dark:hover:bg-blue-500"
                  >
                    in
                  </a>
                  <a
                    href="mailto:vxillaxl4@gmail.com"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-100 bg-blue-50 text-blue-800 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white dark:border-slate-600 dark:bg-slate-800 dark:text-blue-200 dark:hover:bg-blue-500"
                  >
                    ✉
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="inline-block font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-blue-600 dark:text-blue-400">
                  {t.about.label}
                </span>
                <h2 className="mt-3 max-w-xl font-serif text-4xl font-black leading-tight text-slate-900 dark:text-slate-50">{t.about.title}</h2>
              </div>
              <p className="max-w-md text-sm text-slate-500 lg:text-right">Interfaces · Systems · Detail</p>
            </div>
            <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start">
              <div className="space-y-5 text-slate-600 dark:text-slate-300">
                <p className="text-base leading-relaxed">{t.about.p1}</p>
                <p className="text-base leading-relaxed">{t.about.p2}</p>
                <p className="text-base leading-relaxed">{t.about.p3}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["React / Next.js", "TypeScript", "Tailwind", "Node.js", "GitHub", "Figma"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-dashed border-blue-200 px-3 py-1 font-mono text-xs font-semibold text-blue-950 dark:border-blue-800 dark:text-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <AboutVisual />
            </div>
          </div>
        </section>

        <section
          id="proyectos"
          className="border-y border-blue-100 bg-gradient-to-b from-blue-50/90 to-slate-50 px-4 py-20 dark:border-slate-800 dark:from-slate-950 dark:to-blue-950/20 sm:px-6 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-[1200px]">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-blue-700 dark:text-blue-300">{t.projects.label}</span>
            <h2 className="mt-3 font-serif text-4xl font-black text-slate-900 dark:text-slate-50">{t.projects.title}</h2>
            <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">{t.projects.desc}</p>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {t.projects.items.map((p, i) => {
                const links = projectMeta[i];
                const featured = p.coverBadge === "featured";
                const ribbon =
                  p.coverBadge === "featured" ? t.projects.featured : `${t.projects.lab} ${p.coverBadge}`;
                const coverVariant = i as 0 | 1 | 2;
                return (
                  <article
                    key={p.title}
                    className={
                      "group relative flex flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-md shadow-blue-900/5 transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900 " +
                      (featured ? "lg:col-span-2 lg:min-h-[300px] lg:flex-row" : "")
                    }
                  >
                    <div
                      className={
                        "relative shrink-0 overflow-hidden bg-slate-200 dark:bg-slate-800 " +
                        (featured ? "min-h-[200px] w-full lg:min-h-0 lg:w-[48%]" : "h-[180px] w-full")
                      }
                    >
                      <ProjectCoverPanel variant={coverVariant} ribbon={ribbon} />
                    </div>
                    <div className={"flex flex-1 flex-col p-6 " + (featured ? "lg:py-8" : "")}>
                      <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-slate-50">{p.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{p.body}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-blue-50 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wide text-blue-800 dark:bg-slate-800 dark:text-blue-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-5 flex flex-wrap gap-2">
                        <a
                          href={links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-blue-200 px-4 py-2 font-mono text-xs font-bold text-blue-900 transition hover:border-blue-500 hover:bg-blue-50 dark:border-slate-600 dark:text-slate-100 dark:hover:border-blue-400 dark:hover:bg-slate-800"
                        >
                          {t.projects.demo} ↗
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="testimonios" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-[1200px]">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-blue-600 dark:text-blue-400">{t.testimonials.label}</span>
            <h2 className="mt-3 font-serif text-4xl font-black text-slate-900 dark:text-slate-50">{t.testimonials.title}</h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-400">{t.testimonials.desc}</p>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {t.testimonials.items.map((item) => (
                <blockquote
                  key={item.n}
                  className="relative overflow-hidden rounded-2xl border-l-4 border-blue-600 bg-white p-6 shadow-sm dark:border-blue-400 dark:bg-slate-900"
                >
                  <div className="pointer-events-none absolute -right-2 top-2 font-serif text-7xl leading-none text-blue-500/10 dark:text-blue-400/10">
                    “
                  </div>
                  <p className="relative text-sm leading-relaxed text-slate-700 dark:text-slate-300">{item.q}</p>
                  <footer className="relative mt-6 flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-sky-600 text-xs font-black text-white">
                      {item.n
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-slate-50">{item.n}</p>
                      <p className="font-mono text-[10px] font-bold uppercase tracking-wide text-slate-500">{item.r}</p>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section
          id="experiencia"
          className="border-y border-blue-100 bg-gradient-to-b from-slate-50 to-blue-50/60 px-4 py-20 dark:border-slate-800 dark:from-slate-950 dark:to-blue-950/20 sm:px-6 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-[1200px]">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-blue-700 dark:text-blue-300">{t.experience.label}</span>
            <h2 className="mt-3 font-serif text-4xl font-black text-slate-900 dark:text-slate-50">{t.experience.title}</h2>
            <div className="mt-14 grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="mb-8 flex items-center gap-3 font-serif text-xl font-bold text-slate-900 dark:text-slate-50">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-lg dark:bg-blue-950">🎓</span>
                  {t.experience.academic}
                </h3>
                <ul className="space-y-6 border-l-2 border-blue-200 pl-8 dark:border-blue-900">
                  {t.experience.academicEntries.map((entry) => (
                    <li key={entry.title} className="relative">
                      <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-blue-600 bg-white dark:border-blue-400 dark:bg-slate-950" />
                      <p className="font-mono text-xs font-bold uppercase tracking-wide text-blue-700 dark:text-blue-300">{entry.period}</p>
                      <p className="mt-1 font-semibold text-slate-900 dark:text-slate-50">{entry.title}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{entry.place}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{entry.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-8 flex items-center gap-3 font-serif text-xl font-bold text-slate-900 dark:text-slate-50">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-lg dark:bg-sky-950">📚</span>
                  {t.experience.practice}
                </h3>
                <ul className="space-y-4">
                  {t.experience.bullets.map((line) => (
                    <li
                      key={line}
                      className="rounded-2xl border border-blue-100 bg-white p-5 text-sm leading-relaxed text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="habilidades" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-[1200px]">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-blue-600 dark:text-blue-400">{t.skills.label}</span>
            <h2 className="mt-3 font-serif text-4xl font-black text-slate-900 dark:text-slate-50">{t.skills.title}</h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">{t.skills.note}</p>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {TECH_TOOLS.map((tool) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-blue-100 bg-white px-3 py-6 text-center shadow-sm transition hover:border-blue-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-700"
                >
                  <div className="relative flex h-12 w-12 items-center justify-center">
                    <Image
                      src={tool.src}
                      alt={tool.name}
                      width={48}
                      height={48}
                      className={"h-10 w-10 object-contain " + (tool.invertDark ? "dark:invert" : "")}
                    />
                  </div>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-100">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contacto"
          className="border-t border-blue-100 bg-gradient-to-b from-blue-50/80 to-slate-50 px-4 py-20 dark:border-slate-800 dark:from-blue-950/25 dark:to-slate-950 sm:px-6 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-[1200px]">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-blue-700 dark:text-blue-300">{t.contact.label}</span>
            <h2 className="mt-3 font-serif text-4xl font-black text-slate-900 dark:text-slate-50">{t.contact.title}</h2>
            <div className="mt-12 grid gap-12 lg:grid-cols-2">
              <form className="space-y-4" action="#" method="get" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-sm font-semibold text-slate-900 dark:text-slate-200" htmlFor="nm">
                    {t.contact.name}
                  </label>
                  <input
                    id="nm"
                    className="mt-2 w-full rounded-xl border-2 border-blue-100 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-blue-400"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-900 dark:text-slate-200" htmlFor="em">
                    {t.contact.email}
                  </label>
                  <input
                    id="em"
                    type="email"
                    className="mt-2 w-full rounded-xl border-2 border-blue-100 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-50 dark:focus:border-blue-400"
                    placeholder=""
                  />
                </div>
                <button
                  type="button"
                  className="rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
                >
                  {t.contact.send}
                </button>
              </form>
              <div className="space-y-4">
                <p className="text-sm text-slate-600 dark:text-slate-400">{t.contact.hint}</p>
                <a
                  href="mailto:vxillaxl4@gmail.com"
                  className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-white p-5 transition hover:border-blue-300 dark:border-slate-700 dark:bg-slate-900"
                >
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">Email</p>
                    <p className="font-semibold text-slate-900 dark:text-slate-50">vxillaxl4@gmail.com</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/alex-ramirez-86071b3b6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-white p-5 transition hover:border-blue-300 dark:border-slate-700 dark:bg-slate-900"
                >
                  <span className="font-mono text-sm font-bold text-blue-600">in</span>
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">LinkedIn</p>
                    <p className="font-semibold text-slate-900 dark:text-slate-50">Alex Ramírez</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-blue-950 bg-slate-950 px-4 py-12 text-slate-100 sm:px-6">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-serif text-2xl font-black">
              Bryan<span className="text-blue-400">.</span>
            </p>
            <p className="mt-2 font-mono text-xs text-slate-500">{t.footer.copy}</p>
          </div>
          <div className="flex gap-2">
            <a
              href="https://github.com/vxillaxl"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/15 px-4 py-2 font-mono text-xs font-bold text-slate-300 transition hover:border-blue-400/60 hover:text-blue-200"
            >
              GH
            </a>
            <a
              href="mailto:vxillaxl4@gmail.com"
              className="rounded-lg border border-white/15 px-4 py-2 font-mono text-xs font-bold text-slate-300 transition hover:border-blue-400/60 hover:text-blue-200"
            >
              ✉
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

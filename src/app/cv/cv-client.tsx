"use client";

import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { getMessages } from "@/lib/i18n";
import Link from "next/link";

export function CvClient() {
  const { locale } = useLanguage();
  const t = getMessages(locale);
  const c = t.cv;

  return (
    <main className="min-h-screen bg-[#FDFBF7] px-4 py-10 pb-24 text-stone-800 dark:bg-[#0c0b09] dark:text-[#f0ebe3] sm:px-6 lg:py-14">
      <ThemeToggle />
      <article className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-[0_30px_90px_-50px_rgba(0,0,0,0.35)] dark:border-stone-800 dark:bg-stone-900">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-amber-400/25 blur-3xl dark:bg-amber-500/10" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-teal-500/20 blur-3xl dark:bg-teal-500/10" />

        <header className="relative border-b border-stone-200 px-6 pb-10 pt-8 dark:border-stone-800 sm:px-10 sm:pt-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="font-serif text-3xl font-black tracking-tight text-stone-900 dark:text-[#f5f0e8] sm:text-4xl">Bryan A. Ramírez</h1>
              <p className="mt-2 max-w-xl font-mono text-xs font-bold uppercase leading-relaxed tracking-wide text-stone-500 dark:text-stone-400">
                {c.role}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-stone-600 dark:text-stone-300">
                <a href="mailto:vxillaxl4@gmail.com" className="text-amber-700 underline-offset-4 hover:underline dark:text-amber-300">
                  vxillaxl4@gmail.com
                </a>
                <span className="hidden text-stone-300 sm:inline dark:text-stone-600" aria-hidden>
                  ·
                </span>
                <a
                  href="https://github.com/vxillaxl"
                  className="text-amber-700 underline-offset-4 hover:underline dark:text-amber-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <span className="hidden text-stone-300 sm:inline dark:text-stone-600" aria-hidden>
                  ·
                </span>
                <a
                  href="https://www.linkedin.com/in/alex-ramirez-86071b3b6"
                  className="text-amber-700 underline-offset-4 hover:underline dark:text-amber-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="flex flex-col items-stretch gap-3 sm:items-end">
              <LanguageToggle />
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/"
                  className="rounded-full border-2 border-stone-300 px-4 py-2 text-center text-sm font-semibold text-stone-800 transition hover:border-amber-500 hover:bg-amber-500/10 dark:border-stone-600 dark:text-[#f5f0e8] dark:hover:border-amber-400"
                >
                  {c.back}
                </Link>
                <a
                  href="/cv_bryan.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-stone-900 px-4 py-2 text-center text-sm font-semibold text-amber-200 transition hover:bg-stone-800 dark:bg-amber-400 dark:text-stone-950 dark:hover:bg-amber-300"
                >
                  {c.pdf}
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="relative space-y-10 px-6 py-10 sm:px-10">
          <section>
            <h2 className="inline-block border-b-2 border-amber-500 pb-1 font-serif text-lg font-bold text-stone-900 dark:border-amber-400 dark:text-[#f5f0e8]">
              {c.profile}
            </h2>
            <p className="mt-4 leading-relaxed text-stone-600 dark:text-stone-300">{c.profileText}</p>
          </section>

          <section>
            <h2 className="inline-block border-b-2 border-teal-600 pb-1 font-serif text-lg font-bold text-stone-900 dark:border-teal-400 dark:text-[#f5f0e8]">
              {c.education}
            </h2>
            <p className="mt-4 font-semibold text-stone-900 dark:text-[#f5f0e8]">{t.experience.academicEntries[0].title}</p>
            <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{t.experience.academicEntries[0].place}</p>
            <p className="mt-2 font-mono text-xs font-bold uppercase tracking-wide text-blue-700 dark:text-blue-300">
              {t.experience.academicEntries[0].period}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">{t.experience.academicEntries[0].detail}</p>
          </section>

          <section>
            <h2 className="inline-block border-b-2 border-amber-500 pb-1 font-serif text-lg font-bold text-stone-900 dark:border-amber-400 dark:text-[#f5f0e8]">
              {c.projects}
            </h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-stone-600 dark:text-stone-300">
              {c.projectBullets.map((b) => (
                <li key={b} className="leading-relaxed">
                  {b}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="inline-block border-b-2 border-stone-900 pb-1 font-serif text-lg font-bold text-stone-900 dark:border-[#f5f0e8] dark:text-[#f5f0e8]">
              {c.stack}
            </h2>
            <div className="mt-4 space-y-4">
              {c.stackGroups.map((g) => (
                <div key={g.name} className="rounded-2xl border border-stone-200 bg-stone-50 p-4 dark:border-stone-700 dark:bg-stone-950/50">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-300">{g.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-stone-700 dark:text-stone-300">{g.items}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="inline-block border-b-2 border-teal-600 pb-1 font-serif text-lg font-bold text-stone-900 dark:border-teal-400 dark:text-[#f5f0e8]">
              {c.languages}
            </h2>
            <ul className="mt-4 space-y-2 text-stone-600 dark:text-stone-300">
              {c.langItems.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="inline-block border-b-2 border-amber-500 pb-1 font-serif text-lg font-bold text-stone-900 dark:border-amber-400 dark:text-[#f5f0e8]">
              {c.soft}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.softItems.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-dashed border-stone-300 px-3 py-1.5 text-xs font-semibold text-stone-700 dark:border-stone-600 dark:text-stone-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="inline-block border-b-2 border-stone-400 pb-1 font-serif text-lg font-bold text-stone-900 dark:border-stone-500 dark:text-[#f5f0e8]">
              {c.work}
            </h2>
            <p className="mt-4 leading-relaxed text-stone-600 dark:text-stone-300">{c.workText}</p>
          </section>
        </div>
      </article>
    </main>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#contacto", label: "Contacto" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[100] border-b border-blue-100/80 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex h-[68px] max-w-[1100px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link href="/#inicio" className="font-serif text-xl font-black tracking-tight text-blue-950 dark:text-slate-100">
            Bryan<span className="text-blue-600 dark:text-blue-400">.</span>
          </Link>
          <nav className="hidden flex-wrap items-center gap-1 md:flex" aria-label="Principal">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-300"
              >
                {l.label}
              </a>
            ))}
            <Link
              href="/cv"
              className="ml-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              Ver CV
            </Link>
          </nav>
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/cv"
              className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white dark:bg-blue-500"
            >
              CV
            </Link>
            <button
              type="button"
              className="flex flex-col gap-1.5 p-2"
              aria-expanded={open}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((o) => !o)}
            >
              <span className={`h-0.5 w-6 rounded bg-blue-950 transition dark:bg-slate-100 ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-6 rounded bg-blue-950 transition dark:bg-slate-100 ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-6 rounded bg-blue-950 transition dark:bg-slate-100 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </header>
      {open ? (
        <div className="fixed inset-x-0 top-[68px] z-[99] flex flex-col gap-2 border-b border-blue-100 bg-white p-4 shadow-xl dark:border-slate-800 dark:bg-slate-950 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-xl border border-slate-200 px-4 py-3 text-slate-800 dark:border-slate-700 dark:text-slate-100"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <Link href="/cv" className="rounded-xl bg-blue-600 py-3 text-center font-semibold text-white" onClick={() => setOpen(false)}>
            Ver hoja de vida
          </Link>
        </div>
      ) : null}
    </>
  );
}

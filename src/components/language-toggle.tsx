"use client";

import { useLanguage } from "@/components/language-provider";
import { getMessages, type Locale } from "@/lib/i18n";

type Props = { className?: string; compact?: boolean };

export function LanguageToggle({ className = "", compact }: Props) {
  const { locale, setLocale } = useLanguage();
  const t = getMessages(locale).lang;

  const base =
    "inline-flex items-center rounded-full border border-stone-300/80 bg-white/90 p-0.5 text-[11px] font-mono font-bold shadow-sm backdrop-blur-sm dark:border-stone-600 dark:bg-stone-900/90 " +
    className;

  const btn = (code: Locale, label: string) => (
    <button
      key={code}
      type="button"
      onClick={() => setLocale(code)}
      className={
        "rounded-full px-2.5 py-1 transition " +
        (locale === code
          ? "bg-blue-600 text-white shadow-sm dark:bg-blue-500 dark:text-white"
          : "text-stone-600 hover:text-blue-800 dark:text-stone-400 dark:hover:text-blue-200")
      }
      aria-pressed={locale === code}
    >
      {label}
    </button>
  );

  if (compact) {
    return (
      <span className={base} role="group" aria-label={t.label}>
        {btn("es", t.es)}
        {btn("en", t.en)}
      </span>
    );
  }

  return (
    <div className={base} role="group" aria-label={t.label}>
      <span className="hidden px-2 text-stone-500 dark:text-stone-500 sm:inline">{t.label}</span>
      {btn("es", t.es)}
      {btn("en", t.en)}
    </div>
  );
}

"use client";

import { useLanguage } from "@/components/language-provider";
import { getMessages } from "@/lib/i18n";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { locale } = useLanguage();
  const t = getMessages(locale).theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="fixed bottom-6 right-6 z-[200] flex h-12 w-12 items-center justify-center rounded-full bg-stone-900 text-xl text-amber-300 shadow-lg md:bottom-8 md:right-8 dark:bg-stone-100 dark:text-stone-900"
        aria-label={t.loading}
        disabled
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed bottom-6 right-6 z-[200] flex h-12 w-12 items-center justify-center rounded-full bg-stone-900 text-xl text-amber-300 shadow-lg transition hover:scale-105 md:bottom-8 md:right-8 dark:bg-stone-100 dark:text-stone-900"
      title={isDark ? t.light : t.dark}
      aria-label={isDark ? t.light : t.dark}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}

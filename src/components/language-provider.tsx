"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "portfolio-locale";

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "es";
  const raw = window.localStorage.getItem(STORAGE_KEY);
  return raw === "en" ? "en" : "es";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    setLocaleState(readStoredLocale());
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = next === "en" ? "en" : "es";
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "es";
  }, [locale]);

  return <LanguageContext.Provider value={{ locale, setLocale }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}

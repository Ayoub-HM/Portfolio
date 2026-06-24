"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { defaultLocale, isLocale, type Locale } from "./config";
import { dictionaries, type Dictionary } from "./dictionaries";

interface I18nContextValue {
  locale: Locale;
  /** Full typed message tree for the active locale. Use it directly: `m.hero.badge`. */
  m: Dictionary;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "locale";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  // Restore the saved language on mount (the inline script already set <html lang>).
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  }, []);

  // Keep the document title & description in sync with the active language.
  useEffect(() => {
    const meta = dictionaries[locale].meta;
    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
    document.documentElement.lang = locale;
  }, [locale]);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "fr" ? "en" : "fr");
  }, [locale, setLocale]);

  const value = useMemo<I18nContextValue>(
    () => ({ locale, m: dictionaries[locale], setLocale, toggleLocale }),
    [locale, setLocale, toggleLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an <I18nProvider>");
  }
  return ctx;
}

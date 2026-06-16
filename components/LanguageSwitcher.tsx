"use client";

import { useI18n } from "@/lib/i18n/I18nProvider";
import { locales, type Locale } from "@/lib/i18n/config";

/** FR / EN segmented switcher. */
export function LanguageSwitcher() {
  const { locale, setLocale, m } = useI18n();

  return (
    <div
      role="group"
      aria-label={m.nav.language}
      className="flex items-center rounded-full border border-border bg-surface-2 p-0.5"
    >
      {locales.map((l: Locale) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition-colors ${
              active
                ? "bg-primary text-white shadow-glow"
                : "text-muted hover:text-foreground"
            }`}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}

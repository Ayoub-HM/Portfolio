"use client";

import { useI18n } from "@/lib/i18n/I18nProvider";
import { locales, type Locale } from "@/lib/i18n/config";

const flags: Record<Locale, { label: string; svg: React.ReactNode }> = {
  fr: {
    label: "FR",
    svg: (
      <svg className="h-3 w-4 shrink-0 rounded-xs shadow-xs overflow-hidden" viewBox="0 0 640 480" aria-hidden="true">
        <g fillRule="evenodd" strokeWidth="1pt">
          <path fill="#ffffff" d="M0 0h640v480H0z" />
          <path fill="#002654" d="M0 0h213.3v480H0z" />
          <path fill="#ce1126" d="M426.7 0H640v480H426.7z" />
        </g>
      </svg>
    ),
  },
  en: {
    label: "EN",
    svg: (
      <svg className="h-3 w-4 shrink-0 rounded-xs shadow-xs overflow-hidden" viewBox="0 0 640 480" aria-hidden="true">
        <path fill="#012169" d="M0 0h640v480H0z" />
        <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z" />
        <path fill="#C8102E" d="m424 288 216 159v33h-44L367 304l57-16zm-208-96L0 33V0h44l229 176-57 16zM640 0v3l-206 153 31 41L640 30V0zM0 477v3h4l207-154-31-41L0 447v30z" />
        <path fill="#FFF" d="M240 0h160v480H240zM0 160h640v160H0z" />
        <path fill="#C8102E" d="M267 0h106v480H267zM0 187h640v106H0z" />
      </svg>
    ),
  },
};

/** FR / EN segmented switcher with vector flags. */
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
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition-all duration-200 ${
              active
                ? "bg-primary text-white shadow-glow"
                : "text-muted hover:text-foreground"
            }`}
          >
            {flags[l].svg}
            <span>{l}</span>
          </button>
        );
      })}
    </div>
  );
}

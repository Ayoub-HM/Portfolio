/**
 * i18n configuration.
 * French is the default language; English is available via the FR/EN switcher.
 */
export const locales = ["fr", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

/** A value that exists in both languages (used by the data/*.ts records). */
export type Localized<T = string> = Record<Locale, T>;

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "fr" || value === "en";
}

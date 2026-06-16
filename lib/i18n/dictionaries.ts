import fr from "@/messages/fr.json";
import en from "@/messages/en.json";
import type { Locale } from "./config";

/**
 * The French file is the canonical shape. The English file must mirror it.
 * `Dictionary` is inferred from fr.json so every component gets full typing
 * and autocomplete on translation keys.
 */
export type Dictionary = typeof fr;

export const dictionaries: Record<Locale, Dictionary> = {
  fr,
  en: en as Dictionary,
};

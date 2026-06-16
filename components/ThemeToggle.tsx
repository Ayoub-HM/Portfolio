"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme/ThemeProvider";
import { useI18n } from "@/lib/i18n/I18nProvider";

/** Dark/light toggle. Dark is the default. */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { m } = useI18n();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={m.nav.toggleTheme}
      title={m.nav.toggleTheme}
      className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface-2 text-muted transition-colors hover:border-primary/50 hover:text-primary"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}

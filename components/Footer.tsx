"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { profile } from "@/data/profile";

export function Footer() {
  const { m } = useI18n();

  return (
    <footer className="border-t border-border/80 bg-background/50 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-6 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-muted text-center sm:text-left">
          {m.footer.rights}
        </p>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={m.nav.github}
            className="grid h-9 w-9 place-items-center rounded-full border border-border/80 bg-surface-2 text-muted transition-all hover:border-primary/50 hover:text-primary hover:scale-110"
            title="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={m.nav.linkedin}
            className="grid h-9 w-9 place-items-center rounded-full border border-border/80 bg-surface-2 text-muted transition-all hover:border-primary/50 hover:text-primary hover:scale-110"
            title="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label={m.contact.emailLabel}
            className="grid h-9 w-9 place-items-center rounded-full border border-border/80 bg-surface-2 text-muted transition-all hover:border-primary/50 hover:text-primary hover:scale-110"
            title="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

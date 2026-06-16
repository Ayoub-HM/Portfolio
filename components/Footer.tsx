"use client";

import { Github, Linkedin, Mail, ShieldCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { profile } from "@/data/profile";

export function Footer() {
  const { m } = useI18n();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <span className="font-mono text-sm font-bold text-foreground">
              {profile.name}
            </span>
          </div>
          <p className="font-mono text-xs text-muted">{m.footer.tagline}</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={m.nav.github}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface-2 text-muted transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={m.nav.linkedin}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface-2 text-muted transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label={m.contact.emailLabel}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface-2 text-muted transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 sm:flex-row sm:px-8">
          <p className="font-mono text-xs text-muted">{m.footer.rights}</p>
          <p className="inline-flex items-center gap-2 font-mono text-xs text-muted">
            <span className="h-1.5 w-1.5 animate-pulse-ring rounded-full bg-success" />
            {m.footer.status}
          </p>
        </div>
      </div>
    </footer>
  );
}

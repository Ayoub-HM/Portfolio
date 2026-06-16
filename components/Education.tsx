"use client";

import { GraduationCap } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { education } from "@/data/education";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Education() {
  const { locale, m } = useI18n();

  return (
    <section id="education" className="section-padding">
      <SectionHeading
        kicker={m.education.kicker}
        title={m.education.title}
        subtitle={m.education.subtitle}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {education.map((edu, i) => (
          <Reveal key={edu.id} delay={(i % 2) * 0.08}>
            <div className="glass-card flex h-full flex-col p-5 transition-colors hover:border-primary/30">
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs text-muted">
                  {edu.period[locale]}
                </span>
              </div>

              <h3 className="mt-4 text-base font-semibold text-foreground">
                {edu.degree[locale]}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {edu.school}
              </p>

              <div className="mt-3 border-t border-border pt-3">
                <div className="mb-1 font-mono text-[0.65rem] uppercase tracking-wider text-muted">
                  {m.education.focusTitle}
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  {edu.focus[locale]}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

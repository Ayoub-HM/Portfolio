"use client";

import { Briefcase, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { experiences } from "@/data/experience";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Experience() {
  const { locale, m } = useI18n();

  return (
    <section id="experience" className="section-padding">
      <SectionHeading
        kicker={m.experience.kicker}
        title={m.experience.title}
        subtitle={m.experience.subtitle}
      />

      <div className="relative ml-3 border-l border-border pl-8">
        {experiences.map((exp, i) => (
          <Reveal key={exp.id} delay={(i % 4) * 0.05}>
            <div className="relative mb-10 last:mb-0">
              {/* Timeline node */}
              <span className="absolute -left-[42px] top-1.5 grid h-5 w-5 place-items-center rounded-full border-2 border-primary bg-background">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>

              <div className="glass-card p-5">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                      <Briefcase className="h-4 w-4 text-primary" />
                      {exp.role[locale]}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                      <span className="font-medium text-primary">
                        {exp.company}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location[locale]}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {exp.current ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2.5 py-0.5 font-mono text-[0.65rem] uppercase text-success">
                        <span className="h-1.5 w-1.5 animate-pulse-ring rounded-full bg-success" />
                        {m.experience.current}
                      </span>
                    ) : null}
                    <span className="font-mono text-xs text-muted">
                      {exp.period[locale]}
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-sm text-muted">
                  {exp.description[locale]}
                </p>

                <ul className="mt-3 space-y-1.5">
                  {exp.responsibilities[locale].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-[0.7rem] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

"use client";

import {
  BadgeCheck,
  BrainCircuit,
  Eye,
  FlaskConical,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { IdentityNetwork } from "./IdentityNetwork";

const pointIcons: LucideIcon[] = [BrainCircuit, FlaskConical, Eye, GraduationCap];

export function About() {
  const { m } = useI18n();

  return (
    <section id="about" className="section-padding">
      <SectionHeading kicker={m.about.kicker} title={m.about.title} />

      <div className="grid items-start gap-10 lg:grid-cols-2">
        {/* Left: text + bullet points */}
        <Reveal>
          <div className="space-y-4 text-base leading-relaxed text-muted">
            <p>{m.about.p1}</p>
            <p>{m.about.p2}</p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {m.about.points.map((point, i) => {
              const Icon = pointIcons[i] ?? BadgeCheck;
              return (
                <li
                  key={point}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface/60 px-4 py-3"
                >
                  <Icon className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{point}</span>
                </li>
              );
            })}
          </ul>

          {/* Languages */}
          <div className="mt-6 rounded-xl border border-border bg-surface/60 p-4">
            <div className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
              {m.about.languagesTitle}
            </div>
            <div className="flex flex-wrap gap-2">
              {m.about.languages.map((lang) => (
                <span
                  key={lang.label}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-sm"
                >
                  <span className="text-foreground">{lang.label}</span>
                  <span className="font-mono text-xs text-primary">
                    {lang.level}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Right: identity network visual */}
        <Reveal delay={0.1}>
          <IdentityNetwork />
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Boxes,
  Cloud,
  CloudCog,
  Container,
  FileCode,
  GitBranch,
  Infinity as InfinityIcon,
  KeyRound,
  Layers,
  Lock,
  Radar,
  ScrollText,
  Server,
  SquareTerminal,
  Terminal,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import {
  proficiencies,
  skillGroups,
  techIcons,
  type SkillCategoryKey,
} from "@/data/skills";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

const iconMap: Record<string, LucideIcon> = {
  "key-round": KeyRound,
  radar: Radar,
  "scroll-text": ScrollText,
  cloud: Cloud,
  infinity: InfinityIcon,
  terminal: Terminal,
  server: Server,
  lock: Lock,
  users: Users,
  "square-terminal": SquareTerminal,
  "file-code": FileCode,
  container: Container,
  boxes: Boxes,
  layers: Layers,
  "git-branch": GitBranch,
  "badge-check": BadgeCheck,
  workflow: InfinityIcon,
  "cloud-cog": CloudCog,
};

export function Skills() {
  const { m } = useI18n();
  const cat = (key: SkillCategoryKey) => m.skills.categories[key];

  return (
    <section id="skills" className="section-padding">
      <SectionHeading
        kicker={m.skills.kicker}
        title={m.skills.title}
        subtitle={m.skills.subtitle}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Proficiency bars */}
        <Reveal>
          <div className="glass-card h-full p-6">
            <h3 className="mb-6 font-mono text-xs uppercase tracking-wider text-muted">
              {m.skills.proficiencyTitle}
            </h3>
            <div className="space-y-5">
              {proficiencies.map((p) => (
                <div key={p.key}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-sm text-foreground">
                      {cat(p.key)}
                    </span>
                    <span className="font-mono text-xs text-primary">
                      {p.level}%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-surface-2">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary-deep to-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${p.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Technology icon grid */}
        <Reveal delay={0.1}>
          <div className="glass-card h-full p-6">
            <h3 className="mb-6 font-mono text-xs uppercase tracking-wider text-muted">
              {m.skills.technologiesTitle}
            </h3>
            <div className="grid grid-cols-4 gap-3">
              {techIcons.map((tech) => {
                const Icon = iconMap[tech.icon] ?? Terminal;
                return (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface-2/50 p-3 text-center transition-colors hover:border-primary/40"
                  >
                    <Icon className="h-6 w-6 text-primary" />
                    <span className="text-[0.65rem] leading-tight text-muted">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Skill category cards */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = iconMap[group.icon] ?? Terminal;
          return (
            <Reveal key={group.key} delay={(i % 3) * 0.06}>
              <div className="glass-card h-full p-5 transition-colors hover:border-primary/30">
                <h3 className="mb-4 flex items-center gap-2.5 font-semibold text-foreground">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  {cat(group.key)}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-[0.7rem] text-muted transition-colors hover:border-primary/40 hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

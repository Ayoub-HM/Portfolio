"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BadgeCheck,
  Boxes,
  ClipboardList,
  Cloud,
  CloudCog,
  Container,
  Database,
  FileCode,
  GitBranch,
  Github,
  Infinity as InfinityIcon,
  KeyRound,
  Layers,
  Lock,
  Radar,
  ScrollText,
  Server,
  Shield,
  ShieldAlert,
  Sparkles,
  SquareTerminal,
  Terminal,
  Ticket,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import {
  proficiencies,
  skillGroups,
  techIcons,
  type SkillCategoryKey,
} from "@/data/skills";
import { techLogoMap } from "@/components/icons/TechLogos";
import { CollapsibleSection } from "./ui/CollapsibleSection";

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
  github: Github,
  "badge-check": BadgeCheck,
  workflow: Workflow,
  "cloud-cog": CloudCog,
  activity: Activity,
  shield: Shield,
  "shield-alert": ShieldAlert,
  ticket: Ticket,
  database: Database,
  "clipboard-list": ClipboardList,
};

export function Skills() {
  const { m, locale } = useI18n();
  const cat = (key: SkillCategoryKey) => m.skills.categories[key];

  return (
    <CollapsibleSection
      id="skills"
      title={m.skills.title}
      badgeCount={`${skillGroups.reduce((acc, g) => acc + g.skills.length, 0)} ${locale === "fr" ? "compétences" : "skills"}`}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Proficiency bars with animated glowing fill */}
        <div className="glass-card h-full p-6 relative overflow-hidden group">
          <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
          
          <div className="mb-6 flex items-center justify-between border-b border-border/60 pb-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-sky-400 font-bold flex items-center gap-2">
              <Radar className="h-4 w-4" />
              <span>{m.skills.proficiencyTitle}</span>
            </h3>
            <span className="font-mono text-[0.7rem] text-muted">Évaluation continue</span>
          </div>

          <div className="space-y-5">
            {proficiencies.map((p, idx) => (
              <div key={p.key} className="group/bar">
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground group-hover/bar:text-primary transition-colors">
                    {cat(p.key)}
                  </span>
                  <span className="font-mono text-xs font-bold text-sky-400">
                    {p.level}%
                  </span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-surface-2 p-0.5 border border-border/60">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 relative"
                    initial={{ width: 0 }}
                    animate={{ width: `${p.level}%` }}
                    transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                  >
                    {/* Glowing tip */}
                    <span className="absolute right-0 top-0 bottom-0 w-2 rounded-full bg-white shadow-[0_0_8px_#38bdf8]" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology icon grid with hover physics */}
        <div className="glass-card h-full p-6 relative overflow-hidden group">
          <div className="pointer-events-none absolute -left-12 -top-12 h-36 w-36 rounded-full bg-accent/10 blur-2xl group-hover:bg-accent/20 transition-all duration-500" />
          
          <div className="mb-6 flex items-center justify-between border-b border-border/60 pb-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent font-bold flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span>{m.skills.technologiesTitle}</span>
            </h3>
            <span className="font-mono text-[0.7rem] text-muted">Écosystème & Stack</span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
            {techIcons.map((tech) => {
              const LogoComp = techLogoMap[tech.name];
              const Icon = iconMap[tech.icon] ?? Terminal;
              return (
                <motion.div
                  key={tech.name}
                  whileHover={{ y: -4, scale: 1.05, transition: { duration: 0.2 } }}
                  className="group/tech flex flex-col items-center gap-2 rounded-xl border border-border/70 bg-surface-2/60 p-3 text-center transition-all duration-200 hover:border-primary/50 hover:bg-surface-2 hover:shadow-md cursor-default"
                >
                  <div className="flex h-7 w-7 items-center justify-center transition-transform duration-200 group-hover/tech:scale-110">
                    {LogoComp ? (
                      <LogoComp className="h-6 w-6" />
                    ) : (
                      <Icon className="h-6 w-6 text-slate-700 dark:text-slate-300 transition-all duration-200 group-hover/tech:text-sky-500 dark:group-hover/tech:text-sky-400" />
                    )}
                  </div>
                  <span className="text-[0.68rem] font-semibold leading-tight text-slate-700 dark:text-slate-300 transition-colors group-hover/tech:text-primary dark:group-hover/tech:text-white">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Skill category cards with interactive pills */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = iconMap[group.icon] ?? Terminal;
          return (
            <div key={group.key}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card h-full p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-card group relative overflow-hidden"
              >
                {/* Subtle aura */}
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-xl group-hover:bg-primary/20 transition-all" />

                <h3 className="mb-4 flex items-center gap-3 font-bold text-foreground group-hover:text-primary transition-colors">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>{cat(group.key)}</span>
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border/80 bg-surface-2 px-2.5 py-1 font-mono text-[0.7rem] text-slate-700 dark:text-slate-300 font-medium transition-all duration-200 hover:border-primary/50 hover:bg-surface-2 hover:text-primary dark:hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </CollapsibleSection>
  );
}

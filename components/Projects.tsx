"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Github, Lock, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { profile } from "@/data/profile";
import { projects, type ProjectCategory } from "@/data/projects";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

const categoryStyles: Record<ProjectCategory, string> = {
  PENTEST: "border-rose-500/40 bg-rose-500/10 text-rose-400",
  DEVSECOPS: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
  CLOUD: "border-sky-500/40 bg-sky-500/10 text-sky-400",
  IAM: "border-cyan-500/40 bg-cyan-500/10 text-cyan-300",
  SOC: "border-sky-500/40 bg-sky-500/10 text-sky-400",
  GRC: "border-amber-500/40 bg-amber-500/10 text-amber-400",
  HARDENING: "border-amber-500/40 bg-amber-500/10 text-amber-400",
};

export function Projects() {
  const { locale, m } = useI18n();

  return (
    <section id="projects" className="section-padding relative">
      <SectionHeading
        kicker={m.projects.kicker}
        title={m.projects.title}
        subtitle={m.projects.subtitle}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={(i % 3) * 0.08}>
            <motion.article
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-surface/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:shadow-[0_10px_30px_-10px_rgba(14,165,233,0.25)]"
            >
              {/* Holographic light sweep on hover */}
              <div className="pointer-events-none absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent -rotate-45 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />

              {/* Ambient gradient aura */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/25 transition-all duration-500" />

              {/* Top: category + repo icon */}
              <div className="mb-4 flex items-center justify-between relative z-10">
                <span
                  className={`rounded-md border px-2.5 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-wider ${categoryStyles[project.category]}`}
                >
                  {project.category}
                </span>
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-8 w-8 place-items-center rounded-lg border border-border/60 bg-surface-2/60 text-muted transition-all duration-200 hover:border-primary hover:text-primary hover:scale-110"
                    title="Voir le code sur GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                ) : (
                  <div className="grid h-8 w-8 place-items-center rounded-lg border border-border/40 bg-surface-2/40 text-muted/60">
                    <Lock className="h-3.5 w-3.5" />
                  </div>
                )}
              </div>

              {/* Title + description */}
              <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary relative z-10">
                {project.title[locale]}
              </h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300 relative z-10">
                {project.description[locale]}
              </p>

              {/* Tech tags */}
              <div className="mt-4 flex flex-wrap gap-1.5 relative z-10">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border/80 bg-surface-2 px-2.5 py-0.5 font-mono text-[0.7rem] text-slate-700 dark:text-slate-300 font-medium transition-colors hover:border-primary/40 hover:text-primary dark:hover:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Link Button */}
              <div className="mt-6 pt-3 border-t border-border/50 relative z-10">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-1.5 font-mono text-sm font-semibold text-primary transition-colors hover:text-cyan-300"
                  >
                    <span>{m.projects.viewProject}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                ) : project.caseStudy ? (
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 font-mono text-sm font-semibold text-amber-400 transition-colors hover:text-amber-300"
                  >
                    <span>{m.projects.caseStudy}</span>
                    <FileText className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="inline-flex cursor-not-allowed items-center gap-1.5 font-mono text-sm text-muted opacity-60">
                    {m.projects.comingSoon}
                  </span>
                )}
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>

      {/* GitHub CTA card */}
      <Reveal delay={0.25}>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 via-surface-2/80 to-accent/10 p-6 backdrop-blur-md sm:flex-row sm:p-8">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/20 text-primary border border-primary/30">
              <Github className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-foreground sm:text-lg">
                {locale === "fr" ? "Plus de projets & scripts sur GitHub" : "More projects & scripts on GitHub"}
              </h4>
              <p className="text-xs sm:text-sm text-muted">
                {locale === "fr" ? "Labs, playbooks Ansible, Dockerfiles et configurations de sécurité." : "Labs, Ansible playbooks, Dockerfiles and security configs."}
              </p>
            </div>
          </div>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 font-mono text-xs sm:text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 shrink-0"
          >
            <span>github.com/Ayoub-HM</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

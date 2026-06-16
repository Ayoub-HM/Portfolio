"use client";

import { ArrowUpRight, FileText, Github, Lock } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { profile } from "@/data/profile";
import { projects, type ProjectCategory } from "@/data/projects";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

const categoryStyles: Record<ProjectCategory, string> = {
  PENTEST: "border-danger/30 bg-danger/10 text-danger",
  DEVSECOPS: "border-success/30 bg-success/10 text-success",
  CLOUD: "border-primary/30 bg-primary/10 text-primary",
  IAM: "border-accent/30 bg-accent/10 text-accent",
  SOC: "border-primary/30 bg-primary/10 text-primary",
  GRC: "border-warning/30 bg-warning/10 text-warning",
  HARDENING: "border-warning/30 bg-warning/10 text-warning",
};

export function Projects() {
  const { locale, m } = useI18n();

  return (
    <section id="projects" className="section-padding">
      <SectionHeading
        kicker={m.projects.kicker}
        title={m.projects.title}
        subtitle={m.projects.subtitle}
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={(i % 3) * 0.08}>
            <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card">
              {/* Top: category + repo icon */}
              <div className="mb-4 flex items-center justify-between">
                <span
                  className={`rounded-md border px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider ${categoryStyles[project.category]}`}
                >
                  {project.category}
                </span>
                {project.github ? (
                  <Github className="h-4 w-4 text-muted transition-colors group-hover:text-foreground" />
                ) : (
                  <Lock className="h-4 w-4 text-muted" />
                )}
              </div>

              {/* Title + description */}
              <h3 className="text-lg font-semibold text-foreground">
                {project.title[locale]}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.description[locale]}
              </p>

              {/* Tech tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-[0.7rem] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action */}
              <div className="mt-5">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-sm text-primary transition-colors hover:text-accent"
                  >
                    {m.projects.viewProject}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : project.caseStudy ? (
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 font-mono text-sm text-warning transition-colors hover:opacity-80"
                  >
                    {m.projects.caseStudy}
                    <FileText className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="inline-flex cursor-not-allowed items-center gap-1.5 font-mono text-sm text-muted opacity-60">
                    {m.projects.comingSoon}
                  </span>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10 text-center">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-2 px-5 py-3 font-mono text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Github className="h-4 w-4" />
            {m.projects.viewAll}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  ChevronDown,
  Cloud,
  FileCheck,
  FileText,
  Github,
  KeyRound,
  Lock,
  Radio,
  Shield,
  ShieldAlert,
  Sparkles,
  Target,
  Terminal,
  Workflow,
  CheckCircle2,
} from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { profile } from "@/data/profile";
import { projects, type Project, type ProjectCategory } from "@/data/projects";
import { CollapsibleSection } from "./ui/CollapsibleSection";

type FilterCategory = "all" | ProjectCategory;

const categoryConfig: Record<
  ProjectCategory,
  {
    style: string;
    borderActive: string;
    iconBg: string;
    dotColor: string;
    icon: typeof Shield;
    label: { fr: string; en: string };
  }
> = {
  DEVSECOPS: {
    style: "border-emerald-500/30 bg-emerald-500/10 text-emerald-500 dark:text-emerald-400",
    borderActive: "border-emerald-500/50",
    iconBg: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    dotColor: "bg-emerald-400",
    icon: Workflow,
    label: { fr: "DevSecOps", en: "DevSecOps" },
  },
  PENTEST: {
    style: "border-rose-500/30 bg-rose-500/10 text-rose-500 dark:text-rose-400",
    borderActive: "border-rose-500/50",
    iconBg: "bg-rose-500/20 text-rose-400 border-rose-500/40",
    dotColor: "bg-rose-400",
    icon: ShieldAlert,
    label: { fr: "Pentest", en: "Pentest" },
  },
  CLOUD: {
    style: "border-sky-500/30 bg-sky-500/10 text-sky-500 dark:text-sky-400",
    borderActive: "border-sky-500/50",
    iconBg: "bg-sky-500/20 text-sky-400 border-sky-500/40",
    dotColor: "bg-sky-400",
    icon: Cloud,
    label: { fr: "Cloud", en: "Cloud" },
  },
  IAM: {
    style: "border-cyan-500/30 bg-cyan-500/10 text-cyan-500 dark:text-cyan-400",
    borderActive: "border-cyan-500/50",
    iconBg: "bg-cyan-500/20 text-cyan-400 border-cyan-500/40",
    dotColor: "bg-cyan-400",
    icon: KeyRound,
    label: { fr: "IAM", en: "IAM" },
  },
  SOC: {
    style: "border-amber-500/30 bg-amber-500/10 text-amber-500 dark:text-amber-400",
    borderActive: "border-amber-500/50",
    iconBg: "bg-amber-500/20 text-amber-400 border-amber-500/40",
    dotColor: "bg-amber-400",
    icon: Activity,
    label: { fr: "SOC", en: "SOC" },
  },
  GRC: {
    style: "border-indigo-500/30 bg-indigo-500/10 text-indigo-500 dark:text-indigo-400",
    borderActive: "border-indigo-500/50",
    iconBg: "bg-indigo-500/20 text-indigo-400 border-indigo-500/40",
    dotColor: "bg-indigo-400",
    icon: FileCheck,
    label: { fr: "GRC", en: "GRC" },
  },
  HARDENING: {
    style: "border-teal-500/30 bg-teal-500/10 text-teal-600 dark:text-teal-400",
    borderActive: "border-teal-500/50",
    iconBg: "bg-teal-500/20 text-teal-400 border-teal-500/40",
    dotColor: "bg-teal-400",
    icon: Lock,
    label: { fr: "Hardening", en: "Hardening" },
  },
};

export function Projects() {
  const { locale, m } = useI18n();
  const [filter, setFilter] = useState<FilterCategory>("all");
  // Accordion state: empty initially, or single opened item
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      if (prev.has(id)) {
        return new Set();
      }
      return new Set([id]);
    });
  };

  const toggleAllItems = () => {
    if (expandedIds.size === filteredProjects.length) {
      setExpandedIds(new Set());
    } else {
      setExpandedIds(new Set(filteredProjects.map((p) => p.id)));
    }
  };

  const allExpanded =
    filteredProjects.length > 0 &&
    expandedIds.size === filteredProjects.length;

  const handleRequestReport = (e: React.MouseEvent, project: Project) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultMsg =
      locale === "fr"
        ? `Bonjour Ayoub, je souhaiterais recevoir plus d'informations et le rapport concernant votre projet "${project.title[locale]}". Merci !`
        : `Hello Ayoub, I would like to get more information and the report regarding your "${project.title[locale]}" project. Thanks!`;
    const message = project.prefilledMessage?.[locale] || defaultMsg;

    // 1. Automatically unfold the Contact section
    window.dispatchEvent(
      new CustomEvent("open-section", { detail: "contact" })
    );

    // 2. Dispatch custom event to fill contact form
    window.dispatchEvent(
      new CustomEvent("prefill-contact-message", { detail: message })
    );

    // 3. Smooth scroll to contact section
    setTimeout(() => {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 120);
  };

  const categories: ProjectCategory[] = [
    "DEVSECOPS",
    "PENTEST",
    "CLOUD",
    "IAM",
    "SOC",
    "GRC",
    "HARDENING",
  ];

  return (
    <CollapsibleSection
      id="projects"
      title={m.projects.title}
      badgeCount={`${projects.length} ${locale === "fr" ? "projets" : "projects"}`}
    >
      {/* Category Filter Pills + Expand/Collapse All Button */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`rounded-xl px-3 py-1.5 font-mono text-xs font-semibold transition-all cursor-pointer ${
              filter === "all"
                ? "bg-primary text-white shadow-glow"
                : "border border-border bg-surface-2 text-muted hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {m.projects.filterAll} ({projects.length})
          </button>

          {categories.map((cat) => {
            const count = projects.filter((p) => p.category === cat).length;
            if (count === 0) return null;
            const config = categoryConfig[cat];
            const CatIcon = config.icon;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 font-mono text-xs font-semibold transition-all cursor-pointer ${
                  filter === cat
                    ? "bg-primary text-white shadow-glow"
                    : "border border-border bg-surface-2 text-muted hover:border-primary/40 hover:text-foreground"
                }`}
              >
                <CatIcon className="h-3.5 w-3.5" />
                <span>{config.label[locale]}</span>
                <span className="opacity-70">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Expand / Collapse All Details Button */}
        <button
          type="button"
          onClick={toggleAllItems}
          className="inline-flex items-center gap-1.5 rounded-xl border border-border/80 bg-surface-2/80 px-3 py-1.5 font-mono text-xs font-semibold text-muted hover:text-primary hover:border-primary/50 transition-all cursor-pointer shadow-xs shrink-0"
        >
          <span>
            {allExpanded
              ? locale === "fr"
                ? "Tout masquer"
                : "Collapse all"
              : locale === "fr"
              ? "Tout afficher"
              : "Expand all"}
          </span>
          <motion.div
            animate={{ rotate: allExpanded ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            <ChevronDown className="h-3.5 w-3.5" />
          </motion.div>
        </button>
      </div>

      {/* Spacious Vertical List (Accordion Timeline) */}
      <div className="relative">
        <div className="space-y-6 sm:space-y-8">
          {filteredProjects.map((project, i) => {
            const isItemExpanded = expandedIds.has(project.id);
            const config = categoryConfig[project.category];
            const CatIcon = config.icon;

            return (
              <div key={project.id} className="relative">
                <div className="grid grid-cols-1 md:grid-cols-[130px_auto_1fr] lg:grid-cols-[160px_auto_1fr] items-start gap-3 sm:gap-6">
                  {/* 1. Left Column: Desktop Category Badge & Meta */}
                  <div className="hidden md:flex flex-col items-end pt-3 pr-2 text-right">
                    <span
                      className={`inline-flex items-center gap-1 rounded-md border px-2.5 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-wider ${config.style}`}
                    >
                      <CatIcon className="h-3 w-3" />
                      {project.category}
                    </span>

                    <span className="mt-1.5 font-mono text-[0.7rem] text-muted">
                      {project.github
                        ? locale === "fr"
                          ? "Code Source"
                          : "Source Code"
                        : locale === "fr"
                        ? "Étude de Cas"
                        : "Case Study"}
                    </span>
                  </div>

                  {/* 2. Center Column: Timeline Node Circle + Connected Line */}
                  <div className="relative hidden md:flex justify-center h-full pt-2">
                    {i !== filteredProjects.length - 1 && (
                      <div className="absolute top-4 -bottom-8 sm:-bottom-10 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary/80 via-primary/30 to-border/40 z-0" />
                    )}

                    <div
                      onClick={() => toggleExpand(project.id)}
                      className={`relative z-10 grid h-9 w-9 place-items-center rounded-full border-2 transition-all cursor-pointer ${
                        isItemExpanded
                          ? "border-primary bg-primary/20 text-primary shadow-[0_0_14px_rgba(16,185,129,0.5)] scale-110"
                          : "border-border bg-surface-2 text-muted hover:border-primary/60 hover:text-primary hover:scale-105"
                      }`}
                      title={isItemExpanded ? "Réduire" : "Développer"}
                    >
                      <CatIcon className="h-4 w-4" />
                    </div>
                  </div>

                  {/* 3. Right Column: Card Content */}
                  <motion.div
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    className={`glass-card relative overflow-hidden p-4 sm:p-6 transition-all duration-300 border ${
                      isItemExpanded
                        ? "border-primary/50 shadow-md bg-surface"
                        : "border-border/80 hover:border-primary/40 hover:shadow-sm"
                    } group`}
                  >
                    {/* Holographic light reflection on hover */}
                    <div className="pointer-events-none absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent -rotate-45 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />

                    {/* Ambient aura */}
                    <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all duration-500" />

                    {/* Mobile Category Header */}
                    <div className="flex md:hidden items-center justify-between gap-2 mb-2.5 pb-2 border-b border-border/60 relative z-10">
                      <span
                        className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 font-mono text-[0.68rem] font-bold uppercase tracking-wider ${config.style}`}
                      >
                        <CatIcon className="h-3 w-3" />
                        {project.category}
                      </span>
                      <span className="font-mono text-[0.7rem] text-muted">
                        {project.github
                          ? locale === "fr"
                            ? "Code Source"
                            : "Source Code"
                          : locale === "fr"
                          ? "Étude de Cas"
                          : "Case Study"}
                      </span>
                    </div>

                    {/* Header: Clickable Title & Trigger */}
                    <div
                      onClick={() => toggleExpand(project.id)}
                      className="flex items-start justify-between gap-3 relative z-10 cursor-pointer select-none"
                    >
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base sm:text-lg font-bold text-foreground transition-colors group-hover:text-primary leading-snug">
                          {project.title[locale]}
                        </h3>

                        {project.subtitle && (
                          <p className="mt-1 text-xs sm:text-sm text-primary font-medium">
                            {project.subtitle[locale]}
                          </p>
                        )}
                      </div>

                      {/* Expand / Collapse Chevron Button */}
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 mt-0.5 ${
                          isItemExpanded
                            ? "border-primary/60 bg-primary/20 text-primary shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                            : "border-border/80 bg-surface-2 text-muted group-hover:border-primary/50 group-hover:text-primary group-hover:bg-primary/10"
                        }`}
                        title={
                          isItemExpanded
                            ? locale === "fr"
                              ? "Masquer les détails"
                              : "Hide details"
                            : locale === "fr"
                            ? "Afficher les détails"
                            : "Show details"
                        }
                      >
                        <motion.div
                          animate={{ rotate: isItemExpanded ? 180 : 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 320,
                            damping: 22,
                          }}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Short preview when collapsed */}
                    {!isItemExpanded && (
                      <p className="mt-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 line-clamp-2 leading-relaxed">
                        {project.description[locale]}
                      </p>
                    )}

                    {/* Tags preview */}
                    <div className="mt-3 flex flex-wrap gap-1.5 relative z-10">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border/80 bg-surface-2 px-2.5 py-0.5 font-mono text-[0.7rem] text-slate-700 dark:text-slate-300 font-medium transition-colors hover:border-primary/40 hover:text-primary dark:hover:text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Expandable Deep Details Section */}
                    <AnimatePresence initial={false}>
                      {isItemExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="overflow-hidden relative z-10"
                        >
                          <div className="pt-4 mt-4 border-t border-border/50 space-y-4">
                            {/* 1. Objectif du projet */}
                            {project.objective && (
                              <div className="rounded-xl border border-primary/20 bg-primary/5 p-3.5 sm:p-4">
                                <div className="flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase tracking-wider mb-1.5">
                                  <Target className="h-4 w-4" />
                                  <span>{m.projects.objective}</span>
                                </div>
                                <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                                  {project.objective[locale]}
                                </p>
                              </div>
                            )}

                            {/* 2. Implémentation & Étapes clés */}
                            {project.steps && (
                              <div>
                                <div className="font-mono text-xs font-bold text-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                  <Workflow className="h-3.5 w-3.5 text-primary" />
                                  <span>{m.projects.implementation}</span>
                                </div>
                                <div className="space-y-2">
                                  {project.steps[locale].map((step, sIdx) => {
                                    const sepIdx = step.indexOf(" : ");
                                    if (sepIdx !== -1) {
                                      const title = step.slice(0, sepIdx);
                                      const desc = step.slice(sepIdx + 3);
                                      return (
                                        <div
                                          key={sIdx}
                                          className="flex gap-2.5 text-sm leading-relaxed text-slate-800 dark:text-slate-200"
                                        >
                                          <span
                                            className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${config.dotColor}`}
                                          />
                                          <span>
                                            <strong className="font-semibold text-foreground">
                                              {title} :
                                            </strong>{" "}
                                            <span>{desc}</span>
                                          </span>
                                        </div>
                                      );
                                    }
                                    return (
                                      <div
                                        key={sIdx}
                                        className="flex gap-2.5 text-sm leading-relaxed text-slate-800 dark:text-slate-200"
                                      >
                                        <span
                                          className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${config.dotColor}`}
                                        />
                                        <span>{step}</span>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}

                            {/* 3. Résultat & Livrables */}
                            {project.results && (
                              <div className="rounded-xl border border-border/80 bg-surface-2/60 p-3.5 sm:p-4">
                                <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-500 dark:text-emerald-400 uppercase tracking-wider mb-1.5">
                                  <CheckCircle2 className="h-4 w-4" />
                                  <span>{m.projects.results}</span>
                                </div>
                                <p className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                                  {project.results[locale]}
                                </p>
                              </div>
                            )}

                            {/* 4. Action Buttons */}
                            <div className="pt-2 flex flex-wrap items-center gap-3">
                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 font-mono text-xs sm:text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 cursor-pointer"
                                >
                                  <Github className="h-4 w-4" />
                                  <span>{m.projects.viewProject}</span>
                                  <ArrowUpRight className="h-3.5 w-3.5" />
                                </a>
                              )}

                              {project.caseStudy && (
                                <button
                                  type="button"
                                  onClick={(e) =>
                                    handleRequestReport(e, project)
                                  }
                                  className="inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 py-2 font-mono text-xs sm:text-sm font-semibold text-primary transition-all hover:bg-primary/20 hover:border-primary/70 cursor-pointer shadow-xs"
                                >
                                  <FileText className="h-4 w-4" />
                                  <span>{m.projects.caseStudy}</span>
                                </button>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* GitHub CTA card */}
      <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 via-surface-2/80 to-accent/10 p-6 backdrop-blur-md sm:flex-row sm:p-8">
        <div className="flex items-center gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/20 text-primary border border-primary/30">
            <Github className="h-6 w-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-foreground sm:text-lg">
              {locale === "fr"
                ? "Plus de projets & scripts sur GitHub"
                : "More projects & scripts on GitHub"}
            </h4>
            <p className="text-xs sm:text-sm text-muted">
              {locale === "fr"
                ? "Labs, playbooks Ansible, Dockerfiles et configurations de sécurité."
                : "Labs, Ansible playbooks, Dockerfiles and security configs."}
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
    </CollapsibleSection>
  );
}


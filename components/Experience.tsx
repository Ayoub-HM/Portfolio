"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ChevronDown, GraduationCap, MapPin, Layers } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { experiences } from "@/data/experience";
import { education } from "@/data/education";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { CollapsibleSection } from "./ui/CollapsibleSection";

type FilterType = "all" | "experience" | "education";

export type TimelineItem =
  | {
      type: "experience";
      id: string;
      role: { fr: string; en: string };
      company: string;
      location: { fr: string; en: string };
      period: { fr: string; en: string };
      current?: boolean;
      description: { fr: string; en: string };
      responsibilities: { fr: string[]; en: string[] };
      technologies: string[];
      order: number;
    }
  | {
      type: "education";
      id: string;
      degree: { fr: string; en: string };
      school: string;
      location?: { fr: string; en: string };
      period: { fr: string; en: string };
      current?: boolean;
      focus: { fr: string; en: string };
      highlights?: { fr: string[]; en: string[] };
      technologies?: string[];
      order: number;
    };

// Map and combine experiences & education into a unified chronological timeline
const timelineItems: TimelineItem[] = [
  // 1. EFREI Paris - Master of Science Cybersécurité & IA (2025 – 2027)
  {
    type: "education",
    id: education[0].id,
    degree: education[0].degree,
    school: education[0].school,
    location: education[0].location,
    period: education[0].period,
    current: education[0].current,
    focus: education[0].focus,
    highlights: education[0].highlights,
    technologies: education[0].technologies,
    order: 1,
  },
  // 2. Stage Cybersup (04/2026 – 06/2026)
  {
    type: "experience",
    id: experiences[0].id,
    role: experiences[0].role,
    company: experiences[0].company,
    location: experiences[0].location,
    period: experiences[0].period,
    current: experiences[0].current,
    description: experiences[0].description,
    responsibilities: experiences[0].responsibilities,
    technologies: experiences[0].technologies,
    order: 2,
  },
  // 3. AttijariwafaBank - CDI Administrateur Systèmes, Réseaux & Sécurité (04/2024 – 08/2025)
  {
    type: "experience",
    id: experiences[1].id,
    role: experiences[1].role,
    company: experiences[1].company,
    location: experiences[1].location,
    period: experiences[1].period,
    current: experiences[1].current,
    description: experiences[1].description,
    responsibilities: experiences[1].responsibilities,
    technologies: experiences[1].technologies,
    order: 3,
  },
  // 4. FST - Master Systèmes, Réseaux & Sécurité (2022 – 2023)
  {
    type: "education",
    id: education[1].id,
    degree: education[1].degree,
    school: education[1].school,
    location: education[1].location,
    period: education[1].period,
    current: education[1].current,
    focus: education[1].focus,
    highlights: education[1].highlights,
    technologies: education[1].technologies,
    order: 4,
  },
  // 5. OGER International - Stage Technicien IT (01/2021 – 04/2021)
  {
    type: "experience",
    id: experiences[2].id,
    role: experiences[2].role,
    company: experiences[2].company,
    location: experiences[2].location,
    period: experiences[2].period,
    current: experiences[2].current,
    description: experiences[2].description,
    responsibilities: experiences[2].responsibilities,
    technologies: experiences[2].technologies,
    order: 5,
  },
  // 6. FST - Licence Transmission & Télécommunications (2019 – 2020)
  {
    type: "education",
    id: education[2].id,
    degree: education[2].degree,
    school: education[2].school,
    location: education[2].location,
    period: education[2].period,
    current: education[2].current,
    focus: education[2].focus,
    highlights: education[2].highlights,
    technologies: education[2].technologies,
    order: 6,
  },
  // 7. EST - DUT Génie Informatique (2017 – 2019)
  {
    type: "education",
    id: education[3].id,
    degree: education[3].degree,
    school: education[3].school,
    location: education[3].location,
    period: education[3].period,
    current: education[3].current,
    focus: education[3].focus,
    highlights: education[3].highlights,
    technologies: education[3].technologies,
    order: 7,
  },
];

export function Experience() {
  const { locale, m } = useI18n();
  const [filter, setFilter] = useState<FilterType>("all");
  // Set of opened item IDs (empty by default so initially all are collapsed)
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const filteredItems = timelineItems.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const toggleAllItems = () => {
    if (expandedIds.size === filteredItems.length) {
      setExpandedIds(new Set());
    } else {
      setExpandedIds(new Set(filteredItems.map((item) => item.id)));
    }
  };

  const allExpanded = filteredItems.length > 0 && expandedIds.size === filteredItems.length;

  return (
    <CollapsibleSection
      id="experience"
      title={m.experience.title}
      badgeCount={`${timelineItems.length} ${locale === "fr" ? "étapes" : "steps"}`}
    >
      {/* Filter Tabs & Quick Expand-All Toggle */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`rounded-xl px-3.5 py-1.5 font-mono text-xs font-semibold transition-all cursor-pointer ${
              filter === "all"
                ? "bg-primary text-white shadow-glow"
                : "border border-border bg-surface-2 text-muted hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {m.experience.filterAll} ({timelineItems.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter("experience")}
            className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 font-mono text-xs font-semibold transition-all cursor-pointer ${
              filter === "experience"
                ? "bg-primary text-white shadow-glow"
                : "border border-border bg-surface-2 text-muted hover:border-primary/40 hover:text-foreground"
            }`}
          >
            <Briefcase className="h-3.5 w-3.5" />
            {m.experience.filterExp} ({experiences.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter("education")}
            className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 font-mono text-xs font-semibold transition-all cursor-pointer ${
              filter === "education"
                ? "bg-primary text-white shadow-glow"
                : "border border-border bg-surface-2 text-muted hover:border-primary/40 hover:text-foreground"
            }`}
          >
            <GraduationCap className="h-3.5 w-3.5" />
            {m.experience.filterEdu} ({education.length})
          </button>
        </div>

        {/* Expand / Collapse All Details Button */}
        <button
          type="button"
          onClick={toggleAllItems}
          className="inline-flex items-center gap-1.5 rounded-xl border border-border/80 bg-surface-2/80 px-3 py-1.5 font-mono text-xs font-semibold text-muted hover:text-primary hover:border-primary/50 transition-all cursor-pointer shadow-xs"
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

      {/* Timeline Layout with Dates on the Left side of Circles */}
      <div className="relative">
        <div className="space-y-6 sm:space-y-8">
          {filteredItems.map((item, i) => {
            const isItemExpanded = expandedIds.has(item.id);

            return (
              <Reveal key={item.id} delay={(i % 4) * 0.05}>
                <div className="relative grid grid-cols-[36px_1fr] md:grid-cols-[170px_40px_1fr] items-start gap-3 sm:gap-5">
                  {/* 1. Left Column: Date & Period (visible on desktop md:flex) */}
                  <div className="hidden md:flex flex-col items-end pt-2.5 pr-2 text-right">
                    <span className="font-mono text-xs lg:text-sm font-bold text-foreground">
                      {item.period[locale]}
                    </span>
                    {item.current && (
                      <span className="mt-1.5 inline-flex items-center gap-1 rounded-full border border-success/40 bg-success/10 px-2.5 py-0.5 font-mono text-[0.65rem] font-bold text-success uppercase">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
                        {m.experience.current}
                      </span>
                    )}
                  </div>

                  {/* 2. Center Column: Timeline Node Circle + Perfectly Centered Line */}
                  <div className="relative flex justify-center h-full pt-1.5">
                    {/* Vertical connector line passing directly through the middle of the circle */}
                    {i !== filteredItems.length - 1 && (
                      <div className="absolute top-4 -bottom-8 sm:-bottom-10 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary/80 via-primary/30 to-border/40 z-0" />
                    )}

                    <div
                      onClick={() => toggleExpand(item.id)}
                      className="relative z-10 grid h-9 w-9 place-items-center rounded-full border-2 border-primary bg-background text-primary shadow-sm dark:shadow-[0_0_14px_rgba(16,185,129,0.4)] transition-all hover:scale-110 cursor-pointer"
                      title={isItemExpanded ? "Réduire" : "Développer"}
                    >
                      {item.type === "experience" ? (
                        <Briefcase className="h-4 w-4 text-primary" />
                      ) : (
                        <GraduationCap className="h-4 w-4 text-primary" />
                      )}
                    </div>
                  </div>

                  {/* 3. Right Column: Card Content with Holographic Sheen */}
                  <motion.div
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    className={`glass-card relative overflow-hidden p-4 sm:p-5 transition-all duration-300 border ${
                      isItemExpanded
                        ? "border-primary/50 shadow-md bg-surface"
                        : "border-border/80 hover:border-primary/40 hover:shadow-sm"
                    } group`}
                  >
                    {/* Holographic light reflection on hover */}
                    <div className="pointer-events-none absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent -rotate-45 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />

                    {/* Ambient subtle aura */}
                    <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-all duration-500" />

                    {/* Mobile Date Header (visible on screens < md) */}
                    <div className="flex md:hidden items-center justify-between gap-2 mb-2 pb-2 border-b border-border/60 relative z-10">
                      <span className="font-mono text-xs font-bold text-foreground">
                        {item.period[locale]}
                      </span>
                      {item.current && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-success/40 bg-success/10 px-2.5 py-0.5 font-mono text-[0.65rem] font-bold text-success uppercase">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
                          {m.experience.current}
                        </span>
                      )}
                    </div>

                    {/* Header: Clickable Title & Details trigger */}
                    <div
                      onClick={() => toggleExpand(item.id)}
                      className="flex items-start justify-between gap-3 relative z-10 cursor-pointer select-none"
                    >
                      <div className="min-w-0 flex-1">
                        {/* Type Badge */}
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-0.5 font-mono text-[0.68rem] font-bold ${
                            item.type === "experience"
                              ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                              : "border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
                          }`}
                        >
                          {item.type === "experience" ? (
                            <Briefcase className="h-3 w-3" />
                          ) : (
                            <GraduationCap className="h-3 w-3" />
                          )}
                          {item.type === "experience"
                            ? m.experience.badgeExp
                            : m.experience.badgeEdu}
                        </span>

                        {/* Title */}
                        <h3 className="mt-1.5 text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {item.type === "experience"
                            ? item.role[locale]
                            : item.degree[locale]}
                        </h3>

                        {/* Company / School + Location */}
                        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-muted">
                          <span className="font-semibold text-primary">
                            {item.type === "experience"
                              ? item.company
                              : item.school}
                          </span>
                          {item.location && (
                            <span className="inline-flex items-center gap-1 text-muted">
                              <MapPin className="h-3.5 w-3.5" />
                              {item.location[locale]}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Expand / Collapse Chevron Button */}
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 mt-1 ${
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
                          transition={{ type: "spring", stiffness: 320, damping: 22 }}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Expandable Details Section */}
                    <AnimatePresence initial={false}>
                      {isItemExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden relative z-10"
                        >
                          <div className="pt-3.5 mt-3 border-t border-border/50">
                            {/* Description for experiences */}
                            {item.type === "experience" && item.description && (
                              <p className="text-sm text-slate-800 dark:text-slate-200 font-normal leading-relaxed whitespace-pre-line mb-3">
                                {item.description[locale]}
                              </p>
                            )}

                            {/* Focus for education */}
                            {item.type === "education" && item.focus && (
                              <p className="text-sm text-slate-800 dark:text-slate-200 font-normal leading-relaxed whitespace-pre-line mb-3.5">
                                {item.focus[locale]}
                              </p>
                            )}

                            {/* Responsibilities list for experiences */}
                            {item.type === "experience" && item.responsibilities && (
                              <div className="space-y-2 mb-3.5">
                                {item.responsibilities[locale].map((resp, idx) => {
                                  const separatorIndex = resp.indexOf(" : ");
                                  if (separatorIndex !== -1) {
                                    const title = resp.slice(0, separatorIndex);
                                    const desc = resp.slice(separatorIndex + 3);
                                    return (
                                      <div
                                        key={idx}
                                        className="flex gap-2.5 text-sm leading-relaxed text-slate-800 dark:text-slate-200"
                                      >
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                        <span>
                                          <strong className="font-semibold text-foreground">{title} :</strong>{" "}
                                          <span>{desc}</span>
                                        </span>
                                      </div>
                                    );
                                  }
                                  return (
                                    <div
                                      key={idx}
                                      className="flex gap-2.5 text-sm leading-relaxed text-slate-800 dark:text-slate-200"
                                    >
                                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                      <span>{resp}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            )}

                            {/* Highlights list for education */}
                            {item.type === "education" && item.highlights && (
                              <div className="space-y-2 mb-3.5">
                                {item.highlights[locale].map((hl, idx) => {
                                  if (hl.startsWith("🔹")) {
                                    return (
                                      <div
                                        key={idx}
                                        className="pt-3 pb-1 font-mono text-xs sm:text-sm font-bold text-primary flex items-center gap-2 border-b border-primary/20 mt-3 mb-1.5"
                                      >
                                        <span>{hl}</span>
                                      </div>
                                    );
                                  }

                                  const separatorIndex = hl.indexOf(" : ");
                                  if (separatorIndex !== -1) {
                                    const title = hl.slice(0, separatorIndex);
                                    const desc = hl.slice(separatorIndex + 3);
                                    return (
                                      <div
                                        key={idx}
                                        className="flex gap-2.5 text-sm leading-relaxed text-slate-800 dark:text-slate-200"
                                      >
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                                        <span>
                                          <strong className="font-semibold text-foreground">{title} :</strong>{" "}
                                          <span>{desc}</span>
                                        </span>
                                      </div>
                                    );
                                  }

                                  return (
                                    <div
                                      key={idx}
                                      className="flex gap-2.5 text-sm leading-relaxed text-slate-800 dark:text-slate-200"
                                    >
                                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                                      <span>{hl}</span>
                                    </div>
                                  );
                                })}
                              </div>
                            )}

                            {/* Technologies tags */}
                            {item.technologies && item.technologies.length > 0 && (
                              <div className="flex flex-wrap gap-1.5 pt-1">
                                {item.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="rounded-md border border-border/80 bg-surface-2 px-2.5 py-0.5 font-mono text-[0.7rem] text-slate-900 dark:text-slate-200 font-semibold transition-colors hover:border-primary/40 hover:text-primary dark:hover:text-white"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </CollapsibleSection>
  );
}


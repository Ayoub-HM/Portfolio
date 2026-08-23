"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  Landmark,
  Cpu,
  Music2,
  Activity,
  Sparkles,
  Compass,
} from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { languages, interests } from "@/data/interests";
import { CollapsibleSection } from "./ui/CollapsibleSection";

const flagIcons = {
  fr: (
    <svg className="h-4 w-5.5 shrink-0 rounded-xs shadow-xs" viewBox="0 0 640 480" aria-hidden="true">
      <g fillRule="evenodd" strokeWidth="1pt">
        <path fill="#ffffff" d="M0 0h640v480H0z" />
        <path fill="#002654" d="M0 0h213.3v480H0z" />
        <path fill="#ce1126" d="M426.7 0H640v480H426.7z" />
      </g>
    </svg>
  ),
  gb: (
    <svg className="h-4 w-5.5 shrink-0 rounded-xs shadow-xs" viewBox="0 0 640 480" aria-hidden="true">
      <path fill="#012169" d="M0 0h640v480H0z" />
      <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z" />
      <path fill="#C8102E" d="m424 288 216 159v33h-44L367 304l57-16zm-208-96L0 33V0h44l229 176-57 16zM640 0v3l-206 153 31 41L640 30V0zM0 477v3h4l207-154-31-41L0 447v30z" />
      <path fill="#FFF" d="M240 0h160v480H240zM0 160h640v160H0z" />
      <path fill="#C8102E" d="M267 0h106v480H267zM0 187h640v106H0z" />
    </svg>
  ),
  ma: (
    <svg className="h-4 w-5.5 shrink-0 rounded-xs shadow-xs" viewBox="0 0 640 480" aria-hidden="true">
      <path fill="#c1272d" d="M0 0h640v480H0z" />
      <path fill="none" stroke="#006233" strokeWidth="18" d="m320 144 42 129.2-110-79.8h136L278 273.2z" />
    </svg>
  ),
};

const categoryIcons = {
  culture: Landmark,
  tech: Cpu,
  music: Music2,
  sports: Activity,
};

export function Interests() {
  const { locale, m } = useI18n();

  return (
    <CollapsibleSection
      id="interests"
      title={m.interests.title}
      badgeCount={m.interests.badgeCount}
    >
      <div className="space-y-6">
        {/* 1. Bloc Langues & Communication */}
        <div>
          <div className="mb-3.5 flex items-center justify-between border-b border-border/60 pb-2">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
              <Globe2 className="h-4 w-4" />
              <span>{m.interests.languagesTitle}</span>
            </h3>
            <span className="font-mono text-[0.7rem] text-muted">
              {locale === "fr" ? "3 langues" : "3 languages"}
            </span>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-3">
            {languages.map((lang, idx) => (
              <motion.div
                key={lang.id}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="glass-card relative flex flex-col justify-between overflow-hidden rounded-xl border border-border/80 p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-md group"
              >
                {/* Holographic light sweep on hover */}
                <div className="pointer-events-none absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent -rotate-45 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="drop-shadow-xs">{flagIcons[lang.flag]}</span>
                      <h4 className="font-bold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">
                        {lang.name[locale]}
                      </h4>
                    </div>
                    <span className="rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[0.68rem] font-bold text-primary">
                      {lang.badge}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1">
                    {lang.level[locale]}
                  </p>

                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 mb-3">
                    {lang.detail[locale]}
                  </p>
                </div>

                {/* Cyber Gauge bar */}
                <div className="h-1.5 overflow-hidden rounded-full bg-surface-2 p-0.5 border border-border/60 relative z-10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-sky-500 to-emerald-400 relative"
                    initial={{ width: 0 }}
                    animate={{ width: `${lang.percentage}%` }}
                    transition={{ duration: 0.9, delay: idx * 0.1, ease: "easeOut" }}
                  >
                    <span className="absolute right-0 top-0 bottom-0 w-1 rounded-full bg-white shadow-[0_0_4px_#38bdf8]" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Bloc Centres d'Intérêt & Passions (Clean & Vendeur) */}
        <div>
          <div className="mb-3.5 flex items-center justify-between border-b border-border/60 pb-2">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-accent flex items-center gap-2">
              <Compass className="h-4 w-4" />
              <span>{m.interests.interestsTitle}</span>
            </h3>
            <span className="font-mono text-[0.7rem] text-muted">
              {locale === "fr" ? "Profil & ouverture" : "Profile & mindset"}
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {interests.map((item) => {
              const Icon = categoryIcons[item.id as keyof typeof categoryIcons] || Sparkles;
              return (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
                  className="glass-card relative flex flex-col justify-between overflow-hidden rounded-xl border border-border/80 p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_8px_20px_-8px_rgba(56,189,248,0.2)] group"
                >
                  {/* Holographic shimmer */}
                  <div className="pointer-events-none absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent -rotate-45 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />

                  {/* Ambient aura glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-xl group-hover:bg-primary/20 transition-all duration-500" />

                  <div className="relative z-10">
                    {/* Header: Icon + Category */}
                    <div className="flex items-center gap-3 mb-2.5">
                      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg border bg-gradient-to-br transition-transform duration-300 group-hover:scale-105 shadow-sm ${item.color}`}>
                        <Icon className="h-4 w-4" />
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.category[locale]}
                      </h4>
                    </div>

                    {/* Concise Selling Description */}
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal mb-3.5">
                      {item.description[locale]}
                    </p>
                  </div>

                  {/* Topic pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-border/50 relative z-10">
                    {item.topics[locale].map((topic) => (
                      <span
                        key={topic}
                        className="rounded-md border border-border/80 bg-surface-2 px-2.5 py-0.5 font-mono text-[0.68rem] text-slate-700 dark:text-slate-300 font-medium transition-colors hover:border-primary/40 hover:text-primary dark:hover:text-white"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </CollapsibleSection>
  );
}

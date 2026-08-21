"use client";

import { motion } from "framer-motion";
import { Award, CircleDashed, ExternalLink } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { certifications } from "@/data/certifications";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Certifications() {
  const { locale, m } = useI18n();

  return (
    <section id="certifications" className="section-padding relative">
      <SectionHeading
        kicker={m.certifications.kicker}
        title={m.certifications.title}
        subtitle={m.certifications.subtitle}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => {
          const obtained = cert.status === "obtained";
          return (
            <Reveal key={cert.id} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
                className="glass-card relative flex h-full items-start gap-4 p-6 overflow-hidden rounded-2xl border border-border/80 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_10px_25px_-8px_rgba(14,165,233,0.25)] group"
              >
                {/* Holographic light reflection on hover */}
                <div className="pointer-events-none absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent -rotate-45 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />

                {/* Left: Certification Logo / Badge */}
                <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-2xl border border-border/80 bg-surface-2 p-1.5 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:border-primary/50">
                  {cert.logo ? (
                    <img
                      src={cert.logo}
                      alt={cert.name}
                      className="h-full w-full object-contain rounded-xl"
                    />
                  ) : (
                    <span
                      className={`grid h-full w-full place-items-center rounded-xl border ${
                        obtained
                          ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                          : "border-amber-500/40 bg-amber-500/10 text-amber-400"
                      }`}
                    >
                      {obtained ? (
                        <Award className="h-6 w-6" />
                      ) : (
                        <CircleDashed className="h-6 w-6 animate-spin-slow" />
                      )}
                    </span>
                  )}
                </div>

                {/* Right: Info */}
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors text-base leading-snug">
                    {cert.name}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-muted font-medium">
                    {cert.issuer}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-border/50">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[0.68rem] font-semibold uppercase ${
                        obtained
                          ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                          : "border border-amber-500/30 bg-amber-500/10 text-amber-400"
                      }`}
                    >
                      <span className="relative flex h-2 w-2">
                        {obtained ? (
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                        ) : (
                          <>
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
                          </>
                        )}
                      </span>
                      <span>
                        {obtained
                          ? m.certifications.obtained
                          : m.certifications.inProgress}
                      </span>
                      {cert.year ? <span className="text-slate-400">· {cert.year}</span> : ""}
                    </span>

                    {/* Verification Link Button */}
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-primary hover:text-cyan-300 transition-colors group/link"
                        title="Vérifier l'authenticité du certificat"
                      >
                        <span>{locale === "fr" ? "Vérifier" : "Verify"}</span>
                        <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

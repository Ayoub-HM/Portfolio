"use client";

import { Award, CircleDashed } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { certifications } from "@/data/certifications";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Certifications() {
  const { m } = useI18n();

  return (
    <section id="certifications" className="section-padding">
      <SectionHeading
        kicker={m.certifications.kicker}
        title={m.certifications.title}
        subtitle={m.certifications.subtitle}
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => {
          const obtained = cert.status === "obtained";
          return (
            <Reveal key={cert.id} delay={(i % 3) * 0.08}>
              <div className="glass-card flex h-full items-start gap-4 p-5 transition-colors hover:border-primary/30">
                <span
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl border ${
                    obtained
                      ? "border-success/30 bg-success/10 text-success"
                      : "border-warning/30 bg-warning/10 text-warning"
                  }`}
                >
                  {obtained ? (
                    <Award className="h-5 w-5" />
                  ) : (
                    <CircleDashed className="h-5 w-5" />
                  )}
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground">{cert.name}</h3>
                  <p className="mt-0.5 text-sm text-muted">{cert.issuer}</p>
                  <span
                    className={`mt-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[0.65rem] uppercase ${
                      obtained
                        ? "bg-success/10 text-success"
                        : "bg-warning/10 text-warning"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        obtained ? "bg-success" : "animate-pulse-ring bg-warning"
                      }`}
                    />
                    {obtained
                      ? m.certifications.obtained
                      : m.certifications.inProgress}
                    {cert.year ? ` · ${cert.year}` : ""}
                  </span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import { Award, Clock, Cpu, FolderGit2, type LucideIcon } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { stats } from "@/data/profile";
import { Reveal } from "./ui/Reveal";

const icons: Record<string, LucideIcon> = {
  projects: FolderGit2,
  labHours: Clock,
  tools: Cpu,
  certifications: Award,
};

export function Stats() {
  const { m } = useI18n();

  return (
    <section className="relative mx-auto -mt-2 max-w-6xl px-5 sm:px-8">
      <Reveal>
        <div className="grid grid-cols-2 gap-3 rounded-2xl border border-border bg-surface/70 p-3 backdrop-blur-sm sm:gap-4 md:grid-cols-4">
          {stats.map((stat) => {
            const Icon = icons[stat.id] ?? Cpu;
            return (
              <div
                key={stat.id}
                className="flex items-center gap-3 rounded-xl px-3 py-4 transition-colors hover:bg-surface-2/60"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-mono text-2xl font-bold leading-none text-foreground">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted">
                    {m.stats[stat.id]}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

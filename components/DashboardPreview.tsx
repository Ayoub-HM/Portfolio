"use client";

import { Activity, Info, TrendingDown, TrendingUp } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { Reveal } from "./ui/Reveal";

export function DashboardPreview() {
  const { m } = useI18n();

  const metrics = [
    {
      key: "users" as const,
      value: "1,245",
      delta: "+12%",
      up: true,
      spark: "M0 30 L20 26 L40 28 L60 18 L80 20 L100 10",
    },
    {
      key: "alerts" as const,
      value: "23",
      delta: "-8%",
      up: false,
      spark: "M0 14 L20 20 L40 16 L60 24 L80 18 L100 26",
    },
    {
      key: "assets" as const,
      value: "532",
      delta: "+7%",
      up: true,
      spark: "M0 28 L20 24 L40 26 L60 20 L80 22 L100 14",
    },
  ];

  const threats = [
    { key: "initialAccess" as const, value: 35 },
    { key: "privEsc" as const, value: 25 },
    { key: "credAccess" as const, value: 20 },
    { key: "lateral" as const, value: 10 },
    { key: "other" as const, value: 10 },
  ];

  return (
    <section className="section-padding pt-0 lg:pt-0">
      <Reveal>
        <div className="glass-card p-5 shadow-card sm:p-6">
          {/* Header */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                <Activity className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {m.dashboard.title}
                </h3>
                <p className="text-xs text-muted">{m.dashboard.subtitle}</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-3 py-1 font-mono text-[0.65rem] uppercase text-muted">
              <Info className="h-3 w-3" />
              {m.dashboard.disclaimer}
            </span>
          </div>

          {/* Metric cards */}
          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.key}
                className="rounded-xl border border-border bg-surface-2/60 p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted">
                    {m.dashboard[metric.key]}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 font-mono text-xs ${
                      metric.up ? "text-success" : "text-danger"
                    }`}
                  >
                    {metric.up ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    {metric.delta}
                  </span>
                </div>
                <div className="mt-1 flex items-end justify-between gap-2">
                  <span className="text-2xl font-bold text-foreground">
                    {metric.value}
                  </span>
                  <svg
                    viewBox="0 0 100 32"
                    className={`h-8 w-20 ${metric.up ? "text-success" : "text-danger"}`}
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d={metric.spark}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="mt-1 text-[0.65rem] text-muted">
                  {m.dashboard.vsLastMonth}
                </div>
              </div>
            ))}
          </div>

          {/* Threats + posture */}
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            {/* Top threats */}
            <div className="rounded-xl border border-border bg-surface-2/60 p-4 lg:col-span-2">
              <div className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
                {m.dashboard.topThreats}
              </div>
              <div className="space-y-3">
                {threats.map((threat) => (
                  <div key={threat.key} className="flex items-center gap-3">
                    <span className="w-40 shrink-0 text-sm text-foreground">
                      {m.dashboard.threats[threat.key]}
                    </span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-background">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary-deep to-accent"
                        style={{ width: `${threat.value}%` }}
                      />
                    </div>
                    <span className="w-10 shrink-0 text-right font-mono text-xs text-muted">
                      {threat.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Security posture */}
            <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-surface-2/60 p-4">
              <div className="mb-2 font-mono text-xs uppercase tracking-wider text-muted">
                {m.dashboard.securityPosture}
              </div>
              <PostureRing value={78} />
              <span className="mt-2 font-mono text-sm text-success">
                {m.dashboard.postureLabel}
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function PostureRing({ value }: { value: number }) {
  const r = 42;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (value / 100) * circumference;
  return (
    <div className="relative h-28 w-28">
      <svg viewBox="0 0 100 100" className="h-28 w-28 -rotate-90">
        <circle
          cx="50"
          cy="50"
          r={r}
          className="text-border"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r={r}
          className="text-success"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="absolute inset-0 grid place-items-center text-2xl font-bold text-foreground">
        {value}%
      </span>
    </div>
  );
}

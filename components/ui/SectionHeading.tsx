"use client";

import { Reveal } from "./Reveal";

/** Consistent section header: small kicker, title, and optional subtitle. */
export function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-8 bg-primary" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          {kicker}
        </span>
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Lock } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { profile } from "@/data/profile";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  const { m } = useI18n();

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 cyber-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_30%,transparent_75%)] opacity-50" />
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-40 -left-20 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:pb-24">
        {/* Left: copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1 font-mono text-xs text-success"
          >
            <span className="h-2 w-2 animate-pulse-ring rounded-full bg-success" />
            {m.hero.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-5 bg-gradient-to-b from-foreground to-muted bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-7xl"
          >
            {m.hero.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 font-mono text-base text-primary sm:text-lg"
          >
            {m.hero.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted"
          >
            {m.hero.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              {m.hero.viewProjects}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={profile.cvPath}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-2 px-6 py-3 font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              {m.hero.downloadCV}
              <Download className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-muted"
          >
            <Lock className="h-3.5 w-3.5 text-accent" />
            {m.about.available} · {m.about.availableDetail}
          </motion.div>
        </div>

        {/* Right: decorative portrait (top-right) + SOC control-center visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            {/* Decorative ring + portrait — positioned to overlap the hero area */}
            <div className="pointer-events-none absolute -right-6 -top-8 hidden sm:block">
              <div className="relative">
                <div className="rounded-full bg-gradient-to-br from-primary/10 to-transparent p-1 shadow-lg">
                  <div className="rounded-full w-44 h-44 bg-surface-2/80 ring-2 ring-primary/40 flex items-center justify-center">
                    <img
                      src="/images/portrait.jpg"
                      alt={m.hero.name}
                      className="w-36 h-36 rounded-full object-cover shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            <HeroVisual />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

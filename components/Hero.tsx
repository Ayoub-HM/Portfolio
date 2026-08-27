"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Download, Shield, Sparkles, ZoomIn } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { profile } from "@/data/profile";
import { HeroVisual } from "./HeroVisual";
import { ProfileModal } from "./ProfileModal";

export function Hero() {
  const { m } = useI18n();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-16"
    >
      {/* Ambient background with drifting cyber orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 cyber-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_30%,transparent_75%)] opacity-50" />
        
        {/* Animated Floating Hybrid Cyber Orbs (Cyan + Indigo + Emerald) */}
        <motion.div
          animate={{
            x: [0, 30, -25, 0],
            y: [0, -35, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary/20 blur-[130px]"
        />
        <motion.div
          animate={{
            x: [0, -35, 25, 0],
            y: [0, 30, -25, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 -left-20 h-80 w-80 rounded-full bg-accent/20 blur-[130px]"
        />
        <motion.div
          animate={{
            x: [0, 25, -20, 0],
            y: [0, 25, -30, 0],
            scale: [0.9, 1.1, 1, 0.9],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 right-1/4 h-72 w-72 rounded-full bg-emerald-500/15 blur-[140px]"
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-8 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:pb-12">
        {/* Left: copy + portrait */}
        <div>
          {/* Header with Photo on the left + Name & Badge below name */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
            {/* Clickable Profile Photo with Square Frame */}
            <motion.button
              type="button"
              onClick={() => setIsModalOpen(true)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", damping: 20, stiffness: 260 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group relative shrink-0 cursor-pointer focus:outline-none rounded-2xl sm:rounded-3xl text-left"
              title="Cliquer pour agrandir la photo"
            >
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-surface-2 border border-border/80">
                {/* Light Mode: White background */}
                <img
                  src="/images/portrait-light.jpg"
                  alt={m.hero.name}
                  className="w-full h-full object-cover object-top block dark:hidden transition-all duration-300 group-hover:scale-108 group-hover:brightness-105"
                />
                {/* Dark Mode: Black background */}
                <img
                  src="/images/portrait-dark.jpg"
                  alt={m.hero.name}
                  className="w-full h-full object-cover object-top hidden dark:block transition-all duration-300 group-hover:scale-108 group-hover:brightness-105"
                />
                {/* Zoom overlay on hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                  <ZoomIn className="h-7 w-7 text-white drop-shadow-md" />
                </div>
              </div>
            </motion.button>

            {/* Name + Badge */}
            <div className="flex-1 min-w-0">
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-b from-foreground via-foreground to-muted bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl"
              >
                {m.hero.name}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="mt-2.5"
              >
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 font-mono text-xs text-emerald-600 dark:text-emerald-400 sm:text-sm font-semibold shadow-sm">
                  <Shield className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-400" />
                  <span>{m.hero.badge}</span>
                </span>
              </motion.div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 font-mono text-base text-primary sm:text-lg font-semibold"
          >
            {m.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.13 }}
            className="mt-2.5 inline-flex items-center gap-2 rounded-lg border border-border/60 bg-surface-2 px-3 py-1 font-mono text-xs text-slate-700 dark:text-slate-300 font-medium backdrop-blur-sm"
          >
            <CalendarDays className="h-3.5 w-3.5 text-primary" />
            <span>{m.hero.rhythm}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 font-normal"
          >
            {m.hero.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-glow transition-all"
            >
              <span>{m.hero.viewProjects}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href={profile.cvPath}
              download
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-2 px-6 py-3 font-semibold text-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              <span>{m.hero.downloadCV}</span>
              <Download className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>

        {/* Right: SOC control-center visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* Centered Modal on Click */}
      <ProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}

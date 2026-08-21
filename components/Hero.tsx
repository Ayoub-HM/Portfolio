"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Download, ZoomIn } from "lucide-react";
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
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 cyber-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_30%,transparent_75%)] opacity-50" />
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-40 -left-20 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-8 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:pb-12">
        {/* Left: copy + portrait */}
        <div>
          {/* Header with Photo on the left + Name & Badge below name */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
            {/* Clickable Profile Photo */}
            <motion.button
              type="button"
              onClick={() => setIsModalOpen(true)}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="group relative shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full text-left"
              title="Cliquer pour agrandir la photo"
            >
              {/* Glowing cyber aura */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary via-accent to-primary/40 opacity-70 blur-md transition duration-500 group-hover:opacity-100 group-hover:scale-105" />

              {/* Outer cyber frame */}
              <div className="relative rounded-full p-1 bg-surface border border-primary/40 shadow-xl backdrop-blur-md">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden ring-2 ring-primary/40 bg-surface-2">
                  <img
                    src="/images/portrait.jpg"
                    alt={m.hero.name}
                    className="w-full h-full object-cover object-top transition-all duration-300 group-hover:scale-110 group-hover:brightness-105"
                  />
                  {/* Zoom overlay on hover */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                    <ZoomIn className="h-6 w-6 text-white drop-shadow-md" />
                  </div>
                </div>
              </div>
            </motion.button>

            {/* Name + Étudiant en cybersécurité under Name */}
            <div className="flex-1 min-w-0">
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-b from-foreground to-muted bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl"
              >
                {m.hero.name}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="mt-2.5"
              >
                <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 font-mono text-xs text-primary sm:text-sm">
                  {m.hero.badge}
                </span>
              </motion.div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 font-mono text-base text-primary sm:text-lg"
          >
            {m.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.13 }}
            className="mt-2.5 inline-flex items-center gap-2 font-mono text-xs text-muted"
          >
            <CalendarDays className="h-3.5 w-3.5 text-accent" />
            <span>{m.hero.rhythm}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted"
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

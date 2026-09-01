"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Shield } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { profile } from "@/data/profile";
import { HeroVisual } from "./HeroVisual";

// Decorative SOC log feed scrolling behind the portrait.
const LOG_LINES = [
  "08:40:02 systemd[1]: Started wazuh-agent.service",
  "08:40:37 zabbix: agent heartbeat OK — host soc-srv-01",
  "08:41:15 kernel: nf_conntrack: table usage 12%",
  "08:41:48 sshd[2219]: Invalid user admin from 10.0.4.17",
  "08:42:11 sshd[2231]: Failed password for root from 10.0.4.17",
  "08:42:12 wazuh: rule 5710 fired — sshd: invalid user",
  "08:42:15 ufw: [BLOCK] IN=eth0 SRC=10.0.4.17 DST=10.0.1.4 DPT=22",
  "08:43:02 auditd: type=USER_LOGIN acct=\"ayoub\" res=success",
  "08:43:40 zabbix: trigger resolved — CPU load < 70%",
  "08:44:05 nginx: 403 GET /wp-admin from 185.220.205.9",
  "08:44:06 fail2ban: Ban 185.220.205.9",
  "08:45:19 wazuh: rule 550 — integrity checksum changed",
  "08:45:20 osquery: file_events /etc/passwd verified",
  "08:46:33 sshd[2290]: Accepted publickey for ayoub",
  "08:47:01 cron: (root) CMD (/usr/local/bin/backup-check)",
  "08:47:58 kube-apiserver: audit — RBAC policy allowed",
  "08:48:12 suricata: ET SCAN Nmap -sS detected",
  "08:48:13 wazuh: active-response firewall-drop 10.0.9.44",
  "08:49:30 keycloak: LOGIN realm=corp user=jdoe mfa=OK",
  "08:50:02 trivy: image scan passed — 0 CRITICAL",
];

export function Hero() {
  const { m } = useI18n();
  const [firstName, ...lastName] = m.hero.name.split(" ");

  const facts = [
    { label: m.hero.durationLabel, value: m.hero.durationValue },
    { label: m.hero.rhythmLabel, value: m.hero.rhythmValue },
    { label: m.hero.locationLabel, value: m.hero.locationValue },
  ];

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

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-10 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-14">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 font-mono text-xs text-emerald-600 dark:text-emerald-400 sm:text-sm font-semibold shadow-sm">
              <Shield className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-400" />
              <span>{m.hero.badge}</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-6 bg-gradient-to-b from-foreground via-foreground to-muted bg-clip-text pb-1 text-6xl font-extrabold leading-[0.95] tracking-tight text-transparent sm:text-7xl lg:text-8xl"
          >
            <span className="block">{firstName}</span>
            <span className="block">{lastName.join(" ").toUpperCase()}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 font-mono text-base text-primary sm:text-lg font-semibold"
          >
            {m.hero.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300 font-normal"
          >
            {m.hero.introShort}
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

          {/* Apprenticeship key facts */}
          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-10 grid grid-cols-1 gap-5 border-t border-border/70 pt-6 sm:grid-cols-3"
          >
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm font-semibold text-foreground sm:text-base">
                  {fact.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Right: log panel + portrait, with the terminal overlapping below */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative ml-auto h-[360px] w-full overflow-hidden rounded-3xl border border-border/80 bg-surface/80 shadow-card dark:bg-[#090d16]/90 sm:h-[420px] sm:w-[88%] lg:h-[460px]">
            {/* Scrolling log feed */}
            <div
              aria-hidden="true"
              className="absolute inset-0 overflow-hidden px-6 pt-6 font-mono text-[0.68rem] leading-[2.1] text-muted/25 [mask-image:linear-gradient(to_bottom,#000_55%,transparent)] sm:text-xs"
            >
              <div className="animate-log-scroll">
                {[...LOG_LINES, ...LOG_LINES].map((line, i) => (
                  <p key={i} className="whitespace-nowrap">
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* Glow behind the portrait */}
            <div className="pointer-events-none absolute bottom-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/25 blur-[90px]" />

            {/* Portrait cut-out */}
            <div className="absolute -bottom-6 left-[54%] w-[100%] -translate-x-1/2 sm:w-[96%]">
              <img
                src="/images/portrait-cutout.webp"
                alt={m.hero.name}
                className="block h-auto w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
              />
            </div>
          </div>

          {/* Interactive terminal (compact) overlapping the panel */}
          <div className="relative z-10 ml-auto -mt-14 w-full sm:-mt-16 sm:w-[88%]">
            <HeroVisual compact />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

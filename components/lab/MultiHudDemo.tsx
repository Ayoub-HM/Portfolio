"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Radar,
  KeyRound,
  GitBranch,
  ShieldCheck,
  Activity,
  CheckCircle2,
  Clock,
  Lock,
  Layers,
  Sparkles,
} from "lucide-react";
import { HeroVisual } from "../HeroVisual";

export function MultiHudDemo() {
  const [activeTab, setActiveTab] = useState<"radar" | "pam" | "devsecops">("radar");

  return (
    <div className="space-y-6">
      {/* Tab Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-surface/80 p-3.5 backdrop-blur-md">
        <div>
          <h4 className="text-sm font-bold text-foreground">Console Multi-Vues Cyber HUD</h4>
          <p className="text-xs text-muted">Commutez entre la supervision SOC, les métriques PAM et le pipeline DevSecOps</p>
        </div>

        <div className="flex items-center gap-1.5 rounded-xl border border-border bg-surface-2 p-1">
          <button
            onClick={() => setActiveTab("radar")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-mono transition-all cursor-pointer ${
              activeTab === "radar"
                ? "bg-primary text-white font-bold shadow-glow"
                : "text-muted hover:text-foreground"
            }`}
          >
            <Radar className="h-3.5 w-3.5" />
            1. Radar SOC
          </button>
          <button
            onClick={() => setActiveTab("pam")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-mono transition-all cursor-pointer ${
              activeTab === "pam"
                ? "bg-primary text-white font-bold shadow-glow"
                : "text-muted hover:text-foreground"
            }`}
          >
            <KeyRound className="h-3.5 w-3.5" />
            2. Métriques PAM
          </button>
          <button
            onClick={() => setActiveTab("devsecops")}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-mono transition-all cursor-pointer ${
              activeTab === "devsecops"
                ? "bg-primary text-white font-bold shadow-glow"
                : "text-muted hover:text-foreground"
            }`}
          >
            <GitBranch className="h-3.5 w-3.5" />
            3. DevSecOps CI/CD
          </button>
        </div>
      </div>

      {/* Tab Content Display */}
      <AnimatePresence mode="wait">
        {activeTab === "radar" && (
          <motion.div
            key="radar"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
          >
            <HeroVisual />
          </motion.div>
        )}

        {activeTab === "pam" && (
          <motion.div
            key="pam"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="glass-card overflow-hidden p-5 shadow-card border border-border space-y-4"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-danger/80" />
                <span className="h-3 w-3 rounded-full bg-warning/80" />
                <span className="h-3 w-3 rounded-full bg-success/80" />
                <span className="ml-2 font-mono text-xs text-muted">cyberark@pam-vault: ~/telemetry</span>
              </div>
              <span className="font-mono text-[0.65rem] text-success uppercase">● VAULT ACTIF</span>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-border bg-surface-2/70 p-3.5">
                <div className="text-[0.65rem] font-mono text-muted uppercase">Comptes à Privilèges</div>
                <div className="text-xl font-bold font-mono text-primary mt-1">128 / 128</div>
                <div className="text-[0.6rem] text-success mt-1 flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" /> 100% Coffre-fort géré
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface-2/70 p-3.5">
                <div className="text-[0.65rem] font-mono text-muted uppercase">Sessions En Direct</div>
                <div className="text-xl font-bold font-mono text-accent mt-1">3 Actives</div>
                <div className="text-[0.6rem] text-accent mt-1 flex items-center gap-1">
                  <Activity className="h-3 w-3" /> Enregistrement vidéo en cours
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface-2/70 p-3.5">
                <div className="text-[0.65rem] font-mono text-muted uppercase">Rotation de Clé auto</div>
                <div className="text-xl font-bold font-mono text-warning mt-1">Toutes les 24h</div>
                <div className="text-[0.6rem] text-muted mt-1 flex items-center gap-1">
                  <Clock className="h-3 w-3" /> Prochaine dans 2h14
                </div>
              </div>
            </div>

            {/* Active Sessions Table */}
            <div className="rounded-xl border border-border bg-surface-2/50 p-4">
              <div className="font-mono text-xs text-foreground font-bold mb-2.5">
                Sessions Privilégiées Surveillées en Temps Réel :
              </div>
              <div className="space-y-2 font-mono text-[0.72rem]">
                <div className="flex items-center justify-between p-2 rounded-lg bg-surface border border-border">
                  <span className="text-foreground font-semibold">admin_ah (SSH) → SRV-K8S-MASTER</span>
                  <span className="text-success text-[0.65rem] border border-success/30 px-2 py-0.5 rounded-full">ENREGISTRÉ</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-surface border border-border">
                  <span className="text-foreground font-semibold">db_secops (RDP) → SQL-PROD-CLUSTER</span>
                  <span className="text-accent text-[0.65rem] border border-accent/30 px-2 py-0.5 rounded-full">MFA VALIDE</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "devsecops" && (
          <motion.div
            key="devsecops"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="glass-card overflow-hidden p-5 shadow-card border border-border space-y-4"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-danger/80" />
                <span className="h-3 w-3 rounded-full bg-warning/80" />
                <span className="h-3 w-3 rounded-full bg-success/80" />
                <span className="ml-2 font-mono text-xs text-muted">gitlab-ci@devsecops: ~/pipeline</span>
              </div>
              <span className="font-mono text-[0.65rem] text-success uppercase">● PIPELINE SÉCURISÉ</span>
            </div>

            {/* Pipeline Stages */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5">
              {[
                { name: "1. SAST Code", tool: "SonarQube", result: "0 Vulnérabilités" },
                { name: "2. Secrets Scan", tool: "Gitleaks", result: "100% Net" },
                { name: "3. Conteneurs", tool: "Trivy Scan", result: "Images Durcies" },
                { name: "4. DAST / Prod", tool: "OWASP ZAP", result: "Audit Conforme" },
              ].map((st, i) => (
                <div key={i} className="rounded-xl border border-border bg-surface-2/70 p-3">
                  <div className="text-[0.65rem] font-mono text-muted uppercase">{st.name}</div>
                  <div className="text-xs font-bold text-primary mt-0.5">{st.tool}</div>
                  <div className="text-[0.65rem] text-success mt-1 flex items-center gap-1 font-mono">
                    <CheckCircle2 className="h-3 w-3" /> {st.result}
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-border bg-surface-2/50 p-3.5 font-mono text-xs flex items-center justify-between">
              <div>
                <span className="text-muted">Dernier build sécurisé : </span>
                <span className="text-foreground font-bold">commit #4f82a91 (main)</span>
              </div>
              <span className="text-success text-[0.7rem] font-bold">✓ DÉPLOIEMENT CLOUD VALIDÉ</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

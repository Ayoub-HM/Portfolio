"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldAlert,
  ShieldCheck,
  Zap,
  Activity,
  Flame,
  KeyRound,
  Database,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Terminal,
} from "lucide-react";

type AttackType = "none" | "bruteforce" | "privilege" | "exfiltration";

interface LogEntry {
  id: string;
  time: string;
  level: "info" | "warn" | "danger" | "success";
  source: string;
  message: string;
}

export function SocSimulatorDemo() {
  const [activeAttack, setActiveAttack] = useState<AttackType>("none");
  const [posture, setPosture] = useState(94);
  const [threatLevel, setThreatLevel] = useState<"NORMAL" | "HIGH" | "CRITICAL" | "MITIGATING">("NORMAL");
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      id: "1",
      time: "14:45:10",
      level: "info",
      source: "SURICATA-IDS",
      message: "Analyse des flux réseau entrants... Tous les segments nominaux.",
    },
    {
      id: "2",
      time: "14:48:22",
      level: "info",
      source: "WAZUH-AGENT",
      message: "Vérification d'intégrité des fichiers système (FIM) : OK.",
    },
  ]);
  const [remediating, setRemediating] = useState(false);
  const logEndRef = useRef<HTMLDivElement>(null);

  const addLog = (level: LogEntry["level"], source: string, message: string) => {
    const now = new Date();
    const time = now.toTimeString().split(" ")[0];
    setLogs((prev) => [...prev.slice(-15), { id: Math.random().toString(), time, level, source, message }]);
  };

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const triggerAttack = (type: AttackType) => {
    if (remediating) return;
    setActiveAttack(type);

    if (type === "bruteforce") {
      setThreatLevel("HIGH");
      setPosture(42);
      addLog("danger", "SOC-ALERT", "⚠️ Brute-Force SSH/RDP détecté : 850 tentatives échouées depuis 185.220.101.5");
      addLog("warn", "SIEM-CORRELATION", "Seuil d'alerte dépassé sur DC-01.AD.CORP. Déclenchement SOAR.");
      
      // Auto-remediate after 3 seconds
      setTimeout(() => {
        setThreatLevel("MITIGATING");
        addLog("info", "SOAR-PLAYBOOK", "⚡ Playbook 'IR-BRUTEFORCE' en cours d'exécution automatique...");
      }, 1800);

      setTimeout(() => {
        addLog("success", "EDGE-FIREWALL", "🛡️ Règle Drop appliquée : IP 185.220.101.5 bannie 24h.");
        addLog("success", "IAM-GUARD", "Compte verrouillé temporairement + Défi MFA Forcé.");
        setPosture(96);
        setThreatLevel("NORMAL");
        setActiveAttack("none");
      }, 4000);
    } else if (type === "privilege") {
      setThreatLevel("CRITICAL");
      setPosture(28);
      addLog("danger", "PAM-SENTINEL", "🚨 Élévation de privilèges anormale (Pass-the-Hash) détectée sur SRV-PROD-02 !");
      addLog("warn", "EDR-AGENT", "Processus non signé 'lsass_dump.exe' intercepté en mémoire.");

      setTimeout(() => {
        setThreatLevel("MITIGATING");
        addLog("info", "SOAR-PLAYBOOK", "⚡ Playbook 'IR-PRIV-ESC' activé : Isolement réseau du serveur hôte.");
      }, 2000);

      setTimeout(() => {
        addLog("success", "CYBERARK-VAULT", "🔒 Rotation d'urgence des clés Kerberos & Credentials Admin révoqués.");
        addLog("success", "EDR-AGENT", "Processus malveillant terminé et mis en quarantaine.");
        setPosture(98);
        setThreatLevel("NORMAL");
        setActiveAttack("none");
      }, 4200);
    } else if (type === "exfiltration") {
      setThreatLevel("CRITICAL");
      setPosture(35);
      addLog("danger", "CLOUD-TRAIL", "🚨 Tentative de téléchargement massif depuis bucket S3 'confidential-data'.");
      addLog("warn", "DLP-ENGINE", "Volume sortant inhabituel : 14.2 GB vers IP externe non répertoriée.");

      setTimeout(() => {
        setThreatLevel("MITIGATING");
        addLog("info", "SOAR-PLAYBOOK", "⚡ Révocation immédiate des jetons AWS STS IAM suspects.");
      }, 1900);

      setTimeout(() => {
        addLog("success", "AWS-IAM", "🛑 Session API révoquée, accès S3 restreint au VPC Endpoint interne.");
        addLog("success", "SOC-ANALYST", "Intégrité des données préservée. Incident clos.");
        setPosture(95);
        setThreatLevel("NORMAL");
        setActiveAttack("none");
      }, 4100);
    }
  };

  const resetNominal = () => {
    setActiveAttack("none");
    setThreatLevel("NORMAL");
    setPosture(94);
    addLog("info", "SOC-CONSOLE", "Système réinitialisé en mode surveillance nominale.");
  };

  return (
    <div className="space-y-6">
      {/* Simulation Trigger Bar */}
      <div className="rounded-2xl border border-border bg-surface/80 p-4 backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
              <Zap className="h-4 w-4" />
            </span>
            <div>
              <h4 className="text-sm font-bold text-foreground">Simulateur d'Attaques & Réponse SOAR</h4>
              <p className="text-xs text-muted">Testez la réaction en direct de la console face à différents scénarios</p>
            </div>
          </div>
          <button
            onClick={resetNominal}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-muted hover:text-foreground transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset
          </button>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <button
            onClick={() => triggerAttack("bruteforce")}
            disabled={activeAttack !== "none"}
            className={`flex items-center gap-2.5 rounded-xl border p-2.5 text-left transition-all ${
              activeAttack === "bruteforce"
                ? "border-danger bg-danger/15 text-danger ring-1 ring-danger"
                : "border-border bg-surface-2/60 hover:border-danger/40 hover:bg-danger/5 text-foreground"
            }`}
          >
            <Flame className="h-4 w-4 text-danger shrink-0" />
            <div>
              <div className="text-xs font-semibold">1. Brute-Force SSH/RDP</div>
              <div className="text-[0.65rem] text-muted">Attaque d'accès & Détection SIEM</div>
            </div>
          </button>

          <button
            onClick={() => triggerAttack("privilege")}
            disabled={activeAttack !== "none"}
            className={`flex items-center gap-2.5 rounded-xl border p-2.5 text-left transition-all ${
              activeAttack === "privilege"
                ? "border-warning bg-warning/15 text-warning ring-1 ring-warning"
                : "border-border bg-surface-2/60 hover:border-warning/40 hover:bg-warning/5 text-foreground"
            }`}
          >
            <KeyRound className="h-4 w-4 text-warning shrink-0" />
            <div>
              <div className="text-xs font-semibold">2. Élévation de Privilège</div>
              <div className="text-[0.65rem] text-muted">Pass-the-Hash & Réponse PAM</div>
            </div>
          </button>

          <button
            onClick={() => triggerAttack("exfiltration")}
            disabled={activeAttack !== "none"}
            className={`flex items-center gap-2.5 rounded-xl border p-2.5 text-left transition-all ${
              activeAttack === "exfiltration"
                ? "border-accent bg-accent/15 text-accent ring-1 ring-accent"
                : "border-border bg-surface-2/60 hover:border-accent/40 hover:bg-accent/5 text-foreground"
            }`}
          >
            <Database className="h-4 w-4 text-accent shrink-0" />
            <div>
              <div className="text-xs font-semibold">3. Exfiltration Cloud S3</div>
              <div className="text-[0.65rem] text-muted">Alerte DLP & Révocation STS</div>
            </div>
          </button>
        </div>
      </div>

      {/* Main Console Grid */}
      <div className="glass-card overflow-hidden p-5 shadow-card border border-border">
        {/* Header Console */}
        <div className="mb-4 flex items-center justify-between border-b border-border pb-3.5">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-danger/80" />
            <span className="h-3 w-3 rounded-full bg-warning/80" />
            <span className="h-3 w-3 rounded-full bg-success/80" />
            <span className="ml-2 font-mono text-xs text-muted">ayoub@soc-sentinel: ~/live-monitor</span>
          </div>

          <div className="flex items-center gap-3">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[0.7rem] uppercase font-semibold ${
                threatLevel === "NORMAL"
                  ? "border border-success/30 bg-success/10 text-success"
                  : threatLevel === "MITIGATING"
                  ? "border border-accent/30 bg-accent/10 text-accent animate-pulse"
                  : "border border-danger/40 bg-danger/15 text-danger animate-pulse"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  threatLevel === "NORMAL"
                    ? "bg-success"
                    : threatLevel === "MITIGATING"
                    ? "bg-accent"
                    : "bg-danger"
                }`}
              />
              Niveau : {threatLevel}
            </span>
          </div>
        </div>

        {/* Radar & Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Radar Visual */}
          <div className="lg:col-span-7 relative h-64 overflow-hidden rounded-2xl border border-border bg-surface-2/70 p-3">
            <div className="absolute inset-0 cyber-grid opacity-30" />

            {/* Radar rings */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {[220, 160, 100].map((s) => (
                <div
                  key={s}
                  className={`absolute rounded-full border transition-colors duration-500 ${
                    activeAttack !== "none" ? "border-danger/30" : "border-primary/25"
                  }`}
                  style={{ width: s, height: s, left: -s / 2, top: -s / 2 }}
                />
              ))}
              {/* Radar beam */}
              <div
                className="radar-sweep absolute -left-[110px] -top-[110px] h-[220px] w-[220px] rounded-full"
                style={{
                  background:
                    activeAttack !== "none"
                      ? "conic-gradient(from 0deg, transparent 0deg, rgba(239, 68, 68, 0.35) 40deg, transparent 65deg)"
                      : undefined,
                }}
              />
            </div>

            {/* Center Shield */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div
                className={`grid h-14 w-14 place-items-center rounded-2xl border shadow-glow transition-colors duration-500 ${
                  activeAttack !== "none"
                    ? "border-danger/50 bg-danger/20 text-danger shadow-danger/30"
                    : "border-primary/40 bg-primary/15 text-primary"
                }`}
              >
                {activeAttack !== "none" ? (
                  <ShieldAlert className="h-7 w-7 animate-bounce" />
                ) : (
                  <ShieldCheck className="h-7 w-7" />
                )}
              </div>
            </div>

            {/* Simulated Threat Pings */}
            {activeAttack !== "none" ? (
              <>
                <span className="absolute top-[25%] left-[20%] flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-danger opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-danger" />
                </span>
                <span className="absolute top-[35%] right-[25%] flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-danger opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-danger" />
                </span>
                <span className="absolute bottom-[20%] left-[45%] flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-danger opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-danger" />
                </span>
              </>
            ) : (
              <>
                <span className="absolute top-[30%] left-[25%] flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                </span>
                <span className="absolute top-[40%] right-[30%] flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                </span>
              </>
            )}

            <div className="absolute bottom-2 left-3 font-mono text-[0.65rem] text-muted uppercase">
              Capteurs : Active Directory • CloudTrail • Wazuh EDR • Suricata IDS
            </div>
          </div>

          {/* Metrics & Posture */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            {/* Posture Card */}
            <div className="rounded-2xl border border-border bg-surface-2/70 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs uppercase text-muted">Posture de Sécurité</span>
                <span
                  className={`font-mono text-sm font-bold ${
                    posture > 80 ? "text-success" : posture > 50 ? "text-warning" : "text-danger"
                  }`}
                >
                  {posture}%
                </span>
              </div>
              {/* Progress bar */}
              <div className="h-3 w-full overflow-hidden rounded-full bg-surface">
                <motion.div
                  className={`h-full rounded-full transition-colors duration-500 ${
                    posture > 80 ? "bg-success" : posture > 50 ? "bg-warning" : "bg-danger"
                  }`}
                  animate={{ width: `${posture}%` }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-[0.65rem] text-muted font-mono">
                <span>ISO 27001 Compliant</span>
                <span>Zero Trust Status</span>
              </div>
            </div>

            {/* Key Indicators */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="rounded-xl border border-border bg-surface-2/70 p-3">
                <div className="text-[0.65rem] font-mono text-muted uppercase">Temps de Réponse SOAR</div>
                <div className="text-base font-bold font-mono text-primary mt-0.5">~1.8s</div>
                <div className="text-[0.6rem] text-success flex items-center gap-1 mt-1">
                  <CheckCircle2 className="h-3 w-3" /> Auto-remédiation
                </div>
              </div>
              <div className="rounded-xl border border-border bg-surface-2/70 p-3">
                <div className="text-[0.65rem] font-mono text-muted uppercase">Secrets PAM Protégés</div>
                <div className="text-base font-bold font-mono text-accent mt-0.5">100%</div>
                <div className="text-[0.6rem] text-accent flex items-center gap-1 mt-1">
                  <KeyRound className="h-3 w-3" /> CyberArk Vault
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Terminal Log Stream */}
        <div className="mt-4 rounded-xl border border-border bg-black/60 p-3.5 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-border/50 text-[0.7rem] text-muted">
            <span className="flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5 text-primary" />
              FLUX D'ÉVÉNEMENTS SOC & RÉPONSE AUTOMATIQUE (EN DIRECT)
            </span>
            <span className="text-success text-[0.65rem]">● CONNECTÉ</span>
          </div>

          <div className="mt-2.5 h-28 overflow-y-auto space-y-1.5 pr-2 font-mono text-[0.72rem]">
            {logs.map((log) => (
              <div key={log.id} className="flex items-start gap-2 leading-relaxed">
                <span className="text-muted/60 shrink-0">[{log.time}]</span>
                <span
                  className={`font-bold shrink-0 ${
                    log.level === "danger"
                      ? "text-danger"
                      : log.level === "warn"
                      ? "text-warning"
                      : log.level === "success"
                      ? "text-success"
                      : "text-primary"
                  }`}
                >
                  [{log.source}]
                </span>
                <span
                  className={
                    log.level === "danger"
                      ? "text-danger/90"
                      : log.level === "success"
                      ? "text-success/90"
                      : log.level === "warn"
                      ? "text-warning/90"
                      : "text-foreground/80"
                  }
                >
                  {log.message}
                </span>
              </div>
            ))}
            <div ref={logEndRef} />
          </div>
        </div>
      </div>
    </div>
  );
}

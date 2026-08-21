"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Key,
  Lock,
  UserCheck,
  Server,
  Cloud,
  CheckCircle2,
  ArrowRight,
  Fingerprint,
  RefreshCw,
  Eye,
  FileCheck,
} from "lucide-react";

interface StepInfo {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  tech: string;
  features: string[];
  status: "verified" | "monitoring" | "active";
}

const pipelineSteps: StepInfo[] = [
  {
    id: "identity",
    title: "1. Identité & MFA",
    subtitle: "Authentification Forte",
    icon: Fingerprint,
    tech: "Keycloak / FreeIPA",
    features: [
      "Authentification FIDO2 / Passkeys & TOTP",
      "SSO OpenID Connect & SAML 2.0",
      "Détection d'anomalies de localisation",
    ],
    status: "verified",
  },
  {
    id: "pam",
    title: "2. Bastion PAM",
    subtitle: "Accès Privilégiés",
    icon: Key,
    tech: "CyberArk / HashiCorp Vault",
    features: [
      "Isolation complète des sessions RDP/SSH",
      "Rotation automatique des mots de passe admin",
      "Accès Just-In-Time (JIT) avec approbation",
    ],
    status: "active",
  },
  {
    id: "audit",
    title: "3. Enregistrement & Audit",
    subtitle: "Surveillance de Session",
    icon: Eye,
    tech: "Session Recording & SIEM",
    features: [
      "Enregistrement vidéo & frappe clavier (keystroke)",
      "Détection des commandes à risque (rm, sudo, chmod)",
      "Terminaison automatique en cas de déviation",
    ],
    status: "monitoring",
  },
  {
    id: "target",
    title: "4. Cibles Protégées",
    subtitle: "Infrastructure Critique",
    icon: Server,
    tech: "Active Directory / AWS / Linux",
    features: [
      "Contrôleurs de domaine AD durcis",
      "Rôles AWS IAM à privilèges minimaux",
      "Micro-segmentation réseau Zero Trust",
    ],
    status: "verified",
  },
];

export function IamMatrixDemo() {
  const [selectedStep, setSelectedStep] = useState<string>("pam");
  const [simulatingAccess, setSimulatingAccess] = useState(false);
  const [activeSimulationIndex, setActiveSimulationIndex] = useState<number | null>(null);

  const startSimulation = () => {
    if (simulatingAccess) return;
    setSimulatingAccess(true);
    setActiveSimulationIndex(0);

    const interval = setInterval(() => {
      setActiveSimulationIndex((prev) => {
        if (prev === null || prev >= pipelineSteps.length - 1) {
          clearInterval(interval);
          setSimulatingAccess(false);
          return null;
        }
        return prev + 1;
      });
    }, 900);
  };

  const currentStep = pipelineSteps.find((s) => s.id === selectedStep) ?? pipelineSteps[1];

  return (
    <div className="space-y-6">
      {/* Simulation Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-surface/80 p-4 backdrop-blur-md">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
              <Lock className="h-4 w-4" />
            </span>
            <h4 className="text-sm font-bold text-foreground">Pipeline d'Accès Sécurisé Zero Trust (IAM & PAM)</h4>
          </div>
          <p className="text-xs text-muted mt-0.5">
            Visualisez le cheminement complet d'une session privilégiée sécurisée
          </p>
        </div>

        <button
          onClick={startSimulation}
          disabled={simulatingAccess}
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-white shadow-glow transition-transform hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${simulatingAccess ? "animate-spin" : ""}`} />
          {simulatingAccess ? "Vérification Zero Trust en cours..." : "Simuler un Accès Privilégié"}
        </button>
      </div>

      {/* Interactive Visual Pipeline */}
      <div className="glass-card overflow-hidden p-5 shadow-card border border-border">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {pipelineSteps.map((step, index) => {
            const Icon = step.icon;
            const isSelected = selectedStep === step.id;
            const isSimulating = activeSimulationIndex === index;

            return (
              <div
                key={step.id}
                onClick={() => setSelectedStep(step.id)}
                className={`relative cursor-pointer rounded-2xl border p-4 transition-all duration-300 ${
                  isSelected
                    ? "border-primary bg-primary/10 shadow-glow"
                    : isSimulating
                    ? "border-accent bg-accent/15 ring-2 ring-accent"
                    : "border-border bg-surface-2/60 hover:border-primary/40 hover:bg-surface-2"
                }`}
              >
                {/* Active step glow badge */}
                {isSimulating && (
                  <span className="absolute -top-2 -right-2 flex h-5 w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-accent items-center justify-center text-[0.6rem] text-black font-bold">
                      ✓
                    </span>
                  </span>
                )}

                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`grid h-10 w-10 place-items-center rounded-xl border ${
                      isSelected
                        ? "border-primary bg-primary text-white"
                        : "border-border bg-surface text-primary"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[0.65rem] uppercase px-2 py-0.5 rounded-full border border-primary/30 bg-primary/10 text-primary">
                    {step.tech.split("/")[0]}
                  </span>
                </div>

                <h5 className="font-bold text-sm text-foreground">{step.title}</h5>
                <p className="text-xs text-muted font-mono mt-0.5">{step.subtitle}</p>
              </div>
            );
          })}
        </div>

        {/* Selected Step Deep Dive Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mt-6 rounded-2xl border border-border bg-surface-2/80 p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3">
              <div>
                <span className="text-[0.65rem] font-mono uppercase text-primary tracking-widest">
                  DÉTAILS D'ARCHITECTURE SÉCURISÉE
                </span>
                <h4 className="text-base font-bold text-foreground flex items-center gap-2 mt-0.5">
                  {currentStep.title} — {currentStep.tech}
                </h4>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-3 py-1 font-mono text-xs text-success">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Zero Trust Enforced
              </span>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
              {currentStep.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 rounded-xl border border-border bg-surface/80 p-3"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-xs text-foreground/90 leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

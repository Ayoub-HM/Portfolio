"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Flame,
  Shield,
  KeyRound,
  Terminal,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { SocSimulatorDemo } from "@/components/lab/SocSimulatorDemo";
import { IamMatrixDemo } from "@/components/lab/IamMatrixDemo";
import { TerminalDemo } from "@/components/lab/TerminalDemo";
import { MultiHudDemo } from "@/components/lab/MultiHudDemo";

type DemoTab = "simulator" | "iam" | "terminal" | "multihud";

export default function LabPlaygroundPage() {
  const [currentTab, setCurrentTab] = useState<DemoTab>("simulator");

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 py-8 px-4 sm:px-6 lg:px-8">
      {/* Background Ambience */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 cyber-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_30%,transparent_75%)] opacity-40" />
        <div className="absolute -top-40 right-10 h-96 w-96 rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute top-96 -left-20 h-96 w-96 rounded-full bg-accent/15 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-5xl space-y-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs text-primary font-bold">
                <Sparkles className="h-3.5 w-3.5" />
                LABORATOIRE D'INNOVATION
              </span>
              <span className="font-mono text-xs text-muted">Ayoub HAMMOU</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mt-2">
              Prototypes & Concepts Visuels Interactifs
            </h1>
            <p className="text-sm text-muted mt-1 max-w-2xl">
              Cette page indépendante vous permet de tester et manipuler en direct les 4 propositions innovantes pour votre portfolio.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-2 px-4 py-2.5 text-sm font-semibold text-foreground hover:border-primary/50 hover:text-primary transition-all shadow-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour au Portfolio
          </Link>
        </div>

        {/* Prototype Navigation Switcher */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {
              id: "simulator" as DemoTab,
              label: "1. Simulateur SOC",
              desc: "Attaques en direct & SOAR",
              icon: Flame,
              badge: "Recommandé",
            },
            {
              id: "iam" as DemoTab,
              label: "2. Matrice IAM / PAM",
              desc: "Flux d'Accès Zero Trust",
              icon: KeyRound,
              badge: "Spécialité",
            },
            {
              id: "terminal" as DemoTab,
              label: "3. Terminal CLI",
              desc: "Commandes interactives",
              icon: Terminal,
              badge: "Hacker",
            },
            {
              id: "multihud" as DemoTab,
              label: "4. Multi-HUD 3D",
              desc: "Radar + PAM + DevSecOps",
              icon: Layers,
              badge: "Complet",
            },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setCurrentTab(tab.id)}
                className={`relative flex flex-col items-start p-4 rounded-2xl border transition-all text-left cursor-pointer ${
                  isActive
                    ? "border-primary bg-primary/15 shadow-glow"
                    : "border-border bg-surface-2/60 hover:border-primary/40 hover:bg-surface-2"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <div
                    className={`grid h-8 w-8 place-items-center rounded-lg border ${
                      isActive
                        ? "border-primary bg-primary text-white"
                        : "border-border bg-surface text-primary"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <span
                    className={`font-mono text-[0.65rem] px-2 py-0.5 rounded-full border ${
                      isActive
                        ? "border-primary bg-primary/30 text-white font-bold"
                        : "border-border text-muted"
                    }`}
                  >
                    {tab.badge}
                  </span>
                </div>

                <div className="font-bold text-sm text-foreground">{tab.label}</div>
                <div className="text-[0.72rem] text-muted mt-0.5">{tab.desc}</div>
              </button>
            );
          })}
        </div>

        {/* Prototype Display Box */}
        <div className="rounded-3xl border border-border bg-surface/40 p-6 shadow-2xl backdrop-blur-xl">
          {currentTab === "simulator" && <SocSimulatorDemo />}
          {currentTab === "iam" && <IamMatrixDemo />}
          {currentTab === "terminal" && <TerminalDemo />}
          {currentTab === "multihud" && <MultiHudDemo />}
        </div>
      </div>
    </div>
  );
}

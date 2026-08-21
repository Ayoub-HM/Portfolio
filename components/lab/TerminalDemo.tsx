"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal, Send, Sparkles, CornerDownLeft, ShieldCheck, Check } from "lucide-react";
import { profile } from "@/data/profile";

interface CommandOutput {
  command: string;
  response: string | React.ReactNode;
}

export function TerminalDemo() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: "whoami",
      response: (
        <div className="space-y-1 text-foreground">
          <p className="text-primary font-bold">Ayoub HAMMOU — Consultant & Étudiant en Cybersécurité</p>
          <p className="text-muted text-xs">Spécialités : IAM (Keycloak) • PAM (CyberArk) • SOC (Wazuh/Suricata) • GRC (ISO 27001) • DevSecOps</p>
          <p className="text-xs text-muted">Statut : Recherche Alternance (Septembre 2026 · Paris)</p>
        </div>
      ),
    },
    {
      command: "help",
      response: (
        <div className="space-y-1 text-xs">
          <p className="text-muted">Commandes disponibles dans cette console :</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-primary">
            <span>• <strong className="text-foreground">whoami</strong> : Bio rapide</span>
            <span>• <strong className="text-foreground">skills</strong> : Compétences clés</span>
            <span>• <strong className="text-foreground">certs</strong> : Certifications</span>
            <span>• <strong className="text-foreground">contact</strong> : Coordonnées</span>
            <span>• <strong className="text-foreground">scan</strong> : Audit de posture</span>
            <span>• <strong className="text-foreground">sudo hire</strong> : Recruter Ayoub</span>
          </div>
        </div>
      ),
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdText: string) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    if (!cleanCmd) return;

    let responseNode: React.ReactNode = "";

    switch (cleanCmd) {
      case "help":
        responseNode = (
          <div className="space-y-1 text-xs">
            <p className="text-muted">Commandes disponibles :</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-primary">
              <span>• whoami</span>
              <span>• skills</span>
              <span>• certs</span>
              <span>• contact</span>
              <span>• scan</span>
              <span>• clear</span>
              <span>• sudo hire</span>
            </div>
          </div>
        );
        break;

      case "whoami":
        responseNode = (
          <div className="space-y-1 text-xs text-foreground">
            <p className="text-primary font-bold">Ayoub HAMMOU — Consultant en Cybersécurité</p>
            <p className="text-muted">Expertise : Gestion des Identités (IAM/PAM), Détection des Menaces (SOC/SIEM), Conformité (ISO 27001).</p>
            <p className="text-success">Disponible pour une alternance à partir de Septembre 2026 (Paris / Île-de-France).</p>
          </div>
        );
        break;

      case "skills":
        responseNode = (
          <div className="space-y-2 text-xs">
            <div>
              <span className="text-primary font-bold">[IAM & PAM] : </span>
              <span className="text-foreground">CyberArk, Keycloak, FreeIPA, Active Directory, MFA, SSO, OAuth2/OIDC, SAML</span>
            </div>
            <div>
              <span className="text-accent font-bold">[SOC & Threat] : </span>
              <span className="text-foreground">Wazuh SIEM, Suricata IDS/IPS, Splunk, MITRE ATT&CK, Wireshark, EDR</span>
            </div>
            <div>
              <span className="text-warning font-bold">[DevSecOps] : </span>
              <span className="text-foreground">Docker Hardening, GitLab CI, SonarQube, Linux Security, Python, Bash</span>
            </div>
          </div>
        );
        break;

      case "certs":
        responseNode = (
          <div className="space-y-1 text-xs text-foreground">
            <p className="text-success font-semibold">🏆 Certifications actives & en cours :</p>
            <p>1. CompTIA Security+ (En cours)</p>
            <p>2. CyberArk Certified Trustee</p>
            <p>3. ISO/IEC 27001 Lead Implementer (Foundation)</p>
          </div>
        );
        break;

      case "scan":
        responseNode = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-primary">🔍 Lancement de l'audit de posture de sécurité...</p>
            <p className="text-success">✓ Chiffrement TLS 1.3 activé</p>
            <p className="text-success">✓ Headers HTTP Security (HSTS, CSP, X-Frame) : A+</p>
            <p className="text-success">✓ Politiques PAM & Rotations de Secrets : 100% conformes</p>
            <p className="text-accent font-bold mt-1">Score Global : 98/100 (Système hautement durci)</p>
          </div>
        );
        break;

      case "contact":
        responseNode = (
          <div className="space-y-1 text-xs text-foreground">
            <p>📧 Email : <a href="mailto:Ayoubhammou77@gmail.com" className="text-primary underline">Ayoubhammou77@gmail.com</a></p>
            <p>📱 Téléphone : <span className="text-foreground">+33 7 63 49 61 04</span></p>
            <p>🔗 LinkedIn : <a href={profile.linkedin} target="_blank" className="text-accent underline">linkedin.com/in/ayoub-hammou</a></p>
            <p>🐙 GitHub : <a href={profile.github} target="_blank" className="text-accent underline">github.com/Ayoub-HM</a></p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "sudo hire":
      case "sudo hire ayoub":
        responseNode = (
          <div className="rounded-xl border border-success/40 bg-success/10 p-3 text-xs space-y-1.5">
            <p className="text-success font-bold text-sm">🎉 Superbe décision ! Félicitations !</p>
            <p className="text-foreground">Accès root accordé pour planifier un entretien ou échanger sur votre opportunité d'alternance.</p>
            <a
              href="mailto:Ayoubhammou77@gmail.com?subject=Opportunité Alternance Cybersécurité"
              className="inline-flex items-center gap-1.5 rounded-lg bg-success px-3 py-1 text-black font-bold mt-1"
            >
              Envoyer une proposition par email →
            </a>
          </div>
        );
        break;

      default:
        responseNode = (
          <p className="text-xs text-danger">
            Commande inconnue : '{cleanCmd}'. Tapez <strong className="underline cursor-pointer" onClick={() => handleCommand("help")}>help</strong> pour voir les options.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdText, response: responseNode }]);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <div className="space-y-6">
      {/* Quick command buttons */}
      <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-surface/80 p-3.5 backdrop-blur-md">
        <span className="text-xs font-mono text-muted mr-1">Raccourcis :</span>
        {["help", "whoami", "skills", "certs", "scan", "sudo hire ayoub"].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="rounded-lg border border-border bg-surface-2 px-2.5 py-1 font-mono text-xs text-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Window */}
      <div className="glass-card overflow-hidden shadow-2xl border border-border bg-black/90">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-border/80 px-4 py-3 bg-surface/90">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-danger/80" />
            <span className="h-3 w-3 rounded-full bg-warning/80" />
            <span className="h-3 w-3 rounded-full bg-success/80" />
            <span className="ml-2 font-mono text-xs text-muted flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5 text-primary" />
              ayoub@soc-defense: ~ (zsh interactive)
            </span>
          </div>
          <span className="font-mono text-[0.65rem] text-success">● SESSION EN LIGNE</span>
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-5 h-80 overflow-y-auto space-y-3 font-mono text-xs">
          <p className="text-muted/70 text-[0.7rem]">
            Bienvenue dans le terminal interactif d'Ayoub HAMMOU v2.4 (Security Operations Center).
            Tapez <span className="text-primary font-bold">help</span> pour explorer.
          </p>

          {history.map((h, i) => (
            <div key={i} className="space-y-1.5">
              <div className="flex items-center gap-2 text-primary">
                <span className="text-muted">ayoub@soc:~$</span>
                <span className="text-foreground font-bold">{h.command}</span>
              </div>
              <div className="pl-4">{h.response}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Bar */}
        <form onSubmit={handleSubmit} className="border-t border-border/70 p-3 bg-surface/50 flex items-center gap-2">
          <span className="font-mono text-xs text-primary font-bold pl-2">ayoub@soc:~$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tapez une commande (ex: whoami, skills, scan)..."
            className="flex-1 bg-transparent font-mono text-xs text-foreground placeholder:text-muted/50 focus:outline-none"
            autoFocus
          />
          <button
            type="submit"
            className="rounded-lg bg-primary/20 px-3 py-1.5 text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer text-xs font-mono flex items-center gap-1"
          >
            <Send className="h-3 w-3" />
            Entrée
          </button>
        </form>
      </div>
    </div>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Send, ShieldCheck, CheckCircle2, Sparkles, X, Maximize2, Minimize2 } from "lucide-react";
import { useI18n } from "@/lib/i18n/I18nProvider";
import { profile } from "@/data/profile";

interface CommandOutput {
  command: string;
  response: React.ReactNode;
}

function TerminalBanner() {
  return (
    <div className="space-y-1 font-mono text-[0.68rem] sm:text-xs text-white border-b border-slate-800/80 pb-3 mb-2 leading-relaxed select-text">
      <div className="text-white font-medium overflow-hidden text-ellipsis whitespace-nowrap"># ========================================================</div>
      <div className="text-white font-bold"># PORTFOLIO INTERACTIF - AYOUB HAMMOU</div>
      <div className="text-white"># Recherche : Alternance (Septembre 2026) - Paris / Île-de-France</div>
      <div className="text-white font-medium overflow-hidden text-ellipsis whitespace-nowrap"># ========================================================</div>
      <div className="text-white pt-0.5"># Naviguez via la ligne de commande ci-dessous.</div>
      <div className="text-white"># Tapez &apos;help&apos; pour plus d&apos;informations.</div>
    </div>
  );
}

export function HeroVisual() {
  const { m, locale } = useI18n();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [showBanner, setShowBanner] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const modalTerminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle ESC key to close expanded modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsExpanded(false);
    };
    if (isExpanded) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isExpanded]);

  // Scroll ONLY the internal terminal container, never the window/page
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
    if (modalTerminalBodyRef.current) {
      modalTerminalBodyRef.current.scrollTop = modalTerminalBodyRef.current.scrollHeight;
    }
  }, [history, isExpanded]);

  const executeCommand = (cmdText: string) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    if (!cleanCmd) return;

    let responseNode: React.ReactNode = "";

    switch (cleanCmd) {
      case "help":
        responseNode = (
          <div className="space-y-1 text-xs py-0.5">
            <p className="text-slate-400 text-[0.7rem]">
              {locale === "fr" ? "Commandes disponibles :" : "Available commands:"}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 font-mono text-[0.72rem] text-slate-200">
              <div>• <strong className="text-white font-semibold">whoami</strong></div>
              <div>• <strong className="text-white font-semibold">skills</strong></div>
              <div>• <strong className="text-white font-semibold">certs</strong></div>
              <div>• <strong className="text-white font-semibold">scan</strong></div>
              <div>• <strong className="text-white font-semibold">contact</strong></div>
              <div>• <strong className="text-white font-semibold">sudo hire</strong></div>
            </div>
          </div>
        );
        break;

      case "whoami":
        responseNode = (
          <div className="space-y-1 text-xs text-slate-200">
            <p className="font-bold text-sky-300 text-sm">{profile.name}</p>
            <p className="text-slate-300 text-[0.72rem] leading-relaxed">{m.hero.intro}</p>
            <p className="text-emerald-400 text-[0.7rem] font-semibold mt-1">
              ✓ {m.about.available} ({m.about.availableDetail})
            </p>
          </div>
        );
        break;

      case "skills":
        responseNode = (
          <div className="space-y-2 text-[0.72rem]">
            <div>
              <span className="text-sky-300 font-bold">[IAM & PAM] : </span>
              <span className="text-slate-200">CyberArk, Keycloak, FreeIPA, Active Directory, MFA, SSO, OAuth2/OIDC, SAML, RBAC/ABAC</span>
            </div>
            <div>
              <span className="text-cyan-300 font-bold">[SOC & Threat] : </span>
              <span className="text-slate-200">Wazuh SIEM, Suricata IDS/IPS, MITRE ATT&CK, EDR, Wireshark, Splunk</span>
            </div>
            <div>
              <span className="text-amber-300 font-bold">[DevSecOps & GRC] : </span>
              <span className="text-slate-200">Docker Hardening, GitLab CI, SonarQube, ISO 27001, Linux Hardening, Python/Bash</span>
            </div>
          </div>
        );
        break;

      case "certs":
      case "certifications":
        responseNode = (
          <div className="space-y-1 text-xs text-slate-200 font-mono">
            <p className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5" />
              {locale === "fr" ? "Certifications validées & en cours :" : "Certifications & In Progress:"}
            </p>
            <p className="text-[0.72rem] text-slate-300">• CompTIA Security+ (En cours / In Progress)</p>
            <p className="text-[0.72rem] text-slate-300">• CyberArk Certified Trustee</p>
            <p className="text-[0.72rem] text-slate-300">• ISO/IEC 27001 Foundation / Lead Implementer</p>
          </div>
        );
        break;

      case "scan":
        responseNode = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-sky-300 text-[0.72rem]">
              {locale === "fr" ? "🔍 Audit de conformité & posture de sécurité..." : "🔍 Running security posture audit..."}
            </p>
            <p className="text-emerald-400 text-[0.7rem]">✓ Chiffrement Zero Trust & MFA Enforced</p>
            <p className="text-emerald-400 text-[0.7rem]">✓ Politiques PAM CyberArk & Rotation de Secrets : 100%</p>
            <p className="text-emerald-400 text-[0.7rem]">✓ Surveillance continue SOC & Playbooks SOAR : ACTIFS</p>
            <p className="text-cyan-300 font-bold text-xs mt-1">Score Global : 98/100 (Système hautement durci)</p>
          </div>
        );
        break;

      case "contact":
        responseNode = (
          <div className="space-y-1 text-[0.72rem] text-slate-200">
            <p>📧 Email : <a href={`mailto:${profile.email}`} className="text-sky-400 underline hover:text-sky-300">{profile.email}</a></p>
            <p>📱 Téléphone : <span className="text-white">{profile.phone}</span></p>
            <p>🔗 LinkedIn : <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline hover:text-cyan-300">linkedin.com/in/ayoub-hammou</a></p>
            <p>🐙 GitHub : <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline hover:text-cyan-300">github.com/Ayoub-HM</a></p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setShowBanner(false);
        setInput("");
        return;

      case "sudo hire":
      case "sudo hire ayoub":
      case "hire":
        responseNode = (
          <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3 text-xs space-y-1.5">
            <p className="text-emerald-400 font-bold text-sm flex items-center gap-1.5">
              <Sparkles className="h-4 w-4" />
              {locale === "fr" ? "🎉 Excellent choix ! Accès Root accordé." : "🎉 Excellent choice! Root access granted."}
            </p>
            <p className="text-slate-200 text-[0.72rem]">
              {locale === "fr"
                ? "Disponible pour échanger sur vos projets et planifier un entretien d'alternance."
                : "Available to discuss opportunities and schedule an interview."}
            </p>
            <a
              href={`mailto:${profile.email}?subject=Opportunité Alternance Cybersécurité - Ayoub HAMMOU`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-1 text-slate-950 font-bold text-xs mt-1 hover:bg-emerald-400 transition-colors"
            >
              {locale === "fr" ? "Envoyer une proposition par email →" : "Send an email proposal →"}
            </a>
          </div>
        );
        break;

      default:
        responseNode = (
          <p className="text-xs text-rose-400">
            {locale === "fr"
              ? `Commande inconnue : '${cleanCmd}'. Tapez 'help' pour voir la liste.`
              : `Unknown command: '${cleanCmd}'. Type 'help' to see available commands.`}
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdText, response: responseNode }]);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
  };

  return (
    <>
      {/* Standard Hero Terminal Card */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-700/60 bg-[#090d16] text-slate-200 backdrop-blur-xl">
        {/* Terminal Top Bar */}
        <div className="flex items-center justify-between border-b border-slate-800/80 px-4 py-3 bg-[#0d1322]">
          {/* Left: Title */}
          <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
            <Terminal className="h-3.5 w-3.5 text-sky-400" />
            <span className="font-semibold text-slate-300">ayoub@soc-defense: ~ (zsh)</span>
          </div>

          {/* Right: Colored dots with Maximize action on Green Dot */}
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80 shadow-sm" title="Fermer" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80 shadow-sm" title="Réduire" />
            
            {/* Green Circle: Maximize / Enlarge button */}
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              className="group relative h-3.5 w-3.5 rounded-full bg-emerald-500/90 hover:bg-emerald-400 hover:scale-125 transition-all cursor-pointer shadow-sm flex items-center justify-center focus:outline-none"
              title="Agrandir le terminal en plein écran"
              aria-label="Agrandir le terminal"
            >
              <Maximize2 className="h-2 w-2 text-slate-950 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>



        {/* Terminal Body */}
        <div
          ref={terminalBodyRef}
          className="h-64 sm:h-72 overflow-y-auto p-4 space-y-3 font-mono text-xs text-slate-200 bg-[#090d16]"
        >
          {/* Custom Header Banner */}
          {showBanner && <TerminalBanner />}

          {history.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center gap-2 text-sky-400">
                <span className="text-slate-400 font-bold">ayoub@soc:~$</span>
                <span className="text-white font-bold">{item.command}</span>
              </div>
              <div className="pl-3 sm:pl-4 border-l border-sky-500/30">{item.response}</div>
            </div>
          ))}
        </div>

        {/* Terminal Input Bar */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 border-t border-slate-800 bg-[#0d1322] p-2.5 sm:p-3"
        >
          <span className="font-mono text-xs font-bold text-sky-400 pl-2 shrink-0">ayoub@soc:~$</span>
          
          <div className="relative flex-1 flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={locale === "fr" ? "Tapez une commande..." : "Type a command..."}
              className="w-full bg-transparent font-mono text-xs text-white placeholder:text-slate-500 focus:outline-none pr-2"
              autoFocus
            />
            {/* Blinking terminal cursor */}
            <span
              className="pointer-events-none inline-block h-3.5 w-2 bg-sky-400 animate-pulse rounded-xs shadow-[0_0_8px_rgba(56,189,248,0.85)] shrink-0"
              aria-hidden="true"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-sky-500/20 px-3 py-1 font-mono text-xs text-sky-400 hover:bg-sky-500 hover:text-white transition-colors cursor-pointer flex items-center gap-1 font-semibold shrink-0"
          >
            <Send className="h-3 w-3" />
            <span className="hidden sm:inline">Envoyer</span>
          </button>
        </form>
      </div>

      {/* Enlarged Fullscreen Terminal Modal via React Portal */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isExpanded && (
              <div className="fixed inset-0 z-[9999] grid place-items-center p-3 sm:p-6 overflow-y-auto">
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsExpanded(false)}
                  className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-zoom-out"
                />

                {/* Enlarged Terminal Window */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 12 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 12 }}
                  transition={{ type: "spring", damping: 28, stiffness: 350 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative z-10 w-full max-w-4xl my-auto max-h-[92vh] flex flex-col rounded-3xl border border-sky-500/40 bg-[#090d16] text-slate-200 shadow-2xl shadow-sky-500/20 backdrop-blur-2xl overflow-hidden cursor-default"
                >
                  {/* Modal Top Bar */}
                  <div className="flex items-center justify-between border-b border-slate-800/80 px-4 sm:px-5 py-3.5 bg-[#0d1322]">
                    <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-slate-300">
                      <Terminal className="h-4 w-4 text-sky-400" />
                      <span className="font-bold">ayoub@soc-defense: ~ [SESSION AGRANDIE PLEIN ÉCRAN]</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <button
                        type="button"
                        onClick={() => setIsExpanded(false)}
                        className="h-3.5 w-3.5 rounded-full bg-rose-500/90 hover:bg-rose-400 transition-all cursor-pointer shadow-sm flex items-center justify-center"
                        title="Fermer la vue agrandie"
                        aria-label="Fermer"
                      />
                      <button
                        type="button"
                        onClick={() => setIsExpanded(false)}
                        className="h-3.5 w-3.5 rounded-full bg-amber-500/90 hover:bg-amber-400 transition-all cursor-pointer shadow-sm"
                        title="Réduire"
                        aria-label="Réduire"
                      />
                      <button
                        type="button"
                        onClick={() => setIsExpanded(false)}
                        className="h-3.5 w-3.5 rounded-full bg-emerald-500/90 hover:bg-emerald-400 transition-all cursor-pointer shadow-sm flex items-center justify-center"
                        title="Quitter le plein écran"
                        aria-label="Quitter le plein écran"
                      >
                        <Minimize2 className="h-2 w-2 text-slate-950" />
                      </button>

                      {/* Close button icon */}
                      <button
                        type="button"
                        onClick={() => setIsExpanded(false)}
                        className="ml-2 rounded-full bg-slate-800/80 p-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer border border-slate-700"
                        aria-label="Fermer"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>



                  {/* Modal Terminal Body (Taller) */}
                  <div
                    ref={modalTerminalBodyRef}
                    className="h-[52vh] sm:h-[58vh] overflow-y-auto p-5 sm:p-6 space-y-3.5 font-mono text-xs sm:text-sm text-slate-200 bg-[#090d16]"
                  >
                    {/* Custom Header Banner in Modal */}
                    {showBanner && <TerminalBanner />}

                    {history.map((item, index) => (
                      <div key={index} className="space-y-1.5">
                        <div className="flex items-center gap-2 text-sky-400">
                          <span className="text-slate-400 font-bold">ayoub@soc:~$</span>
                          <span className="text-white font-bold">{item.command}</span>
                        </div>
                        <div className="pl-4 sm:pl-5 border-l-2 border-sky-500/40">{item.response}</div>
                      </div>
                    ))}
                  </div>

                  {/* Modal Input Bar */}
                  <form
                    onSubmit={handleSubmit}
                    className="flex items-center gap-3 border-t border-slate-800 bg-[#0d1322] p-3 sm:p-4"
                  >
                    <span className="font-mono text-xs sm:text-sm font-bold text-sky-400 pl-2 shrink-0">ayoub@soc:~$</span>
                    
                    <div className="relative flex-1 flex items-center">
                      <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={locale === "fr" ? "Tapez une commande..." : "Type a command..."}
                        className="w-full bg-transparent font-mono text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none pr-2"
                        autoFocus
                      />
                      {/* Blinking terminal cursor */}
                      <span
                        className="pointer-events-none inline-block h-4 w-2.5 bg-sky-400 animate-pulse rounded-xs shadow-[0_0_10px_rgba(56,189,248,0.85)] shrink-0"
                        aria-hidden="true"
                      />
                    </div>

                    <button
                      type="submit"
                      className="rounded-xl bg-sky-500 px-4 py-2 font-mono text-xs sm:text-sm text-slate-950 font-bold hover:bg-sky-400 transition-colors cursor-pointer flex items-center gap-1.5 shrink-0"
                    >
                      <Send className="h-3.5 w-3.5" />
                      <span>Exécuter</span>
                    </button>
                  </form>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}

import type { Localized } from "@/lib/i18n/config";

export type ProjectCategory =
  | "PENTEST"
  | "DEVSECOPS"
  | "CLOUD"
  | "IAM"
  | "SOC"
  | "GRC"
  | "HARDENING";

export interface Project {
  id: string;
  title: Localized;
  description: Localized;
  category: ProjectCategory;
  /** Short, language-neutral tech tags. */
  tags: string[];
  /** If set, a real public repo exists -> "View Project" button. */
  github?: string;
  /**
   * If true (and no github), the project is a private/report-only lab ->
   * "Case Study" button that scrolls to the contact section.
   * If neither github nor caseStudy is set -> disabled "Coming Soon".
   */
  caseStudy?: boolean;
  featured?: boolean;
}

/**
 * Only projects that map to real work (GitHub repos or documented lab reports).
 * To add a project: copy a block, set `github` for a public repo OR `caseStudy: true`
 * for a report-only lab. Never link to a repository that does not exist.
 */
export const projects: Project[] = [
  {
    id: "devsecops-pipeline",
    title: {
      fr: "Pipeline DevSecOps — GitHub Actions",
      en: "DevSecOps Pipeline — GitHub Actions",
    },
    description: {
      fr: "Sécurisation d'une application Node.js via un pipeline CI/CD automatisé : SAST (Semgrep), analyse de dépendances, détection de secrets (Gitleaks) et scan d'image Docker (Trivy), avec génération d'un rapport de sécurité à chaque commit.",
      en: "Securing a Node.js application through an automated CI/CD pipeline: SAST (Semgrep), dependency analysis, secrets detection (Gitleaks), and Docker image scanning (Trivy), generating a security report on every commit.",
    },
    category: "DEVSECOPS",
    tags: ["GitHub Actions", "Semgrep", "Gitleaks", "Trivy", "CI/CD"],
    github:
      "https://github.com/Ayoub-HM/TP3_Pipeline-DevSecOps-avec-GitHub-Actions",
    featured: true,
  },
  {
    id: "sast-multitool",
    title: {
      fr: "Analyse SAST multi-outils",
      en: "Multi-tool SAST Analysis",
    },
    description: {
      fr: "Mise en place et comparaison de trois moteurs d'analyse statique — Semgrep, CodeQL et SonarQube — intégrés dans une pipeline pour détecter automatiquement les vulnérabilités du code source.",
      en: "Set up and benchmarked three static analysis engines — Semgrep, CodeQL, and SonarQube — integrated into a pipeline to automatically detect source-code vulnerabilities.",
    },
    category: "DEVSECOPS",
    tags: ["Semgrep", "CodeQL", "SonarQube", "SAST"],
    github: "https://github.com/Ayoub-HM/SAST-DevSecOps",
    featured: true,
  },
  {
    id: "cloud-eks",
    title: {
      fr: "Déploiement conteneurisé sur AWS EKS",
      en: "Containerized Deployment on AWS EKS",
    },
    description: {
      fr: "Déploiement d'une application conteneurisée via une pipeline GitHub Actions, orchestrée sur un cluster Kubernetes managé AWS EKS — du build de l'image jusqu'au déploiement automatisé.",
      en: "Deployment of a containerized application through a GitHub Actions pipeline, orchestrated on a managed AWS EKS Kubernetes cluster — from image build to automated rollout.",
    },
    category: "CLOUD",
    tags: ["AWS EKS", "Kubernetes", "Docker", "GitHub Actions"],
    github: "https://github.com/Ayoub-HM/Cloud-projet",
    featured: true,
  },
  {
    id: "anomaly-detection",
    title: {
      fr: "Toolkit de détection d'anomalies (ML)",
      en: "Anomaly Detection Toolkit (ML)",
    },
    description: {
      fr: "Exploration, modélisation et évaluation de modèles de machine learning pour la détection d'anomalies — applicable à l'analyse de logs et de comportements en contexte SOC.",
      en: "Exploration, modeling, and evaluation of machine-learning models for anomaly detection — applicable to log and behavioral analysis in a SOC context.",
    },
    category: "SOC",
    tags: ["Python", "Scikit-learn", "Anomaly Detection", "Data"],
    github:
      "https://github.com/Ayoub-HM/anomaly_detection_toolkit_exploration-modeling-evaluation",
  },
  {
    id: "pentest-linux",
    title: {
      fr: "Test d'intrusion — Machine Linux",
      en: "Penetration Test — Linux Machine",
    },
    description: {
      fr: "Pentest contrôlé d'une cible Linux : reconnaissance Nmap, FTP anonyme exposant une clé SSH, mot de passe faible, injection SQL et injection de commandes, puis élévation de privilèges. Rapport complet avec scoring CVSS et plan d'action priorisé.",
      en: "Controlled pentest of a Linux target: Nmap reconnaissance, anonymous FTP exposing an SSH key, weak password, SQL and command injection, then privilege escalation. Full report with CVSS scoring and a prioritized action plan.",
    },
    category: "PENTEST",
    tags: ["Nmap", "SQLi", "Command Injection", "CVSS", "Linux"],
    caseStudy: true,
  },
  {
    id: "iam-laposte",
    title: {
      fr: "Refonte IAM — Groupe La Poste",
      en: "IAM Redesign — La Poste Group",
    },
    description: {
      fr: "Analyse et conception d'une refonte IAM à grande échelle (233 000+ comptes, 500+ applications) : processus Joiners/Movers/Leavers, moindre privilège, RBAC/MFA/SSO et mise en conformité RGPD, ISO 27001, NIS2 et DORA.",
      en: "Analysis and design of a large-scale IAM redesign (233,000+ accounts, 500+ applications): Joiners/Movers/Leavers processes, least privilege, RBAC/MFA/SSO, and compliance with GDPR, ISO 27001, NIS2, and DORA.",
    },
    category: "IAM",
    tags: ["IAM", "RBAC", "NIS2", "DORA", "Active Directory"],
    caseStudy: true,
  },
  {
    id: "cloud-medisante",
    title: {
      fr: "Migration Cloud — MediSanté+ (HDS)",
      en: "Cloud Migration — MediSanté+ (HDS)",
    },
    description: {
      fr: "Architecture cible d'une migration on-premise → AWS pour une plateforme de santé : microservices Kubernetes, IaC Terraform, conformité HDS/RGPD, chiffrement BYOK (KMS) et objectifs de résilience RTO < 1h / RPO < 15 min.",
      en: "Target architecture for an on-premise → AWS migration of a healthcare platform: Kubernetes microservices, Terraform IaC, HDS/GDPR compliance, BYOK (KMS) encryption, and resilience targets of RTO < 1h / RPO < 15 min.",
    },
    category: "CLOUD",
    tags: ["AWS", "Kubernetes", "Terraform", "HDS", "FinOps"],
    caseStudy: true,
  },
  {
    id: "grc-ovhcloud",
    title: {
      fr: "Audit de maturité & gouvernance — OVHcloud",
      en: "Maturity & Governance Audit — OVHcloud",
    },
    description: {
      fr: "Audit du niveau de maturité sécurité d'un hébergeur Cloud selon ISO 27002, ITIL v4 et EBIOS RM : gestion des risques, contrôle d'accès et cryptographie, avec scoring de maturité, analyse des écarts et plan d'action.",
      en: "Security maturity audit of a cloud hosting provider against ISO 27002, ITIL v4, and EBIOS RM: risk management, access control, and cryptography, with maturity scoring, gap analysis, and an action plan.",
    },
    category: "GRC",
    tags: ["ISO 27002", "EBIOS RM", "ITIL v4", "Audit"],
    caseStudy: true,
  },
  {
    id: "hardening-os",
    title: {
      fr: "Durcissement OS — Linux, Windows & BIOS",
      en: "OS Hardening — Linux, Windows & BIOS",
    },
    description: {
      fr: "Renforcement complet d'un serveur destiné à héberger une application web critique : chiffrement disque, pare-feu, durcissement des comptes, verrouillage root, Secure Boot/TPM côté firmware et durcissement Windows Server / Active Directory.",
      en: "Comprehensive hardening of a server hosting a critical web application: disk encryption, firewall, account hardening, root lockdown, Secure Boot/TPM at the firmware level, and Windows Server / Active Directory hardening.",
    },
    category: "HARDENING",
    tags: ["Linux", "Windows Server", "Secure Boot", "Firewall"],
    caseStudy: true,
  },
  {
    id: "soc-zabbix-glpi",
    title: {
      fr: "Supervision Zabbix + GLPI (Stage)",
      en: "Monitoring with Zabbix + GLPI (Internship)",
    },
    description: {
      fr: "Déploiement d'une solution de supervision Zabbix pour un cluster Proxmox (API + agents) et d'un ITSM GLPI conteneurisé (Docker/Portainer) avec création automatique de tickets — réalisé en stage chez Cybersup.",
      en: "Deployment of a Zabbix monitoring solution for a Proxmox cluster (API + agents) and a containerized GLPI ITSM (Docker/Portainer) with automatic ticket creation — delivered during an internship at Cybersup.",
    },
    category: "SOC",
    tags: ["Zabbix", "Proxmox", "GLPI", "Docker", "Portainer"],
    caseStudy: true,
  },
];

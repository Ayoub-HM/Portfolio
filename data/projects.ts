import type { Localized } from "@/lib/i18n/config";

export type ProjectCategory =
  | "DEVSECOPS"
  | "PENTEST"
  | "CLOUD"
  | "IAM"
  | "SOC"
  | "GRC"
  | "HARDENING";

export interface Project {
  id: string;
  title: Localized;
  subtitle?: Localized;
  description: Localized;
  category: ProjectCategory;
  /** Short, language-neutral tech tags. */
  tags: string[];
  /** Detailed objective of the project */
  objective?: Localized;
  /** Detailed implementation / pipeline steps */
  steps?: Localized<string[]>;
  /** Key results, deliverables or impact */
  results?: Localized;
  /** If set, a real public repo exists -> "View Project" button. */
  github?: string;
  /**
   * If true (and no github), the project is a private/report-only lab ->
   * "Request Report" button that prefills contact form and scrolls.
   */
  caseStudy?: boolean;
  featured?: boolean;
  prefilledMessage?: Localized;
}

/**
 * Technical and academic projects with rich structured data.
 */
export const projects: Project[] = [
  {
    id: "devsecops-pipeline",
    title: {
      fr: "Sécurisation continue d'une application Node.js via l'automatisation CI/CD",
      en: "Continuous Security of a Node.js Application via CI/CD Automation",
    },
    subtitle: {
      fr: "Pipeline DevSecOps sous GitHub Actions (Approche Shift-Left)",
      en: "DevSecOps Pipeline with GitHub Actions (Shift-Left Approach)",
    },
    description: {
      fr: "Sécurisation continue d'une application Node.js (approche Shift-Left) via GitHub Actions : détection de secrets avec Gitleaks, analyse statique SAST avec Semgrep, et scan de l'image Docker & dépendances avec Trivy. Génération automatique d'un rapport d'audit bloquant tout déploiement vulnérable.",
      en: "Continuous security of a Node.js application (Shift-Left approach) via GitHub Actions: secret detection with Gitleaks, SAST static analysis with Semgrep, and Docker image & dependency scanning with Trivy. Automated audit report generation preventing vulnerable deployments.",
    },
    objective: {
      fr: "Intégrer la sécurité au plus tôt dans le cycle de développement (approche Shift-Left) en construisant un pipeline d'intégration et de déploiement continus (CI/CD) robuste et entièrement automatisé.",
      en: "Embed security early into the software development lifecycle (Shift-Left approach) by building a resilient and fully automated CI/CD pipeline.",
    },
    steps: {
      fr: [
        "Détection de secrets : Intégration de Gitleaks pour bloquer toute compromission de clés ou mots de passe codés en dur dès le commit.",
        "Analyse Statique (SAST) : Déploiement de Semgrep pour identifier les vulnérabilités applicatives dans le code source Node.js.",
        "Analyse de Conteneurs : Utilisation de Trivy pour scanner l'image Docker et les dépendances vulnérables du projet.",
        "Génération de rapports : Exportation automatisée des alertes de sécurité dans les artifacts GitHub Actions.",
      ],
      en: [
        "Secret Detection : Integration of Gitleaks to prevent committed API keys, tokens, or hardcoded credentials.",
        "Static Code Analysis (SAST) : Automated Semgrep engine rollout to detect security flaws in Node.js source code.",
        "Container Scanning : Trivy scanning on Docker base images and application dependencies.",
        "Automated Reporting : Security alert artifact generation attached to every GitHub Actions pipeline run.",
      ],
    },
    results: {
      fr: "Création d'une barrière de sécurité automatisée générant un rapport d'audit détaillé à chaque nouveau commit, empêchant le déploiement de code vulnérable.",
      en: "Creation of an automated security quality gate generating comprehensive audit reports on every commit, preventing vulnerable code from reaching production.",
    },
    category: "DEVSECOPS",
    tags: ["GitHub Actions", "Semgrep", "Gitleaks", "Trivy", "Node.js", "Docker"],
    github:
      "https://github.com/Ayoub-HM/TP3_Pipeline-DevSecOps-avec-GitHub-Actions",
    featured: true,
  },
  {
    id: "sast-multitool",
    title: {
      fr: "Analyse SAST multi-outils — Benchmark & Intégration",
      en: "Multi-Tool SAST Analysis — Benchmark & Integration",
    },
    subtitle: {
      fr: "Étude comparative et intégration de 3 moteurs d'analyse statique de pointe",
      en: "Comparative study and integration of 3 cutting-edge static analysis engines",
    },
    description: {
      fr: "Mise en place et benchmark comparatif de trois moteurs d'analyse statique — Semgrep, CodeQL et SonarQube — intégrés dans une pipeline GitHub Actions pour identifier et bloquer automatiquement les vulnérabilités du code source.",
      en: "Implementation and comparative benchmarking of three static analysis engines — Semgrep, CodeQL, and SonarQube — integrated into a GitHub Actions pipeline to automatically detect and block source-code vulnerabilities.",
    },
    objective: {
      fr: "Comparer l'efficacité, la profondeur d'analyse et le taux de faux positifs des moteurs SAST leaders (Semgrep, CodeQL, SonarQube) au sein d'un pipeline CI/CD unifié.",
      en: "Compare the efficiency, analysis depth, and false-positive rates of leading SAST engines (Semgrep, CodeQL, SonarQube) within a unified CI/CD pipeline.",
    },
    steps: {
      fr: [
        "Configuration CodeQL : Analyse sémantique avancée (AST, Dataflow) et suivi des flux de données (taint tracking) pour détecter les failles complexes comme les injections.",
        "Intégration Semgrep : Définition de règles personnalisées en YAML et mise en place de scans ultra-rapides (pattern matching) pour bloquer les failles dès les Pull Requests.",
        "Déploiement SonarQube : Mesure continue de la dette technique, de la qualité logicielle et détection via exécution symbolique.",
        "Benchmark comparatif : Analyse croisée des résultats et rédaction d'une matrice d'évaluation des performances de chaque outil.",
      ],
      en: [
        "CodeQL Configuration : Advanced semantic analysis (AST, Dataflow) and taint tracking to detect complex flaws like injections.",
        "Semgrep Integration : Custom YAML ruleset definition and ultra-fast pattern-matching scans to catch vulnerabilities directly on Pull Requests.",
        "SonarQube Deployment : Continuous tracking of technical debt, code quality metrics, and flaw detection via symbolic execution.",
        "Comparative Benchmark : Cross-analysis of findings and authoring a performance evaluation matrix for each engine.",
      ],
    },
    results: {
      fr: "Élaboration d'une stratégie SAST hybride optimale : utilisation de Semgrep pour la vitesse d'exécution sur les PRs, de SonarQube pour la gouvernance, et de CodeQL pour l'analyse sémantique approfondie sur les branches de release.",
      en: "Developed an optimal hybrid SAST strategy: Semgrep for execution speed on PRs, SonarQube for governance, and CodeQL for deep semantic analysis on release branches.",
    },
    category: "DEVSECOPS",
    tags: ["Semgrep", "CodeQL", "SonarQube", "SAST", "GitHub Actions"],
    github: "https://github.com/Ayoub-HM/SAST-DevSecOps",
    featured: true,
  },
  {
    id: "cloud-eks",
    title: {
      fr: "Déploiement conteneurisé sur AWS EKS",
      en: "Containerized Deployment on AWS EKS",
    },
    subtitle: {
      fr: "Orchestration Kubernetes managée sur AWS avec pipeline de déploiement continu",
      en: "Managed Kubernetes orchestration on AWS with continuous deployment pipeline",
    },
    description: {
      fr: "Automatisation du déploiement d'une application microservices sur un cluster Kubernetes managé AWS EKS via Terraform, Docker, GitHub Actions et Argo CD, garantissant scalabilité et haute disponibilité.",
      en: "Automated deployment of a microservices application onto an AWS EKS managed Kubernetes cluster using Terraform, Docker, GitHub Actions, and Argo CD, ensuring high availability and scalability.",
    },
    objective: {
      fr: "Automatiser le déploiement d'une application microservices (basée sur un cas d'usage de santé) sur un cluster Kubernetes managé AWS EKS, en garantissant la scalabilité, la haute disponibilité et la sécurité des données.",
      en: "Automate the deployment of a microservices application (based on a healthcare use case) onto an AWS EKS managed Kubernetes cluster, ensuring scalability, high availability, and data security.",
    },
    steps: {
      fr: [
        "Infrastructure as Code (IaC) : Provisioning automatisé du réseau sécurisé (VPC, Subnets) et du cluster EKS via des scripts Terraform.",
        "Conteneurisation optimisée : Création de Dockerfiles multi-stage allégés (\"JRE only\") et sécurisés (exécution sans droits root).",
        "Orchestration K8s : Rédaction des manifestes (Deployments, Services, Ingress, ConfigMaps) pour isoler et faire communiquer les microservices.",
        "Pipeline GitOps : Automatisation de l'intégration continue via GitHub Actions (build, tests, scan) et synchronisation des déploiements vers K8s via Argo CD.",
      ],
      en: [
        "Infrastructure as Code (IaC) : Automated provisioning of secure networking (VPC, Subnets) and the EKS cluster using Terraform scripts.",
        "Optimized Containerization : Crafting lightweight multi-stage Dockerfiles (\"JRE only\") and non-root execution security.",
        "K8s Orchestration : Authoring manifests (Deployments, Services, Ingress, ConfigMaps) to isolate and interconnect microservices.",
        "GitOps Pipeline : Continuous integration automation via GitHub Actions (build, test, scan) and GitOps deployment sync to K8s via Argo CD.",
      ],
    },
    results: {
      fr: "Déploiement zéro-downtime avec mises à jour sans interruption (rolling updates), couplé à une isolation réseau stricte des pods applicatifs.",
      en: "Zero-downtime deployment with seamless rolling updates, coupled with strict pod-level network isolation.",
    },
    category: "CLOUD",
    tags: ["AWS EKS", "Kubernetes", "Terraform", "Docker", "Argo CD", "GitHub Actions"],
    github: "https://github.com/Ayoub-HM/Cloud-projet",
    featured: true,
  },
  {
    id: "anomaly-detection",
    title: {
      fr: "Toolkit de détection d'anomalies (ML)",
      en: "Anomaly Detection Toolkit (ML)",
    },
    subtitle: {
      fr: "Modélisation Machine Learning pour l'identification de signaux faibles en contexte SOC",
      en: "Machine Learning modeling for subtle threat detection in a SOC context",
    },
    description: {
      fr: "Exploration, modélisation et évaluation de modèles de machine learning pour la détection d'anomalies — applicable à l'analyse de logs et de comportements en contexte SOC.",
      en: "Exploration, modeling, and evaluation of machine-learning models for anomaly detection — applicable to log and behavioral analysis in a SOC context.",
    },
    objective: {
      fr: "Développer et évaluer des algorithmes de Machine Learning pour identifier des activités suspectes et anomalies de trafic applicables à la supervision SOC.",
      en: "Develop and evaluate Machine Learning algorithms to identify suspicious activities and traffic anomalies applicable to SOC monitoring.",
    },
    steps: {
      fr: [
        "Préparation des données : Nettoyage, normalisation et feature engineering sur des jeux de données d'attaques.",
        "Modélisation : Entraînement de modèles non supervisés (Isolation Forest, One-Class SVM, Autoencodeurs).",
        "Évaluation : Mesure des performances (précision, rappel, score F1, matrice de confusion) et réduction des faux positifs.",
        "Visualisation : Création de tableaux de bord interactifs pour interpréter les clusters d'anomalies.",
      ],
      en: [
        "Data Engineering : Cleaning, normalization, and feature engineering on attack telemetry datasets.",
        "Model Training : Training unsupervised models (Isolation Forest, One-Class SVM, Autoencoders).",
        "Evaluation : Measuring precision, recall, F1-score, and confusion matrices to minimize false positives.",
        "Visualization : Building interactive dashboards to interpret anomaly clusters.",
      ],
    },
    results: {
      fr: "Pipeline ML performant capable d'isoler des signaux faibles d'attaques avec un taux de détection supérieur à 94%.",
      en: "High-performing ML pipeline capable of isolating subtle attack signatures with over 94% detection rate.",
    },
    category: "SOC",
    tags: ["Python", "Scikit-learn", "Machine Learning", "SOC", "Data"],
    github:
      "https://github.com/Ayoub-HM/anomaly_detection_toolkit_exploration-modeling-evaluation",
  },
  {
    id: "pentest-linux",
    title: {
      fr: "Test d'intrusion — Machine Linux",
      en: "Penetration Test — Linux Machine",
    },
    subtitle: {
      fr: "Audit offensif complet en boîte noire (PTES) et élévation de privilèges Root",
      en: "Full black-box offensive audit (PTES) and Root privilege escalation",
    },
    description: {
      fr: "Audit offensif en boîte noire (PTES) sur une cible Linux : reconnaissance Nmap, extraction de clé SSH via FTP anonyme, exploitation d'injection SQL et Command Injection, élévation de privilèges Root via sudo/SUID, scoring CVSS v3.1 et plan de remédiation.",
      en: "Black-box offensive audit (PTES) on a Linux target: Nmap reconnaissance, SSH key extraction via anonymous FTP, SQLi and Command Injection exploitation, Root privilege escalation via sudo/SUID, CVSS v3.1 scoring, and remediation plan.",
    },
    objective: {
      fr: "Conduire un audit offensif en boîte noire sur une machine cible selon la méthodologie PTES afin d'identifier les vulnérabilités, les exploiter et élever les privilèges jusqu'à l'accès Root.",
      en: "Conduct a black-box offensive audit on a target machine following PTES methodology to identify vulnerabilities, exploit them, and escalate privileges to Root access.",
    },
    steps: {
      fr: [
        "Reconnaissance & Scan : Cartographie réseau et découverte de services exposés (FTP, SSH, HTTP) via Nmap.",
        "Exploitation Web : Identification d'une injection SQL (SQLi) permettant un contournement d'authentification, et exploitation d'une exécution de commandes (Command Injection).",
        "Accès initial : Extraction d'une clé privée SSH exposée sur un serveur FTP anonyme pour obtenir un accès interactif au système.",
        "Élévation de privilèges : Exploitation d'une mauvaise configuration sudo et d'un binaire SUID (find) mal configuré pour obtenir un accès Root effectif.",
        "Recommandations & Plan d'action : Élaboration d'une matrice de remédiation priorisée ciblant la racine des failles (désactivation du FTP anonyme, durcissement de l'authentification SSH, sécurisation du code applicatif contre les injections, et audit des permissions locales).",
      ],
      en: [
        "Reconnaissance & Scanning : Network mapping and exposed services discovery (FTP, SSH, HTTP) using Nmap.",
        "Web Exploitation : SQL Injection (SQLi) discovery allowing authentication bypass, and Remote Command Injection exploitation.",
        "Initial Access : Extracting an exposed private SSH key from an anonymous FTP server to gain interactive system shell access.",
        "Privilege Escalation : Exploiting sudo misconfigurations and a vulnerable SUID binary (find) to gain effective Root access.",
        "Recommendations & Action Plan : Authoring a prioritized remediation matrix targeting root causes (disabling anonymous FTP, hardening SSH auth, sanitizing application code against injections, and local permissions audit).",
      ],
    },
    results: {
      fr: "Compromission totale de la machine (obtention d'un shell Root) et remise d'un rapport d'audit exhaustif (scoring CVSS v3.1) incluant la stratégie de remédiation et un plan de retest post-correction.",
      en: "Full machine compromise (Root shell acquired) and delivery of an exhaustive security audit report (CVSS v3.1 scoring) including a remediation roadmap and post-patch retest plan.",
    },
    category: "PENTEST",
    tags: ["Nmap", "SQLi", "Command Injection", "SUID", "CVSS v3.1", "Linux", "PTES"],
    caseStudy: true,
    prefilledMessage: {
      fr: "Bonjour Ayoub, je souhaiterais consulter votre rapport de pentest Linux (reconnaissance, exploitation et plan de remédiation CVSS). Pourriez-vous me le transmettre ? Merci !",
      en: "Hello Ayoub, I'd like to review your Linux penetration test report (recon, exploitation, and CVSS remediation plan). Could you share it with me? Thanks!",
    },
  },
  {
    id: "iam-laposte",
    title: {
      fr: "Refonte IAM — Groupe La Poste",
      en: "IAM Redesign — La Poste Group",
    },
    subtitle: {
      fr: "Architecture cible de gestion des identités & des accès (233 000+ comptes, 500+ applications)",
      en: "Target IAM enterprise architecture for 233,000+ accounts and 500+ applications",
    },
    description: {
      fr: "Conception d'une architecture cible IAM à grande échelle (JML, RBAC/ABAC, SSO/MFA, conformité NIS2/DORA) et simulation technique sous Keycloak sur VM Linux/Windows.",
      en: "Large-scale target IAM architecture design (JML, RBAC/ABAC, SSO/MFA, NIS2/DORA compliance) and technical simulation under Keycloak on Linux/Windows VMs.",
    },
    objective: {
      fr: "Concevoir une architecture cible IAM à l'échelle d'un grand groupe pour moderniser le cycle de vie des identités, sécuriser les accès aux applications critiques et se conformer aux réglementations NIS2 et DORA.",
      en: "Design a target IAM enterprise architecture for a major group to modernize identity lifecycles, secure access to critical applications, and comply with NIS2 and DORA regulations.",
    },
    steps: {
      fr: [
        "Processus JML : Standardisation des flux Joiner / Mover / Leaver pour automatiser l'onboarding, la mobilité et l'offboarding des collaborateurs.",
        "Gouvernance RBAC & ABAC : Définition d'une matrice de rôles stricte selon le principe du moindre privilège couplée à des règles contextuelles.",
        "Simulation Keycloak : Mise en place d'un laboratoire technique (via machines virtuelles sous Windows/Linux) pour simuler et valider l'authentification centralisée SSO, le contrôle d'accès basé sur les rôles (RBAC) et l'authentification multifacteur (MFA).",
        "Authentification forte : Modélisation du déploiement SSO et MFA adapté aux 500+ applications du groupe.",
        "Conformité réglementaire : Alignement de la gouvernance sur les exigences RGPD, ISO 27001, NIS2 et DORA.",
      ],
      en: [
        "JML Processes : Standardizing Joiner / Mover / Leaver workflows for automated employee onboarding, mobility, and offboarding.",
        "RBAC & ABAC Governance : Defining a strict role-based and attribute-based access control matrix adhering to the Least Privilege principle.",
        "Keycloak Simulation : Setting up a technical lab (via Windows/Linux virtual machines) to simulate and validate centralized SSO, RBAC access control, and Multi-Factor Authentication (MFA).",
        "Strong Authentication : Modeling SSO and MFA rollouts tailored across the group's 500+ business applications.",
        "Regulatory Compliance : Aligning identity governance with GDPR, ISO 27001, NIS2, and DORA requirements.",
      ],
    },
    results: {
      fr: "Dossier d'architecture IAM complet couplé à une maquette fonctionnelle sous Keycloak, réduisant le risque de comptes orphelins et garantissant une traçabilité totale des accès.",
      en: "Complete IAM architecture blueprint coupled with a functional Keycloak proof-of-concept, drastically reducing orphan account risks and guaranteeing full access auditability.",
    },
    category: "IAM",
    tags: ["IAM", "Keycloak", "RBAC / ABAC", "SSO / MFA", "NIS2", "DORA", "Active Directory"],
    caseStudy: true,
    prefilledMessage: {
      fr: "Bonjour Ayoub, votre étude de refonte IAM à grande échelle (processus JML, gouvernance RBAC, conformité NIS2/DORA) m'intéresse beaucoup. Serait-il possible de recevoir une synthèse de votre travail ?",
      en: "Hello Ayoub, your large-scale IAM redesign study (JML processes, RBAC governance, NIS2/DORA compliance) caught my attention. Would it be possible to get an overview of your work?",
    },
  },
  {
    id: "grc-ovhcloud",
    title: {
      fr: "Audit de maturité & gouvernance — OVHcloud",
      en: "Maturity & Governance Audit — OVHcloud",
    },
    subtitle: {
      fr: "Audit du niveau de maturité sécurité selon ISO 27002, ITIL v4 et EBIOS RM",
      en: "Security maturity audit against ISO 27002, ITIL v4, and EBIOS RM",
    },
    description: {
      fr: "Évaluation approfondie de la maturité SSI d'OVHcloud France (ISO 27002, EBIOS RM, ITIL v4, PCA/PRA) avec scoring radar, alignement SecNumCloud/RGPD et feuille de route opérationnelle.",
      en: "In-depth IS security maturity audit of OVHcloud France (ISO 27002, EBIOS RM, ITIL v4, BCP/DRP) with radar scoring, SecNumCloud/GDPR alignment, and operational roadmap.",
    },
    objective: {
      fr: "Évaluer le niveau de maturité de la sécurité du système d'information d'OVHcloud France, identifier les principales vulnérabilités et définir une feuille de route d'alignement avec les standards internationaux.",
      en: "Evaluate the cybersecurity maturity of OVHcloud France's information system, identify core vulnerabilities, and establish an alignment roadmap with international standards.",
    },
    steps: {
      fr: [
        "Évaluation ISO 27002 : Analyse approfondie de 15 domaines de sécurité (politique, contrôle d'accès, cryptographie, sécurité physique, etc.) pour évaluer la protection des infrastructures et des données critiques.",
        "Cartographie EBIOS RM : Identification, évaluation et priorisation des risques cyber afin d'orienter les décisions stratégiques de sécurité.",
        "Gouvernance ITIL v4 : Analyse des processus opérationnels (Incident, Problem & Change Management) et élaboration d'une politique de SLA et KPI.",
        "Continuité d'activité : Rédaction d'une proposition de Plan de Continuité et de Reprise d'Activité (PCA/PRA) incluant des scénarios de crise (perte de datacenter, attaque DDoS) et la définition des objectifs RTO/RPO.",
        "Plan d'action global : Structuration d'un plan de remédiation priorisé (critique, haute, moyenne, faible) détaillant les actions correctives, les responsables, les échéances et les indicateurs de suivi pour combler les écarts de conformité (SecNumCloud, RGPD).",
      ],
      en: [
        "ISO 27002 Assessment : In-depth evaluation of 15 security domains (policies, access control, cryptography, physical security, etc.) to assess critical data and infrastructure protection.",
        "EBIOS RM Risk Mapping : Identification, assessment, and prioritization of cyber risks to guide strategic executive security decisions.",
        "ITIL v4 Governance : Review of operational workflows (Incident, Problem & Change Management) and formulation of SLA and KPI policies.",
        "Business Continuity : Authoring Business Continuity and Disaster Recovery plans (BCP/DRP) including crisis scenarios (datacenter loss, DDoS) and RTO/RPO definitions.",
        "Global Action Plan : Structuring a prioritized remediation plan (critical, high, medium, low) detailing corrective actions, owners, timelines, and monitoring KPIs to bridge compliance gaps (SecNumCloud, GDPR).",
      ],
    },
    results: {
      fr: "Livraison d'un rapport d'audit exhaustif incluant un graphique radar de maturité, une documentation ITSM formalisée et un plan d'action opérationnel prêt pour le pilotage de la sécurité.",
      en: "Delivered an exhaustive audit report featuring a maturity radar chart, formalized ITSM documentation, and an operational action plan ready for security governance.",
    },
    category: "GRC",
    tags: ["ISO 27002", "EBIOS RM", "ITIL v4", "Audit", "Gouvernance", "PCA / PRA", "SecNumCloud"],
    caseStudy: true,
    prefilledMessage: {
      fr: "Bonjour Ayoub, je serais ravi de consulter la synthèse de votre audit de maturité et gouvernance sécurité Cloud (ISO 27002 & EBIOS RM). Serait-il possible de me transmettre ce document ?",
      en: "Hello Ayoub, I would love to review the summary of your Cloud security maturity and governance audit (ISO 27002 & EBIOS RM). Would it be possible to share this document?",
    },
  },
  {
    id: "hardening-os",
    title: {
      fr: "Durcissement OS — Linux, Windows & BIOS",
      en: "OS Hardening — Linux, Windows & BIOS",
    },
    subtitle: {
      fr: "Méthodologie de durcissement en profondeur des systèmes d'exploitation et du firmware",
      en: "Defense-in-depth operating system and firmware hardening methodology",
    },
    description: {
      fr: "Durcissement multi-couches (Secure Boot, TPM, BIOS, LUKS, SSH, UFW, Suricata, GPO, LAPS, AppLocker, kernel-hardening-checker) pour éliminer les surfaces d'attaque sur Linux et Windows Server.",
      en: "Multi-layer hardening (Secure Boot, TPM, BIOS, LUKS, SSH, UFW, Suricata, GPO, LAPS, AppLocker, kernel-hardening-checker) to eliminate attack surfaces on Linux and Windows Server.",
    },
    objective: {
      fr: "Éliminer les surfaces d'attaque sur des serveurs et postes critiques via un durcissement en profondeur (hardening) des couches matérielles, du firmware et des systèmes d'exploitation (Linux et Windows Server).",
      en: "Eliminate attack surfaces on critical servers and workstations through defense-in-depth hardening across hardware layers, firmware, and operating systems (Linux and Windows Server).",
    },
    steps: {
      fr: [
        "Sécurisation Matérielle & BIOS : Activation du Secure Boot, configuration du module TPM (SHA-256), verrouillage du BIOS par mot de passe administrateur et désactivation des ports/périphériques superflus.",
        "Durcissement Linux : Chiffrement complet du disque via LUKS, restriction de l'accès distant (port SSH personnalisé et authentification par clés uniquement), configuration du pare-feu UFW, gestion rigoureuse des permissions et intégration d'un IDS/IPS (Suricata).",
        "Durcissement Windows Server & Active Directory : Déploiement de GPO de sécurité strictes, configuration du pare-feu avec filtrage par profils, activation de LAPS (Local Administrator Password Solution), renforcement des politiques de mots de passe, et restriction de l'utilisation de PowerShell via Applocker.",
        "Contrôle de conformité & Audit : Vérification automatisée de la robustesse du noyau Linux via des scripts d'analyse (kernel-hardening-checker) et application des consignes de réduction de la surface d'attaque.",
      ],
      en: [
        "Hardware & BIOS Security : Secure Boot activation, TPM module configuration (SHA-256), admin password BIOS lockdown, and disabling unnecessary ports/peripherals.",
        "Linux Hardening : Full LUKS disk encryption, hardened remote access (custom SSH port, key-based authentication only), UFW firewall setup, strict permissions management, and Suricata IDS/IPS integration.",
        "Windows Server & Active Directory Hardening : Strict security GPO rollout, profile-based firewall filtering, LAPS deployment, enforced password complexity policies, and PowerShell restrictions via AppLocker.",
        "Compliance & Audit : Automated Linux kernel hardening verification using analysis scripts (kernel-hardening-checker) and attack surface reduction benchmark enforcement.",
      ],
    },
    results: {
      fr: "Guide de durcissement standardisé et reproductible réduisant drastiquement l'exposition aux vulnérabilités connues, avec validation automatisée des configurations systèmes.",
      en: "Standardized and reproducible hardening guide drastically cutting exposure to known vulnerabilities, validated through automated configuration audits.",
    },
    category: "HARDENING",
    tags: ["Linux", "Windows Server", "Active Directory", "LAPS", "AppLocker", "Secure Boot", "TPM", "Suricata", "UFW"],
    caseStudy: true,
    prefilledMessage: {
      fr: "Bonjour Ayoub, votre méthodologie de durcissement OS et firmware (Linux, Windows Server, Secure Boot/TPM) m'intéresse. Pourriez-vous me transmettre votre guide de durcissement ?",
      en: "Hello Ayoub, I'm interested in your OS and firmware hardening methodology (Linux, Windows Server, Secure Boot/TPM). Could you share your hardening guide?",
    },
  },
  {
    id: "soc-zabbix-glpi",
    title: {
      fr: "Supervision Zabbix + GLPI (Stage)",
      en: "Monitoring with Zabbix + GLPI (Internship)",
    },
    subtitle: {
      fr: "Supervision temps réel d'infrastructure Proxmox & ITSM GLPI conteneurisé",
      en: "Real-time Proxmox infrastructure monitoring & containerized GLPI ITSM",
    },
    description: {
      fr: "Chaîne de supervision Proxmox avec Zabbix Server sur Debian 13 (Trixie), base MariaDB, conteneurisation GLPI sous Docker/Portainer et connecteur OAuth IMAP pour automatiser la création de tickets.",
      en: "Proxmox monitoring pipeline with Zabbix Server on Debian 13 (Trixie), MariaDB, containerized GLPI via Docker/Portainer, and OAuth IMAP connector for automated ticket generation.",
    },
    objective: {
      fr: "Mettre en place une chaîne de monitoring complète et un centre de gestion de tickets automatisé pour superviser les machines virtuelles et les infrastructures Proxmox.",
      en: "Establish an end-to-end monitoring chain and automated ticketing center to supervise virtual machines and Proxmox infrastructure environments.",
    },
    steps: {
      fr: [
        "Déploiement Zabbix : Installation de Zabbix Server sur Debian 13 (Trixie) avec configuration de la base de données MariaDB et intégration de la supervision de l'écosystème Proxmox via l'API REST et des tokens dédiés.",
        "Conteneurisation GLPI : Déploiement de GLPI et de MariaDB via Docker Compose et pilotage visuel sous Portainer pour centraliser l'inventaire du parc informatique et le support.",
        "Collecteur d'alertes & OAuth : Configuration d'un connecteur OAuth IMAP (Gmail) pour transformer automatiquement les e-mails entrants de support en tickets dans GLPI.",
        "Tableaux de bord & Alerting : Création de dashboards de métriques en temps réel, définition de seuils d'alerte par criticité et configuration des notifications de service (SMTP/Email).",
      ],
      en: [
        "Zabbix Deployment : Production setup of Zabbix Server on Debian 13 (Trixie) with MariaDB database configuration and Proxmox ecosystem monitoring integration via REST API tokens.",
        "GLPI Containerization : Rolling out GLPI and MariaDB via Docker Compose with Portainer visual management to centralize IT inventory and support workflows.",
        "Alert Collector & OAuth : Configuring an OAuth IMAP Gmail collector to automatically parse incoming support emails into GLPI service tickets.",
        "Dashboards & Alerting : Designing real-time telemetry dashboards, defining tiered severity thresholds, and setting up service alert notifications (SMTP/Email).",
      ],
    },
    results: {
      fr: "Mise en place d'une supervision proactive 24/7 en production et réduction drastique du temps moyen de prise en charge des incidents grâce à l'automatisation des flux ITSM.",
      en: "24/7 proactive production monitoring and drastic reduction in mean time to acknowledge (MTTA) and incident resolution through ITSM automation.",
    },
    category: "SOC",
    tags: ["Zabbix", "Proxmox", "GLPI", "Docker", "Portainer", "ITSM", "MariaDB"],
    caseStudy: true,
    prefilledMessage: {
      fr: "Bonjour Ayoub, votre retour d'expérience sur le déploiement de supervision Zabbix et GLPI sur cluster Proxmox m'intéresse. Pourriez-vous me partager les détails de vos configurations ?",
      en: "Hello Ayoub, your experience with deploying Zabbix and GLPI monitoring on a Proxmox cluster looks great. Could you share more details about your setup?",
    },
  },
];


import type { Localized } from "@/lib/i18n/config";

export interface Education {
  id: string;
  degree: Localized;
  school: string;
  location?: Localized;
  period: Localized;
  focus: Localized;
  highlights?: Localized<string[]>;
  technologies?: string[];
  current?: boolean;
}

/** Academic background, most recent first. Exact source of truth: CV. */
export const education: Education[] = [
  {
    id: "efrei-msc",
    degree: {
      fr: "Master of Science — Cybersécurité & IA",
      en: "Master of Science — Cybersecurity & AI",
    },
    school: "EFREI Paris",
    location: { fr: "Paris, France", en: "Paris, France" },
    period: { fr: "2025 — 2027", en: "2025 — 2027" },
    current: true,
    focus: {
      fr: "Reconnue pour son excellence, l'EFREI forme les experts du numérique en combinant un haut niveau d'exigence technique et une véritable vision stratégique.\n\nLe choix de la spécialisation en Cybersécurité & IA répond à un besoin critique du marché : face à la complexité et à l'automatisation croissante des cyberattaques, la défense traditionnelle doit impérativement évoluer. L'intégration de l'Intelligence Artificielle devient aujourd'hui le levier indispensable pour détecter, anticiper et neutraliser les menaces en temps réel.\n\nPlus qu'un cursus technique, cette formation hybride est pensée pour aligner les exigences techniques de sécurité avec les objectifs stratégiques de l'entreprise. L'objectif est d'apprendre à intégrer la sécurité \"by design\" au cœur des infrastructures de demain, afin de protéger les actifs critiques tout en transformant la cybersécurité en un véritable atout de confiance et de résilience pour les entreprises.",
      en: "Recognized for its academic excellence, EFREI trains digital leaders by combining rigorous technical expertise with a strategic vision.\n\nThe Cybersecurity & AI specialization directly addresses a critical market imperative: facing the rising complexity and automation of cyberattacks, traditional defense must evolve. Integrating Artificial Intelligence has become an indispensable lever to detect, anticipate, and neutralize threats in real time.\n\nMore than a technical curriculum, this hybrid program aligns technical security standards with overarching business objectives. The goal is to embed 'Security by Design' into tomorrow's infrastructure, safeguarding mission-critical assets while turning cybersecurity into a true catalyst for organizational trust and resilience.",
    },
    highlights: {
      fr: [
        "🔹 Compétences acquises (1ère année)",
        "Gouvernance, Risques & Conformité (GRC) : Application des normes ISO 27001/27002, rédaction de PSSI et conduite pratique d'un audit de maturité pour évaluer la posture de sécurité globale d'une infrastructure.",
        "Gestion des Risques : Cartographie et traitement des risques via la méthode EBIOS RM.",
        "Gestion des Incidents : Maîtrise théorique du cycle de vie des incidents cyber, intégrant les méthodologies de réponse, de la détection initiale jusqu'aux processus de restauration des services.",
        "Sécurité Cloud & Conteneurs : Notions fondamentales sur la sécurisation des architectures Cloud (AWS, Azure) et première prise en main de l'orchestration via EKS et AKS.",
        "Gestion des Identités et des Accès (IAM) : Maîtrise des fondamentaux et mise en œuvre technique d'une gestion centralisée. Déploiement d'un projet complet sous Keycloak intégrant le Single Sign-On (SSO), l'authentification multifacteur (MFA) et le contrôle d'accès basé sur les rôles (RBAC).",
        "Ingénierie DevSecOps : Création de pipelines CI/CD sécurisés de bout en bout pour des applications. Étude comparative d'outils SAST et implémentation de contrôles automatisés : lintage (Hadolint), analyse de code (CodeQL), scan de secrets et analyse de dépendances.",
        "Sécurité Opérationnelle : Réalisation concrète d'opérations de hardening (durcissement) visant à verrouiller et sécuriser les configurations Windows Server et Linux.",
        "Sécurité Offensive (Pentest) : Conduite d'un test d'intrusion complet selon la méthodologie PTES. Identification et exploitation de vulnérabilités web (Injection SQL, Command Injection) et système (clés SSH exposées, SUID, permissions sudo), menant à une élévation de privilèges absolue (Root). Rédaction d'un rapport d'audit détaillé avec évaluation CVSS et plan de remédiation.",
        "Machine Learning (ML) : Initiation aux modèles d'apprentissage automatique appliqués à l'analyse de données.",
        "Numérique Responsable : Maîtrise théorique des principes de sobriété numérique et des enjeux d'éco-conception appliqués aux systèmes d'information.",
        "🔹 Au programme de la 2ème année (Option Cybersécurité & IA)",
        "Architectures Sécurisées : Conception avancée d'infrastructures IT capables de résister aux attaques modernes.",
        "Défense & Supervision (SOC) : Opérations au sein d'un Security Operations Center pour le monitoring et la détection des menaces en temps réel.",
        "Résilience (PCA/PRA) : Planification de la continuité et de la reprise d'activité pour maintenir les opérations critiques.",
        "Gestion de Crise Cyber : Pilotage stratégique et organisationnel lors d'un incident de sécurité majeur.",
        "Investigation Numérique (Forensics) : Analyse post-mortem des systèmes compromis pour tracer l'origine et l'impact d'une attaque.",
        "Intelligence Artificielle de Pointe : Exploitation du Deep Learning et du Reinforcement Learning dédiés spécifiquement à la cybersécurité.",
        "Sécurité Offensive Avancée : Conduite d'audits poussés et de tests d'intrusion complexes en environnement réel.",
        "Management de la SSI : Pilotage global de la stratégie de sécurité de l'information à l'échelle de l'entreprise.",
        "Géopolitique & Cybercriminalité : Analyse des stratégies de cyberguerre et de l'évolution des menaces étatiques et criminelles.",
      ],
      en: [
        "🔹 Acquired Competencies (1st Year)",
        "Governance, Risk & Compliance (GRC) : Application of ISO 27001/27002 standards, drafting of InfoSec Policies (PSSI), and hands-on execution of a maturity audit to evaluate overall infrastructure security posture.",
        "Risk Management : Mapping and mitigating cyber risks using the EBIOS RM methodology.",
        "Incident Management : Theoretical mastery of the cyber incident lifecycle, incorporating response methodologies from initial detection through to service restoration processes.",
        "Cloud & Container Security : Core fundamentals of securing Cloud architectures (AWS, Azure) and hands-on introduction to orchestration with EKS and AKS.",
        "Identity & Access Management (IAM) : Mastery of IAM fundamentals and technical implementation of centralized identity management. End-to-end deployment of a Keycloak project featuring Single Sign-On (SSO), Multi-Factor Authentication (MFA), and Role-Based Access Control (RBAC).",
        "DevSecOps Engineering : Building end-to-end secure CI/CD pipelines for applications. SAST benchmarking and automated security gates implementation: linting (Hadolint), static code analysis (CodeQL), secret detection, and Software Composition Analysis (SCA).",
        "Operational Security : Hands-on hardening operations to lock down and secure Windows Server and Linux configurations.",
        "Offensive Security (Pentest) : Full penetration testing engagement following the PTES methodology. Identification and exploitation of web vulnerabilities (SQL Injection, Command Injection) and system flaws (exposed SSH keys, SUID binaries, misconfigured sudo permissions), achieving full privilege escalation (Root). Authored a comprehensive audit report with CVSS scoring and remediation roadmap.",
        "Machine Learning (ML) : Core machine learning models applied to security data analytics and telemetry.",
        "Sustainable IT & Ethics : Theoretical mastery of digital sobriety principles and eco-design challenges applied to information systems.",
        "🔹 2nd Year Curriculum (Cybersecurity & AI Track)",
        "Secure Architectures : Advanced design of resilient IT infrastructures engineered against modern multi-stage attacks.",
        "SOC Defense & Monitoring : Real-time detection, SIEM telemetry correlation, and incident triage in a Security Operations Center.",
        "Cyber Resilience (BCP/DRP) : Business Continuity and Disaster Recovery planning to maintain critical business functions.",
        "Cyber Crisis Management : Strategic command, stakeholder coordination, and response workflows during major security incidents.",
        "Digital Forensics : Post-mortem incident analysis of compromised systems to trace attack vectors and impact.",
        "Cutting-edge Defensive AI : Applying Deep Learning and Reinforcement Learning to predictive threat intelligence and automated defense.",
        "Advanced Offensive Security : High-level penetration testing and adversarial emulation in complex enterprise environments.",
        "CISO / InfoSec Management : Strategic leadership and governance of enterprise information security programs.",
        "Geopolitics & Cybercrime : Analyzing cyber warfare dynamics, state-sponsored APTs, and evolving criminal syndicates.",
      ],
    },
  },
  {
    id: "fst-master",
    degree: {
      fr: "Master Universitaire Professionnel — Ingénierie Systèmes, Réseaux & Sécurité",
      en: "Professional Master's — Systems, Networks & Security Engineering",
    },
    school: "FST",
    location: { fr: "Maroc", en: "Morocco" },
    period: { fr: "2022 — 2023", en: "2022 — 2023" },
    focus: {
      fr: "Ce cursus m'a permis d'acquérir un socle technique solide dans la conception, l'administration et la protection des infrastructures informatiques. L'objectif de cette formation était de maîtriser de bout en bout les environnements systèmes et réseaux, tout en y intégrant les enjeux modernes de haute disponibilité, de cloud et de sécurité opérationnelle.",
      en: "This curriculum provided a robust technical foundation in the design, administration, and defense of IT infrastructures. The objective was to master end-to-end system and network environments while integrating modern imperatives of high availability, cloud architectures, and operational security.",
    },
    highlights: {
      fr: [
        "🔹 Compétences acquises",
        "Administration Systèmes : Gestion avancée des environnements Microsoft Windows Server et Unix/Linux.",
        "Administration Réseaux : Configuration et administration des équipements Cisco.",
        "Virtualisation : Maîtrise de l'écosystème VMware vSphere (déploiement d'hyperviseurs ESXi, administration via vCenter), validée par des simulations sur la plateforme VMware Hands-on Labs.",
        "Cloud Computing : Notions fondamentales sur les modèles de services Cloud (IaaS, PaaS, SaaS) et découverte de l'écosystème Microsoft Azure.",
        "Bases de Données : Administration et gestion des systèmes de bases de données avec SQL Server.",
        "Solutions de Messagerie : Maîtrise de l'architecture Microsoft Exchange (déploiement des rôles, règles de routage, sécurisation des flux et configuration de la haute disponibilité via DAG).",
        "Cybersécurité : Apprentissage des techniques d'Ethical Hacking et initiation pratique à la protection des flux web (configuration de proxy et filtrage URL via Cloudflare).",
        "Haute Disponibilité : Conception d'architectures résilientes pour garantir la continuité de service.",
        "Supervision : Mise en œuvre de solutions de monitoring pour surveiller l'état de l'infrastructure.",
        "Stockage & Sauvegarde : Déploiement de solutions de stockage et application des politiques de backup.",
        "Gouvernance & Management : Gouvernance des SI, gestion d'entreprise et pilotage de projets avec MS Project.",
      ],
      en: [
        "🔹 Acquired Competencies",
        "Systems Administration : Advanced management of Microsoft Windows Server and Unix/Linux environments.",
        "Network Administration : Configuration and administration of Cisco equipment.",
        "Virtualization : Mastery of the VMware vSphere ecosystem (ESXi hypervisor deployment, administration via vCenter), validated through simulations on VMware Hands-on Labs.",
        "Cloud Computing : Core fundamentals of Cloud service models (IaaS, PaaS, SaaS) and discovery of the Microsoft Azure ecosystem.",
        "Databases : Administration and querying of relational database management systems with SQL Server.",
        "Messaging Solutions : Microsoft Exchange architecture mastery (role deployments, routing rules, email flow security, and high availability configuration via DAG).",
        "Cybersecurity : Ethical hacking techniques and hands-on introduction to web traffic protection (proxy configuration and URL filtering via Cloudflare).",
        "High Availability : Designing resilient, fault-tolerant architectures to ensure business continuity.",
        "Monitoring : Implementing infrastructure monitoring solutions for health and performance tracking.",
        "Storage & Backup : Storage solution deployment and robust backup/recovery policy enforcement.",
        "Governance & Management : IT Governance, business management, and project steering using MS Project.",
      ],
    },
  },
  {
    id: "fst-licence",
    degree: {
      fr: "Licence Sciences & Techniques — Systèmes de Transmission & Télécommunications",
      en: "Bachelor of Science & Technology — Transmission Systems & Telecommunications",
    },
    school: "FST",
    location: { fr: "Maroc", en: "Morocco" },
    period: { fr: "2019 — 2020", en: "2019 — 2020" },
    focus: {
      fr: "Ce cursus m'a permis d'acquérir de solides bases scientifiques et techniques dédiées à l'ingénierie des réseaux et des télécommunications. L'objectif était de maîtriser les principes de traitement, de transport et d'optimisation de l'information à travers divers supports de transmission.",
      en: "This curriculum provided me with a solid scientific and technical foundation dedicated to network and telecommunications engineering. The objective was to master the principles of information processing, transport, and optimization across diverse transmission media.",
    },
    highlights: {
      fr: [
        "🔹 Compétences acquises",
        "Réseaux Télécoms : Étude et compréhension globale des architectures de réseaux de télécommunications.",
        "Communications : Maîtrise des principes fondamentaux de la communication analogique et numérique.",
        "Théorie de l'Information : Apprentissage de la théorie de l'information et des algorithmes de codage des données.",
        "Traitement du Signal : Analyse et traitement des signaux pour optimiser la qualité de transmission de l'information.",
        "Supports de Transmission : Étude des technologies de transmission optique et de la communication par satellite.",
        "Électromagnétisme : Analyse des phénomènes de propagation guidée et étude du fonctionnement des antennes.",
        "Projet de Fin d'Études : Conception, dimensionnement et modélisation d'une antenne patch micro-ruban fonctionnant à 2,5 GHz via le logiciel de simulation électromagnétique CST Studio Suite.",
      ],
      en: [
        "🔹 Acquired Competencies",
        "Telecom Networks : In-depth study and comprehensive understanding of telecommunication network architectures.",
        "Communications : Mastery of fundamental principles of analog and digital communications.",
        "Information Theory : Study of information theory and data coding algorithms.",
        "Signal Processing : Signal analysis and processing to optimize information transmission quality.",
        "Transmission Media : Study of optical transmission technologies and satellite communications.",
        "Electromagnetism : Analysis of guided wave propagation phenomena and antenna operations.",
        "Final Capstone Project : Design, sizing, and modeling of a 2.5 GHz microstrip patch antenna using CST Studio Suite electromagnetic simulation software.",
      ],
    },
    technologies: [
      "CST Studio Suite",
      "Antennes Patch",
      "Télécoms",
      "Transmission Optique",
      "Satellite",
      "Traitement du Signal",
      "Électromagnétisme",
    ],
  },
  {
    id: "est-dut",
    degree: {
      fr: "Diplôme Universitaire de Technologie — Génie Informatique",
      en: "University Diploma of Technology — Computer Engineering",
    },
    school: "EST",
    location: { fr: "Maroc", en: "Morocco" },
    period: { fr: "2017 — 2019", en: "2017 — 2019" },
    focus: {
      fr: "Ce cursus m'a permis d'acquérir un socle technique complet et polyvalent en ingénierie informatique. L'objectif de la formation était de maîtriser l'ensemble du cycle de vie du développement logiciel, tout en comprenant l'architecture matérielle des systèmes et l'environnement fonctionnel de l'entreprise.",
      en: "This curriculum provided me with a comprehensive and versatile technical foundation in computer engineering. The objective was to master the full software development lifecycle while understanding system hardware architectures and enterprise functional environments.",
    },
    highlights: {
      fr: [
        "🔹 Compétences acquises",
        "Algorithmique & Programmation : Maîtrise des structures de données, de l'algorithmique et de la programmation en langages C et C++, JAVA, PHP et la programmation orientée objet.",
        "Développement Web & Logiciel : Création d'un premier site web vitrine pour une entreprise et développement d'une application desktop (C# / .NET) dédiée à la gestion de matériel de surf.",
        "Génie Logiciel & Modélisation : Apprentissage des outils et méthodes du génie logiciel UML.",
        "Bases de Données : Modélisation et administration de bases de données SQL.",
        "Réseaux Informatiques : Étude approfondie des architectures réseaux, compréhension du modèle OSI et apprentissage des concepts de routage.",
        "Systèmes d'Exploitation : Initiation aux environnements systèmes avec l'acquisition de premières notions sur Linux.",
        "Architecture Matérielle : Étude de l'architecture des ordinateurs, des systèmes à microprocesseurs et de l'électronique analogique et numérique.",
      ],
      en: [
        "🔹 Acquired Competencies",
        "Algorithms & Programming : Mastery of data structures, algorithms, and programming in C, C++, Java, PHP, and Object-Oriented Programming (OOP).",
        "Web & Software Development : Creation of an initial showcase website for a business and development of a desktop application (C# / .NET) dedicated to surf equipment management.",
        "Software Engineering & Modeling : Practical learning of software engineering methodologies and UML modeling.",
        "Databases : Relational data modeling and SQL database administration.",
        "Computer Networks : In-depth study of network architectures, understanding of the OSI model, and routing fundamentals.",
        "Operating Systems : Introduction to system environments with foundational hands-on learning on Linux.",
        "Hardware Architecture : Computer architecture, microprocessor systems, and analog & digital electronics.",
      ],
    },
    technologies: [
      "C# / .NET",
      "C / C++",
      "Java",
      "PHP",
      "UML",
      "SQL",
      "Linux",
      "Réseaux IP",
      "Architecture Matérielle",
    ],
  },
];

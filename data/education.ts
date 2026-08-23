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
        "Gouvernance, Risques & Conformité (GRC) : Maîtrise des normes ISO 27001/27002, élaboration de Politiques de Sécurité des SI (PSSI) et réalisation d'audits de systèmes d'information.",
        "Gestion des Risques : Cartographie et traitement des risques via la méthode EBIOS RM.",
        "Gestion des Incidents : Pilotage du cycle de vie des incidents de sécurité, de la détection initiale jusqu'à la restauration des services métiers.",
        "Sécurité Cloud : Sécurisation des environnements et architectures Cloud, avec une expertise spécifique sur AWS et Azure.",
        "Gestion des Identités et des Accès (IAM) : Conception de stratégies d'authentification et de contrôle des accès selon le principe du moindre privilège.",
        "Ingénierie DevSecOps : Intégration de la sécurité en continu au sein des pipelines de développement et d'automatisation.",
        "Sécurité Opérationnelle : Hardening (durcissement) pour sécuriser les systèmes d'exploitation et les réseaux à la source.",
        "Sécurité Offensive : Conduite de tests d'intrusion (Pentest) pour identifier et exploiter les vulnérabilités techniques.",
        "Machine Learning (ML) : Initiation aux modèles d'apprentissage automatique appliqués à l'analyse de données.",
        "Numérique Responsable : Application des principes de sobriété numérique dans la conception des systèmes d'information.",
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
        "Governance, Risk & Compliance (GRC) : Mastery of ISO 27001/27002 standards, development of Information Security Policies (PSSI), and execution of IS audits.",
        "Risk Management : Mapping and mitigating cyber risks using the EBIOS RM methodology.",
        "Incident Management : Steering the full incident lifecycle, from initial detection through to business service restoration.",
        "Cloud Security : Hardening and securing Cloud architectures, with focused expertise on AWS and Azure.",
        "Identity & Access Management (IAM) : Designing authentication strategies and granular access controls based on the Principle of Least Privilege.",
        "DevSecOps Engineering : Integrating continuous automated security checks throughout CI/CD pipelines.",
        "Operational Security : OS and network hardening to eliminate attack surfaces at the source.",
        "Offensive Security : Conducting penetration tests (Pentest) to identify, exploit, and remediate technical vulnerabilities.",
        "Machine Learning (ML) : Core machine learning models applied to security data analytics and telemetry.",
        "Sustainable IT & Ethics : Implementing green IT and digital sobriety principles in system architecture.",
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
        "Administration Réseaux : Configuration et administration avancée des équipements Cisco.",
        "Virtualisation : Déploiement et maintien d'environnements virtualisés sous VMware.",
        "Cloud Computing : Mise en place d'architectures Cloud et de technologies hybrides via Microsoft Azure.",
        "Bases de Données : Administration et gestion des systèmes de bases de données avec SQL Server.",
        "Solutions de Messagerie : Intégration et administration d'infrastructures de communication d'entreprise via Microsoft Exchange.",
        "Cybersécurité (Offensif) : Apprentissage des techniques d'Ethical Hacking.",
        "Sécurité Périmétrique : Déploiement de solutions de Firewalling et de filtrage URL.",
        "Haute Disponibilité : Conception d'architectures résilientes pour garantir la continuité de service.",
        "Supervision : Mise en œuvre de solutions de monitoring pour surveiller l'état de l'infrastructure.",
        "Stockage & Sauvegarde : Déploiement de solutions de stockage et application des politiques de backup.",
        "Gouvernance & Management : Gouvernance des SI, gestion d'entreprise et pilotage de projets (MS Project).",
      ],
      en: [
        "🔹 Acquired Competencies",
        "Systems Administration : Advanced management of Microsoft Windows Server and Unix/Linux environments.",
        "Network Administration : Advanced configuration and management of Cisco routing and switching equipment.",
        "Virtualization : Deployment and lifecycle management of VMware virtualized infrastructures.",
        "Cloud Computing : Designing Cloud architectures and hybrid enterprise deployments via Microsoft Azure.",
        "Databases : Administration and querying of relational database management systems with SQL Server.",
        "Messaging Solutions : Enterprise messaging integration and management using Microsoft Exchange.",
        "Cybersecurity (Offensive) : Core offensive techniques and ethical hacking methodologies.",
        "Perimeter Security : Deployment of enterprise firewalling and URL filtering solutions.",
        "High Availability : Designing resilient, fault-tolerant architectures to ensure business continuity.",
        "Monitoring : Implementing infrastructure monitoring solutions for health and performance tracking.",
        "Storage & Backup : Storage solution deployment and robust backup/recovery policy enforcement.",
        "Governance & Management : IT Governance, business management, and project management (MS Project).",
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
      fr: "Transmission des données, commutation et protocoles de réseaux télécoms.",
      en: "Data transmission, switching, and telecom network protocols.",
    },
    highlights: {
      fr: [
        "Analyser et dimensionner les protocoles de communication et architectures réseaux IP.",
        "Diagnostiquer la chaîne de transmission et optimiser la qualité de service (QoS).",
      ],
      en: [
        "Analyze and size communication protocols and IP network architectures.",
        "Troubleshoot transmission chains and optimize Quality of Service (QoS).",
      ],
    },
    technologies: ["Télécoms", "TCP/IP", "Transmission", "Réseaux", "QoS"],
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
      fr: "Fondamentaux du génie logiciel, de l'administration système et des bases de données relationnelles.",
      en: "Fundamentals of software engineering, system administration, and relational databases.",
    },
    highlights: {
      fr: [
        "Développer des solutions applicatives et concevoir des bases de données relationnelles (SQL, modélisation).",
        "Administrer les systèmes d'exploitation et configurer les postes et serveurs de développement.",
      ],
      en: [
        "Develop software applications and design relational databases (SQL, data modeling).",
        "Administer operating systems and configure developer workstations and servers.",
      ],
    },
    technologies: ["Algorithmique", "SQL", "Linux", "Windows", "Bases de données"],
  },
];

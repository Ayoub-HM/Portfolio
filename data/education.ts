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
      fr: "Formation d'excellence axée sur la gouvernance cyber, l'automatisation sécurisée et l'IA défensive.",
      en: "Advanced program focused on cyber governance, secure automation, and defensive AI.",
    },
    highlights: {
      fr: [
        "Auditer la maturité cybersécurité et modéliser les risques organisationnels (ISO 27001/27002, EBIOS RM, PCA/PRA).",
        "Concevoir des architectures IAM et sécuriser la gestion des habilitations (Keycloak, LDAP, RBAC, Moindre Privilège).",
        "Automatiser le déploiement sécurisé dans le Cloud et intégrer des contrôles DevSecOps (Terraform, AWS EKS, CI/CD, SonarQube, Trivy).",
      ],
      en: [
        "Audit cybersecurity maturity and model organizational risks (ISO 27001/27002, EBIOS RM, BCP/DRP).",
        "Design IAM architectures and enforce access control policies (Keycloak, LDAP, RBAC, Least Privilege).",
        "Automate secure Cloud deployments and integrate DevSecOps security checks (Terraform, AWS EKS, CI/CD, SonarQube, Trivy).",
      ],
    },
    technologies: ["GRC", "EBIOS RM", "ISO 27001", "IAM", "Keycloak", "DevSecOps", "AWS EKS", "Terraform", "IA Sécurité"],
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
      fr: "Ingénierie avancée des architectures systèmes et réseaux sécurisées.",
      en: "Advanced engineering of secure system and network architectures.",
    },
    highlights: {
      fr: [
        "Déployer et orchestrer une application conteneurisée sur un cluster Kubernetes managé dans Azure (PFE).",
        "Concevoir, configurer et durcir les infrastructures réseaux complexes (VLAN, routage dynamique, VPN, pare-feux).",
      ],
      en: [
        "Deploy and orchestrate containerized workloads on an Azure managed Kubernetes cluster (Capstone).",
        "Design, configure, and harden complex network infrastructures (VLANs, dynamic routing, VPN, firewalls).",
      ],
    },
    technologies: ["Kubernetes", "Azure", "Docker", "Réseaux", "VLAN/VPN", "Sécurité"],
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

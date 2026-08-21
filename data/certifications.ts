export type CertStatus = "obtained" | "in-progress";

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  status: CertStatus;
  url?: string;
  logo?: string;
  year?: string;
}

/** Certifications, source of truth: CV & verified credentials. */
export const certifications: Certification[] = [
  {
    id: "isc2-cc",
    name: "Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    status: "obtained",
    logo: "/images/certs/isc2-cc.svg",
    url: "https://www.credly.com/badges/08c8f11f-11ad-4d40-8324-c5e29b29ff19/linked_in_profile",
  },
  {
    id: "sandbp-iso27001",
    name: "ISO/IEC 27001 Lead Implementer",
    issuer: "Standards and Best Practice (SandBP)",
    status: "obtained",
    logo: "/images/certs/sandbp-iso27001.svg",
    url: "https://certification-portal.sandbp.net/certificate-verification-page/13ECC7BEC-7349543A46-127324D17/",
  },
  {
    id: "comptia-cysa",
    name: "CompTIA CySA+",
    issuer: "CompTIA",
    status: "in-progress",
    logo: "/images/certs/comptia-cysa.svg",
  },
];

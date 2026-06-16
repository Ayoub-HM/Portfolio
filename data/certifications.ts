export type CertStatus = "obtained" | "in-progress";

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  status: CertStatus;
  /** Optional year — only set it when you actually have the date (avoid inventing). */
  year?: string;
}

/** Certifications, source of truth: CV. Do not add a certification you don't hold or aren't preparing. */
export const certifications: Certification[] = [
  {
    id: "isc2-cc",
    name: "Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    status: "obtained",
  },
  {
    id: "comptia-cysa",
    name: "CySA+",
    issuer: "CompTIA",
    status: "in-progress",
  },
  {
    id: "ceh",
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    status: "in-progress",
  },
];

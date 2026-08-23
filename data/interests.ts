export interface LanguageItem {
  id: string;
  name: { fr: string; en: string };
  level: { fr: string; en: string };
  badge: string;
  detail: { fr: string; en: string };
  percentage: number;
  flag: "fr" | "gb" | "ma";
}

export interface InterestItem {
  id: string;
  category: { fr: string; en: string };
  icon: string;
  topics: { fr: string[]; en: string[] };
  description: { fr: string; en: string };
  color: string;
}

export const languages: LanguageItem[] = [
  {
    id: "fr",
    name: { fr: "Français", en: "French" },
    level: { fr: "Courant / Bilingue", en: "Fluent / Bilingual" },
    badge: "C2",
    detail: {
      fr: "Aisance rédactionnelle, animation de réunions et vulgarisation technique.",
      en: "Strong editorial skills, meeting leadership, and technical communication.",
    },
    percentage: 100,
    flag: "fr",
  },
  {
    id: "en",
    name: { fr: "Anglais", en: "English" },
    level: { fr: "Professionnel", en: "Professional Working" },
    badge: "B2 / C1",
    detail: {
      fr: "Pratique quotidienne : veille mondiale, documentation technique et échanges.",
      en: "Daily use: global threat watch, technical documentation, and team collaboration.",
    },
    percentage: 85,
    flag: "gb",
  },
  {
    id: "ar",
    name: { fr: "Arabe", en: "Arabic" },
    level: { fr: "Langue maternelle", en: "Native" },
    badge: "Natif",
    detail: {
      fr: "Bilinguisme naturel facilitant l'ouverture culturelle et l'adaptabilité.",
      en: "Native bilingualism fostering cultural agility and global teamwork.",
    },
    percentage: 100,
    flag: "ma",
  },
];

export const interests: InterestItem[] = [
  {
    id: "culture",
    category: { fr: "Culture générale", en: "General Culture" },
    icon: "landmark",
    topics: {
      fr: ["Histoire", "Géopolitique"],
      en: ["History", "Geopolitics"],
    },
    description: {
      fr: "Comprendre les enjeux géopolitiques mondiaux pour anticiper les cyberattaques ciblées : une vision stratégique à 360° qui dépasse le simple cadre technique.",
      en: "Understanding global geopolitical dynamics to anticipate targeted cyberattacks: a 360° strategic vision beyond pure technical execution.",
    },
    color: "from-sky-500/20 to-blue-500/10 border-sky-500/30 text-sky-400",
  },
  {
    id: "tech",
    category: { fr: "Informatique", en: "IT & Security" },
    icon: "cpu",
    topics: {
      fr: ["Veille technologique", "Cybersécurité"],
      en: ["Tech Watch", "Cybersecurity"],
    },
    description: {
      fr: "Une veille active permanente et une pratique continue sur labs pour être opérationnel immédiatement face aux nouvelles menaces et maîtriser les outils de pointe.",
      en: "Continuous threat monitoring and active lab practice to be immediately operational against emerging attacks and master state-of-the-art tools.",
    },
    color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400",
  },
  {
    id: "music",
    category: { fr: "Musique", en: "Music" },
    icon: "music",
    topics: {
      fr: ["Pratique de la batterie"],
      en: ["Drumming"],
    },
    description: {
      fr: "Rigueur millimétrée, concentration extrême et gestion du stress en temps réel : des réflexes indispensables pour la réponse à incident et l'analyse critique.",
      en: "Pinpoint rigor, extreme focus, and real-time stress management: vital reflexes for incident response and critical analysis.",
    },
    color: "from-indigo-500/20 to-violet-500/10 border-indigo-500/30 text-indigo-400",
  },
  {
    id: "sports",
    category: { fr: "Sports", en: "Sports" },
    icon: "activity",
    topics: {
      fr: ["Football", "Padel", "Natation", "Musculation"],
      en: ["Football", "Padel", "Swimming", "Strength Training"],
    },
    description: {
      fr: "Esprit de collectif affûté sur le terrain et discipline quotidienne à l'effort : un profil fiable, combatif et capable de s'intégrer rapidement dans vos équipes.",
      en: "Sharp team spirit forged on the pitch and daily athletic discipline: a dependable, driven profile ready to seamlessly integrate into your teams.",
    },
    color: "from-rose-500/20 to-amber-500/10 border-rose-500/30 text-rose-400",
  },
];

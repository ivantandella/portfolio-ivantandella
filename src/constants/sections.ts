export const Sections = {
  HOME: "home",
  EXPERIENCE: "experience",
  PROJECTS: "projects",
  CERTIFICATES: "certificates",
  SKILL: "skill",
  SOCIALS: "socials",
} as const;

export type SectionsType = (typeof Sections)[keyof typeof Sections];

export const UNIVERSAL_WIDTH = 1440;

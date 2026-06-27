export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  responsibilities: string[];
}

export interface Project {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  metrics?: { label: string; value: string }[];
}

export interface Certification {
  title: string;
  issuer: string;
  description?: string;
  certificatePath?: string;
}

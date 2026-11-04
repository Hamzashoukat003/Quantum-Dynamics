
export type PageId = 'home' | 'about' | 'services' | 'industries' | 'projects' | 'hse' | 'contact';

export type ExperienceSector = 'fertilizer' | 'oil-gas' | 'chemical' | 'power-cement' | 'infrastructure';

export interface ExperienceItem {
  client?: string;
  title: string;
  location: string;
  sector: ExperienceSector;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  capabilities: string[];
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  applications: string[];
  references: string[];
}

export interface TechnicalSpec {
  item: string;
  detail: string;
  figure: string;
  unit: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  phone: string;
  email: string;
}

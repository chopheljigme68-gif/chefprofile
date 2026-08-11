export type Level =
  | 'Executive & Head Chef'
  | 'Chef de Partie'
  | 'Chef'
  | 'Commis'
  | 'Emerging talent';

export interface Role {
  role: string;
  org: string;
  period?: string;
  location?: string;
  points?: string[];
}

export interface Study {
  qualification: string;
  institution: string;
  period?: string;
  detail?: string;
}

export interface Referee {
  name: string;
  role: string;
}

export interface Chef {
  slug: string;
  name: string;
  /** Current job title, as stated on the CV. */
  title: string;
  /** Dzongkhag (district) used for filtering. */
  region: string;
  location: string;
  level: Level;
  /** Years in professional kitchens; omitted where the CV does not state it. */
  years?: number;
  photo: string;
  /** Short alt text describing the portrait. */
  photoAlt: string;
  cv: string;
  /** Opening line for the profile page. Drawn from the CV summary. */
  summary: string;
  specialities: string[];
  accolades: string[];
  contact: { email?: string; phone?: string };
  experience: Role[];
  education: Study[];
  training?: Study[];
  certificates?: string[];
  skills: string[];
  languages?: string[];
  interests?: string[];
  projects?: { title: string; detail: string }[];
  references?: Referee[];
}

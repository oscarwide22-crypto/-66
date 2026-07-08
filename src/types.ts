export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  photo: string;
  linkedin: string;
  email: string;
  specialty: string;
  yearsOfExperience: number;
  education: string;
  previousCompanies: string[];
  expertise: string[];
  roleType: 'committee' | 'advisory';
  responsibilities?: string[];
  executiveProfile?: string[];
}

export interface Office {
  id: string;
  name: string;
  city: string;
  address: string;
  teamSize: number;
  focus: string;
  markets: string[];
  photo: string;
  coordinates: { x: number; y: number }; // Percentage coordinates for SVG world map
}

export interface PortfolioCompany {
  id: string;
  name: string;
  industry: string;
  stage: 'Seed' | 'Series A' | 'Series B' | 'Growth' | 'Late Stage';
  description: string;
  coverImage: string;
  stats: {
    funding: string;
    growth: string;
    employees: string;
    impact: string;
  };
  founded: string;
  ceo: string;
}

export interface IndustrySector {
  id: string;
  name: string;
  description: string;
  icon: string;
  coverImage: string;
  highlights: string[];
  investmentThesis: string;
}

export interface ResearchReport {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorTitle: string;
  summary: string;
  coverImage: string;
  highlights: string[];
}

export interface RoadmapMilestone {
  id: string;
  phase: string;
  title: string;
  period: string;
  description: string;
  milestones: string[];
  status: 'completed' | 'active' | 'future';
}

export interface ESGInitiative {
  id: string;
  title: string;
  metric: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface ValueItem {
  number: string;
  title: string;
  description: string;
}

export interface Phase {
  number: string;
  title: string;
  image: string;
  points: string[];
}

export interface Pillar {
  icon: "compass" | "ruler" | "hardhat";
  title: string;
  description: string;
}

export type ProjectCategory = "Corporate HQ" | "Workspace" | "Retail" | "Industrial";

export interface Project {
  slug: string;
  name: string;
  client: string;
  category: ProjectCategory;
  year: string;
  location: string;
  industry: string;
  scope: string;
  size: string;
  summary: string;
  description: string[];
  cover: string;
  gallery: string[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  client: string;
  scope: string;
  quote: string;
}

export interface Founder {
  name: string;
  role: string;
  image: string;
}

export interface OfficeLocation {
  country: string;
  legal: string;
  address: string;
  phone: string;
}

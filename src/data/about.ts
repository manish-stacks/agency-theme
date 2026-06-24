import type { Stat, ValueItem, Founder } from "@/types";

export const aboutTabs = [
  { id: "who", label: "Who We Are", href: "#who-we-are" },
  { id: "values", label: "Our Values", href: "#our-values" },
  { id: "team", label: "Our Team", href: "#our-team" },
  { id: "founders", label: "Founders", href: "#founders" },
];

export const stats: Stat[] = [
  { value: 20, suffix: "+", label: "Years of experience" },
  { value: 8, prefix: "0", label: "Offices across Asia Pacific" },
  { value: 3, suffix: "M", label: "SQM of space delivered" },
];

export const values: ValueItem[] = [
  { number: "01", title: "Experience", description: "Two decades of interior fit-out delivery across complex, occupied and live environments." },
  { number: "02", title: "Expansion", description: "Eight regional offices give our clients consistent quality across every Asia Pacific market." },
  { number: "03", title: "Reliable", description: "Accountability and credibility on every handover — on time, on budget, and inspection-ready." },
  { number: "04", title: "Performance", description: "A solid track record of repeat partnerships built on results that speak for themselves." },
];

export const teamDisciplines = [
  "Interior Designer",
  "Project Management",
  "Construction Team",
  "CAD Team",
  "Site Supervisor & Safety",
  "Mechanical & Electrical",
  "Quantity Surveyor",
];

const f = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=80`;

export const founders: Founder[] = [
  { name: "Daniel Zhang", role: "Founder & Managing Director", image: f("photo-1560250097-0b93528c311a") },
  { name: "Mei Lin", role: "Founder & Design Director", image: f("photo-1573496359142-b8d87734a5a2") },
  { name: "Jason Pang", role: "Founder & Operations Director", image: f("photo-1556157382-97eda2d62296") },
];

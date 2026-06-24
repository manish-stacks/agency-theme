import type { Phase, Pillar } from "@/types";

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1100&q=80`;

export const phases: Phase[] = [
  {
    number: "01",
    title: "Planning",
    image: u("photo-1581091226825-a6a2a5aee158"),
    points: ["Pre-project planning and site survey", "Workplace study and strategic facilities planning"],
  },
  {
    number: "02",
    title: "Designing",
    image: u("photo-1497366216548-37526070297c"),
    points: ["Design consultation and development", "Design & build, additions and alteration works"],
  },
  {
    number: "03",
    title: "Construction",
    image: u("photo-1503387762-592deb58ef4e"),
    points: ["Construction and project management", "Reinstatement specialist works"],
  },
  {
    number: "04",
    title: "Management",
    image: u("photo-1604328698692-f76ea9498e76"),
    points: ["Move and migration management", "After-sales and facility maintenance services"],
  },
];

export const pillars: Pillar[] = [
  {
    icon: "compass",
    title: "Perfectly Designed",
    description: "We are design and construction professionals focused on delivering innovative, creative spaces that meet the highest standards.",
  },
  {
    icon: "ruler",
    title: "Carefully Planned",
    description: "We analyse the nature of your business, your operational requirements and the workflow of your organisation before a line is drawn.",
  },
  {
    icon: "hardhat",
    title: "Smartly Executed",
    description: "Our efficient execution team ensures projects are delivered on time, with rigorous inspection at every milestone.",
  },
];

import type { Project, Testimonial } from "@/types";

const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const projects: Project[] = [
  {
    slug: "meridian-bank-hq",
    name: "Meridian Bank",
    client: "Meridian Bank",
    category: "Corporate HQ",
    year: "2025",
    location: "Raffles Place, Singapore",
    industry: "Financial / Investments",
    scope: "Design | Build",
    size: "18,000 sqft",
    summary:
      "A two-floor banking headquarters delivered design-and-build within a strict timeline, balancing prestige with everyday function.",
    description: [
      "Meridian Bank engaged our team for a new headquarters spread across two floors in the heart of the financial district.",
      "The design language draws on natural materials — stone, timber and warm metals — to signal stability while keeping the workplace bright and human.",
      "Back-of-house spaces mix private offices, open collaboration zones and acoustically-treated meeting rooms tailored to each department's needs.",
      "A staff café and quiet room give employees room to reset, reflecting a brief that put wellbeing alongside performance.",
    ],
    cover: u("photo-1497366754035-f200968a6e72"),
    gallery: [u("photo-1497366811353-6870744d04b2"), u("photo-1524758631624-e2822e304c36"), u("photo-1556761175-5973dc0f32e7"), u("photo-1497366216548-37526070297c")],
    featured: true,
  },
  {
    slug: "harmonic-arts-office",
    name: "Harmonic Arts",
    client: "Harmonic Arts Group",
    category: "Workspace",
    year: "2024",
    location: "Esplanade, Singapore",
    industry: "Arts / Entertainment",
    scope: "Design | Build",
    size: "8,900 sqft",
    summary:
      "An eight-month transformation for a performing-arts group, where curved forms and acoustic detailing echo the motion of music.",
    description: [
      "This workspace for a flagship performing-arts company was inspired by the movement of a melody.",
      "Soft, curvilinear elements flow through the plan, creating a calm departure from the formality of the concert hall.",
      "A concierge counter and bar-style seating greet visitors, doubling as a casual touch-down or hot-desk space.",
      "Acoustic panels in red, blue and grey are rhythmically arranged across the ceiling, turning sound control into a design feature.",
    ],
    cover: u("photo-1505373877841-8d25f7d46678"),
    gallery: [u("photo-1497215728101-856f4ea42174"), u("photo-1531973576160-7125cd663d86"), u("photo-1577412647305-991150c7d163"), u("photo-1604328698692-f76ea9498e76")],
    featured: true,
  },
  {
    slug: "northgate-energy",
    name: "Northgate Energy",
    client: "Northgate Energy",
    category: "Corporate HQ",
    year: "2024",
    location: "Marina Bay, Singapore",
    industry: "Energy / Natural Resources",
    scope: "Design | Build",
    size: "22,000 sqft",
    summary:
      "A successful workplace transformation delivered on time and incident-free through a demanding period, resulting in a calm, functional office.",
    description: [
      "Northgate Energy needed a new regional office completed against a challenging programme and tight safety constraints.",
      "Careful project and site-safety management kept the fit-out incident-free from first fix to handover.",
      "The result is a well-planned, refreshing space that colleagues describe as both energising and easy to work in.",
      "Robust services design ensures the office can flex as the team grows over the coming years.",
    ],
    cover: u("photo-1497366858526-0766cadbe8fa"),
    gallery: [u("photo-1542744173-8e7e53415bb0"), u("photo-1556761175-b413da4baf72"), u("photo-1521737604893-d14cc237f11d"), u("photo-1604014237800-1c9102c219da")],
    featured: true,
  },
  {
    slug: "lumen-retail-flagship",
    name: "Lumen Flagship",
    client: "Lumen Retail",
    category: "Retail",
    year: "2023",
    location: "Orchard Road, Singapore",
    industry: "Retail / Lifestyle",
    scope: "Design | Build",
    size: "6,400 sqft",
    summary:
      "A flagship retail environment where lighting, materiality and flow guide shoppers through a considered brand journey.",
    description: [
      "Lumen's flagship store needed to feel unmistakably premium while keeping operations effortless for staff.",
      "A layered lighting scheme draws the eye through the space and lets products take centre stage.",
      "Durable, tactile finishes were chosen to wear gracefully under heavy footfall.",
      "Back-of-house and fitting areas were planned for speed without compromising the customer experience.",
    ],
    cover: u("photo-1441986300917-64674bd600d8"),
    gallery: [u("photo-1567401893414-76b7b1e5a7a5"), u("photo-1604014237800-1c9102c219da"), u("photo-1560066984-138dadb4c035"), u("photo-1582037928769-181f2644ecb7")],
  },
  {
    slug: "vantage-tech-campus",
    name: "Vantage Campus",
    client: "Vantage Technologies",
    category: "Workspace",
    year: "2023",
    location: "one-north, Singapore",
    industry: "Technology",
    scope: "Design | Build",
    size: "31,000 sqft",
    summary:
      "A multi-floor technology campus designed around collaboration, focus and the rituals of a fast-moving product team.",
    description: [
      "Vantage wanted a campus that could scale with a rapidly growing engineering org.",
      "Neighbourhoods of desks are anchored by focus rooms, project walls and informal breakout spaces.",
      "A central stair stitches the floors together, encouraging movement and chance encounters.",
      "Infrastructure was over-specified so the space can be reconfigured without major works.",
    ],
    cover: u("photo-1556761175-4b46a572b786"),
    gallery: [u("photo-1497366412874-3415097a27e7"), u("photo-1604328471151-b52226907017"), u("photo-1604328698692-f76ea9498e76"), u("photo-1503387762-592deb58ef4e")],
  },
  {
    slug: "atlas-industrial",
    name: "Atlas Works",
    client: "Atlas Industrial",
    category: "Industrial",
    year: "2022",
    location: "Tuas, Singapore",
    industry: "Manufacturing / Logistics",
    scope: "Design | Build",
    size: "44,000 sqft",
    summary:
      "An integrated industrial fit-out pairing a productive plant floor with an office front that reflects the brand.",
    description: [
      "Atlas needed a facility that worked equally hard for production and for people.",
      "The plant floor was planned around clean material flow, safety zoning and future automation.",
      "A bright administrative front gives staff and visitors a workplace that feels considered, not utilitarian.",
      "Robust, low-maintenance finishes keep total cost of ownership down over the building's life.",
    ],
    cover: u("photo-1581094794329-c8112a89af12"),
    gallery: [u("photo-1565008447742-97f6f38c985c"), u("photo-1504917595217-d4dc5ebe6122"), u("photo-1581092160562-40aa08e78837"), u("photo-1581092918056-0c4c3acd3789")],
  },
];

export const projectCategories = ["All", "Corporate HQ", "Workspace", "Retail", "Industrial"] as const;

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const getFeatured = () => projects.filter((p) => p.featured);
export const getRelated = (slug: string, n = 3) => projects.filter((p) => p.slug !== slug).slice(0, n);

export const testimonials: Testimonial[] = [
  {
    id: "harmonic",
    client: "Harmonic Arts Group",
    scope: "Design | Build | Project Management",
    quote:
      "Choosing this team for our office renovation proved to be an excellent decision. Their professionalism and dedication delivered a successful project on time and within budget — we recommend them to any organisation considering a similar move.",
  },
  {
    id: "northgate",
    client: "Northgate Energy",
    scope: "Design | Build | Project Management",
    quote:
      "Despite a difficult period, the team anticipated challenges and overcame every hurdle. The fit-out was incident-free and handed over on schedule. The space feels refreshing yet genuinely conducive to focused work.",
  },
  {
    id: "lumen",
    client: "Lumen Retail",
    scope: "Design | Build",
    quote:
      "We are delighted with the look and quality of our new flagship. The team was attentive and flexible with adjustments, kept communication prompt, and managed every stage to completion with real professionalism.",
  },
  {
    id: "vantage",
    client: "Vantage Technologies",
    scope: "Design | Build",
    quote:
      "Their creativity in design and attention to detail let them interpret our briefs precisely. They met the stringent needs of our organisation and delivered every interior work package to the committed timeline.",
  },
  {
    id: "saverne",
    client: "Saverne Advisory",
    scope: "Design | Build",
    quote:
      "A pleasure to work with from planning to handover. With pragmatic, task-driven solutions, the team was efficient and accommodating, and their coordination and project management made the whole process a great experience.",
  },
  {
    id: "atlas",
    client: "Atlas Industrial",
    scope: "Design | Build",
    quote:
      "From the first planning session to the final touches, their expertise was evident at every step. The transformation of our space is remarkable, and the experience was smooth and stress-free throughout.",
  },
];

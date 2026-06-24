import type { NavItem, OfficeLocation } from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/clients" },
  { label: "What's On", href: "/news" },
];

export const languages = ["EN", "CN", "TH", "VN"] as const;

export const offices: OfficeLocation[] = [
  {
    country: "Singapore",
    legal: "Atrium Design & Build (Singapore) Pte Ltd",
    address: "60 Ubi Avenue 1, Oxley Bizhub, #06-12, Singapore 408867",
    phone: "+65 6000 0000",
  },
  {
    country: "Thailand",
    legal: "Atrium Design & Build (Thailand) Co., Ltd",
    address: "Unit 2401, Rasa Tower, Phahonyothin Rd, Chatuchak, Bangkok 10900",
    phone: "+66 95 000 0000",
  },
  {
    country: "Vietnam",
    legal: "Atrium Design & Build (Vietnam) Co., Ltd",
    address: "2F, The Nexx Building, Pham Ngoc Thach, District 3, Ho Chi Minh City",
    phone: "+84 91 000 0000",
  },
  {
    country: "Greater China",
    legal: "Atrium Design & Build Co., Ltd",
    address: "3F, Building 13, Lane 159, Tianzhou Road, Shanghai, P.R.C.",
    phone: "+86 21 0000 0000",
  },
];

export const contact = {
  email: "enquiry@atrium-db.example",
  hours: "8:00 AM to 4:00 PM, Monday through Friday",
  socials: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Instagram", href: "https://instagram.com" },
  ],
};

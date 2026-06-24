import { Hero } from "@/components/sections/Hero";
import { AboutTabs } from "@/components/sections/AboutTabs";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { Testimonials } from "@/components/sections/Testimonials";
import { ClientsMarquee } from "@/components/sections/ClientsMarquee";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutTabs />
      <WhatWeDo />
      <WhyChoose />
      <ProjectsShowcase />
      <Testimonials />
      <ClientsMarquee />
      <GalleryGrid />
      <CtaBanner />
    </>
  );
}

import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Services",
  description: "Integrated interior services across planning, design, construction and management — a single accountable team from first survey to final handover.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="What We Do" title={"Designing life\ninto every space."} description="Planning, designing, construction and management — delivered end to end, personalised and professional." />
      <WhatWeDo />
      <WhyChoose />
      <GalleryGrid />
      <CtaBanner />
    </>
  );
}

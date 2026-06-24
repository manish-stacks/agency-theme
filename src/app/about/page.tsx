import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { AboutTabs } from "@/components/sections/AboutTabs";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About Us",
  description: "Atrium Design & Build is a reliable interior design and construction partner in Singapore, delivering integrated fit-out services across the Asia Pacific for over 20 years.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title={"A reliable interior\ndesigner & builder."} description="For over two decades we have delivered integrated design-and-build services for industrial, office and retail spaces across the region." />
      <AboutTabs />
      <WhyChoose />
      <Testimonials />
      <CtaBanner />
    </>
  );
}

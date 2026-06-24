import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectsExplorer } from "@/components/sections/ProjectsExplorer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Projects",
  description: "Selected interior fit-out projects across corporate HQ, workspace, retail and industrial — design-and-build delivered on time and on budget.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Our Work" title={"Projects that\ndefine our craft."} description="A cross-section of recent fit-out partnerships. Filter by space type, or open any project to see the story behind it." />
      <ProjectsExplorer />
      <CtaBanner />
    </>
  );
}

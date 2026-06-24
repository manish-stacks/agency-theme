import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/anim/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { news } from "@/data/news";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "What's On",
  description: "Studio news, project updates and insights on interior design and build from the Atrium team.",
  path: "/news",
});

export default function NewsPage() {
  return (
    <>
      <PageHero eyebrow="What's On" title={"News, updates\n& insights."} description="Project milestones, studio updates and our point of view on designing better spaces." />
      <Section className="bg-white">
        <div className="mx-auto max-w-frame px-6 sm:px-8 lg:px-12">
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {news.map((n, i) => (
              <Reveal key={n.slug}>
                <article className="group cursor-pointer">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-surface">
                    <Image src={n.image} alt={n.title} fill priority={i < 3} sizes="(max-width:1024px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-accent">
                    <span>{n.category}</span>
                    <span className="h-px w-5 bg-line" />
                    <span className="text-secondary">{n.date}</span>
                  </div>
                  <h2 className="mt-4 font-display text-xl font-semibold leading-snug text-ink">{n.title}</h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-secondary">{n.excerpt}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}

import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/anim/Reveal";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { clients } from "@/data/clients";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Clients",
  description: "The organisations we have partnered with across finance, technology, the arts, retail and industry — and the words they have shared about working with us.",
  path: "/clients",
});

export default function ClientsPage() {
  return (
    <>
      <PageHero eyebrow="Trusted Partnership" title={"Partners who\ntrust our work."} description="We keep our client list close and our standards high. Here are some of the teams we have built alongside." />
      <Section className="bg-white">
        <div className="mx-auto max-w-frame px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 overflow-hidden rounded-card-lg border-l border-t border-line sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((c, i) => (
              <Reveal key={c}>
                <div className="group flex aspect-[3/2] items-center justify-center border-b border-r border-line transition-colors duration-500 hover:bg-carbon">
                  <span className="font-display text-2xl font-semibold text-ink/70 transition-colors duration-500 group-hover:text-white lg:text-3xl">{c}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
      <Testimonials />
      <CtaBanner />
    </>
  );
}

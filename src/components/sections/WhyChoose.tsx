import { Compass, Ruler, HardHat } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SplitHeading } from "@/components/anim/SplitHeading";
import { Reveal } from "@/components/anim/Reveal";
import { pillars } from "@/data/phases";

const iconMap = { compass: Compass, ruler: Ruler, hardhat: HardHat } as const;

export function WhyChoose() {
  return (
    <Section className="bg-carbon text-white">
      <div className="mx-auto max-w-frame px-6 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow light>Why Atrium?</Eyebrow>
            <SplitHeading text={"Bold design.\nClear strategy.\nDependable results."} as="h2" className="mt-5 font-display text-heading font-semibold text-white" />
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/65">
              We are an integrated total-solutions provider for industrial, office and retail
              fit-out — founded on first-rate quality, tailored to each client's specific needs.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-px overflow-hidden rounded-card-lg bg-white/10 sm:grid-cols-1">
              {pillars.map((p) => {
                const Icon = iconMap[p.icon];
                return (
                  <Reveal key={p.title}>
                    <div className="group flex gap-6 bg-carbon p-8 transition-colors duration-500 hover:bg-white/[0.04] lg:p-10">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-white">
                        <Icon className="h-6 w-6" strokeWidth={1.6} />
                      </span>
                      <div>
                        <h3 className="font-display text-2xl font-semibold text-white">{p.title}</h3>
                        <p className="mt-3 text-[15px] leading-relaxed text-white/60">{p.description}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

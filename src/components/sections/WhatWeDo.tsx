"use client";

import { useState } from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SplitHeading } from "@/components/anim/SplitHeading";
import { phases } from "@/data/phases";
import { cn } from "@/lib/utils";

export function WhatWeDo() {
  const [active, setActive] = useState(0);

  return (
    <Section className="bg-surface">
      <div className="mx-auto max-w-frame px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <Eyebrow>What We Do</Eyebrow>
          <SplitHeading text={"Designing life\ninto every space."} as="h2" className="mt-5 font-display text-heading font-semibold text-ink" />
          <p className="mt-6 text-lg leading-relaxed text-secondary">
            From the first site survey to the final snag, we deliver every stage in-house —
            personalised, professional and accountable from end to end.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Sticky image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card-lg bg-surface-200 lg:sticky lg:top-28">
              {phases.map((p, i) => (
                <Image
                  key={p.number}
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className={cn("object-cover transition-opacity duration-700 ease-smooth", i === active ? "opacity-100" : "opacity-0")}
                />
              ))}
              <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink backdrop-blur">
                {phases[active].number} — {phases[active].title}
              </span>
            </div>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-6">
            <div className="border-t border-line">
              {phases.map((p, i) => {
                const open = i === active;
                return (
                  <div key={p.number} className="border-b border-line">
                    <button
                      onMouseEnter={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className="flex w-full items-center gap-6 py-6 text-left"
                    >
                      <span className={cn("font-display text-lg font-semibold transition-colors", open ? "text-accent" : "text-secondary")}>{p.number}</span>
                      <span className={cn("font-display text-2xl font-semibold transition-colors lg:text-3xl", open ? "text-ink" : "text-secondary")}>{p.title}</span>
                    </button>
                    <div className={cn("grid transition-all duration-500 ease-smooth", open ? "grid-rows-[1fr] pb-7 opacity-100" : "grid-rows-[0fr] opacity-0")}>
                      <ul className="overflow-hidden space-y-3 pl-12">
                        {p.points.map((pt, j) => (
                          <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-secondary">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

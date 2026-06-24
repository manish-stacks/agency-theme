"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { MagneticButton } from "@/components/anim/MagneticButton";
import { Eyebrow } from "@/components/ui/Eyebrow";

const HERO_IMG =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=80";

const lines = [["Transforming", "spaces"], ["for", "work"], ["and", "life."]];

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.set("[data-hero-mask]", { clipPath: "inset(0% 0% 100% 0%)" })
        .set("[data-hero-img]", { scale: 1.35 })
        .to("[data-hero-mask]", { clipPath: "inset(0%)", duration: 1.3, ease: "power4.inOut" }, 0.1)
        .to("[data-hero-img]", { scale: 1, duration: 1.6, ease: "power3.out" }, 0.1)
        .fromTo("[data-hero-eyebrow]", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.5)
        .fromTo("[data-hero-word]", { yPercent: 120, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.06 }, 0.6)
        .fromTo("[data-hero-sub]", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 1.1)
        .fromTo("[data-hero-cta]", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 1.25)
        .fromTo("[data-hero-scroll]", { opacity: 0 }, { opacity: 1, duration: 0.8 }, 1.5);

      // parallax: image drifts up, content drifts slightly as you scroll out
      gsap.to("[data-hero-img]", {
        yPercent: 16,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to("[data-hero-content]", {
        yPercent: -8,
        opacity: 0.6,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative flex min-h-screen items-end overflow-hidden">
      <div data-hero-mask className="absolute inset-0 overflow-hidden">
        <div data-hero-img className="absolute inset-0 will-change-transform">
          <Image src={HERO_IMG} alt="Interior workspace" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon/85 via-carbon/30 to-carbon/40" />
        </div>
      </div>

      <div data-hero-content className="relative z-10 mx-auto w-full max-w-frame px-6 pb-20 pt-[120px] sm:px-8 lg:px-12 lg:pb-24">
        <div data-hero-eyebrow>
          <Eyebrow light>Interior Design &amp; Build · Singapore</Eyebrow>
        </div>

        <h1 className="mt-6 max-w-4xl font-display text-display font-extrabold text-white">
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden pb-[0.04em]">
              {line.map((w, j) => (
                <span key={j} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
                  <span data-hero-word className="inline-block">{w}</span>
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p data-hero-sub className="mt-8 max-w-xl text-lg leading-relaxed text-white/80">
          We are an integrated interior design and build partner for office, industrial and
          retail spaces — turning the places people work into places they genuinely want to be.
        </p>

        <div data-hero-cta className="mt-10 flex flex-wrap gap-3">
          <MagneticButton href="/projects" variant="primary">View Projects</MagneticButton>
          <MagneticButton href="/contact" variant="light">Contact Us</MagneticButton>
        </div>
      </div>

      <div data-hero-scroll className="absolute bottom-8 right-6 z-10 hidden items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70 lg:flex lg:right-12">
        Scroll
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
}

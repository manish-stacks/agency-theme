"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/anim/Reveal";
import { contact, offices } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const field = "w-full rounded-2xl border border-line bg-white px-5 py-4 text-[15px] text-ink outline-none transition-colors duration-300 placeholder:text-secondary/70 focus:border-accent";
  const label = "mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-secondary";

  return (
    <Section className="bg-white">
      <div className="mx-auto max-w-frame px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal className="space-y-8">
              <Row icon={Mail} label="Email Us" value={contact.email} href={`mailto:${contact.email}`} />
              <Row icon={Clock} label="Operating Hours" value={contact.hours} />
              <Row icon={MapPin} label="Headquarters" value={offices[0].address} />
            </Reveal>
            <Reveal className="mt-12 flex aspect-[16/10] items-center justify-center overflow-hidden rounded-card-lg border border-line bg-[repeating-linear-gradient(45deg,#efece7_0,#efece7_1px,transparent_1px,transparent_14px)]">
              <span className="text-xs uppercase tracking-[0.2em] text-secondary">Map · Singapore</span>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            {sent ? (
              <div className="flex min-h-[24rem] flex-col items-start justify-center rounded-card-lg border border-line bg-surface p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white"><Check className="h-5 w-5" /></span>
                <h3 className="mt-6 font-display text-3xl font-semibold text-ink">Thank you!</h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-secondary">Your submission has been received. Our team will get back to you within two working days.</p>
              </div>
            ) : (
              <div className="rounded-card-lg border border-line bg-surface p-8 lg:p-10">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div><label className={label} htmlFor="name">Name</label><input id="name" className={field} placeholder="Your name" /></div>
                  <div><label className={label} htmlFor="email">Email</label><input id="email" type="email" className={field} placeholder="you@company.com" /></div>
                  <div><label className={label} htmlFor="company">Company</label><input id="company" className={field} placeholder="Company name" /></div>
                  <div><label className={label} htmlFor="space">Space type</label>
                    <select id="space" defaultValue="" className={cn(field, "appearance-none")}>
                      <option value="" disabled>Select one</option>
                      <option>Corporate HQ</option><option>Workspace</option><option>Retail</option><option>Industrial</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6"><label className={label} htmlFor="message">Tell us about your project</label>
                  <textarea id="message" rows={4} className={cn(field, "resize-none")} placeholder="Location, approximate size, timeline and what you'd like to achieve." />
                </div>
                <div className="mt-8"><Button type="submit" onClick={() => setSent(true)}>Send Your Inquiry</Button></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Row({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href?: string }) {
  return (
    <div className="flex gap-5">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-accent"><Icon className="h-5 w-5" strokeWidth={1.5} /></span>
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">{label}</span>
        <div className="mt-1">
          {href ? <a href={href} className="text-lg text-ink transition-opacity hover:opacity-60">{value}</a> : <span className="text-lg text-ink">{value}</span>}
        </div>
      </div>
    </div>
  );
}

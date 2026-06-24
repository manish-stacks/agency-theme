import Link from "next/link";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import { SplitHeading } from "@/components/anim/SplitHeading";
import { navItems, offices, contact } from "@/data/navigation";
import { languages } from "@/data/navigation";
import { SITE } from "@/lib/seo";

const socialIcons = { Facebook, LinkedIn: Linkedin, Instagram } as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-carbon text-white">
      <div className="mx-auto max-w-frame px-6 py-section md:py-section-md lg:px-12">
        {/* Top */}
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Link href="/" className="font-display text-3xl font-extrabold tracking-tight">
              {SITE.name}<span className="text-accent">.</span>
            </Link>
            <SplitHeading
              text={"Where workspaces\nbecome living spaces."}
              as="p"
              className="mt-8 max-w-md font-display text-2xl font-medium leading-tight text-white/90 sm:text-3xl"
            />
            <div className="mt-8 flex items-center gap-3">
              {contact.socials.map((s) => {
                const Icon = socialIcons[s.label as keyof typeof socialIcons];
                return (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent hover:bg-accent hover:text-white">
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-6 lg:grid-cols-3">
            <div>
              <h3 className="text-xs uppercase tracking-[0.18em] text-white/40">Menu</h3>
              <ul className="mt-5 space-y-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-white/75 transition-colors hover:text-white">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.18em] text-white/40">Contact</h3>
              <ul className="mt-5 space-y-3 text-sm text-white/75">
                <li><a href={`mailto:${contact.email}`} className="transition-colors hover:text-white">{contact.email}</a></li>
                <li>{contact.hours}</li>
                <li><Link href="/contact" className="transition-colors hover:text-white">Send your inquiry</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.18em] text-white/40">Language</h3>
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/75">
                {languages.map((l) => (
                  <li key={l}><button className="transition-colors hover:text-white">{l}</button></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Offices */}
        <div className="mt-16 grid gap-8 border-t border-white/12 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((office) => (
            <div key={office.country}>
              <h4 className="font-display text-base font-semibold text-white">{office.country}</h4>
              <p className="mt-3 text-xs leading-relaxed text-white/55">{office.legal}</p>
              <p className="mt-2 text-xs leading-relaxed text-white/55">{office.address}</p>
              <p className="mt-2 text-xs text-white/55">Tel: {office.phone}</p>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/12 pt-8 text-sm text-white/45 sm:flex-row sm:items-center">
          <span>© {year} {SITE.legalName}. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/news" className="transition-colors hover:text-white">Terms & Conditions</Link>
            <Link href="/news" className="transition-colors hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

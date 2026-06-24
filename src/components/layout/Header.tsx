"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { navItems } from "@/data/navigation";
import { useScrolled } from "@/hooks/useScrolled";
import { useLockBody } from "@/hooks/useLockBody";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { SITE } from "@/lib/seo";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  useLockBody(open);
  useEffect(() => setOpen(false), [pathname]);

  // Only the home page has a dark full-bleed hero behind the header.
  // While at the top (not scrolled) there, the header sits over a dark image -> use light text.
  const overHero = pathname === "/" && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 h-[90px] transition-all duration-500 ease-smooth",
          scrolled
            ? "border-b border-line bg-white/85 shadow-[0_8px_30px_-16px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            : "border-b border-transparent"
        )}
      >
        {/* readability scrim only when floating over the dark hero */}
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/15 to-transparent transition-opacity duration-500",
            overHero ? "opacity-100" : "opacity-0"
          )}
        />

        <div className="mx-auto flex h-full max-w-frame items-center justify-between px-6 sm:px-8 lg:px-12">
          <Link
            href="/"
            className={cn(
              "flex items-center gap-2 font-display text-2xl font-extrabold tracking-tight transition-colors duration-300",
              overHero ? "text-white" : "text-ink"
            )}
          >
            {SITE.name}
            <span className="h-2 w-2 translate-y-1 rounded-full bg-accent" />
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group relative py-1 text-[15px] font-medium transition-colors duration-300",
                    overHero ? "text-white/90 hover:text-white" : "text-ink"
                  )}
                >
                  {item.label}
                  <span className={cn("absolute -bottom-0.5 left-0 h-0.5 bg-accent transition-all duration-300 ease-smooth", active ? "w-full" : "w-0 group-hover:w-full")} />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <LanguageSwitcher light={overHero} />
            </div>
            <Link
              href="/contact"
              className="hidden rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-accent-dark lg:inline-flex"
            >
              Contact Us
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 lg:hidden",
                overHero ? "border-white/30 text-white" : "border-ink/15 text-ink"
              )}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { languages } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ light = false }: { light?: boolean }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<(typeof languages)[number]>("EN");

  return (
    <div className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex items-center gap-1 text-sm font-medium transition-colors",
          light ? "text-white/80 hover:text-white" : "text-ink/80 hover:text-ink"
        )}
      >
        {current}
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 min-w-[5rem] overflow-hidden rounded-xl border border-line bg-white py-1 shadow-lg">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setCurrent(lang);
                setOpen(false);
              }}
              className={cn(
                "block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-surface",
                lang === current ? "text-accent" : "text-ink/70"
              )}
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

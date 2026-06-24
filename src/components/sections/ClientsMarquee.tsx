import { MarqueeRow } from "@/components/anim/MarqueeRow";
import { clients } from "@/data/clients";

const half = Math.ceil(clients.length / 2);
const rowA = clients.slice(0, half);
const rowB = clients.slice(half);

function Logo({ name }: { name: string }) {
  return (
    <span className="mx-8 flex h-20 shrink-0 items-center font-display text-3xl font-semibold tracking-tight text-ink/25 transition-colors duration-300 hover:text-ink lg:text-4xl">
      {name}
    </span>
  );
}

export function ClientsMarquee() {
  return (
    <section className="border-y border-line bg-white py-16">
      <p className="mb-10 text-center text-xs uppercase tracking-[0.2em] text-secondary">
        Trusted by leading organisations across the region
      </p>
      <MarqueeRow speed={30}>
        {rowA.map((c) => <Logo key={c} name={c} />)}
      </MarqueeRow>
      <MarqueeRow speed={34} reverse className="mt-2">
        {rowB.map((c) => <Logo key={c} name={c} />)}
      </MarqueeRow>
    </section>
  );
}

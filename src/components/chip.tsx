import type { ReactNode } from "react";

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-fg/15 bg-fg/[0.03] px-2.5 py-1 font-mono text-xs text-fg/80 transition-colors hover:border-accent/40 hover:bg-accent/5 hover:text-accent">
      {children}
    </span>
  );
}

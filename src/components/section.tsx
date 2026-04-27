import type { ComponentType, ReactNode } from "react";

type IconComponent = ComponentType<{ className?: string }>;

type SectionProps = {
  id: string;
  title: string;
  icon?: IconComponent;
  children: ReactNode;
};

export function Section({ id, title, icon: Icon, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 py-12 md:py-16">
      <div className="mb-8 flex items-baseline gap-3">
        <span aria-hidden className="font-pixel text-2xl text-accent">
          {">"}
        </span>
        {Icon && <Icon className="h-5 w-5 self-center text-accent" />}
        <h2 className="font-pixel text-3xl tracking-wide text-fg md:text-4xl">{title}</h2>
        <span className="ml-2 h-px flex-1 bg-fg/10" />
      </div>
      {children}
    </section>
  );
}

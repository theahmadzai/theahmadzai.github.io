import { skills } from "@/content/skills";
import { Chip } from "./chip";
import { Section } from "./section";
import { SkillsIcon } from "./svg/section-icons";

export function Skills() {
  return (
    <Section id="skills" title="skills" icon={SkillsIcon}>
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group) => (
          <div key={group.label} className="rounded-lg border border-fg/10 bg-fg/[0.02] p-5">
            <p className="mb-3 font-mono text-xs uppercase tracking-wider text-fg/50">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

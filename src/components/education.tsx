import { education } from "@/content/education";
import { Section } from "./section";
import { EducationIcon } from "./svg/section-icons";

export function Education() {
  return (
    <Section id="education" title="education" icon={EducationIcon}>
      <ul className="space-y-4">
        {education.map((entry) => (
          <li
            key={entry.school}
            className="flex flex-wrap items-baseline justify-between gap-2 rounded-lg border border-fg/10 bg-fg/[0.02] p-5"
          >
            <div>
              <p className="text-base font-medium text-fg md:text-lg">{entry.school}</p>
              <p className="text-sm text-fg/70 md:text-base">
                {entry.degree} <span className="text-fg/40">·</span> {entry.field}
              </p>
            </div>
            <p className="font-mono text-sm text-fg/50">
              {entry.start} — {entry.end}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

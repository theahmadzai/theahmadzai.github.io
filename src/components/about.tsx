import { profile } from "@/content/profile";
import { LinkedText } from "./linked-text";
import { Section } from "./section";
import { AboutIcon } from "./svg/section-icons";

export function About() {
  return (
    <Section id="about" title="about" icon={AboutIcon}>
      <p className="max-w-3xl text-pretty text-base leading-relaxed text-fg/80 md:text-lg">
        <LinkedText text={profile.about} links={profile.aboutLinks} />
      </p>
    </Section>
  );
}

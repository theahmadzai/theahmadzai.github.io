// Pixel-art section icons. 16x16 grid, currentColor fill.
// Designed as rect "pixels" so they stay crisp at any size and match the retro brand.

type IconProps = {
  className?: string;
};

export function AboutIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden>
      <rect x="5" y="2" width="6" height="2" />
      <rect x="4" y="3" width="1" height="4" />
      <rect x="11" y="3" width="1" height="4" />
      <rect x="5" y="6" width="6" height="2" />
      <rect x="3" y="9" width="10" height="1" />
      <rect x="2" y="10" width="12" height="4" />
    </svg>
  );
}

export function ExperienceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden>
      <rect x="6" y="2" width="4" height="1" />
      <rect x="5" y="3" width="1" height="2" />
      <rect x="10" y="3" width="1" height="2" />
      <rect x="2" y="5" width="12" height="2" />
      <rect x="2" y="9" width="5" height="4" />
      <rect x="9" y="9" width="5" height="4" />
      <rect x="7" y="8" width="2" height="2" />
      <rect x="7" y="11" width="2" height="2" />
    </svg>
  );
}

export function SkillsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden>
      <rect x="6" y="1" width="4" height="2" />
      <rect x="6" y="13" width="4" height="2" />
      <rect x="1" y="6" width="2" height="4" />
      <rect x="13" y="6" width="2" height="4" />
      <rect x="3" y="3" width="2" height="2" />
      <rect x="11" y="3" width="2" height="2" />
      <rect x="3" y="11" width="2" height="2" />
      <rect x="11" y="11" width="2" height="2" />
      <rect x="3" y="3" width="10" height="10" />
      <rect x="6" y="6" width="4" height="4" fill="var(--color-bg)" />
    </svg>
  );
}

export function EducationIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden>
      <rect x="7" y="2" width="2" height="1" />
      <rect x="5" y="3" width="6" height="1" />
      <rect x="3" y="4" width="10" height="1" />
      <rect x="1" y="5" width="14" height="2" />
      <rect x="3" y="7" width="10" height="1" />
      <rect x="5" y="8" width="6" height="1" />
      <rect x="13" y="6" width="1" height="6" />
      <rect x="12" y="11" width="3" height="2" />
    </svg>
  );
}

export function ProjectsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden>
      <rect x="2" y="3" width="5" height="1" />
      <rect x="2" y="4" width="12" height="1" />
      <rect x="1" y="5" width="14" height="8" />
      <rect x="2" y="6" width="12" height="6" fill="var(--color-bg)" />
      <rect x="4" y="8" width="2" height="2" fill="currentColor" />
      <rect x="7" y="8" width="2" height="2" fill="currentColor" />
      <rect x="10" y="8" width="2" height="2" fill="currentColor" />
    </svg>
  );
}

export function ContactIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden>
      <rect x="1" y="3" width="14" height="10" />
      <rect x="2" y="4" width="12" height="8" fill="var(--color-bg)" />
      <rect x="2" y="4" width="2" height="1" fill="currentColor" />
      <rect x="3" y="5" width="2" height="1" fill="currentColor" />
      <rect x="4" y="6" width="2" height="1" fill="currentColor" />
      <rect x="5" y="7" width="2" height="1" fill="currentColor" />
      <rect x="6" y="8" width="4" height="1" fill="currentColor" />
      <rect x="9" y="7" width="2" height="1" fill="currentColor" />
      <rect x="10" y="6" width="2" height="1" fill="currentColor" />
      <rect x="11" y="5" width="2" height="1" fill="currentColor" />
      <rect x="12" y="4" width="2" height="1" fill="currentColor" />
    </svg>
  );
}

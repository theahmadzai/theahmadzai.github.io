import { profile } from "@/content/profile";
import { Section } from "./section";
import { ContactIcon } from "./svg/section-icons";

type ContactMethod = {
  label: string;
  handle: string;
  href: string;
  external?: boolean;
};

const methods: ContactMethod[] = [
  {
    label: "Email",
    handle: profile.email,
    href: profile.socials.email,
  },
  {
    label: "LinkedIn",
    handle: "@theahmadzai",
    href: profile.socials.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    handle: "@theahmadzai",
    href: profile.socials.github,
    external: true,
  },
];

export function Contact() {
  return (
    <Section id="contact" title="contact" icon={ContactIcon}>
      <p className="max-w-2xl text-pretty text-base text-fg/80 md:text-lg">
        Open to senior backend, full-stack, and React Native roles. The fastest way to reach me:
      </p>
      <ul className="mt-8 space-y-3">
        {methods.map(({ label, handle, href, external }) => (
          <li key={label}>
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="group flex items-center justify-between gap-4 rounded-lg border border-fg/10 bg-fg/[0.02] px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/[0.04]"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs uppercase tracking-wider text-fg/50 group-hover:text-accent">
                  {label}
                </span>
                <span className="font-mono text-sm text-fg md:text-base">{handle}</span>
              </div>
              <span
                aria-hidden
                className="font-mono text-fg/30 transition-all group-hover:translate-x-1 group-hover:text-accent"
              >
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

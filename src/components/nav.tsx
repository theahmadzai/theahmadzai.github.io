import { profile } from "@/content/profile";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-40 -mx-4 mb-2 border-b border-fg/10 bg-bg/80 px-4 py-3 backdrop-blur-md md:-mx-6 md:px-6">
      <div className="relative mx-auto flex max-w-3xl items-center justify-between gap-3">
        <a
          href="#top"
          aria-label={`${profile.name} - back to top`}
          className="font-pixel text-2xl text-fg transition-colors hover:text-accent"
        >
          {"</>"}
        </a>
        <ul className="hidden items-center gap-6 font-mono text-sm text-fg/70 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}

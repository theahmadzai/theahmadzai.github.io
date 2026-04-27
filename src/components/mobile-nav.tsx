"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#skills", label: "skills" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-fg/15 text-fg/70 transition-all hover:border-accent hover:text-accent"
      >
        {open ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-5 w-5"
            aria-hidden
          >
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-5 w-5"
            aria-hidden
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>
      {open && (
        <>
          <div
            className="fixed inset-0 top-[57px] z-40 bg-bg/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <ul
            id="mobile-menu"
            className="absolute left-0 right-0 top-full z-50 mx-4 mt-2 space-y-1 rounded-lg border border-fg/15 bg-bg p-2 shadow-lg"
          >
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 font-mono text-sm text-fg/80 transition-colors hover:bg-fg/5 hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

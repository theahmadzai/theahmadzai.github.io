import { profile } from "@/content/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-12 border-t border-fg/10 py-8">
      <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-fg/50">
        <p>
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}

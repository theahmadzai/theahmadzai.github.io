import { profile } from "@/content/profile";
import { PixelAvatar } from "./pixel-avatar";
import { Socials } from "./socials";

export function Hero() {
  return (
    <header className="pt-12 md:pt-20">
      <div className="flex flex-col-reverse items-start gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 font-mono text-sm text-accent">
            <span className="mr-1 inline-block animate-pulse">▸</span>
            hello world
          </p>
          <h1 className="font-pixel text-5xl leading-none tracking-wide text-fg md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-fg/80 md:text-xl">
            {profile.title} <span className="text-fg/40">·</span>{" "}
            <span className="font-mono">{profile.location}</span>
          </p>
          <p className="mt-6 max-w-2xl text-balance text-base text-fg/70 md:text-lg">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 font-mono text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-accent-bright hover:shadow-[0_4px_0_0_rgb(10_22_40)] active:translate-y-0 active:shadow-none"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
                aria-hidden
              >
                <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
              </svg>
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-fg/20 px-4 py-2 font-mono text-sm font-medium text-fg transition-all hover:-translate-y-0.5 hover:border-fg"
            >
              Get in touch
            </a>
            <div className="ml-1">
              <Socials />
            </div>
          </div>
        </div>
        <div className="shrink-0">
          <PixelAvatar src="/avatar.png" alt={`${profile.name} pixel portrait`} size={128} />
        </div>
      </div>
    </header>
  );
}

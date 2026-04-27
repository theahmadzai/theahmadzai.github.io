import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-4 py-16 text-center md:px-6">
      <p className="font-mono text-sm text-accent">▸ 404</p>
      <h1 className="mt-4 font-pixel text-6xl text-fg md:text-8xl">page not found</h1>
      <p className="mt-6 max-w-md text-base text-fg/70 md:text-lg">
        The page you're looking for doesn't exist — or has wandered off into the void.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 font-mono text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-accent-bright"
      >
        ← Back home
      </Link>
    </main>
  );
}

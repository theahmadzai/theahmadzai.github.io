import { Fragment } from "react";

type LinkedTextProps = {
  text: string;
  links?: Record<string, string>;
};

const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function LinkedText({ text, links }: LinkedTextProps) {
  const keys = links ? Object.keys(links) : [];
  if (keys.length === 0) return <>{text}</>;

  const pattern = new RegExp(`(${keys.map(escapeRegex).join("|")})`, "g");
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, i) => {
        const href = links?.[part];
        if (href) {
          return (
            <a
              // biome-ignore lint/suspicious/noArrayIndexKey: parts are stable per-render
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-accent underline-offset-4 hover:underline"
            >
              {part}
            </a>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

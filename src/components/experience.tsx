import { experience } from "@/content/experience";
import { Chip } from "./chip";
import { Section } from "./section";
import { ExperienceIcon } from "./svg/section-icons";

export function Experience() {
  return (
    <Section id="experience" title="experience" icon={ExperienceIcon}>
      <ol className="space-y-10">
        {experience.map((job) => {
          const HeadingTag = job.url ? "a" : "div";
          return (
            <li
              key={`${job.company}-${job.role}`}
              className="group relative rounded-lg border border-fg/10 bg-fg/[0.02] p-6 transition-colors hover:border-accent/30 hover:bg-accent/[0.03] md:p-8"
            >
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-4">
                  {(job.logoLight || job.logoDark) && (
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-fg/10 bg-bg p-2">
                      {job.logoLight && (
                        <img
                          src={job.logoLight}
                          alt={`${job.company} logo`}
                          className="block h-full w-full object-contain dark:hidden"
                        />
                      )}
                      {job.logoDark && (
                        <img
                          src={job.logoDark}
                          alt=""
                          className="hidden h-full w-full object-contain dark:block"
                        />
                      )}
                    </div>
                  )}
                  <div>
                    <HeadingTag
                      {...(job.url ? { href: job.url, target: "_blank", rel: "noreferrer" } : {})}
                      className={`font-pixel text-2xl text-fg md:text-3xl ${
                        job.url ? "transition-colors hover:text-accent" : ""
                      }`}
                    >
                      {job.company}
                    </HeadingTag>
                    <p className="mt-1 text-base text-fg/70 md:text-lg">{job.role}</p>
                    {job.location && (
                      <p className="mt-0.5 font-mono text-xs text-fg/50">{job.location}</p>
                    )}
                  </div>
                </div>
                <p className="font-mono text-sm text-fg/50">
                  {job.start} - {job.end}
                </p>
              </div>
              {job.lead && (
                <p className="mt-4 text-pretty text-sm leading-relaxed text-fg/80 md:text-base">
                  {job.lead}
                </p>
              )}
              <ul className="mt-4 space-y-2.5 text-fg/80">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-relaxed md:text-base">
                    <span
                      aria-hidden
                      className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 bg-accent"
                    />
                    <span className="text-pretty">{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {job.stack.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}

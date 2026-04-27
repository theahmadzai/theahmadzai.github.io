import { type ProjectTag, projects } from "@/content/projects";
import { Chip } from "./chip";
import { Section } from "./section";
import { ProjectsIcon } from "./svg/section-icons";

const TAG_COLORS: Record<ProjectTag, string> = {
  work: "border-blue-500/40 bg-blue-500/10 text-blue-400",
  hobby: "border-purple-500/40 bg-purple-500/10 text-purple-400",
  school: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
  volunteer: "border-amber-500/40 bg-amber-500/10 text-amber-400",
};

export function Projects() {
  return (
    <Section id="projects" title="projects" icon={ProjectsIcon}>
      <ul className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => {
          const HeadingTag = project.url ? "a" : "div";
          return (
            <li
              key={project.name}
              className="group rounded-lg border border-fg/10 bg-fg/[0.02] p-5 transition-colors hover:border-accent/30 hover:bg-accent/[0.03]"
            >
              <HeadingTag
                {...(project.url ? { href: project.url, target: "_blank", rel: "noreferrer" } : {})}
                className={`font-pixel text-xl text-fg md:text-2xl ${
                  project.url ? "transition-colors group-hover:text-accent" : ""
                }`}
              >
                {project.name}
              </HeadingTag>
              {project.tags && project.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-sm border px-1.5 py-px font-mono text-[10px] uppercase tracking-wider ${TAG_COLORS[tag]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <p className="mt-3 text-pretty text-sm leading-relaxed text-fg/80">{project.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

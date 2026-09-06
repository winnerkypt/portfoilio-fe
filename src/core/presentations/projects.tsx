import { andika } from "../libs/fonts";
import { projects } from "../data/projects";
import { SectionHeading } from "../components/section-heading";
import { ProjectsRail } from "../components/projects-rail";

export const Projects = () => {
  return (
    <section id="projects" className="surface-ink scroll-mt-24">
      <div className="container flex flex-col gap-8 py-16 lg:py-24">
        <div className="flex flex-col gap-3">
          <SectionHeading eyebrow="Selected work" title="Projects" tone="cream" />
          <p className={`${andika.className} max-w-prose text-body text-cream/65`}>
            Shipped client and product work — CMS platforms, marketing sites, and
            campaign tooling. Scroll the gallery to browse all {projects.length}.
          </p>
        </div>

        <ProjectsRail projects={projects} />
      </div>
    </section>
  );
};

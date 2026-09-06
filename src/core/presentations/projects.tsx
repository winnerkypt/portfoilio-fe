import { Card } from "../components/card";
import { andika } from "../libs/fonts";
import { projects } from "../data/projects";
import { SectionHeading } from "../components/section-heading";

export const Projects = () => {
  return (
    <section id="projects" className="surface-ink scroll-mt-24">
      <div className="container flex flex-col gap-10 py-16 lg:py-24">
        <div className="flex flex-col gap-3">
          <SectionHeading eyebrow="Selected work" title="Projects" tone="cream" />
          <p className={`${andika.className} max-w-prose text-body text-cream/65`}>
            Shipped client and product work — CMS platforms, marketing sites, and
            campaign tooling.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

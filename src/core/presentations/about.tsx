import Image from "next/image";
import { andika } from "../libs/fonts";
import { SectionHeading } from "../components/section-heading";

const focusAreas = ["CMS platforms", "RESTful APIs", "Full-cycle deployment", "QA & test cases"];

export const About = () => {
  return (
    <section id="about" className="surface-warm scroll-mt-24">
      <div className="container grid items-center gap-10 pb-16 pt-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-24 lg:pt-12">
        <div className="flex flex-col gap-6">
          <SectionHeading eyebrow="Who I am" title="About" />

          <p className={`${andika.className} max-w-prose text-lead text-ink/85`}>
            I&apos;m a software engineer with practical experience developing CMS
            platforms, designing RESTful APIs, and managing full-cycle web
            deployment. I&apos;m comfortable with quality assurance practices,
            including writing test cases to keep systems reliable, and I&apos;ve
            recently contributed to UI design to build a broader understanding of
            user experience.
          </p>

          <p className={`${andika.className} max-w-prose text-body text-ink/65`}>
            With nearly a year of professional experience, I&apos;m looking for a
            Backend Engineer role where I can deepen my technical expertise and
            help build scalable, high-quality backend systems.
          </p>

          <ul className="flex flex-wrap gap-2 pt-1">
            {focusAreas.map((area) => (
              <li
                key={area}
                className={`${andika.className} rounded-pill border border-teal/25 bg-teal-soft px-3 py-1.5 text-small text-teal`}
              >
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <span
            aria-hidden
            className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-card border-2 border-brown/30 sm:block"
          />
          <Image
            src="/images/profile.png"
            alt="Portrait of Kanyapat Wittayamanitkul"
            width={640}
            height={571}
            sizes="(max-width: 1024px) 90vw, 40vw"
            className="relative aspect-[9/8] w-full rounded-card object-cover shadow-lift"
          />
        </div>
      </div>
    </section>
  );
};

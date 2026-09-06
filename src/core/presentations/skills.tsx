import Image from "next/image";
import { andika, ranchers } from "../libs/fonts";
import skillsData from "../data/skills.json";
import { SectionHeading } from "../components/section-heading";

interface SkillItem {
  id: number;
  name: string;
  logo: string;
  alt: string;
}

const Divider = () => (
  <div
    aria-hidden
    className="h-10 w-full bg-[url('/images/gridLine.png')] bg-[length:auto_100%] bg-repeat-x opacity-70"
  />
);

export const Skill = () => {
  const skills = skillsData.skills as SkillItem[];

  return (
    <section id="skills" className="surface-paper scroll-mt-24">
      <Divider />

      <div className="container flex flex-col gap-10 py-16 lg:py-20">
        <div className="flex flex-col items-start gap-3">
          <SectionHeading eyebrow="What I build with" title="Skills" />
          <p className={`${andika.className} max-w-prose text-body text-ink/65`}>
            Day-to-day tools across frontend, backend, and the glue in between.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <li
              key={skill.id}
              className="flex items-center gap-3 rounded-card border border-ink/10 bg-white/45 px-4 py-3 shadow-raise transition-[transform,border-color,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-moss/35 hover:bg-white/70"
            >
              <Image
                src={skill.logo}
                alt=""
                aria-hidden
                width={40}
                height={40}
                className="h-8 w-8 shrink-0 object-contain sm:h-10 sm:w-10"
              />
              <span className={`${ranchers.className} text-h3 text-ink`}>
                {skill.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Divider />
    </section>
  );
};

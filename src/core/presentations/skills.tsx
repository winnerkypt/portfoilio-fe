import Image from "next/image";
import { ranchers } from "../libs/fonts";
import skillsData from "../data/skills.json";

interface Skill {
  id: number;
  name: string;
  logo: string;
  alt: string;
}
export const Skill = () => {
  return (
    <div className="bg-light-yellow">
      <Image
        src="/images/gridLine.png"
        alt="Skills"
        width={100000}
        height={100000}
        className="w-full h-auto object-cover"
      />
      <div className="container flex flex-wrap gap-9 justify-center py-16">
        {skillsData.skills.map((skill: Skill) => (
          <div
            key={skill.id}
            className="flex flex-row gap-3 items-center justify-items-center"
          >
            <Image
              src={skill.logo}
              alt="Skills"
              width={56}
              height={56}
              className="object-cover"
              style={{ width: "clamp(24px, 5vw, 56px)" }}
            />
            <p className={`${ranchers.className} text-36`}>{skill.name}</p>
          </div>
        ))}
      </div>
      <Image
        src="/images/gridLine.png"
        alt="Skills"
        width={100000}
        height={100000}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

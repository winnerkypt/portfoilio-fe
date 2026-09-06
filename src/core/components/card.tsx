import Image from "next/image";
import Link from "next/link";
import { andika, ranchers } from "../libs/fonts";
import { Project } from "../data/types/Project";
import { Icon } from "./icon";

interface CardProps {
  project: Project;
}

export const Card: React.FC<CardProps> = ({ project }) => {
  return (
    <article className="h-full">
      <Link
        href={project.link}
        target="_blank"
        rel="noreferrer noopener"
        className="group flex h-full flex-col overflow-hidden rounded-card border border-cream/12 bg-brown shadow-raise transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-pink/50 hover:shadow-lift"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink/30">
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            fill
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 30vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className={`${ranchers.className} text-h3 text-cream`}>
              {project.name}
            </h3>
            <span
              aria-hidden
              className="mt-0.5 shrink-0 text-pink transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              <Icon name="arrowOutward" className="text-icon" />
            </span>
          </div>

          <p className={`${andika.className} text-small text-cream/70`}>
            {project.description}
          </p>

          <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className={`${andika.className} rounded-pill bg-cream/10 px-2.5 py-1 text-micro uppercase text-sand`}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </article>
  );
};

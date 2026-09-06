"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Card } from "./card";
import { Icon } from "./icon";
import { Project } from "../data/types/Project";

interface ProjectsRailProps {
  projects: Project[];
}

interface RailPosition {
  ratio: number;
  thumb: number;
  atStart: boolean;
  atEnd: boolean;
}

const RESTING: RailPosition = { ratio: 0, thumb: 1, atStart: true, atEnd: true };

const readPosition = (rail: HTMLUListElement): RailPosition => {
  const scrollable = rail.scrollWidth - rail.clientWidth;

  if (scrollable <= 1) return RESTING;

  return {
    ratio: rail.scrollLeft / scrollable,
    thumb: rail.clientWidth / rail.scrollWidth,
    atStart: rail.scrollLeft <= 1,
    atEnd: rail.scrollLeft >= scrollable - 1,
  };
};

export const ProjectsRail = ({ projects }: ProjectsRailProps) => {
  const railRef = useRef<HTMLUListElement>(null);
  const [position, setPosition] = useState<RailPosition>(RESTING);

  const sync = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    setPosition(readPosition(rail));
  }, []);

  useEffect(() => {
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [sync]);

  const step = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;

    const first = rail.firstElementChild as HTMLElement | null;
    const distance = first ? first.offsetWidth + 24 : rail.clientWidth;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    rail.scrollBy({
      left: direction * distance,
      behavior: reduced ? "auto" : "smooth",
    });
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => step(-1)}
          disabled={position.atStart}
          aria-label="Show previous projects"
          className="flex h-11 w-11 items-center justify-center rounded-pill border border-cream/20 text-cream transition-[background-color,border-color,opacity] duration-200 ease-out hover:border-sand hover:bg-cream/10 disabled:pointer-events-none disabled:opacity-30"
        >
          <Icon name="arrowLeft" className="text-icon" />
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          disabled={position.atEnd}
          aria-label="Show next projects"
          className="flex h-11 w-11 items-center justify-center rounded-pill border border-cream/20 text-cream transition-[background-color,border-color,opacity] duration-200 ease-out hover:border-sand hover:bg-cream/10 disabled:pointer-events-none disabled:opacity-30"
        >
          <Icon name="arrowRight" className="text-icon" />
        </button>
      </div>

      <ul
        ref={railRef}
        onScroll={sync}
        tabIndex={0}
        role="region"
        aria-label="Projects gallery, scrollable"
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4 pb-1 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0"
      >
        {projects.map((project) => (
          <li
            key={project.id}
            className="w-[82%] shrink-0 snap-start sm:w-[52%] lg:w-[calc((100%-3rem)/3)]"
          >
            <Card project={project} />
          </li>
        ))}
      </ul>

      {/*
        A proportional bar instead of dots: it reports how much of the rail is
        left, which dots cannot do once the card count grows.
      */}
      <div
        aria-hidden
        className="h-[3px] w-full overflow-hidden rounded-pill bg-cream/12"
      >
        <span
          className="block h-full rounded-pill bg-sand"
          style={{
            width: `${position.thumb * 100}%`,
            transform: `translateX(${(position.ratio * (1 / position.thumb - 1)) * 100}%)`,
          }}
        />
      </div>
    </div>
  );
};

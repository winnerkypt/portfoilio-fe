"use client";

import Image from "next/image";
import { ranchers } from "../libs/fonts";
import React, { useState } from "react";
import { Project } from "../data/types/Project";
import Link from "next/link";
import { motion } from "framer-motion";

interface CardProps {
  project: Project;
}

export const Card: React.FC<CardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{ scale: isHovered ? 1.05 : 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group bg-brown p-4 w-60 md:w-full lg:w-72 h-full leading-[1.25] rounded-md"
    >
      <Link href={project.link} target="_blank" className="block h-full">
        <Image
          src={project.image}
          alt="Portfolio Image"
          width={500}
          height={500}
          className="w-full lg:h-[150px] h-[120px] object-cover rounded-md"
        />
        <div className="flex flex-col items-center justify-between mt-3">
          <div className="flex flex-row justify-between items-center">
            <div className="grid gap-[2px]">
              {/* <p className="text-[12px] text-pink font-bold">Atmosph</p> */}
              <h1 className={`${ranchers.className} text-20 text-light-yellow`}>
                {project.name}
              </h1>
            </div>
            {/* <motion.div
              animate={{ rotate: isHovered ? -45 : 0 }}
              transition={{ duration: 0.3 }}
              className="bg-green rounded-full p-1 text-light-yellow"
            >
              <ArrowForwardIcon
                style={{ fontSize: "clamp(10px, 3vw, 25px)", color: "#FFF9DC" }}
              />
            </motion.div> */}
          </div>
          <p className="text-[12px] text-light-yellow text-center leading-[1.25] font-light line-clamp-3">
            {project.description}
          </p>
          <div
            className={`${ranchers.className} bg-green text-light-yellow rounded-md p-1 text-[12px] mt-3`}
          >
            Click to Website!
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

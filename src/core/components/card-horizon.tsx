"use client";
import { andika, ranchers } from "../libs/fonts";
import Image from "next/image";

export const CardHorizon = () => {
  return (
    <div className="container grid grid-cols-2 items-stretch">
      <div className="grid  gap-4 bg-light-yellow shadow-lg rounded-l-lg p-12 justify-center">
        <h1
          className={`${ranchers.className} text-green text-center leading-none`}
          style={{ fontSize: "clamp(10px, 10vw, 64px)" }}
        >
          helloooo
        </h1>
        <p
          className={`${andika.className} text-brown text-base`}
          style={{ fontSize: "clamp(10px, 10vw, 16px)" }}
        >
          I'm a software engineer with practical experience in developing CMS
          platforms, designing RESTful APIs, and managing full-cycle web
          deployment. Familiar with quality assurance practices including
          writing test cases to ensure system reliability. Recently contributed
          to UI design to gain a broader understanding of user experience. With
          nearly one year of professional experience, I am seeking a Backend
          Engineer position where I can further enhance my technical expertise
          and contribute to building scalable and high-quality backend systems.
        </p>
      </div>
      <div className="relative">
        <img
          src={"/images/profile.png"}
          alt="Portfolio Image"
          className="w-full h-full object-cover rounded-r-lg shadow-lg"
        />
      </div>
    </div>
  );
};

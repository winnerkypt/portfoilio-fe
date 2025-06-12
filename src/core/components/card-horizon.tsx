"use client";
import { useMediaQuery } from "react-responsive";
import { andika, ranchers } from "../libs/fonts";
import React, { useEffect, useState } from "react";
export const CardHorizon = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isTablet = useMediaQuery({ maxWidth: 983 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // แสดง NavDesk เป็นค่าเริ่มต้นจนกว่า Component จะ Mount
  if (!isMounted) {
    return (
      <div className="container grid grid-cols-1 items-stretch shadow-b-lg"></div>
    );
  }
  return (
    <div
      className={`container grid ${
        isTablet ? "grid-cols-1" : "grid-cols-2"
      } items-stretch shadow-b-lg`}
    >
      <div
        className={`grid  gap-4 bg-light-yellow ${
          isMobile ? "p-8" : "p-12"
        } justify-center  ${isTablet ? "rounded-lg" : "rounded-l-lg"}`}
      >
        <h1
          className={`${ranchers.className} text-green text-center leading-none`}
          style={{ fontSize: "clamp(10px, 10vw, 64px)" }}
        >
          helloooo
        </h1>
        <p className={`${andika.className} text-brown text-content`}>
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
      {isTablet ? (
        ""
      ) : (
        <div className="relative">
          <img
            src={"/images/profile.png"}
            alt="Portfolio Image"
            className="w-full h-full object-cover rounded-r-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

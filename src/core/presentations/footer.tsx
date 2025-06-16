"use client";

import Image from "next/image";
import { ContactFooter } from "../components/footer/contact";
import { useMediaQuery } from "react-responsive";
import React, { useEffect, useState } from "react";
export const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return (
      <footer className="bg-brown text-white flex flex-row gap-[10%]">
        <Image
          src="/images/footer.png"
          alt="Logo"
          width={700}
          height={50}
          className={`h-auto object-cover`}
        />
        <ContactFooter className="relative" />
      </footer>
    );
  }
  return (
    <footer
      className={`bg-brown text-white flex ${
        isMobile ? " justify-center" : " justify-between"
      }`}
    >
      {isMobile ? (
        <Image
          src="/images/footer.png"
          alt="Logo"
          width={700}
          height={50}
          className={`h-auto w-full object-cover absolute`}
        />
      ) : (
        <Image
          src="/images/footer.png"
          alt="Logo"
          width={700}
          height={50}
          className={`h-auto object-cover `}
          style={{ width: "clamp(10px, 50vw, 700px)" }}
        />
      )}
      <ContactFooter
        className={` relative  ${
          isMobile
            ? "top-5"
            : "gap-[3%] p-4 text-light-yellow flex flex-col justify-center"
        }`}
      />
    </footer>
  );
};

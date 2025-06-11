"use client";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { NavMobile } from "./nav-mobile";
import { NavDesk } from "./nav-desk";
import { NavBarType } from "./type";

export const Navbar = () => {

  const navItems: NavBarType[] = [
    { label: "About Me", href: "/about-me" },
    { label: "My Skills", href: "/skills" },
    { label: "My Projects", href: "/projects" },
    { label: "Contact Me", href: "/contacts" },
  ]

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // แสดง NavDesk เป็นค่าเริ่มต้นจนกว่า Component จะ Mount
  if (!isMounted) {
    return (
      <nav className="fixed z-[300] bg-light-yellow text-white w-full h-[70px] flex items-center"></nav>
    );
  }

  return (
    <nav className="fixed z-[300] bg-light-yellow text-white w-full h-[70px] flex items-center">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="text-nav font-bold">
          <span className="text-brown">&lt;SoftwareEngineer</span>
          <span className="text-green"> title</span>
          <span className="text-brown"> = "</span>
          <span className="text-pink">Portfolio</span>
          <span className="text-brown">"/&gt;</span>
        </div>
        {isMobile ? <NavMobile navItems={navItems}/> : <NavDesk />}
      </div>
    </nav>
  );
};

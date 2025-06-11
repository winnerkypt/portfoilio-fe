"use client";

import { useMediaQuery } from "react-responsive";
import { NavArrow } from "./nav-arrow";

export const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 425 });

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
        <NavArrow />
      </div>
    </nav>
  );
};

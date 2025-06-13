"use client";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { NavBarType } from "./type";
import Link from "next/link";

export const NavMobile = ({ navItems }: { navItems: NavBarType[] }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <MenuIcon
        className="cursor-pointer text-brown"
        onClick={toggleDrawer(true)}
      />
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <div className="flex flex-col bg-brown items-start justify-start h-screen relative">
          <div className="flex items-center justify-between w-full px-[30px] py-4 bg-brown border-b border-light-yellow mb-[30px]">
            <CloseIcon
              sx={{ fontSize: 40 }}
              className="cursor-pointer text-light-yellow"
              onClick={toggleDrawer(false)}
            />
          </div>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={
                item.label === "Support Center" ||
                item.href.startsWith("Support")
                  ? "_blank"
                  : "_self"
              }
              onClick={toggleDrawer(false)}
              className={`text-light-yellow text-[16px] mx-[30px] my-[12px] py-[4px]`}
              // className={`text-white text-[16px] mx-[30px] my-[12px] py-[4px]
              //   {${item.href === pathname ? "border-b-2 border-[#03FFC7]" : ""}
              //   `}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { NavDesk } from "./nav-desk";
// import { NavMobile } from "./nav-mobile";
import { useMediaQuery } from "react-responsive";
import { NavbarType } from "./type";
// import { useTranslation } from "@/app/i18n/client";

export const Navbar = ({ lng }: { lng: string }) => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1068 });
  // const { t } = useTranslation(lng,"navbar");

  const navItems: NavbarType[] = [
    // { label: t("maService"), href: "/ma-service" },
    // { label: t("servicesAndSolutions"), href: "/services-and-solutions" },
    // { label: t("product"), href: "/product" },
    // { label: t("aboutSdc"), href: "/about" },
    // { label: t("news"), href: "/news" },
    // { label: t("career"), href: "/careers" },
    // { label: t("supportCenter"), href: "https://supportcenter.systems.co.th/" },
    // { label: t("contactUs"), href: "/contact" }
  ]

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // แสดง NavDesk เป็นค่าเริ่มต้นจนกว่า Component จะ Mount
  if (!isMounted) {
    return (
      <nav className="bg-navy-secondary border-b border-[#42507A] text-white w-full justify-between h-[70px] flex items-center"></nav>
    );
  }

  return (
    <nav className="fixed z-[300] bg-navy-secondary border-b border-[#42507A] text-white w-full justify-between h-[70px] flex items-center">
      <div className="container flex justify-between items-center h-full">
        <Link href="/" className="flex-shrink-0">
          <Image src="/images/logo-sdc.png" alt="logo" width={85} height={30} />
        </Link>
        {/* {isMobile ? (
          <NavMobile navItems={navItems} />
        ) : (
          <NavDesk navItems={navItems} />
        )} */}
      </div>
    </nav>
  );
};

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NavBarType } from "./type";
import { Icon } from "../icon";

export const NavMobile = ({ navItems }: { navItems: NavBarType[] }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen(true)}
        className="flex h-10 w-10 items-center justify-center rounded-card text-brown transition-colors duration-200 ease-out hover:bg-ink/5"
      >
        <Icon name="menu" className="text-icon-lg" />
      </button>

      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={`fixed inset-0 z-[310] bg-ink/50 transition-opacity duration-300 ease-out ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!open}
        className={`surface-ink fixed inset-y-0 right-0 z-[320] flex w-[min(78vw,320px)] flex-col transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end border-b border-cream/15 px-6 py-4">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-card text-cream transition-colors duration-200 ease-out hover:bg-cream/10"
          >
            <Icon name="close" className="text-icon-lg" />
          </button>
        </div>

        <nav aria-label="Sections" className="flex flex-col px-6 py-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-cream/10 py-4 text-h3 text-cream transition-colors duration-200 ease-out hover:text-pink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

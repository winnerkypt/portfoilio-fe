import Link from "next/link";
import { NavMobile } from "./nav-mobile";
import { NavDesk } from "./nav-desk";
import { navItems } from "./nav-items";

export const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-[300] h-[70px] border-b border-ink/10 bg-cream/90 backdrop-blur-md">
      <div className="container mx-auto flex h-full items-center justify-between">
        <Link
          href="#top"
          className="text-nav font-bold transition-opacity duration-200 ease-out hover:opacity-70"
        >
          <span className="text-moss/50">&lt;</span>
          <span className="text-brown">SoftwareEngineer</span>
          <span className="text-green"> title</span>
          <span className="text-ink/45">=&quot;</span>
          <span className="text-pink">Portfolio</span>
          <span className="text-ink/45">&quot;</span>
          <span className="text-moss/50">/&gt;</span>
        </Link>

        <NavDesk navItems={navItems} />
        <NavMobile navItems={navItems} />
      </div>
    </header>
  );
};

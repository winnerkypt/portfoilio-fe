import Link from "next/link";
import { NavBarType } from "./type";

export const NavDesk = ({ navItems }: { navItems: NavBarType[] }) => {
  return (
    <nav aria-label="Sections" className="hidden items-center gap-1 md:flex">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group relative px-3 py-2 text-nav text-ink/75 transition-colors duration-200 ease-out hover:text-ink"
        >
          {item.label}
          <span
            aria-hidden
            className="absolute inset-x-3 bottom-1 h-[3px] origin-left scale-x-0 rounded-pill bg-pink transition-transform duration-300 ease-out group-hover:scale-x-100"
          />
        </Link>
      ))}
    </nav>
  );
};

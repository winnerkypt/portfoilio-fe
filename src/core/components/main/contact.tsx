import { contactLinks } from "../../data/contacts";
import { ContactIcon } from "../contact-icon";

const isExternal = (href: string) => href.startsWith("http");

export const ContactMain = () => {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      {contactLinks.map((link) => (
        <a
          key={link.id}
          href={link.href}
          aria-label={`${link.icon}: ${link.label}`}
          {...(isExternal(link.href)
            ? { target: "_blank", rel: "noreferrer noopener" }
            : {})}
          className="flex h-10 w-10 items-center justify-center rounded-pill text-green transition-[color,background-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:bg-moss-soft hover:text-moss"
        >
          <ContactIcon icon={link.icon} className="text-icon" />
        </a>
      ))}
    </div>
  );
};

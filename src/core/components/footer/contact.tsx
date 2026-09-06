import Image from "next/image";
import { andika, ranchers } from "@/core/libs/fonts";
import { contactLinks } from "@/core/data/contacts";
import { ContactIcon } from "@/core/components/contact-icon";

const isExternal = (href: string) => href.startsWith("http");

export const ContactFooter = () => {
  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
      <p
        className={`${andika.className} text-micro uppercase tracking-[0.2em] text-sand`}
      >
        Let&apos;s talk
      </p>

      <h2 className={`${ranchers.className} mt-2 text-h1 text-cream`}>
        <span className="text-sand/60">&lt;</span>
        Contact
        <span className="text-sand/60"> /&gt;</span>
      </h2>

      <Image
        src="/images/circle.png"
        alt=""
        aria-hidden
        width={312}
        height={72}
        className="mb-6 mt-2 h-auto w-[clamp(6rem,14vw,11rem)]"
      />

      <ul className="flex flex-col gap-3">
        {contactLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              {...(isExternal(link.href)
                ? { target: "_blank", rel: "noreferrer noopener" }
                : {})}
              className={`${andika.className} group inline-flex items-center gap-3 text-body text-cream/85 transition-colors duration-200 ease-out hover:text-pink`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-pill bg-cream/10 transition-colors duration-200 ease-out group-hover:bg-cream/20">
                <ContactIcon icon={link.icon} className="text-icon" />
              </span>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

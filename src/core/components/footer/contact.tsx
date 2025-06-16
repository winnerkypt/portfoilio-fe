import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ranchers } from "@/core/libs/fonts";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
interface ContactFooterProps {
  className?: string;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ className }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return <></>;
  }

  return (
    <div
      className={`${className} ${isMobile ? "mr-0 " : "container pl-[15%]"}`}
    >
      <div
        className={`${
          isMobile ? "flex flex-col items-center" : "flex flex-col items-start"
        }`}
      >
        <h1 className={`text-48 ${ranchers.className}`}>CONTACT ME</h1>
        <Image
          src="/images/circle.png"
          alt="Logo"
          width={60}
          height={50}
          className="h-auto object-cover mb-4"
          style={{ width: "clamp(25px, 8vw, 60px)" }}
        />
      </div>
      <div className="flex flex-col gap-2 text-content">
        <a
          href="tel:0905953589"
          className="flex flex-row  items-center text-light-yellow gap-2"
        >
          <PhoneIcon style={{ fontSize: "clamp(10px, 3vw, 30px)" }} />{" "}
          <p>090-595-3589</p>
        </a>
        <a
          href="mailto:kanyapat.witta@gmail.com"
          className="flex flex-row  items-center text-light-yellow gap-2"
        >
          <EmailIcon style={{ fontSize: "clamp(10px, 3vw, 30px)" }} />{" "}
          <p>kanyapat.witta@gmail.com</p>
        </a>
        <a
          href="https://github.com/winnerkypt"
          target="_blank"
          className="flex flex-row  items-center text-light-yellow gap-2"
        >
          <GitHubIcon style={{ fontSize: "clamp(10px, 3vw, 30px)" }} />{" "}
          <p> winnerkypt</p>{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/kanyapat-wittayamanitkul-5935011a0/"
          target="_blank"
          className="flex flex-row  items-center text-light-yellow gap-2"
        >
          <LinkedInIcon style={{ fontSize: "clamp(10px, 3vw, 30px)" }} />{" "}
          <p> Kanyapat Wittayamanitkul</p>{" "}
        </a>
      </div>
    </div>
  );
};

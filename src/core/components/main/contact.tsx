"use client";

import { ranchers } from "../../libs/fonts";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export const ContactMain = () => {
  return (
    <div className="flex justify-around">
      <div
        className={`${ranchers.className} font-bold text-green leading-none`}
          style={{ fontSize: "clamp(10px, 3vw, 30px)" }}
      >
        &lt;/&gt;
      </div>
      <div className="flex justify-center gap-x-3">
        <PhoneIcon
          className="text-green"
          style={{ fontSize: "clamp(10px, 3vw, 30px)" }}
        />
        <EmailIcon
          className="text-green"
          style={{ fontSize: "clamp(10px, 3vw, 30px)" }}
        />
        <GitHubIcon
          className="text-green"
          style={{ fontSize: "clamp(10px, 3vw, 30px)" }}
        />
        <LinkedInIcon
          className="text-green"
          style={{ fontSize: "clamp(10px, 3vw, 30px)" }}
        />
      </div>
    </div>
  );
};

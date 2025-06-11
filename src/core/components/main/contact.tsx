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
        className={`${ranchers.className} text-[36px] font-bold text-green leading-none`}
      >
        &lt;/&gt;
      </div>
      <div className="flex justify-center gap-x-3">
        <PhoneIcon className="text-green" sx={{ fontSize: 32 }} />
        <EmailIcon className="text-green" sx={{ fontSize: 32 }} />
        <GitHubIcon className="text-green" sx={{ fontSize: 32 }} />
        <LinkedInIcon className="text-green" sx={{ fontSize: 32 }} />
      </div>
    </div>
  );
};

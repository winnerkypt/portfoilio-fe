import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ranchers } from "@/core/libs/fonts";

export const ContactFooter = () => {
  return (
    <div className="flex flex-col gap-4 p-4 text-light-yellow mr-[100px]  justify-center">
      <h1 className={`text-48 ${ranchers.className}`}>CONTACT ME</h1>

      <div className="flex flex-col gap-3 text-content">
        <a
          href="tel:0905953589"
          className="flex flex-row text-light-yellow gap-2"
        >
          <PhoneIcon style={{ fontSize: "clamp(10px, 5vw, 30px)" }} />{" "}
          <p>090-595-3589</p>
        </a>
        <a
          href="mailto:kanyapat.witta@gmail.com"
          className="flex flex-row text-light-yellow gap-2"
        >
          <EmailIcon style={{ fontSize: "clamp(10px, 5vw, 30px)" }} />{" "}
          <p>kanyapat.witta@gmail.com</p>
        </a>
        <a
          href="mailto:kanyapat.witta@gmail.com"
          className="flex flex-row text-light-yellow gap-2"
        >
          <GitHubIcon style={{ fontSize: "clamp(10px, 5vw, 30px)" }} />{" "}
          <p> winnerkypt</p>{" "}
        </a>
        <a
          href="mailto:kanyapat.witta@gmail.com"
          className="flex flex-row text-light-yellow gap-2"
        >
          <LinkedInIcon style={{ fontSize: "clamp(10px, 5vw, 30px)" }} />{" "}
          <p> Kanyapat Wittayamanitkul</p>{" "}
        </a>
      </div>
    </div>
  );
};

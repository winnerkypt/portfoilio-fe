import Image from "next/image";
import { ContactFooter } from "../components/footer/contact";
export const Footer = () => {
  return (
    <footer className="bg-brown text-white flex flex-row gap-32">
      <Image
        src="/images/footer.png"
        alt="Logo"
        width={700}
        height={50}
        className="h-auto object-cover"
      />
      <ContactFooter />
    </footer>
  );
};

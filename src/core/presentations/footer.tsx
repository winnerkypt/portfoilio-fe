import Image from "next/image";
import { andika } from "../libs/fonts";
import { ContactFooter } from "../components/footer/contact";

export const Footer = () => {
  return (
    <footer id="contact" className="scroll-mt-24 bg-brown text-cream">
      <div className="container grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <ContactFooter />

        <Image
          src="/images/footer.png"
          alt=""
          aria-hidden
          width={1414}
          height={764}
          sizes="(max-width: 1024px) 90vw, 45vw"
          className="order-first h-auto w-full rounded-card object-cover lg:order-last"
        />
      </div>

      <div className="border-t border-cream/15">
        <div
          className={`${andika.className} container flex flex-col items-center justify-between gap-2 py-5 text-small text-cream/60 sm:flex-row`}
        >
          <p>&copy; {new Date().getFullYear()} Kanyapat Wittayamanitkul</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

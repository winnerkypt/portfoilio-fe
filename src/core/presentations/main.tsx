"use client";

import Image from "next/image";
import { ContactMain } from "../components/main/contact";
import { NameMain } from "../components/main/name";
export const Main = () => {
  return (
    <div className="mb-9">
      <div className="bg-light-yellow pt-12">
        <div className="container">
          <ContactMain />
          <NameMain />
        </div>
      </div>
      <Image
        src="/images/wave.svg"
        alt="Hero Image"
        width={100}
        height={100}
        className="w-full "
      />
    </div>
  );
};

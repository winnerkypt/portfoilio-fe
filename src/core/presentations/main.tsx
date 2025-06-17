"use client";

import { ContactMain } from "../components/main/contact";
import { NameMain } from "../components/main/name";
export const Main = () => {
  return (
    <div className="bg-light-yellow py-9">
      <div className="container">
        <ContactMain />
        <NameMain />
      </div>
    </div>
  );
};

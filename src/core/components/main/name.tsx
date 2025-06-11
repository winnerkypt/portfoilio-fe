"use client";

import { ranchers, sacramento } from "../../libs/fonts";
export const NameMain = () => {
  return (
    <div className="relative text-center">
      <h1
        className={`${ranchers.className}   text-title font-bold text-brown leading-none`}
      >
        KANYAPAT
        
      </h1>
      <h2
          className={`${sacramento.className}  text-sub-title font-bold text-pink mt-[-5%]`}
        >
          Software Engineer
        </h2>
    </div>
  );
};

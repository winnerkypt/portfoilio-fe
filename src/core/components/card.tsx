import Image from "next/image";
import { ranchers } from "../libs/fonts";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export const Card = () => {
  return (
    <div className="bg-brown p-4 w-72 h-[350px] leading-[1.25]">
      <Image
        src={"/images/profile.png"}
        alt="Portfolio Image"
        width={500}
        height={500}
        className="w-full h-48 object-cover "
      />
      <div className="grid gap-2 py-2 ">
        <div className="flex flex-row justify-between items-center">
          <div>
            <p className={`text-[12px] text-pink font-bold `}>Atmosph</p>
            <h1 className={`${ranchers.className} text-20 text-light-yellow `}>
              Kasikorn Securities
            </h1>
          </div>
          <ArrowOutwardIcon
            className=" bg-green rounded-full p-1 text-light-yellow"
            style={{ fontSize: "clamp(10px, 3vw, 30px)" }}
          />
        </div>
        <p className="text-[12px] text-light-yellow leading-[1.25] font-light line-clamp-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          esse deleniti hic ipsa quidem mollitia dolorem odit ea laboriosam
          molestias soluta atque sint officia quo, quae voluptates a fugit
          doloremque!t officia quo, quae voluptates a fugit doloremque!
        </p>
      </div>
    </div>
  );
};

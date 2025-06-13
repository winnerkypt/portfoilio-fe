import { CardHorizon } from "@/core/components/card-horizon";
import { Navbar } from "@/core/components/navbar/navbar";
import { Main } from "@/core/presentations/main";
import { Skill } from "@/core/presentations/skills";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="grid gap-12 pt-[70px]">
        <Main />
        <CardHorizon />
        <Skill />
      </div>
    </>
  );
}

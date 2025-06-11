import { Navbar } from "@/core/components/navbar/navbar";
import { Main } from "@/core/presentations/main";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="pt-[70px]">
        <Main />
      </div>
    </>
  );
}

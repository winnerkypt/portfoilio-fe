import { Navbar } from "@/core/components/navbar/navbar";
import { Main } from "@/core/presentations/main";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Main />
      </div>
    </>
  );
}

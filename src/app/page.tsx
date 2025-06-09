import { Navbar } from "@/core/components/navbar/navbar";
import { About } from "@/core/components/about";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <About />
      </div>
    </>
  );
}

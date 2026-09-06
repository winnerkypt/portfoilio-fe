import { Navbar } from "@/core/components/navbar/navbar";
import { About } from "@/core/presentations/about";
import { Footer } from "@/core/presentations/footer";
import { Main } from "@/core/presentations/main";
import { Projects } from "@/core/presentations/projects";
import { Skill } from "@/core/presentations/skills";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[400] focus:rounded-card focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main" className="pt-[70px]">
        <Main />
        <About />
        <Skill />
        <Projects />
      </main>

      <Footer />
    </>
  );
}

import { ContactMain } from "../components/main/contact";
import { NameMain } from "../components/main/name";
import { Wave } from "../components/wave";

export const Main = () => {
  return (
    <section id="top" className="surface-paper">
      <div className="container flex flex-col gap-5 pb-6 pt-8 sm:pt-12">
        <NameMain />
        <ContactMain />
      </div>

      <Wave />
    </section>
  );
};

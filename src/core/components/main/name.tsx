import { andika, ranchers, sacramento } from "../../libs/fonts";

export const NameMain = () => {
  return (
    <div className="text-center">
      <p
        className={`${andika.className} text-micro uppercase tracking-[0.28em] text-moss`}
      >
        Software Engineer &middot; Bangkok
      </p>

      <h1
        className={`${ranchers.className} mt-3 text-display text-brown`}
      >
        KANYAPAT
      </h1>

      <p
        className={`${sacramento.className} mt-[-0.08em] text-script text-pink`}
      >
        Software Engineer
      </p>
    </div>
  );
};

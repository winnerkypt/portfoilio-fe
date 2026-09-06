import { andika, ranchers } from "../libs/fonts";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  tone?: "ink" | "cream";
}

export const SectionHeading = ({ eyebrow, title, tone = "ink" }: SectionHeadingProps) => {
  const isCream = tone === "cream";

  return (
    <div className="flex flex-col gap-2">
      <p
        className={`${andika.className} text-micro uppercase tracking-[0.18em] ${
          isCream ? "text-sand" : "text-moss"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`${ranchers.className} text-h1 ${isCream ? "text-cream" : "text-ink"}`}
      >
        <span className={isCream ? "text-sand/60" : "text-moss/45"}>&lt;</span>
        {title}
        <span className={isCream ? "text-sand/60" : "text-moss/45"}> /&gt;</span>
      </h2>
      <span
        aria-hidden
        className="h-[6px] w-16 rounded-pill bg-pink"
      />
    </div>
  );
};

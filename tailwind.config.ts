import type { Config } from "tailwindcss";

const withAlpha = (variable: string) => `rgb(var(${variable}) / <alpha-value>)`;

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/presentation/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/core/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        // Channel-based vars so Tailwind's /opacity modifiers actually resolve.
        background: withAlpha("--cream"),
        foreground: withAlpha("--ink"),

        // warm family
        cream: withAlpha("--cream"),
        "cream-deep": withAlpha("--cream-deep"),
        sand: withAlpha("--sand"),
        brown: withAlpha("--brown"),
        pink: withAlpha("--pink"),

        // earth counterweight
        ink: withAlpha("--ink"),
        moss: withAlpha("--moss"),
        "moss-soft": withAlpha("--moss-soft"),

        green: withAlpha("--green"),

        // legacy aliases kept so nothing breaks mid-refactor
        yellow: withAlpha("--sand"),
        "light-yellow": withAlpha("--cream"),
      },
      fontSize: {
        display: ["clamp(3.5rem, 14vw, 15rem)", { lineHeight: "0.84", letterSpacing: "0.005em" }],
        script: ["clamp(1.75rem, 6.5vw, 6rem)", { lineHeight: "0.9" }],
        h1: ["clamp(1.75rem, 4.5vw, 3rem)", { lineHeight: "1.05" }],
        h2: ["clamp(1.375rem, 3vw, 2.25rem)", { lineHeight: "1.1" }],
        h3: ["clamp(1.0625rem, 1.9vw, 1.375rem)", { lineHeight: "1.2" }],
        lead: ["clamp(1rem, 1.35vw, 1.1875rem)", { lineHeight: "1.65" }],
        body: ["clamp(0.9375rem, 1.05vw, 1.0625rem)", { lineHeight: "1.7" }],
        small: ["clamp(0.8125rem, 0.9vw, 0.875rem)", { lineHeight: "1.55" }],
        micro: ["clamp(0.6875rem, 0.75vw, 0.75rem)", { lineHeight: "1.4", letterSpacing: "0.08em" }],
        nav: ["clamp(0.75rem, 1.3vw, 1rem)", { lineHeight: "1" }],
        icon: "clamp(1.125rem, 2vw, 1.5rem)",
        "icon-lg": "clamp(1.5rem, 2.6vw, 2rem)",
      },
      borderRadius: {
        card: "0.625rem",
        pill: "999px",
      },
      boxShadow: {
        raise: "0 1px 2px rgba(35, 48, 46, 0.06), 0 8px 24px -12px rgba(35, 48, 46, 0.28)",
        lift: "0 2px 4px rgba(35, 48, 46, 0.08), 0 18px 40px -18px rgba(35, 48, 46, 0.42)",
        inset: "inset 0 1px 0 rgba(255, 255, 255, 0.35)",
      },
      maxWidth: {
        prose: "62ch",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;

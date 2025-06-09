import type { Config } from "tailwindcss";

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
      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
    extend: {
      colors: {
        "background": 'var(--background)',
        "foreground": 'var(--foreground)',
        "pink": "#FF9A9A",
        "yellow": "#FFDDAB",
        "light-yellow": "#FFEFD8",
        "green": "#5F8B4C",
        "brown": "#945034",
      },
      fontSize: {
        'title': 'clamp(64px, 15vw, 256px)', // ปรับค่า min, preferred, max ได้
        'sub-title': 'clamp(12px, 8vw, 128px)', // ปรับค่า min, preferred, max ได้
      },
    },
  },
  plugins: [],
} satisfies Config;

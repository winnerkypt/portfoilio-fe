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
      center: true,
      padding: {
        DEFAULT: '1rem',     // 16px margin ทุกด้าน
        sm: '2rem',          // 32px margin บน sm breakpoint ขึ้นไป
        lg: '4rem',          // 64px margin บน lg breakpoint ขึ้นไป
        xl: '5rem',          // 80px margin บน xl breakpoint ขึ้นไป
        '2xl': '6rem',       // 96px margin บน 2xl breakpoint ขึ้นไป
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
        'title': 'clamp(64px, 15vw, 256px)',
        'sub-title': 'clamp(12px, 8vw, 128px)',
        '48': 'clamp(20px, 3vw, 48px)',
        '36': 'clamp(20px, 3vw, 36px)',
        'nav': 'clamp(10px, 3vw, 18px)',
        'content': 'clamp(10px, 3vw, 16px)',
      },
    },
  },
  plugins: [],
} satisfies Config;

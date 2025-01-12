import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggleAppear: {
          '0%' : { opacity: '0', scale: '0.5', transform: 'rotate(-5deg)' },
          '50%': { opacity: '0.5', scale: '0.75', transform: 'rotate(5deg)' },
          '100%': { opacity: '1', scale: '1', transform: 'rotate(0deg)' }
        }
      },
      animation: {
        wiggleAppear: 'wiggleAppear 1s linear'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'heading': "#37B6FF"
      },
    },
  },
  plugins: [],
} satisfies Config;

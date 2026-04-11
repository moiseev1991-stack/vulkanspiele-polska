import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#CC0000", dark: "#8B0000", light: "#FF1111" },
        gold: { DEFAULT: "#FFD700", light: "#FFC107" },
        surface: {
          DEFAULT: "#1a0000",
          light: "#220000",
          card: "#1c0000",
        },
        bgDark: "#0a0000",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

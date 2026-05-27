import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#f9f7f4",
        "text-main": "#1a1a1a",
        "text-sub": "#666666",
        "text-muted": "#999999",
        "text-light": "#aaaaaa",
      },
      fontFamily: {
        serif: ["Noto Serif JP", "serif"],
        mincho: ["Shippori Mincho", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

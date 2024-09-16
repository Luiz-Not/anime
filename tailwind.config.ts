import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6324C6",
        primaryLight: "#774DC5",
        yellow: "#FFB800",
        grayLight: "#C4CAD4",
        red: "#E92151",
        green: "#01ADA6",
        dark: "#171717"
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'selector'
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "./utils/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green":"var(--green)",
        "white":"var(--white)",
        "black":"var(--black)"
      },
      fontFamily: {
        nunito: ["var(--font-nunito)"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
export default config;

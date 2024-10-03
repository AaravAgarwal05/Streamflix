import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGray: "var(--custom-gray)",
        customRed: "var(--custom-red)",
      },
      fontFamily: {
        streamflixBold: [`var(--font-streamflix-bold)`, "sans-serif"],
        streamflixBolder: [`var(--font-streamflix-bolder)`, "sans-serif"],
        streamflixMedium: [`var(--font-streamflix-medium)`, "sans-serif"],
        streamflixRegular: [`var(--font-streamflix-regular)`, "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

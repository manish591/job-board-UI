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
        brand: "var(--brand)",
        bgPrimary: "var(--bg-primary)",
        bgSecondary: "var(--bg-secondary)",
        bgGhost: "var(--bg-ghost)",

        textBlack900: "var(--text-black-900)",
        textBlack800: "var(--text-black-800)",
        textBlack700: "var(--text-black-700)",
        textBlack600: "var(--text-black-600)",
        textBlack500: "var(--text-black-500)",
        textBlack400: "var(--text-black-400)",
        textBlack300: "var(--text-black-300)",

        textGreen100: "var(--text-green-100)",
        textGreen200: "var(--text-green-200)",
        textGreen300: "var(--text-green-300)",

        border100: "var(--border-100)",
        border200: "var(--border-200)"
      }
    },
  },
  plugins: [],
};
export default config;

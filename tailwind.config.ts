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
        // Custom color palette
        primary: {
          light: "#F5F5F5", // Light gray
          red: "#F05454", // Red accent
          blue: "#30475E", // Dark blue
          dark: "#121212", // Almost black
        },
        // Override default colors
        background: "#F5F5F5",
        foreground: "#121212",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

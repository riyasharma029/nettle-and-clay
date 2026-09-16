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
        cream: {
          DEFAULT: "#FAF6EE",
          soft: "#F5EFE4",
          pure: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#2B2620",
          light: "#4A443C",
          muted: "#766F65",
        },
        olive: {
          DEFAULT: "#4B5D3A",
          light: "#61774C",
          dark: "#37452A",
          soft: "#EAF0E5",
        },
        clay: {
          DEFAULT: "#D9714E",
          light: "#E48565",
          dark: "#B85534",
          soft: "#FBF0EC",
        },
        sand: {
          DEFAULT: "#EDE3D0",
          light: "#F6F1E7",
          dark: "#DFD2BA",
          border: "#DBCDB6",
        },
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(43, 38, 32, 0.08)",
        card: "0 4px 20px -2px rgba(43, 38, 32, 0.05)",
        clay: "0 8px 24px -4px rgba(217, 113, 78, 0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(1deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

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
        primary: {
          DEFAULT: "#0A4EA3",
          dark: "#073B7D",
          light: "#1E68C9",
        },
        secondary: {
          DEFAULT: "#2F72D6",
          light: "#4B8DF0",
        },
        accent: {
          DEFAULT: "#6CB6FF",
          light: "#99CEFF",
        },
        background: "#FFFFFF",
        lightGray: "#F6F8FB",
        dark: {
          DEFAULT: "#111827",
          card: "#1F2937",
          muted: "#4B5563",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
        "2xl": "20px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(10, 78, 163, 0.08)",
        "soft-lg": "0 20px 40px rgba(10, 78, 163, 0.12)",
        glow: "0 0 25px rgba(108, 182, 255, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;

/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    // Next UI
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: `media`,
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-primary)", "var(--font-secondary)", "sans-serif"],
        secondary: ["var(--font-secondary)", "sans-serif"],
      },
      fontSize: {
        tiny: ["12px", "20px"],
        xs: ["13px", "20px"],
        sm: ["14px", "24px"],
        base: ["16px", "24px"],
        lg: ["18px", "28px"],
        xl: ["20px", "32px"],
      },
      colors: {
        primary: "#175FC7",
        neutral: {
          50: "#f9f9f9",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        blue: {
          50: "#F4F7F9",
          100: "#CFE9FC",
          200: "#A1D0F9",
          300: "#6FAEEE",
          400: "#4A8CDD",
          500: "#175FC7",
          600: "#1049AB",
          700: "#0B368F",
          800: "#072673",
          900: "#041A5F",
        },
        green: {
          50: "#F3FFED",
          100: "#E4FBD9",
          200: "#C5F8B4",
          300: "#9AEC8A",
          400: "#71D969",
          500: "#3CC13E",
          600: "#2BA538",
          700: "#1E8A32",
          800: "#136F2C",
          900: "#0B5C29",
        },
        yellow: {
          50: "#FFFAE7",
          100: "#FFF7CC",
          200: "#FFEE99",
          300: "#FFE266",
          400: "#FFD63F",
          500: "#FFC300",
          600: "#DBA200",
          700: "#B78300",
          800: "#936600",
          900: "#7A5100",
        },
        red: {
          50: "#FFF9F6",
          100: "#FFE2D5",
          200: "#FFBFAB",
          300: "#FF9481",
          400: "#FF6C61",
          500: "#FF2D31",
          600: "#DB2034",
          700: "#B71635",
          800: "#930E33",
          900: "#7A0832",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#F5F5F5",
        "background-secondary": "#171717",
      },
    },
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      lg: "1.5rem",
      xl: "2.125rem",
    },
  },
  plugins: [],
};

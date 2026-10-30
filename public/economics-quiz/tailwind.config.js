/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./*.html", "./js/**/*.js"],
  safelist: ["ring-emerald", "ring-teal", "ring-sky", "ring-amber", "ring-red"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#1f5566", light: "#e4eff2", dark: "#143a47" },
        accent: "#c2410c",
        paper: "#faf7f2",
      },
      fontFamily: {
        display: ["Georgia", "Cambria", "'Times New Roman'", "serif"],
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "'Segoe UI'", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

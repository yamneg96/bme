/** @type {import('tailwindcss').Config} */
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: ["./*.html", "./assets/app.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: v("bg"),
        panel: v("panel"),
        ink: v("ink"),
        mute: v("mute"),
        line: v("line"),
        soft: v("soft"),
        accent: v("accent"),
        accentfg: v("accentfg"),
        ok: v("ok"),
        bad: v("bad"),
        warn: v("warn"),
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        serif: ['"Iowan Old Style"', '"Palatino Linotype"', 'Palatino', '"Book Antiqua"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

module.exports = {
  mode: "jit",
  important: true,
  // Active dark mode on class basis
  darkMode: "class",
  purge: ["./**/*.{js,jsx,ts,tsx}", "./**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

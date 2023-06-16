/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      width: {
        700: "700px",
        800: "800px",
        500: "500px",
      },
      fontSize: {
        16: "16px",
      },
      backgroundColor: {
        indexLine: "#948888",
      },
    },
    fontFamily: {
      Quicksand: ["Quicksand", "sans-serif"],
      Baloo: ["Baloo 2", "cursive"],
      Linotte: ["Linotte", "sans-serif"],
      Jost: ["Jost", "sans-serif"],
    },
  },

  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("tw-elements/dist/plugin"),
  ],
};

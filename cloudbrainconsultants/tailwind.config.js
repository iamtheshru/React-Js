/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],

  fontFamily: {
    nunitosans: ["Nunito Sans", "sans-serif"],
  },
  theme: {
    extend: {
      fontFamily: {
        nunitosans: ["Nunito Sans", "sans-serif"],
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};

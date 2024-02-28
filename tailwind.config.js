/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
  },

  //eslint-disable-next-line
  plugins: [require("tailwind-scrollbar")],
};

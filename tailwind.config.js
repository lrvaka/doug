/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      theme: {
        100: "#FFFFFF",
        200: "#CCD4C7",
        300: "#268083",
        400: "#1F3850",
      },
    },
    fontFamily: {
      display: ["Inter"],
      body: ["Inter"],
    },
    extend: {},
  },
  plugins: [],
};

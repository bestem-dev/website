/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#52FCA9",
        secondary: "#5D0EC1",
      },
    },
  },
  plugins: [],
};

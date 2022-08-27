/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'tablet': { 'max': '1330px' },
      'mobile': { 'min': '360px', 'max': '424px' }
    },
    extend: {
      colors: {
        'space': {
          black: "#0B0D17",
          blue: "#D0D6F9"
        },
      },
      fontFamily: {
        Barlow: "Barlow",
        Condensed: "Condensed",
        Bellefair: "Bellefair"
      }
    },
  },
  plugins: [],
}

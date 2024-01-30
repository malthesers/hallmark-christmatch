/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      title: ['Sacramento, serif, system-ui']
    },
    extend: {
      screens: {
        'xs': '430px'
      }
    },
  },
  plugins: [],
};

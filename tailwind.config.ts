/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

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
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('child', '& > *')
    })
  ],
};

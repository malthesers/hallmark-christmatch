/** @type {import('tailwindcss').Config} */

import { PluginAPI } from 'tailwindcss/types/config'

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      title: ['Sacramento, serif, system-ui']
    },
    extend: {
      screens: {
        xs: '430px'
      }
    }
  },
  plugins: [
    ({ addUtilities }: PluginAPI) => {
      addUtilities({
        '.preserve-3d': {
          transform: 'perspective(40rem) rotateY(180deg)',
          'transform-style': 'preserve-3d'
        },
        '.flipped': {
          transform: 'rotateY(0)'
        },
        '.backface-hidden': {
          '-webkit-backface-visibility': 'hidden',
          'backface-visibility': 'hidden'
        },
        '.grid-center': {
          'grid-column': '1/1',
          'grid-row': '1/1'
        }
      })
    }
  ]
}

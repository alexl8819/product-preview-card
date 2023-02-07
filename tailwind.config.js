/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '320px',
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'fraunces': ['Fraunces', 'sans-serif'],
      },
      spacing: {
        '96': '28rem'
      },
      colors: {
        'custom-cream': 'hsl(30, 38%, 92%)',
        'custom-verydarkblue': 'hsl(212, 21%, 14%)',
        'custom-gray': '#8d8b97',
        'custom-green': 'rgba(61,129,104,255)'
      }
    },
  },
  plugins: [],
}

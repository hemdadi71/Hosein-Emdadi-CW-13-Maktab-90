const defualtTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './main.js', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        header: '#4472CA',
        cardBG:'#92B4F4',
        cardButton:'#5E7CE2',
        main:'#CFDEE7'
      },
      fontFamily: {
        sans: ['poppins', ...defualtTheme.fontFamily.sans],
        },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        backgroundPositionSpin:
          "background-position-spin 3000ms infinite alternate",
      },
      keyframes: {
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
      },
      colors:{
        bgColor:"#0A192F",
        primaryColor:"#64FFDA",
        textColor:"#ffff"
      }
    },
    screens: {
      'xsm': '360px',
      'xs': '470px',
      'sm': '640px',
      'md': '829px',
      'bs': '990px',
      'lg': '1177px',
      'xl': '1280px',
      '2xl': '1536px',


      '2xl-mx': { 'max': '1535px' },
      'xl-mx': { 'max': '1279px' },
      'lg-mx': { 'max': '1176px' },
      'bs-mx': { 'max': '990px' },
      'md-mx': { 'max': '828px' },
      'sm-mx': { 'max': '639px' },
      'xs-mx': { 'max': '469px' },
      'xsm-mx': { 'max': '349px' }
    }
    
    
  },
  plugins: [],
}
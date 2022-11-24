/** @type {import('tailwindcss').Config} */
module.exports = {
darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#002366',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': 'rgba(0, 0, 0, 0.1)',
        'gray-light': '#d3dce6',
        'white':'#FFFFFF'
      },
      boxShadow:{
        'lg':'0px 3px 20px 3px'
      },
      opacity: {
        '0': '0',
        '20': '0.2',
        '40': '0.4',
        '60': '0.6',
        '80': '0.8',
        '100': '1',
      },
    },
  },
  plugins: [],
} 

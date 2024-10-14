/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kramer:{
          light:'#ffba9c',
          DEFAULT: '#f78608'
        }
      }
    },
  },
  plugins: [],
}


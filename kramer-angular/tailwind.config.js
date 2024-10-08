/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
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


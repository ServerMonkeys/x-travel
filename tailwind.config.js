/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundPosition: {
      'top-center': 'center top 5rem'
    },
    theme: {
      container: {
        center: true
      }
    },
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Manrope: ['Manrope', 'sans-serif']
      },
      spacing: {
        'w-img': '800px',
        'h-img': '1200px',
        '150': '1146px'
      }
    }
  },
  plugins: []
}

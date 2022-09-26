/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundPosition: {
      'top-center': 'center top 5rem',

    },
    theme:{
      container:{
        center: true,
      },
    },
    extend: {},
  },
  plugins: [],
}


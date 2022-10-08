/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundPosition: {
      center: 'center',
      'top-center': 'center top 5rem',
      bottom: 'bottom'
    },
    theme: {
      container: {
        center: true
      }
    },
    extend: {
      backgroundImage: {
        'xlogo': "url('../public/assets/SimpleXLogo.svg')",
        'hero-banner': "url('../public/assets/PhoneHero.png')",
        'pattern-svg': "url('../public/assets/SpiralSvg.svg')",
        'line-svg': "url('../public/assets/lineDash.svg')",
        'protocol-x': "url('../public/assets/ProtocolX2.svg')"
      },

      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Manrope: ['Manrope', 'sans-serif']
      },
      spacing: {
        'c-h': '500px',
        'w-img': '900px',
        'h-img': '700px',
        '800': '800px'
      }
    }
  },
  plugins: []
}

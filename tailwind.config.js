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
      dropShadow:{
        "basic-drop": "4px 4px 4px rgba(0, 0, 0, 0.6)",
      },
      backgroundImage: {
        xlogo: "url('../public/assets/SimpleXLogo.svg')",
        'hero-banner': "url('../public/assets/PhoneHero.png')",
        'pattern-svg': "url('../public/assets/SpiralSvg.svg')",
        'white-pattern-svg': "url('../public/assets/WhitePattern.svg')",
        'protocol-x': "url('../public/assets/ProtocolX2.svg')",
        wave: "url('../public/assets/waves.svg')"
      },
      colors: {

        stop1:"#e7dcff ",
        stop2:"#ffeacb",
        stop3:"#f6f1ff",
        "grad-white": ' linear-gradient(45deg, #e7dcff, #ffeacb, #f6f1ff);'
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

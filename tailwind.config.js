/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'shadowMy': '0 1px 3px -2px black'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      width: {
        'calc-250-14': 'calc(250px * 14)',
      },
      transform: {
        'translate-z-20': 'translateZ(20px)',
      },
      border:{
        'cusBorder':'1px solid #ebebeb'
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-150px * 5))' },
        },
      },
      animation: {
        scroll: 'scroll 5s linear infinite',
      },
    },
  },
  plugins: [
  ],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        '0967AD':'#0967AD',
        '407BFF':'#407BFF',
        '4452FE':'#4452FE',
        '181818':'#181818',
        '191D25':'#191D25',
        '0967AD':'#0967AD'
      },
      fontFamily: {
        Mont: ['"Montserrat", sans-serif'],
       
      },
      animation: {
        'slide-in-right': 'slideInRight 1s ease-out forwards',
        'slide-in-left': 'slideInLeft 1s ease-out forwards',
        'spring-up': 'springUp 2s cubic-bezier(0.68, -0.6, 0.32, 1.6) forwards',
      },
      keyframes: {
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: { // Изменили название анимации
          '0%': { 
            opacity: '0', 
            transform: 'translateX(-40px)' // Отрицательное значение для движения слева
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateX(0)' 
          },
        },
        springUp:{
          '0%': { 
            opacity: '0', 
            transform: 'translateY(40px) scale(0.95)' 
          },
          '70%': { 
            transform: 'translateY(-10px) scale(1.02)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0) scale(1)' 
          },
        },
      },
      willChange: {
        'transform-opacity': 'transform, opacity'
      },
    },
  },
  plugins: [],
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',
  },
}


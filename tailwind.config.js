/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      heading: ['Montserrat', 'sans-serif'],
      body: ['Roboto', 'sans-serif']
    },
    screens: {
      'sm': {'max': '640px'},  
      'md': {'max': '768px'},  
      'lg': {'max': '1024px'}, 
      'xl': {'max': '1280px'}, 
      '2xl': {'max': '1536px'}, 
    },
    extend: {
      colors:{
        'custom-orange': '#FF6610',
        'custom-l-green': '#CCFF6F',
        'custom-white': '#fff',
      },

      backgroundColor:{
        'custom-blue': '#3CF2FE',
        'custom-beige': '#FFF3CD',
        'custom-green': '#726F4C',
        'custom-white': '#fff',
        'custom-black': '#000',
      },

      borderWidth: {
        'custom': '2px', 
      },

      borderColor: {
        'custom-black': '#000',  
        'custom-blue': '#3CF2FE',
      },

      boxShadow: {
        'custom-black': '5px 5px 0px #000', 
        'custom-blue': '5px 5px 0px #3CF2FE',
      },

      backgroundImage: {
        'x-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },

      keyframes: {
        slideBackAndForth: {
          '0%, 100%': { transform: 'translateX(0)', opacity: '1' },
          '50%': { transform: 'translateX(-100%)', opacity: '1' },
        },
        upDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },

      animation: {
        backAndForth: 'slideBackAndForth 5s ease-in-out infinite',
        upDown: 'bounce 2s ease-in-out infinite',
      }
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
          html: {
              scrollBehavior: 'smooth',
          },
      });
  },
  ],
}


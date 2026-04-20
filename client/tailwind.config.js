/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef8ff',
          100: '#d9efff',
          200: '#bce1ff',
          300: '#8dcbff',
          400: '#57adff',
          500: '#2b89f5',
          600: '#176bda',
          700: '#1656b0',
          800: '#184a8d',
          900: '#1b4175'
        },
        accent: '#ff9f1c',
        ink: '#102033',
        sand: '#fff8ef'
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Manrope', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 60px rgba(16, 32, 51, 0.12)'
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at top left, rgba(43,137,245,0.18), transparent 35%), radial-gradient(circle at right, rgba(255,159,28,0.18), transparent 30%)'
      }
    }
  },
  plugins: []
};


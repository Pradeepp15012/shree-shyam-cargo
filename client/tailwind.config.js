/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#edf5ff',
          100: '#dbeafe',
          200: '#bfdcff',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#2970d6',
          600: '#1d57b8',
          700: '#194690',
          800: '#183b75',
          900: '#172f59'
        },
        accent: '#d68c45',
        accentDark: '#9f5f25',
        ink: '#0f172f',
        sand: '#f8f1e7',
        mist: '#f4f7fb',
        slateDeep: '#182235'
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Manrope', 'sans-serif']
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 47, 0.10)',
        luxe: '0 30px 120px rgba(15, 23, 47, 0.18)',
        insetGlow: 'inset 0 1px 0 rgba(255, 255, 255, 0.45)'
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at top left, rgba(41,112,214,0.18), transparent 36%), radial-gradient(circle at 85% 10%, rgba(214,140,69,0.16), transparent 26%), radial-gradient(circle at center bottom, rgba(15,23,47,0.06), transparent 34%)',
        velvet: 'linear-gradient(135deg, rgba(15,23,47,1) 0%, rgba(24,34,53,1) 55%, rgba(31,49,83,1) 100%)',
        brass: 'linear-gradient(135deg, #f4d8b8 0%, #d68c45 100%)'
      }
    }
  },
  plugins: []
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        logo: ['"Dancing Script"', 'cursive'],
        sans: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      colors: {
        ink: '#2b2b2b',
        fog: '#8a8a8a',
        hairline: '#e5e3df',
      },
      letterSpacing: {
        widest2: '0.2em',
      },
    },
  },
  plugins: [],
}

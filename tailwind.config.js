/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        sourceCode: ['Source Code Pro', 'monospace'],
      },
      backgroundImage: {
        'hero-bg': "url('./src/assets/bg2.PNG')",
      },
    },
  },
  plugins: [],
}

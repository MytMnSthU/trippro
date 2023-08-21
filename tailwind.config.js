/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: '4rem',
        center: true
      },
      colors:{
        accentBlue: '#2DC4EA',
        accentGreen: '#3AE7AB'
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'keywe-light': '#84cc76',
        'keywe-dark': '#5aab4c', 
        'keywe-bg': '#fcfcfc',
        'keywe-pale': '#e9f5e9',
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'hover': '0 12px 24px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#d32f2f', // Rojo
        black: colors.black,
        white: colors.white,
      },
      fontFamily: {
        campton: ['Campton', 'sans-serif'], // Add Campton as a custom font
      },
    },
  },
  plugins: [],
};

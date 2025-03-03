const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Futura', ...defaultTheme.fontFamily.sans], // Use Futura as the default sans-serif font
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
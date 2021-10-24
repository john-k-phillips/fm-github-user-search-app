module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Base Colors
        'custom-blue': '#0079FF',

        // Lightmode
        'custom-gray-lighter': '#697C9A',
        'custom-grayish-blue-lighter': '#4B6A9B',
        'custom-black-lighter': '#2B3442',
        'custom-grayish-white-lighter': '#F6F8FF',
        'custom-white-lighter': '#FEFEFE',

        // Darkmode
        'custom-white-darker': '#FFFFF',
        'custom-black-darker': '#141D2F',
        'custom-grayish-blue-darker': '#1E2A47',
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
};

const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./containers/**/*.tsx', './components/**/*.tsx', './styles/**.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: 'rgba(5,170,119,1)',
        text: '#000000',
        background: '#fafafa',
      },
      stroke: {
        current: 'currentColor',
        gray: colors.gray,
      },
      fill: {
        current: 'currentColor',
        gray: colors.gray,
        white: colors.white,
        black: colors.black,
      },
      spacing: {
        '16px': '16px',
        '24px': '24px',
        '34px': '34px',
        '48px': '48px',
        '96px': '96px',
        110: '26rem',
      },
      maxWidth: {
        '1.5xl': '37rem',
      },
    },
  },
  variants: {
    extend: {},
  },

  plugins: [],
};

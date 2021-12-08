module.exports = {
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
    ],
  },
  darkMode: false,
  corePlugins: {
    container: false,
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      navy: '#16183C',
      greyOnNavy: '#A0A1BA',
      darkGreyOnNavy: '#464869',
      midGreyOnNavy: '#A0A1BA',
      midGrey: '#D8D8D8',
      midGreyOnWhite: '#7C7C87',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '998px',
      xl: '1200px',
    },
    fontFamily: {
      sans: ['SuisseInternational'],
      serif: ['Moret'],
    },
    fontSize: {
      xs: '.8125rem',
      sm: '.9375rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      xxl: '2.9375rem',
      xxxl: '3.625rem',
      xxxxl: '4.5rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          maxWidth: '100%',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@screen sm': {
            maxWidth: '768px',
          },
          '@screen md': {
            maxWidth: '998px',
            paddingLeft: '2rem',
            paddingRight: '2rem',
          },
          '@screen lg': {
            maxWidth: '1200px',
          },
        },
      })
    },
  ],
  mode: 'jit',
}

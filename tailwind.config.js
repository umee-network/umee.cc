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
  darkMode: 'class',
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
      reverseAdora: '#869AC7',
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
    extend: {
      keyframes: {
        'adora-bounce': {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        'adora-shadow-bounce': {
          '0%': {
            transform: 'scale(0.8)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(1)',
            opacity: '0.5',
          },
          '100%': {
            transform: 'scale(0.8)',
            opacity: '1',
          },
        },
        'wave-background': {
          '0%': {
            backgroundPosition: '0 0',
          },
          '50%': {
            backgroundPosition: '100% 0',
          },
          '100%': {
            backgroundPosition: '0 0',
          },
        },
        bounce: {
          '0%': {
            transform: 'translateY(-4px)',
          },
          '50%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(-4px)',
          },
        },
      },
      animation: {
        'adora-bounce': 'adora-bounce 2s ease infinite',
        'adora-shadow-bounce': 'adora-shadow-bounce 2s ease infinite',
        'wave-background': 'wave-background 5s linear infinite',
        bounce: 'bounce 2s ease-out infinite forwards',
      },

      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontFamily: 'Moret',
              lineHeight: '1',
              marginTop: '1em',
              marginBottom: '0.5em',
            },
            h2: {
              fontFamily: 'Moret',
              lineHeight: '1',
              marginTop: '1em',
              marginBottom: '0.5em',
            },
            h3: {
              fontFamily: 'Moret',
              lineHeight: '1.2',
              marginTop: '1em',
              marginBottom: '0.5em',
            },
            h4: {
              fontFamily: 'Moret',
              lineHeight: '1.2',
              marginTop: '1em',
              marginBottom: '0.5em',
            },
          },
        },
        dark: {
          css: {
            h1: {
              color: '#fff',
            },
            h2: {
              color: '#fff',
            },
            color: '#fff',
            a: {
              color: '#fff',
              '&:hover': {
                color: '#fff',
              },
            },
          },
        },
      },
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/typography'),
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

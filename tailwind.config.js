/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}',
  ],
  theme: {
    screens:{
      xs:'390px',
      sm:'576px',
      md:'768px',
      lg:'992px',
    },

    colors: {
      'black': '#000000',
      'white': '#FFFFFF',
      'transparent': 'transparent',
      'orange': 'hsl(31, 77%, 52%)',
      'cyan': 'hsl(184, 100%, 22%)',
      'dark-cyan': 'hsl(179, 100%, 13%)',
      'transparent-white': 'hsla(0, 0%, 100%, 0.75)',
      'light-gray': 'hsl(0, 0%, 95%)',
    },

   /**
   * Setup font-family
   */
    fontFamily: {
      'shoulders': ['Big Shoulders Display', 'cursive'],
      'lexend': ['Lexend Deca', 'sans-serif'],
    },
    extend: {
      /**
       * Create custom text-shadow
       * Reference: https://www.hyperui.dev/blog/text-shadow-with-tailwindcss
       */
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },

  // Do not include tailwind default container
  corePlugins: {
    container: false
  },
  
  plugins: [
    function ({ addComponents }) {
      addComponents({
        /**
         * Create custom container
         * Reference: https://stefvanlooveren.me/blog/custom-container-width-tailwind-css
         */
        '.container': {
          width: '100%',
          paddingLeft: '24px',
          paddingRight: '24px',
          marginLeft: 'auto',
          marginRight: 'auto',

          '@screen sm': {
            maxWidth: '540px',
            paddingLeft: '0',
            paddingRight: '0',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '920px',
          },
        },

        /**
         * Create custom writing mode
         */
        '.wm-vertical-rl': {
          writingMode: 'vertical-rl',
        },
        '.wm-horizontal-tb': {
          writingMode: 'horizontal-tb',
        },

        /**
         * Image scale
         */
        '.img-scale': {
          transform: 'scale(1.1)',
        },
      })
    },

    /**
     * Create custom text-shadow
     * Reference: https://www.hyperui.dev/blog/text-shadow-with-tailwindcss
     */
    function ({matchUtilities, theme}) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    },
  ],

  safelist: [
  ],
}

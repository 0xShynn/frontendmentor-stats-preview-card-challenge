module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        'image-header': "url('/src/assets/images/image-header-mobile.jpg')",
      }),
      lineHeight: {
        6.5: '1.65rem',
      },
      fontFamily: {
        body: ['"Inter"', 'sans-serif'],
        title: ['"Lexend Deca"', 'sans-serif'],
      },
      fontSize: {
        '2.5xl': ['1.65rem', { lineHeight: '2rem' }],
      },
      colors: {
        primary: {
          verydarkblue: 'hsl(233, 47%, 7%)',
          darkblue: 'hsl(244, 38%, 16%)',
          accent_1: 'hsl(277, 64%, 61%)',
          accent_2: '#b531e9',
        },
        neutral: {
          white: 'hsl(0, 0%, 100%)',
          gray_1: 'hsla(0, 0%, 100%, 0.75)',
          gray_2: 'hsla(0, 0%, 100%, 0.6)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

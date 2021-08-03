module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        560: '560px',
        1110: '1110px',
      },
      maxWidth: () => ({
        '6.5xl': '80rem',
        1110: '1110px',
      }),
      backgroundImage: () => ({
        'img-header-mobile':
          "url('/src/assets/images/image-header-mobile.jpg')",
        'img-header-desktop':
          "url('/src/assets/images/image-header-desktop.jpg')",
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
        '4.5xl': ['2.5rem', { lineHeight: '3rem' }],
      },
      colors: {
        primary: {
          verydarkblue: 'hsl(233, 47%, 7%)',
          darkblue: 'hsl(244, 38%, 16%)',
          accent: 'hsl(277, 64%, 61%)',
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

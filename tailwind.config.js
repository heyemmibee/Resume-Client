module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xss': '320px',
      'xs': '414px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    colors: {
      primary: 'var(--site-background-color)',
      secondary: 'var(--orange-color)',
      tertiary: 'var(--color-one)',
      four: 'var(--color-two)',
      red: 'var(--red)'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

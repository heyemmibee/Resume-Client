module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: 'var(--site-background-color)',
      secondary: 'var(--orange-color)',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

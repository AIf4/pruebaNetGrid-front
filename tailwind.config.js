import preline from 'preline/plugin.js'
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{html,vue,js}', 'node_modules/preline/dist/*.js'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {}
  },
  plugins: [
    preline,
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
  ]
}

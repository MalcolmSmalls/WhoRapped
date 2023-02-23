/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    fontFamily: {
      Poppins: ['Poppins', 'Arial'],
      PermanentMarker: ['Permanent Marker', 'Arial'],
    },
    extend: {},
  },
  plugins: [],
}

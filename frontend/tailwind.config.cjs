/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    fontFamily: {
      Poppins: ['Poppins', 'Arial'],
      PermanentMarker: ['Permanent Marker', 'Arial'],
      TiltWarp: ['Tilt Warp', 'Arial'],
    },
    extend: {},
  },
  plugins: [],
}

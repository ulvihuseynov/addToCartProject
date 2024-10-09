/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens:{
        '2xl':'1500px'
      }
    },
    extend: {},
  },
  plugins: [],
}
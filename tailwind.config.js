/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff"
      },
      fontFamily: {
        raleway: [
          "Raleway",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
}

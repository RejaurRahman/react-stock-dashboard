/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        none: "none",
        white: "#ffffff"
      },
      fontFamily: {
        quicksand: [
          "Quicksand",
          "sans-serif"
        ]
      },
      borderWidth: {
        1: "1px"
      }
    }
  },
  plugins: []
}

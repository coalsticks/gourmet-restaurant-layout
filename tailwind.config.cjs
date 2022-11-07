/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        body: ["Playfair Display", "serif"],
        title: ["Lobster Two", "serif"]
      }
    }
  },
  plugins: [],
}
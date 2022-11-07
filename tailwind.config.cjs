/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('assets/images/chef_meal.jpg')",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        body: ["Playfair Display", "serif"],
        title: ["Lobster Two", "serif"]
      }
    }
  },
  plugins: [],
}
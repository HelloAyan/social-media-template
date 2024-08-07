/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        league: ["League Spartan", 'sans-serif'],
        bebas: ["Bebas Neue", 'sans-serif'],
        poppins: ["Poppins", 'sans-serif'],
        heebo: ["Heebo", 'sans-serif'],
      }
    },
  },
  plugins: [],

}


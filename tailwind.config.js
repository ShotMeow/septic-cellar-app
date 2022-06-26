/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'sm': '0 -70px 60px -15px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}

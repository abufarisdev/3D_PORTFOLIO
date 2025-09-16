/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0d0d0d",     // almost black background
        secondary: "#e5e5e5",   // light grey text
        tertiary: "#1a1a1a",    // slightly lighter grey for sections/cards
        "black-100": "#1f1f1f", // softer dark
        "black-200": "#141414", // deep black
        "white-100": "#d4d4d4", // muted white/grey
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(0,0,0,0.6)", // darker shadow
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};

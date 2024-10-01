/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  extend: {
    animation: {
      marquee: "marquee 25s linear infinite",
      marquee2: "marquee2 25s linear infinite",
    },
    keyframes: {
      marquee: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-100%)" },
      },
      marquee2: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(0%)" },
      },
    },
  },
  theme: {
    extend: {},
    screens: {
      '3xs': '280px',
      '2xs': '430px',
      'xsm': '600px',
      'sm': '780px',
      'md': '960px',
      'lg': '1200px',
      'xl': '1600px',
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Geist"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        display: ['"Geist"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        paper: '#f2f2f2',
        ink: '#0a0a0a',
      },
      borderRadius: {
        none: '0',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
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

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-pink': '#E1407A', // The pink/magenta from the image
        'brand-navy': '#1E2A3B', // The dark navy from the image
        'brand-light': '#F8F9FB', // Light background color
        'brand-gray': '#71767B', // Twitter-like gray for secondary text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-safe-area'),
  ],
} 
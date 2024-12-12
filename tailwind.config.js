/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'muted-blue': '#607890',
        'overlay': '#00000098',
        'navigation-dots': '#ffffff99',
        primary: {
          dark: '#000',
          light: '#ffffff',
          'red': '#d0473d',
          border: '#ebebeb',
        },
        secondary: {
          dark: '#111',
          'red': '#d0473e',
        },
        button: {
          buyNow: '#d0473e',
        },
        price: {
          originalPrice: '##666',
          salePrice: '#d0473e',
        },
        heading: {
          dark: '#111',
        },
        content: {
          dark: '#111',
          'medium-dark': '#444',
        },
        badge: {
          notification: '#d0473d',
          sale: '#d0473e',
          limitedStock: '#14854f',
        }
      },
      borderRadius: {
        tiny: '0.5rem',
        small: '1rem',
        medium: '2rem',
      },
      zIndex: {
        overlay: '95',
        top: '100',
      },
      transitionDuration: {
        short: "250ms",
        medium: "500ms",
      }
    },
  },
  plugins: [],
}
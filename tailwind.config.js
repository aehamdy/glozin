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
        primary: {
          dark: '#000',
          light: '#ffffff',
          'red': '#d0473d',
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
        text: {
          heading: '#111',
          content: '#444',
        },
        badge: {
          notification: '#d0473d',
          sale: '#d0473e',
          limitedStock: '#14854f',
        }
      },
      transitionDuration: {
        short: "250ms",
        medium: "500ms",
      }
    },
  },
  plugins: [],
}
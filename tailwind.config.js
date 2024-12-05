/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        announcementBar: '#607890',
        primary: {
          dark: '#000',
          light: '#fff',
        },
        secondary: {
          dark: '#111',
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
      }
    },
  },
  plugins: [],
}
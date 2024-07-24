/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'glass': 'rgba(255, 255, 255, 0.3)',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(10px)',
      },
     
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('tailwindcss-filters'),
  ],
}
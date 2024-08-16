/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('https://www.desktopbackground.org/download/2560x1440/2010/05/12/15945_sea-rocks-4k-wallpapers_3840x2160_h.jpg')",
        
      }
    },
  },
  plugins: [require("daisyui"), require('tailwind-scrollbar-hide')],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        darkWine: '#472D30',
        wine: '#723D46',
        lightWine: '#8E494C',
        redwood: '#AA5551',
        coral: '#E18E7E',
        melon: '#E0AFA0',
        dogwood: '#E5C0B4',
        chamPink: '#EFE2DB',
        lightChamPink: '#F4F3EE'
      },
    },
  },
  plugins: [],
}


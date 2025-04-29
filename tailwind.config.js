/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1120px', // Custom breakpoint for mobile menu
      '2xl': '1280px',
    },
    extend: {
      colors: {
        // Primary
        'forest-green': '#2F4F3A',
        'olive-gold': '#A18A42',
        // Secondary
        'ivory-white': '#F5F1E9',
        'soft-sage': '#C9D3C0',
        'stone-gray': '#787878',
        // Accents
        'muted-teal': '#5B7C78',
        'dusty-rose': '#D7A7A1'
      },
      fontSize: {
        base: ['18px', { lineHeight: '1.5' }], // Default text size
        lg: ['18px', { lineHeight: '1.5' }],   // Larger base size for big screens
      },
    },
  },
  plugins: [],
  base:"/hair-transplant-app"
}


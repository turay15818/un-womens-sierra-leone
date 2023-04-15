/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Hind Siliguri',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '30px',
      },
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    extend: {
      colors: {
        dark: '#292830',
        light: '#BDBDBD',
        accent: '#FF7235',
        accentHover: '#16a4e0',
        grey: '#F5F5F5',
      },
      backgroundImage: {
        overview: "url('/src/assests/img/hero/hero1.jpg')",
        // cta: "url('/src/assets/img/cta/bg.svg')",
      },
    },
  },
  plugins: [],
};



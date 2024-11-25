/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Azul oscuro
        secondary: '#93C5FD', // Azul claro
        accent: '#E0F2FE', // Azul muy claro
        neutral: '#F9FAFB', // Blanco/gris claro
        text: '#1F2937', // Gris oscuro para textos
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};

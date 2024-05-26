// Configuración de Tailwind CSS
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ajustar los caminos según la estructura
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shootingStar: {
          '0%': { transform: 'translate(-100vw, -100vh)', opacity: 1 },
          '100%': { transform: 'translate(100vw, 100vh)', opacity: 0 },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'spin-slow': 'spinSlow 2s linear infinite',
        shootingStar: 'shootingStar 20s linear infinite',
      },
    },
  },
  darkMode: 'media', // Puedes eliminar esta línea si no quieres modo oscuro
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
};

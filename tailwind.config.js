
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Vous pouvez ajouter vos couleurs personnalisées ici
        primary: '#007bff',
        secondary: '#6c757d',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,tsx,ts,jsx}',               // Root entry file (App.js/tsx)
    './src/**/*.{js,tsx,ts,jsx}',           // All JS/TS/TSX/JSX files in src folder
    './screens/**/*.{js,tsx,ts,jsx}',      // All JS/TS/TSX/JSX files in the screens folder
    './components/**/*.{js,tsx,ts,jsx}',   // All JS/TS/TSX/JSX files in the components folder
    './assets/**/*.{js,tsx,ts,jsx}',       // All JS/TS/TSX/JSX files in assets (if any)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

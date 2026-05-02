/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7B2D26", 
          foreground: "#F8F6F0",
        },
        background: "#F8F6F0", // Beige clair
        foreground: "#4A2511", // Texte Marron foncé
        secondary: {
          DEFAULT: "#D1A57A",
          foreground: "#4A2511",
        },
        muted: {
          DEFAULT: "#E5E1D8",
          foreground: "#6B5A4E",
        },
        accent: {
          DEFAULT: "#7B2D26",
          foreground: "#F8F6F0",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#4A2511",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

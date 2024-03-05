/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      title: ["IBM Plex Sans", "sans-serif"],
      paragraph: ["Nunito", "sans-serif"],
      other: ["Poppins", "sans-serif"]
    },
    extend: {
      colors: {
        bgHeader: "#0E0E0ED9"
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      title: ["IBM Plex Sans"],
      paragraph: ["Nunito"],
      other: ["Poppins"]
    },
    extend: {
      colors: {
        bgHeader: "#0E0E0ED9",
        textGray: "#2a2a2a"
      },
      spacing: {
        "487": "487px",
        "270": "270px",
      },
    },
  },
  plugins: [],
}


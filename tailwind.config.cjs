module.exports = {
  content: ["./index.html", "./src//*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f4a82",
        cyanLight: "#cfeff6",
        cyan: "#bfeaf5",
        outline: "#e6eef2",
      },
      fontFamily: {
        serifTitle: ["Playfair Display", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

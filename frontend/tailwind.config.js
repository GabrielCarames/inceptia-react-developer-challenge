/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0E1217",
        shark: "#1C1F26",
        "rock-blue": "#9EA9C3",
        manatee: "#828BA2",
        tuna: "#2D323A",
        "ghost-white": "#F5F8FC",
        white: "#FFFFFF",
        "white-smoke": "#F1F2F3",
        "white-gallery": "#E9EAEB",
        raven: "#767B87",
        "persian-green": "#01A59E",
        "monte-carlo": "#7ECFCB"
      }
    }
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        light_primary: "#fff4d4",
        primary: "#050816",
        light_secondary: "#365a73",
        secondary: "#aaa6c3",
        light_tertiary: "#fefffc",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        light_card: "0px 15px 20px -15px #211e35",
      },
      screens: {
        navMid: "1020px",
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "hero-bg-light": "url('/src/assets/herobg_light.png')",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter Tight", "san-serif"],
    },
    extend: {
      gridTemplateColumns: {
        custom: "280px 650px 329px",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
const plugins = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto"],
      },
    },
  },
  plugins: [
    plugins(({ addBase }) => {
      addBase({
        "h1,h2": {
          fontFamily: "Poppins",
          fontWeight: "bold",
          textTransform: "uppercase",
          fontSize: "22px",
          color: "#3694bf",
        },
        p: { fontFamily: "Roboto", fontSize: "18px" },
        a: { fontWeight: "bold", color: "#dcdcdc" },
        span: { fontWeight: "bold", color: "#dcdcdc" },

        "*::-webkit-scrollbar": { width: "6px", height: "6px" },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#00000063",
          borderRadius: "10px",
        },
        "*::-webkit-scrollbar-track-piece": {
          backgroundColor: "transparent",
          borderRadius: "10px",
        },
      });
    }),
  ],
};

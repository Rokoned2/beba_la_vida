const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "500px",
      //   // => @media (min-width: 640px) { ... }

      md: "700px",
      //   // => @media (min-width: 768px) { ... }

      lg: "1024px",
      //   // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      //   // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      //   // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundColor: ["active"],
      colors: {
        primary: {
          DEFAULT: "#A23F25",
        },
      },
      fontFamily: {
        spectral: ["Spectral"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};

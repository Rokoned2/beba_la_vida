module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "500px",
      //   // => @media (min-width: 640px) { ... }

      md: "712px",
      //   // => @media (min-width: 768px) { ... }

      lg: "1024px",
      //   // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      //   // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      //   // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "header-banner": "url('./imgs/bg_2.jpg')",
      },
      backgroundColor: ["active"],
      colors: {
        primary: {
          DEFAULT: "#A23F25",
          dark: "#502417",
          light: "#eecec4",
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
  plugins: [require("@kamona/tailwindcss-perspective")],
};

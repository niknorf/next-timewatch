const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        "tw-orange": "#ff603d",
        "tw-green": "#79ff57",
      },
      borderRadius: {
        "4xl": "2.8125rem",
      }
    },
  },
  plugins: [],
};

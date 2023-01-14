const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        primary: "#009dff",
        secondary: "#F5F5F5",
        darker: "#001f33",
        lightest: "#f4f5f5",
        "grayscale-1": "#d5d7d8",
      },
    },
  },
  plugins: [],
};

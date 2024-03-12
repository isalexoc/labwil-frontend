/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkblue: "#14324F",
        tofu: "#F4F4EF",
        cardamon: "#ECF6EF",
        ice: "##EAF6F7",
        kiwi50: "#3BD85E",
        kiwi100: "#35792a",
        agave: "#00D0E0",
        persimmon: "#F88A42",
        dragonfruit: "#D72792",
        darkgray: "#222",
      },
    },
  },
  plugins: [],
};

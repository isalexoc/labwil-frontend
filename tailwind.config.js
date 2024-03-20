/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1330px",
    },
    extend: {
      colors: {
        primary: "#242a2b",
        secondary: "#808080",
        accent: {
          DEFAULT: "#1cbccf",
          secondary: "#18abbc",
          tertiary: "#90c6cd",
        },
        grey: "#e8f0f1",
      },
      fontFamily: {
        primary: ["Nunito", "sans-serif"],
      },
      boxShadow: {
        custom1: "0px 2px 40px 0px rgba(8, 70, 78, 0.08)",
        custom2: "0px 0px 30px 0px rgba(8, 73, 81, 0.06)",
      },
      backgroundImage: {
        services: "url(/assets/images/services/bg.svg)",
        testimonials: "url(/assets/images/testimonials/bg.svg)",
        departments: "url(/assets/images/departments/bg.svg)",
        quoteLeft: "url(/assets/icons/testimonials/quote-left.svg)",
        quoteRight: "url(/assets/icons/testimonials/quote-right.svg)",
      },
    },
  },
  plugins: [],
};

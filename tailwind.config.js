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
        'hero-light': "url('/image/bg-map-l.webp')",
        'hero-dark': "url('/image/bg-map.webp')",
      },
      fontFamily: {
        "inter": ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
      }
    },
  },
  darkMode: 'selector',
  plugins: [require("tailwindcss-animate")],
};

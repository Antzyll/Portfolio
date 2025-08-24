/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#8B1E1E",
          jade: "#0F766E",
          gold: "#C89728",
          cream: "#FAF7F2",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)"],
        sans: ["var(--font-inter)"],
        chinese: ["var(--font-zhifont)"], //
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.06)",
      },
    },
  },
  plugins: [],
};

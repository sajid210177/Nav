/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px"
      },

      colors:{
        primary: "#15232D",
        secondary: "#FFFFFF",
        accent: "#543BBB",
        
      }
    },
  },
  plugins: [],
};

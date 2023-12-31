/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js,css}"],
  theme: {
    extend: {},
    screens: {
      'phone': '350px',
       // => @media (min-width: 350px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily :{
        Lato : ['Lato', 'sans-serif'],
        OpenSans : ['Open Sans', 'sans-serif'],
      },
      colors :{
        'color_primary' : "#0A2640",
        'green' : "#65E4A3",
        'gray' : "#777777",
      },
    },
  },
  plugins: [require("daisyui")],
}


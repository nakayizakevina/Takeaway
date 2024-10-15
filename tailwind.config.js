/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "darkgreen":"#028C6A",
        "lightgreen":"#7BC5AE",
        "green":"#D1EDE1"
        
      },

        fontFamily:{
          "font-family": ["Roboto", "sans-serif"],
          "font-weight":"100",
          "font-style":"normal",
        },

        playfair:{
        "font-family":["playfair Display", "serif"],
         "font-optical-sizing": "auto",
          "font-weight":"300",
          "font-style": "normal",
        }
        
      
       
      
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


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
      playfair:['Playfair Display', 'serif'],
      poppins: ['Poppins', 'sans-serif'],
      greatvibes:['Great Vibes', 'cursive']
    },
        
      
       
      
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


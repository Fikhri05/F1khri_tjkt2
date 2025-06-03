/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container : {
      center : true,
      padding : '16px',
    },
    extend: {
      '2xl' : '1320px',
    },
    colors : {
      primary : "#9333ea",   //warna utama
      secondary : "#94a3b8", //warna abu"
      dark : "#020617",     //warna hitam
      white : "#ffffff",   //warna putih
    },
  },
  plugins: [],
}

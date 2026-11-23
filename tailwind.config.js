/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sakura: {
          pink: '#FDE8E9',      // Latar belakang pink muda (Hero & Form)
          pinkDark: '#F4A2A8',  // Aksen pink lebih gelap
          green: '#65A30D',     // Hijau tombol utama & aksen
          greenDark: '#1E291A', // Hijau tua untuk Footer
          greenLight: '#E9F2DF',// Latar belakang hijau muda (Cara Kerja)
        }
      }
    },
  },
  plugins: [],
}
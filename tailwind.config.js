/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        utama: "#4ade80",
        gelap: "#0f172a",
        kedua: "#a1a1aa",
        biru: "#0284c7",
        igram: "#f43f5e",
        abu: "#e5e5e5",
        cerah: "#fcd34d",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};

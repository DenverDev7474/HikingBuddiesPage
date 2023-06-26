export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: 0,
        margim: 0,
      },
      height: {
        '1/2screen': '50vh',
      }
    },
  },
  plugins: [],
};
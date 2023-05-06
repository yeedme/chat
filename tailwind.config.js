/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl':'30%',
        '5xl':'40%'
    },
    maxWidth: {
      '96': '24rem',
    },
    gridTemplateRows: {
      // Simple 8 row grid

      // Complex site-specific row configuration
      'pcChatLayout': '60px 1fr 150px',
     
    },
    gridTemplateColumns: {
      'pcLayout':'70px 350px 1fr'
    },
  
  },
  plugins: [],
}
}

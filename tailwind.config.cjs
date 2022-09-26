/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background:"#DFDFDF",
        yellow:"#FFD615",
        error:"#D93A1B",
        attention:"#32CEA1",
        sidebar:"#0A5F59",
        textSidebar:"#ABCAC8",
        textSelectColor:"#0A5F59",
        selected:"#0C756F",
        GridHeaderColor:"#F8FAFB",
        gridBlueColor:'#3957D3',
        gridTextColor:'#233B43',
        statusSelectColor:'#EAEFFB',
        alert:'#EAEFFB',
        alertText:'#233B43',
        blueColor:'#2F80ED',
        backgroundGray:'#E5E5E5',
        yellowColor:'#ffd61578',
        yellowSubmit:'#FFD615'
      }


    },
  },
  plugins: [],
}

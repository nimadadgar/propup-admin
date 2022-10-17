/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {

        statusYellow:"#F3B140",
        statusGreen:"#38D3A6",
        btnBlue:"#308FED",
        yellow:"#FFD615",
        error:"#D93A1B",
        attention:"#32CEA1",
        sidebar:"#2F3860",
        textSidebar:"#ABCAC8",
        textSelectColor:"#0A5F59",
        selected:"#565F86",
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

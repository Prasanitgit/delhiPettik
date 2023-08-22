/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
     
    },
    extend: {
      colors: {
        "primary-dark": "#A044FF",
        "primary-darker": "#B616EE",
        grey: "#F9F8F8",
        "grey-darker": "#EBEBEB",
        "light-grey": "#E6E6E6",
        "dark-grey": "#383838",
        "blue-dark": "#281ACB",
        yellowNew: "#EDB506",
        package:"#EEF8FF",
        "primary-light": "#D7AFFF",
        lighterBlue: "#EFF9FF",
        lightBlue: "#E1F1FB",
        darkBlue: "#CAEBFF",
        yellow: "#F1DB14",
        lightGray: "#F4F4F4",
        brown: "#4B333D",
        redDark: "#D44227",
        yellowLight: "#FFE250",
        purple: "#6842EF",
        orange: "#FF9934",
        lightOrange:"#FFEDCC",
        reviews:"#2CB8C3"
      },
    },
  },
  plugins: [],
};

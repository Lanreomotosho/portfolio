/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    screens: {
      mobile: "1px",
      tablet: "500px",
      tabletM: "700px",
      desktop: "1024px",
      desktopM: "1250px"
    },
    fontSize: {
      xxxs: "6px",
      xxs: "10px",
      xs: "12px",
      sm: "16px",
      md: "20px",
      lg: "24px",
      xl: "32px",
      "2xl": "44px",
      "3xl": "60px",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      fontFamily: {
        manrope: ["Manrope, sans-serif"],
        roboto: ["Roboto, sans-serif"],
        recoleta: ["Recoleta Regular DEMO"],
        domine: ["Domine, serif"],
        grotesque: ["Darker Gretesque, sans-serif"],
        lato: ["Lato, sefif"],
        lora: ["Lora, serif"],
      }
    },
  },
  plugins: [],
};
export default Config;


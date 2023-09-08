/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        title: ["26px", { fontWeight: 700 }],
        button: ["18px", { fontWeight: 700 }],
        subtitleBold: ["14px", { fontWeight: 700 }],
        subtitle: ["14px", { fontWeight: 400 }],
        paragraphBold: ["12px", { fontWeight: 700 }],
        paragraph: ["12px", { fontWeight: 500 }],
      },
      colors: {
        primary: "#1B8C78",
        secondary: "#F2B705",
        textBlack: "#313131",
        textGrey: "#99A0A8",
        textDarkGrey: "#A8A9B0",
      },
      boxShadow: {
        buttonShadow:
          "0px 4px 15px 0px rgba(35, 167, 135, 0.30)",
      },
    },
  },
  plugins: [require("daisyui")],
};

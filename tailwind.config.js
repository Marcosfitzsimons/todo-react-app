/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        default: {
          "primary": "#f7f7f7", // bgcolor
          "secondary": "#ffffff", // bgitem
          "accent": "#3a7bfd", // hover
          "neutral": "#393a4c", // text
          "base-100": "#e5e0df", //I don't know
        },
        dark: {
          "primary": "#161722", // veryDarkGray
          "secondary": "#25273c", // darkGray
          "accent": "#3a7bfd", // themeColor
          "neutral": "#e4e5f1", // veryLightGray
          "base-100": "#e5e0df", // lightGray df4996
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

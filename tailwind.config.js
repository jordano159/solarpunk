module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require("tailwindcss-flip"),
    require('@tailwindcss/aspect-ratio'),
  ],
  daisyui: {
    rtl: true,
  },
}

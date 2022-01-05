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
  themes: [
    {
      'mytheme': {
        'primary': '#00e504',
        'primary-focus': '#006b02',
        'primary-content': '#ffffff',
        'secondary': '#ecff50',
        'secondary-focus': '#d3ea5b',
        'secondary-content': '#ffffff',
        'accent': '#37cdbe',
        'accent-focus': '#2aa79b',
        'accent-content': '#ffffff',
        'neutral': '#3d4451',
        'neutral-focus': '#2a2e37',
        'neutral-content': '#ffffff',
        'base-100': '#dfffda',
        'base-200': '#f9fafb',
        'base-300': '#d1d5db',
        'base-content': '#1f2937',
        'info': '#2094f3',
        'success': '#009485',
        'warning': '#ff9900',
        'error': '#ff5724',
      },
    },
  ],
}
  